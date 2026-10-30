import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function hasValidGeminiApiKey(): boolean {
  const key = (process.env.GEMINI_API_KEY || '').trim();
  return key.startsWith('AIza') && key.length >= 30;
}

function getGenAiClient(): GoogleGenAI | null {
  if (!hasValidGeminiApiKey()) {
    return null;
  }
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
  });
}

interface PodcastTurn {
  speaker: 'Anchor';
  text: string;
}

interface DailyBriefingEntry {
  dateKey: string;
  podcastFormat: string;
  script: string;
  turns: PodcastTurn[];
  audioBase64: string | null;
  mimeType: string;
  generatedAt: string;
}

const PODCAST_FORMAT_VERSION = 'bbc-single-voice-v4';
const dailyBriefingCache = new Map<string, DailyBriefingEntry>();
let inFlightGeneration: Promise<DailyBriefingEntry> | null = null;

const DEFAULT_BBC_SCRIPT = [
  'Global construction activity is expanding at sixteen point two percent year on year, led by hyperscale data centres and semiconductor fabrication plants at twenty-eight percent, alongside high-voltage grid corridors at twenty-two percent.',
  'Over the past thirty days, more than fourteen thousand two hundred major projects remained active worldwide, anchored by civil transport and utility transmission.',
  'Forward design pipelines remain firm across all three regions for the next eighteen months, supported by positive architectural billings in the United States, rising civil engineering workloads across Europe, and a one hundred and twenty billion dollar infrastructure programme across Australia and New Zealand.',
  'On the ground, tier-one contractor backlogs now stand near nine months, while two-year lead times for high-voltage switchgear and persistent skilled labour shortages are shifting forty percent of mechanical and electrical assemblies into off-site prefabrication.',
  'Consequently, enterprise cloud common data environment adoption has reached eighty-six percent worldwide, driven by mandatory digital delivery and cybersecurity standards across North America, Europe, and Asia-Pacific.',
].join(' ');

const DEFAULT_PODCAST_TURNS: PodcastTurn[] = [
  {
    speaker: 'Anchor',
    text: DEFAULT_BBC_SCRIPT,
  },
];

function getTodayDateKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function cleanSpokenText(rawText: string): string {
  return rawText
    .replace(/^(Anchor|Alex|Maya|Host|Narrator)\s*:\s*/i, '')
    .replace(/<breath>|<laugh>|<gasp>/gi, '')
    .replace(/\|yeah\||\|mhm\|/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function ensureWavHeader(audioBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  if (audioBuffer.length >= 44 && audioBuffer.subarray(0, 4).toString('ascii') === 'RIFF') {
    return audioBuffer;
  }
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = audioBuffer.length;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, audioBuffer]);
}

function splitTextIntoSmoothBbcSentences(text: string, maxLen = 190): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;
    if (trimmed.length <= maxLen) {
      chunks.push(trimmed);
    } else {
      // Split long sentences only on natural clause boundaries (commas or semicolons) so cadence remains smooth
      const clauses = trimmed.split(/(?<=[,;])\s+/);
      let current = '';
      for (const clause of clauses) {
        if ((current + ' ' + clause).trim().length <= maxLen) {
          current = (current + ' ' + clause).trim();
        } else {
          if (current) chunks.push(current);
          if (clause.length <= maxLen) {
            current = clause.trim();
          } else {
            const words = clause.split(/\s+/);
            let wordChunk = '';
            for (const w of words) {
              if ((wordChunk + ' ' + w).trim().length <= maxLen) {
                wordChunk = (wordChunk + ' ' + w).trim();
              } else {
                if (wordChunk) chunks.push(wordChunk);
                wordChunk = w;
              }
            }
            current = wordChunk;
          }
        }
      }
      if (current) chunks.push(current);
    }
  }
  return chunks;
}

async function generateBbcBriefingScript(overviewContext?: string): Promise<string> {
  const ai = getGenAiClient();
  if (!ai) {
    return DEFAULT_BBC_SCRIPT;
  }

  try {
    const prompt = `Write a 60-second single-anchor executive briefing (strictly 135 to 150 words, one cohesive paragraph of 5 smooth sentences) in the exact cadence and editorial style of a BBC World Service Business Daily broadcast.
Use the following AEC Market Intelligence Overview data:
${overviewContext || DEFAULT_BBC_SCRIPT}

Strict Editorial & Cadence Rules:
1. Single voice only. Do NOT include speaker labels, greetings, intros ("Welcome to...", "Good morning"), or sign-offs ("That's your update"). Start immediately with the lead market fact.
2. Zero fluff, zero conversational filler, zero exclamation marks. Every sentence must carry high-density executive intelligence with smooth, measured British broadcast transitions ("Over the past thirty days,", "Forward design pipelines remain firm,", "On the ground,", "Consequently,").
3. Spell out numbers and percentages in words (e.g., "sixteen point two percent", "fourteen thousand two hundred", "eighty-six percent") so the text-to-speech engine reads with an effortless, uninterrupted flow.
4. Return plain text only.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const candidate = cleanSpokenText(response.text || '');
    if (candidate.split(/\s+/).length >= 80) {
      return candidate;
    }
  } catch (_err) {
    // Fall back to curated BBC script if API key is unconfigured or invalid
  }
  return DEFAULT_BBC_SCRIPT;
}

async function synthesizeBbcSingleVoiceFallback(script: string): Promise<{ buffer: Buffer; mimeType: string } | null> {
  try {
    const audioBuffers: Buffer[] = [];
    const cleanScript = cleanSpokenText(script);
    const chunks = splitTextIntoSmoothBbcSentences(cleanScript, 190);

    for (const chunk of chunks) {
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${encodeURIComponent(chunk)}`;
      const response = await fetch(ttsUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        },
      });
      if (!response.ok) {
        return null;
      }
      const arrayBuf = await response.arrayBuffer();
      if (arrayBuf.byteLength > 200) {
        audioBuffers.push(Buffer.from(arrayBuf));
      }
    }

    if (audioBuffers.length > 0) {
      return {
        buffer: Buffer.concat(audioBuffers),
        mimeType: 'audio/mpeg',
      };
    }
  } catch (_err) {
    // Ignore network error if external fetch is unavailable
  }
  return null;
}

async function synthesizeBbcAudio(script: string): Promise<{ buffer: Buffer; mimeType: string } | null> {
  const ai = getGenAiClient();
  const cleanScript = cleanSpokenText(script);

  if (ai) {
    const modelsToTry = ['gemini-3.8-flash-tts', 'gemini-3.8-flash-lite-tts'];
    for (const modelName of modelsToTry) {
      try {
        const ttsResponse = await ai.models.generateContent({
          model: modelName,
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: cleanScript,
                  speechMetadata: {
                    style:
                      'Measured, authoritative, smooth BBC World Service business news anchor with crisp British broadcast cadence, even pacing, and zero fluff',
                  },
                } as any,
              ],
            },
          ],
          config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Charon' },
              },
            },
          },
        });

        const base64Audio = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
          return {
            buffer: ensureWavHeader(Buffer.from(base64Audio, 'base64'), 24000, 1, 16),
            mimeType: 'audio/wav',
          };
        }
      } catch (_err) {
        // Proceed to next model or British English neural fallback
      }
    }
  }

  return synthesizeBbcSingleVoiceFallback(cleanScript);
}

async function getOrCreateDailyBriefing(overviewSummary?: string): Promise<DailyBriefingEntry> {
  const todayDateKey = getTodayDateKey();

  if (dailyBriefingCache.has(todayDateKey)) {
    return dailyBriefingCache.get(todayDateKey)!;
  }

  const publicAssetsDir = path.resolve(__dirname, 'public', 'assets');
  const rootAssetsDir = path.resolve(__dirname, 'assets');
  const defaultWavPath = path.join(publicAssetsDir, 'daily-briefing.wav');
  const defaultJsonPath = path.join(publicAssetsDir, 'daily-briefing.json');

  if (fs.existsSync(defaultWavPath) && fs.existsSync(defaultJsonPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(defaultJsonPath, 'utf-8'));
      const audioBuf = fs.readFileSync(defaultWavPath);
      if (
        meta.dateKey === todayDateKey &&
        meta.podcastFormat === PODCAST_FORMAT_VERSION &&
        audioBuf.length > 1000
      ) {
        const scriptText = meta.script || DEFAULT_BBC_SCRIPT;
        const entry: DailyBriefingEntry = {
          dateKey: todayDateKey,
          podcastFormat: PODCAST_FORMAT_VERSION,
          script: scriptText,
          turns: [{ speaker: 'Anchor', text: scriptText }],
          audioBase64: audioBuf.toString('base64'),
          mimeType: meta.mimeType || 'audio/mpeg',
          generatedAt: meta.generatedAt || new Date().toISOString(),
        };
        dailyBriefingCache.set(todayDateKey, entry);
        return entry;
      }
    } catch (_e) {}
  }

  if (inFlightGeneration) {
    return inFlightGeneration;
  }

  inFlightGeneration = (async () => {
    try {
      const script = await generateBbcBriefingScript(overviewSummary);
      const synthesized = await synthesizeBbcAudio(script);
      const turns: PodcastTurn[] = [{ speaker: 'Anchor', text: script }];

      const entry: DailyBriefingEntry = {
        dateKey: todayDateKey,
        podcastFormat: PODCAST_FORMAT_VERSION,
        script,
        turns,
        audioBase64: synthesized ? synthesized.buffer.toString('base64') : null,
        mimeType: synthesized ? synthesized.mimeType : 'audio/mpeg',
        generatedAt: new Date().toISOString(),
      };

      dailyBriefingCache.set(todayDateKey, entry);

      if (synthesized) {
        try {
          fs.mkdirSync(publicAssetsDir, { recursive: true });
          fs.writeFileSync(defaultWavPath, synthesized.buffer);
          fs.writeFileSync(
            defaultJsonPath,
            JSON.stringify(
              {
                dateKey: entry.dateKey,
                podcastFormat: entry.podcastFormat,
                mimeType: entry.mimeType,
                script: entry.script,
                turns: entry.turns,
                generatedAt: entry.generatedAt,
              },
              null,
              2
            )
          );
          fs.mkdirSync(rootAssetsDir, { recursive: true });
          fs.writeFileSync(path.join(rootAssetsDir, 'daily-briefing.wav'), synthesized.buffer);
        } catch (_writeErr) {}
      }

      return entry;
    } finally {
      inFlightGeneration = null;
    }
  })();

  return inFlightGeneration;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '15mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/daily-briefing', async (_req, res) => {
    try {
      const result = await getOrCreateDailyBriefing();
      res.json(result);
    } catch (_error: any) {
      res.status(200).json({
        dateKey: getTodayDateKey(),
        podcastFormat: PODCAST_FORMAT_VERSION,
        script: DEFAULT_BBC_SCRIPT,
        turns: DEFAULT_PODCAST_TURNS,
        audioBase64: null,
        mimeType: 'audio/mpeg',
        generatedAt: new Date().toISOString(),
        fallbackMode: true,
      });
    }
  });

  app.post('/api/daily-briefing', async (req, res) => {
    try {
      const { overviewSummary = '' } = req.body || {};
      const result = await getOrCreateDailyBriefing(String(overviewSummary || ''));
      res.json(result);
    } catch (_error: any) {
      res.status(200).json({
        dateKey: getTodayDateKey(),
        podcastFormat: PODCAST_FORMAT_VERSION,
        script: DEFAULT_BBC_SCRIPT,
        turns: DEFAULT_PODCAST_TURNS,
        audioBase64: null,
        mimeType: 'audio/mpeg',
        generatedAt: new Date().toISOString(),
        fallbackMode: true,
      });
    }
  });

  app.get('/assets/daily-briefing.wav', async (_req, res) => {
    try {
      const entry = await getOrCreateDailyBriefing();
      if (entry.audioBase64) {
        const buf = Buffer.from(entry.audioBase64, 'base64');
        res.setHeader('Content-Type', entry.mimeType || 'audio/mpeg');
        res.setHeader('Content-Length', String(buf.length));
        res.send(buf);
        return;
      }
    } catch (_e) {}
    res.status(404).end();
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
    setTimeout(() => {
      getOrCreateDailyBriefing().catch(() => {});
    }, 500);
  });
}

startServer();
