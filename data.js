// ==========================================
// ARKANCE Market Intelligence Hub - Data Layer (data.js)
// ==========================================

window.VERTICAL_SECTORS = [
    {
        "id": "all",
        "label": "All Verticals",
        "short": "All Verticals",
        "growth": "+16.2% YoY",
        "driver": "Global Composite CapEx"
    },
    {
        "id": "Data Centers & Mfg",
        "label": "Data Centers & Mfg",
        "short": "Data Centers & Mfg",
        "growth": "+28.0% YoY",
        "driver": "Hyperscale AI, Fab & Megawatt Grid"
    },
    {
        "id": "Energy & Grid",
        "label": "Energy & Grid",
        "short": "Energy & Grid",
        "growth": "+22.0% YoY",
        "driver": "HVDC Transmission, SMR & Storage"
    },
    {
        "id": "Civil & Transport",
        "label": "Civil & Transport",
        "short": "Civil & Transport",
        "growth": "+16.0% YoY",
        "driver": "IIJA / TEN-T Rail, Bridges & Water"
    },
    {
        "id": "Healthcare & Life Sci",
        "label": "Healthcare & Life Sci",
        "short": "Healthcare & Life Sci",
        "growth": "+11.0% YoY",
        "driver": "Hospital IPD & Cleanroom R&D"
    },
    {
        "id": "Commercial & Inst",
        "label": "Commercial & Inst",
        "short": "Commercial & Inst",
        "growth": "+4.0% YoY",
        "driver": "Adaptive Reuse & Higher-Ed Bonds"
    }
];

window.PUBLISHER_DOMAIN_MAP = {
    "Forbes": "forbes.com",
    "Morningstar": "morningstar.com",
    "ENR": "enr.com",
    "Engineering News-Record": "enr.com",
    "Construction Dive": "constructiondive.com",
    "AEC Magazine UK": "aecmag.com",
    "AEC Magazine": "aecmag.com",
    "Building UK": "building.co.uk",
    "BIM+": "bimplus.co.uk",
    "BIM+ UK": "bimplus.co.uk",
    "Construction Briefing": "constructionbriefing.com",
    "RICS": "rics.org",
    "Eurostat": "ec.europa.eu",
    "FIEC Europe": "fiec.eu",
    "Nikkei Asia": "asia.nikkei.com",
    "Australian Financial Review": "afr.com",
    "AFR": "afr.com",
    "ARKANCE USA": "arkance.us",
    "ARKANCE UK": "arkance.uk",
    "ARKANCE France": "arkance.fr",
    "ARKANCE ANZ": "arkance.au",
    "Autodesk": "adsknews.autodesk.com",
    "Autodesk News": "adsknews.autodesk.com",
    "Procore": "procore.com",
    "Nemetschek": "nemetschek.com",
    "Bluebeam": "bluebeam.com",
    "Egnyte": "egnyte.com",
    "Bentley Systems": "bentley.com",
    "Trimble": "trimble.com",
    "Aurigo": "aurigo.com",
    "HCSS": "hcss.com",
    "Slate.ai": "slate.ai",
    "Topcon": "topconpositioning.com",
    "OFC Desk": "ofcdesk.com",
    "CivCore": "civcore.com",
    "Graitec": "graitec.com",
    "Symetri": "symetri.com",
    "NTI Group": "nti-group.com",
    "IMAGINiT": "imaginit.com",
    "Man and Machine": "manandmachine.co.uk",
    "Capgemini": "capgemini.com",
    "Deloitte": "deloitte.com",
    "Accenture": "accenture.com",
    "McKinsey": "mckinsey.com",
    "PwC": "pwc.com",
    "EY": "ey.com",
    "KPMG": "kpmg.com",
    "AIA": "aia.org",
    "Dodge Construction Network": "construction.com",
    "ABC": "abc.org",
    "U.S. BLS": "bls.gov",
    "FHWA": "fhwa.dot.gov",
    "OSHA": "osha.gov"
};

window.DIRECT_PUBLISHER_RSS_FEEDS = {
    "Forbes": "https://www.forbes.com/innovation/feed/",
    "Morningstar": "https://www.morningstar.com/feeds/rss",
    "Construction Dive": "https://www.constructiondive.com/feeds/news/",
    "AEC Magazine UK": "https://aecmag.com/feed/",
    "BIM+": "https://www.bimplus.co.uk/feed/"
};

window.CONTEXTUAL_IMAGE_LIBRARY = {
    "proj-1": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    "proj-2": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    "proj-3": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
    "proj-4": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    "proj-5": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    "proj-6": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    "proj-7": "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
    "proj-8": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80",
    "proj-9": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    "proj-10": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    "macro-1": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    "macro-2": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "macro-3": "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
    "macro-4": "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
    "macro-5": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    "macro-6": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    "wire-1": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    "wire-2": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80",
    "wire-3": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    "wire-4": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    "wire-5": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    "wire-6": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
    "ark-1": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    "ark-2": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    "ark-3": "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80",
    "ark-4": "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    "ark-5": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    "ark-6": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    "reg-1": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    "reg-2": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    "reg-3": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
    "reg-4": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    "reg-5": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=900&q=80",
    "reg-6": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
};

window.MATRIX_COMPANY_IMAGES = {
    "Autodesk": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    "Nemetschek Group / Bluebeam": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    "Egnyte": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    "Procore Technologies": "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
    "Bentley Systems": "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
    "Trimble": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    "Aurigo Software": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
    "HCSS": "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80",
    "Slate.ai": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    "Topcon Positioning Systems": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    "OFC Desk": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
    "CivCore": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    "ARKANCE (Global #1 Benchmark: USA, EMEA & APAC/ANZ)": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    "Graitec": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    "Symetri (Addnode Group)": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "NTI Group": "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    "IMAGINiT Technologies (Rand Worldwide)": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    "Man and Machine (Mensch und Maschine)": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=80",
    "Accenture": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    "Deloitte": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "Capgemini": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    "McKinsey & Company": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    "PwC": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    "EY (Ernst & Young)": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "KPMG": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
};

window.COMPANY_LOGO_DOMAIN_MAP = {
    "Autodesk": "autodesk.com",
    "Nemetschek Group / Bluebeam": "bluebeam.com",
    "Egnyte": "egnyte.com",
    "Procore Technologies": "procore.com",
    "Bentley Systems": "bentley.com",
    "Trimble": "trimble.com",
    "Aurigo Software": "aurigo.com",
    "HCSS": "hcss.com",
    "Slate.ai": "slate.ai",
    "Topcon Positioning Systems": "topconpositioning.com",
    "OFC Desk": "ofcdesk.com",
    "CivCore": "civcore.com",
    "ARKANCE (Global #1 Benchmark: USA, EMEA & APAC/ANZ)": "arkance.us",
    "Graitec": "graitec.com",
    "Symetri (Addnode Group)": "symetri.com",
    "NTI Group": "nti-group.com",
    "IMAGINiT Technologies (Rand Worldwide)": "imaginit.com",
    "Man and Machine (Mensch und Maschine)": "manandmachine.co.uk",
    "Accenture": "accenture.com",
    "Deloitte": "deloitte.com",
    "Capgemini": "capgemini.com",
    "McKinsey & Company": "mckinsey.com",
    "PwC": "pwc.com",
    "EY (Ernst & Young)": "ey.com",
    "KPMG": "kpmg.com"
};

window.majorProjectsData = [
    {
        "id": "proj-1",
        "title": "$4.6B Hyperscale AI Data Center & Substation Campus Breaks Ground in Northern Virginia & Central Ohio (USA)",
        "category": "USA • Hyperscale AI",
        "capex": "$4.6B CapEx",
        "daysAgo": 2,
        "sourceName": "ENR",
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "Northern Virginia Ohio hyperscale AI data center construction billion BIM",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "Tier-1 EPC contractors mobilized over the past 30 days on a $4.6B multi-gigawatt AI compute campus and dedicated 500kV utility substation across Northern Virginia and New Albany, Ohio, utilizing 60%+ off-site MEP prefabrication (DfMA).",
        "bullets": [
            "Mandates cloud-based Common Data Environments (CDEs), LOD 400 MEP modeling, and 60%+ off-site modular prefabrication (DfMA).",
            "Co-locates behind-the-meter natural gas, SMR-ready nuclear pads, and grid battery storage to bypass USA utility interconnection queues.",
            "Connects Autodesk Construction Cloud, Revit, Navisworks, and Bluebeam Cloud across multidisciplinary design-build trade teams."
        ],
        "region": "USA"
    },
    {
        "id": "proj-2",
        "title": "$3.4B CHIPS Act Semiconductor Cleanroom & Advanced Packaging Fab Expansion Mobilizes in Texas & Arizona (USA)",
        "category": "USA • Semiconductor Fab",
        "capex": "$3.4B CapEx",
        "daysAgo": 4,
        "sourceName": "Construction Dive",
        "url": "https://www.constructiondive.com/topic/technology/",
        "rssQuery": "Texas Arizona CHIPS Act semiconductor fab cleanroom construction billion BIM",
        "verticals": [
            "Data Centers & Mfg"
        ],
        "summary": "Following final federal CHIPS Act milestone disbursements, EPC joint ventures in Central Texas and Phoenix, Arizona launched structural steel and sub-fab utility piping on $3.4B in extreme-ultraviolet (EUV) semiconductor cleanroom facilities.",
        "bullets": [
            "Requires zero-clash LOD 400 ultra-pure water, specialty gas, and cleanroom air-handling spool models inside Revit and Plant 3D.",
            "Enforces strict USA NIST 800-171 and CMMC 2.0 cloud document security across all specialty mechanical and electrical subcontractors.",
            "Uses real-time robotic total station and 3D laser-scanning verification daily to hold sub-millimeter slab vibration tolerances."
        ],
        "region": "USA"
    },
    {
        "id": "proj-3",
        "title": "$2.9B Gateway Hudson Tunnel, California High-Speed Rail Civil Packages & DOT Bridge Lettings Awarded (USA)",
        "category": "USA • Civil & Transit",
        "capex": "$2.9B CapEx",
        "daysAgo": 6,
        "sourceName": "ENR",
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "Gateway Hudson Tunnel DOT bridge rail civil construction billion FHWA BIM",
        "verticals": [
            "Civil & Transport"
        ],
        "summary": "Federal-state transportation authorities across New York/New Jersey, California, and Texas awarded $2.9B in heavy civil tunnel boring, viaduct, and highway interchange contracts requiring 3D BIM models as legal contract documents.",
        "bullets": [
            "Implements FHWA Advanced Digital Construction Management Systems (ADCMS) and OpenBIM IFC 4.3 corridor handovers.",
            "Links Civil 3D and Bentley OpenRoads alignments directly to HCSS HeavyBid/HeavyJob field tracking and 3D machine control.",
            "Incorporates federal Buy Clean Environmental Product Declarations (EPDs) for low-carbon structural steel and concrete."
        ],
        "region": "USA"
    },
    {
        "id": "proj-4",
        "title": "$1.8B Collaborative IPD Academic Medical Center & Biomanufacturing R&D Campus Enters Construction in Boston & NC (USA)",
        "category": "USA • Healthcare & Life Sci",
        "capex": "$1.8B CapEx",
        "daysAgo": 9,
        "sourceName": "Construction Dive",
        "url": "https://www.constructiondive.com/topic/technology/",
        "rssQuery": "hospital inpatient tower life sciences biomanufacturing construction billion IPD BIM",
        "verticals": [
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Executed under a multi-party Integrated Project Delivery (IPD) contract, healthcare and life-sciences owners in Massachusetts and North Carolina’s Research Triangle broke ground on $1.8B in acute-care hospital towers and cGMP biologics labs.",
        "bullets": [
            "Co-locates owner, architect, MEP engineers, and trade fabricators inside a shared Autodesk Construction Cloud CDE from day one.",
            "Fabricates 70% of inpatient headwalls, bathroom pods, and multi-trade MEP corridor racks off-site to compress schedule by 5 months.",
            "Integrates BIM asset metadata directly into hospital facility management digital twins prior to commissioning."
        ],
        "region": "USA"
    },
    {
        "id": "proj-5",
        "title": "€3.8B ($4.1B) FLAP-D Hyperscale AI Data Center & District Heating Recovery Campuses Mobilize in Frankfurt, London & Paris (EMEA)",
        "category": "EMEA • Hyperscale AI",
        "capex": "€3.8B CapEx",
        "daysAgo": 5,
        "sourceName": "Building UK",
        "url": "https://www.building.co.uk/building-safety",
        "rssQuery": "Frankfurt London Paris FLAP-D AI data center construction billion BIM Europe",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "Across Europe’s core FLAP-D markets (Frankfurt, London, Amsterdam, Paris, Dublin), hyperscale operators awarded €3.8B in collaborative EPC contracts featuring liquid-cooling loops and mandatory waste-heat recovery into municipal district heating grids.",
        "bullets": [
            "Enforces strict UK/EU BS EN ISO 19650 Common Data Environment standards, EU NIS2 cybersecurity, and German Energy Efficiency Act (EnEfG) waste-heat rules.",
            "Utilizes off-site MEP plantroom skids fabricated in the UK, Germany, and Benelux to overcome regional skilled electrical trade shortages.",
            "Audits cradle-to-grave embodied carbon in Revit, Forma, and Solibri to satisfy EU CSRD and Taxonomy financing requirements."
        ],
        "region": "EMEA"
    },
    {
        "id": "proj-6",
        "title": "€3.1B ($3.4B) UK National Grid ASTI Offshore Wind Interconnect & German SuedLink 525kV HVDC Corridor Awards (EMEA)",
        "category": "EMEA • Energy & HVDC Grid",
        "capex": "€3.1B CapEx",
        "daysAgo": 7,
        "sourceName": "AEC Magazine UK",
        "url": "https://aecmag.com/bim/",
        "rssQuery": "UK National Grid ASTI SuedLink Germany HVDC transmission construction billion",
        "verticals": [
            "Energy & Grid",
            "Civil & Transport"
        ],
        "summary": "Transmission system operators in the United Kingdom (National Grid ASTI program) and Germany (TenneT / TransnetBW SuedLink) awarded €3.1B in underground HVDC cable trenching, converter stations, and North Sea substation packages.",
        "bullets": [
            "Integrates GIS subsurface routing, UK National Underground Asset Register (NUAR) 3D utility mapping, and Civil 3D trench alignment models.",
            "Secures 95-week high-voltage transformer and switchgear allocations via early digital twin procurement lock-ins.",
            "Operates under collaborative NEC4 Engineering and Construction Contracts with real-time cloud cost-value reconciliation."
        ],
        "region": "EMEA"
    },
    {
        "id": "proj-7",
        "title": "€2.7B ($2.9B) EU TEN-T Cross-Border Rail (Fehmarnbelt & Lyon–Turin) & UK HS2 Civil Station Lettings Advance (EMEA)",
        "category": "EMEA • TEN-T Rail & Tunnels",
        "capex": "€2.7B CapEx",
        "daysAgo": 11,
        "sourceName": "BIM+",
        "url": "https://www.bimplus.co.uk/",
        "rssQuery": "Fehmarnbelt tunnel Lyon Turin TEN-T rail HS2 construction billion BIM ISO 19650",
        "verticals": [
            "Civil & Transport"
        ],
        "summary": "European transport ministries advanced €2.7B in immersed-tube tunneling, alpine rail caverns, and high-speed station packages across the Denmark–Germany Fehmarnbelt link, the France–Italy Lyon–Turin corridor, and UK HS2.",
        "bullets": [
            "Mandates buildingSMART OpenBIM IFC 4.3 alignment models and BS EN ISO 19650 federated Common Data Environments across multinational JVs.",
            "Deploys 3D GNSS machine control and automated tunnel-boring telemetry linked to Bentley iTwin, Allplan, and Civil 3D.",
            "Tracks low-carbon clinker-reduced concrete and recycled steel EPDs under EU NextGenerationEU green procurement rules."
        ],
        "region": "EMEA"
    },
    {
        "id": "proj-8",
        "title": "£2.2B ($2.8B) UK Ofwat AMP8 Water Utility Alliance & European Zero-Carbon Commercial Retrofit Frameworks Awarded (EMEA)",
        "category": "EMEA • AMP8 Water & Retrofit",
        "capex": "£2.2B CapEx",
        "daysAgo": 14,
        "sourceName": "Building UK",
        "url": "https://www.building.co.uk/building-safety",
        "rssQuery": "Ofwat AMP8 water utility alliance UK construction billion BIM Golden Thread",
        "verticals": [
            "Civil & Transport",
            "Commercial & Inst"
        ],
        "summary": "UK water utilities (part of the £104B Ofwat AMP8 cycle) and European institutional property funds awarded £2.2B in storm-overflow reservoirs, treatment works, and deep EPBD/Golden Thread commercial tower retrofits in London and Paris.",
        "bullets": [
            "Combines Autodesk Innovyze hydraulic modeling (InfoWorks ICM) with standardized repeatable DFMA treatment-plant modules.",
            "UK high-rise commercial/residential refurbishments enforce Building Safety Act Gateway 2/3 digital Golden Thread sign-offs.",
            "Uses high-definition scan-to-BIM point clouds to eliminate structural and MEP clashes inside existing urban building cores."
        ],
        "region": "EMEA"
    },
    {
        "id": "proj-9",
        "title": "$3.2B Next-Generation 2nm Semiconductor Foundry & Cleanroom Infrastructure Mobilizes in Hokkaido & Kumamoto (APAC)",
        "category": "APAC • Japan & Taiwan Fab",
        "capex": "$3.2B CapEx",
        "daysAgo": 8,
        "sourceName": "Nikkei Asia",
        "url": "https://asia.nikkei.com/Business/Technology",
        "rssQuery": "Japan Hokkaido Kumamoto Taiwan 2nm semiconductor foundry construction billion BIM",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "Backed by Japanese METI subsidies and leading Asian foundry operators, tier-1 Japanese general contractors mobilized on $3.2B in next-generation 2nm semiconductor cleanroom, ultrapure water, and seismic base-isolation packages.",
        "bullets": [
            "Applies Japan MLIT i-Construction 2.0 automation, robotic rebar tying, and autonomous night-shift material delivery to comply with strict Japanese overtime cap laws.",
            "Synchronizes 3D BIM/CIM structural and MEP digital twins across Tokyo, Taipei, and international tool-vendor engineering teams.",
            "Includes dedicated renewable solar, LNG cogeneration, and wastewater recycling plants."
        ],
        "region": "APAC"
    },
    {
        "id": "proj-10",
        "title": "A$3.6B ($2.4B) Sydney/Melbourne Metro Rail Tunneling, Brisbane 2032 Civic Venues & Rewiring the Nation Grid Awards (APAC)",
        "category": "APAC • ANZ Rail & Grid",
        "capex": "A$3.6B CapEx",
        "daysAgo": 12,
        "sourceName": "Australian Financial Review",
        "url": "https://www.afr.com/property/commercial",
        "rssQuery": "Sydney Metro Melbourne Rail Brisbane 2032 Rewiring the Nation construction billion BIM",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid",
            "Commercial & Inst"
        ],
        "summary": "Australian state infrastructure alliances across New South Wales, Victoria, and Queensland awarded A$3.6B ($2.4B USD) in metro rail station boxes, high-voltage renewable transmission lines, and Brisbane 2032 Olympic venue packages.",
        "bullets": [
            "Enforces NSW Digital Engineering Framework and Victorian Digital Asset Strategy (VDAS) ISO 19650 digital twin handovers.",
            "Mandates NABERS Embodied Carbon tracking and Australian AASB S2 climate disclosures across steel and concrete supply chains.",
            "Unites ANZ, UK, European, and North American joint-venture engineering offices inside Autodesk Construction Cloud and Bluebeam Cloud."
        ],
        "region": "APAC"
    }
];

window.macroPulseData = [
    {
        "id": "macro-1",
        "badge": "Global • Leading Demand (9–12 Mos)",
        "metricValue": "50.8 US ABI / +14% UK/EU RICS",
        "title": "Global Architecture & Engineering Workloads: USA AIA ABI (50.8), UK/EU RICS (+14%) & ANZ/APAC Indices Signal Expansion",
        "sourceName": "AIA",
        "url": "https://www.aia.org/resource-center/architecture-billings-index",
        "rssQuery": "Architecture Billings Index AIA RICS UK Europe APAC construction design workloads",
        "daysAgo": 3,
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Healthcare & Life Sci"
        ],
        "summary": "9-to-12-month leading design indicators confirm sustained capital formation: the USA AIA Architecture Billings Index (50.8), the UK/European RICS & ACE Construction Monitors (+14% net infrastructure balance), and APAC/Australian BCI design pipelines all point to expansion.",
        "bullets": [
            "USA (AIA ABI at 50.8): Strongest architectural and MEP billings in the Midwest and South driven by hyperscale data centers, healthcare, and reshoring.",
            "EMEA (RICS +14% Net Balance): UK, French, German, and Nordic design inquiries expand on EU EPBD energy retrofits, HVDC grid upgrades, and water infrastructure.",
            "APAC (BCI Pipeline): Japan, India, Singapore, and Australia record rising design contracts for semiconductor fabs, metro rail, and Olympic/civic infrastructure."
        ],
        "region": "Global"
    },
    {
        "id": "macro-2",
        "metricValue": "+14.2% US DMI / +15.4% EU Civil",
        "badge": "Global • Earliest Planning (12+ Mos)",
        "title": "Global Early-Stage Planning: USA Dodge Momentum Index (+14.2%), EMEA Euroconstruct/Barbour ABI (+15.4%) & APAC BCI",
        "sourceName": "Dodge Construction Network",
        "url": "https://www.construction.com/news/",
        "rssQuery": "Dodge Momentum Index USA Barbour ABI Euroconstruct APAC construction planning pipeline",
        "daysAgo": 5,
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Civil & Transport"
        ],
        "summary": "Tracking non-residential projects entering earliest planning 12–18 months ahead of groundbreaking, the USA Dodge Momentum Index (+14.2% YoY), UK Barbour ABI / 19-country Euroconstruct civil/energy forecast (+15.4% YoY), and APAC BCI institutional pipelines surge in tandem.",
        "bullets": [
            "USA Pipeline (+14.2% YoY DMI): Commercial and institutional planning jumps on multi-gigawatt AI data center campuses, life-sciences labs, and university bonds.",
            "EMEA Pipeline (+15.4% YoY Civil/Energy): Anchored by UK grid interconnects, French nuclear/industrial parks, and Nordic/German clean-tech manufacturing.",
            "APAC Pipeline: Accelerated by Australian renewable energy zones, Japanese semiconductor parks, and Southeast Asian logistics hubs."
        ],
        "region": "Global"
    },
    {
        "id": "macro-3",
        "metricValue": "8.9 Mos US / 9.2 Mos EU Backlog",
        "badge": "Global • Backlog & Central Bank Rates",
        "title": "Global Contractor Backlogs & Credit: USA ABC Backlog (8.9 Mos) & Fed SLOOS vs. EMEA FIEC (9.2 Mos) & APAC Order Books",
        "sourceName": "ABC",
        "url": "https://www.abc.org/Economics/Construction-Backlog-Indicator",
        "rssQuery": "ABC Construction Backlog Indicator Federal Reserve ECB RBA construction credit",
        "daysAgo": 7,
        "verticals": [
            "Commercial & Inst",
            "Data Centers & Mfg"
        ],
        "summary": "Tier-1 contractors across the USA (ABC Construction Backlog Indicator at 8.9 months), Europe (FIEC order books at 9.2 months), and APAC/Australia (9.4 months) hold near-record infrastructure and industrial backlogs as central bank rate cuts begin easing commercial credit.",
        "bullets": [
            "USA Credit & Backlog (8.9 Mos ABC): Tight Federal Reserve SLOOS bank lending keeps speculative office muted while mega-project GCs hold 11+ months of backlog.",
            "EMEA Credit & Backlog (9.2 Mos FIEC): ECB and Bank of England rate cuts unlock brownfield office-to-residential conversions and EU EPBD sustainability retrofits.",
            "APAC Credit & Backlog (9.4 Mos Tier-1): Reserve Bank of Australia (RBA) and Bank of Japan policies shape institutional real estate and civil alliance contracting."
        ],
        "region": "Global"
    },
    {
        "id": "macro-4",
        "metricValue": "65K+ US IIJA / £104B UK AMP8",
        "badge": "Global • Sovereign Infrastructure Flow",
        "title": "Sovereign Infrastructure Disbursements: USA IIJA/CHIPS, EU NextGenerationEU / UK £104B AMP8 & APAC MLIT / ANZ A$120B",
        "sourceName": "FHWA",
        "url": "https://www.fhwa.dot.gov/construction/bim/roadmap.cfm",
        "rssQuery": "IIJA FHWA infrastructure grants NextGenerationEU UK AMP8 Australia infrastructure BIM",
        "daysAgo": 6,
        "verticals": [
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Tracks legislative funding converting into active engineering RFPs across the USA (IIJA highway/bridge/water & CHIPS Act), EMEA (EU NextGenerationEU, TEN-T rail, and UK £104B Ofwat AMP8 water), and APAC (Australia’s A$120B pipeline & Japan MLIT i-Construction).",
        "bullets": [
            "USA Programs: Over 65,000 IIJA projects active across 50 state DOTs with expanding FHWA 3D BIM and OpenBIM IFC 4.3 digital delivery grants.",
            "EMEA Programs: UK £104B AMP8 water utilities and European TEN-T cross-border rail/energy corridors mandate ISO 19650 Common Data Environments.",
            "APAC Programs: Australian state transport ministries (A$120B pipeline) and Japan MLIT tie public civil disbursements directly to 3D digital twin handovers."
        ],
        "region": "Global"
    },
    {
        "id": "macro-5",
        "metricValue": "85–110 Wk Switchgear Lead Time",
        "badge": "Global • Supply Chain & Cost Indices",
        "title": "Global Supply Chain & Input Costs: USA BLS PPI & Tariffs, EMEA Eurostat/BCIS & CBAM Carbon, and APAC Material Indices",
        "sourceName": "ENR",
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "BLS Producer Price Index construction steel transformer lead time Eurostat CBAM APAC",
        "daysAgo": 8,
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "Across the USA (BLS Producer Price Index & import tariffs), Europe (Eurostat/UK BCIS indices & EU CBAM carbon tariffs), and APAC (copper, steel, and shipping indices), 85-to-110-week lead times for high-voltage electrical transformers and switchgear dictate mega-project schedules.",
        "bullets": [
            "USA Pressures (BLS PPI): Tariff volatility on imported MEP gear and structural metals forces GCs to lock in early digital twin procurement contingencies.",
            "EMEA Pressures (Eurostat / CBAM): EU Carbon Border Adjustment Mechanism (CBAM) requires strict EPD carbon provenance on imported steel, aluminum, and cement.",
            "APAC Pressures: High demand across Asian semiconductor fabs and Australian grid corridors tightens regional chiller and HVDC cable supply."
        ],
        "region": "Global"
    },
    {
        "id": "macro-6",
        "metricValue": "439K US / 300K+ EU Labor Gap",
        "badge": "Global • Labor & Automation Catalyst",
        "title": "Global AEC Skilled Labor & Engineering Deficit: USA ABC/BLS (439K+), EMEA VDI/CITB (300K+) & APAC/ANZ Drive AI & DfMA",
        "sourceName": "Construction Dive",
        "url": "https://www.constructiondive.com/topic/technology/",
        "rssQuery": "construction labor shortage engineering deficit USA UK Europe Japan Australia BIM AI",
        "daysAgo": 2,
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Healthcare & Life Sci"
        ],
        "summary": "Reported workforce deficits across the USA (439,000+ construction workers per ABC/BLS), EMEA (300,000+ across Germany VDI, UK CITB, France, and Nordics), and APAC (Japan’s 2024 overtime cap laws and Infrastructure Australia’s public-sector shortage) fuel AI and prefabrication.",
        "bullets": [
            "USA Catalyst (ABC / BLS): Craft and civil engineering retirements push North American GCs to shift 35%+ of MEP/structural work into off-site modular yards (DfMA).",
            "EMEA Catalyst (VDI / CITB): Over 38% of UK and European practices report BIM and MEP talent bottlenecks, accelerating automated modeling and cloud CDEs.",
            "APAC Catalyst (MLIT / Infrastructure Australia): Japan’s strict construction overtime caps and Australia’s infrastructure boom drive autonomous 3D machine control."
        ],
        "region": "Global"
    }
];

window.liveWireStories = [
    {
        "id": "wire-1",
        "title": "Morningstar Global Equity Report: USA, European & APAC AEC Software Leaders Sustain 18%+ Cloud ARR & Wide Economic Moats",
        "category": "Global • Morningstar Research",
        "sourceName": "Morningstar",
        "daysAgo": 1,
        "url": "https://www.morningstar.com/stocks/xnas/adsk/quote",
        "rssQuery": "Morningstar Autodesk Procore Bentley Nemetschek Trimble cloud ARR construction software",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Commercial & Inst"
        ],
        "summary": "In its global coverage of publicly traded AEC technology leaders across the USA (Autodesk, Procore, Bentley, Trimble), Europe (Nemetschek, Addnode, Mensch und Maschine, Capgemini), and APAC (Topcon), Morningstar highlights 95%+ net retention and wide switching-cost moats.",
        "bullets": [
            "Global enterprise accounts increasingly consolidate point tools into unified Cloud CDEs, design-to-field bundles, and multi-year token agreements.",
            "Sovereign infrastructure spending across USA IIJA, European TEN-T/AMP8, and Australian/Japanese transport programs insulates recurring software revenue.",
            "AI features embedded directly into core authoring and document review platforms drive tier upgrades and seat expansion."
        ],
        "region": "Global"
    },
    {
        "id": "wire-2",
        "title": "ENR & Construction Dive (USA): State DOTs, Federal Agencies & Hyperscale Owners Mandate 3D Digital Delivery & Collaborative Contracts",
        "category": "USA • Digital Delivery & DBIA",
        "sourceName": "Construction Dive",
        "daysAgo": 2,
        "url": "https://www.constructiondive.com/topic/technology/",
        "rssQuery": "USA DOT FHWA digital delivery Design-Build data center BIM construction",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Healthcare & Life Sci"
        ],
        "summary": "Across the United States, Design-Build and CMAR delivery now account for nearly half of non-residential spending as state DOTs (led by Pennsylvania, Utah, Iowa, Texas, and California) and federal agencies mandate 3D BIM models as the legal contract document.",
        "bullets": [
            "FHWA Advanced Digital Construction Management Systems (ADCMS) grants accelerate OpenBIM IFC 4.3 adoption across USA highway and bridge lettings.",
            "USA hyperscale data center and hospital owners require shared cloud Common Data Environments from day-one preconstruction.",
            "Reduces field change orders by 30%+ by linking Revit and Civil 3D models directly to preconstruction estimating and HeavyJob field tracking."
        ],
        "region": "USA"
    },
    {
        "id": "wire-3",
        "title": "AEC Magazine UK & Building UK (EMEA): UK Building Safety Act Gateway 2/3, AMP8 Water & EU ISO 19650 Drive Cloud CDE Surge",
        "category": "EMEA • Golden Thread & ISO 19650",
        "sourceName": "AEC Magazine UK",
        "daysAgo": 3,
        "url": "https://aecmag.com/bim/",
        "rssQuery": "AEC Magazine Building UK Golden Thread ISO 19650 AMP8 water Europe BIM",
        "verticals": [
            "Commercial & Inst",
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Across the United Kingdom, France, Germany, Benelux, and the Nordics, strict enforcement of the UK Building Safety Act \"Golden Thread\", the £104B UK Ofwat AMP8 water cycle, and European ISO 19650 public procurement rules is driving rapid Cloud CDE standardization.",
        "bullets": [
            "UK Gateway 2 and Gateway 3 checkpoints legally require immutable digital change-control logs before high-rise construction or occupancy.",
            "European Union CSRD and EPBD whole-life carbon mandates force architects and engineers in France, Germany, and the Nordics to track embodied carbon in BIM.",
            "Accelerates enterprise migration to Autodesk Construction Cloud, Bluebeam Cloud, and Nemetschek Solibri/Allplan across EMEA."
        ],
        "region": "EMEA"
    },
    {
        "id": "wire-4",
        "title": "Forbes Global Innovation: Governed Generative AI, Model Context Protocol (MCP) & Predictive Schedule AI Protect Contractor Margins",
        "category": "Global • Forbes AI & ConTech",
        "sourceName": "Forbes",
        "daysAgo": 4,
        "url": "https://www.forbes.com/innovation/",
        "rssQuery": "Forbes construction AI digital twin generative scheduling data center",
        "verticals": [
            "Data Centers & Mfg",
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Global ENR Top 400 contractors and engineering consultancies across New York, London, Paris, Frankfurt, Tokyo, and Sydney are deploying governed AI agents for automated specification review, generative site feasibility, and predictive critical-path risk.",
        "bullets": [
            "Bluebeam Max (MCP) and Autodesk Forma AI slash drawing comparison, submittal auditing, and early environmental feasibility cycles by up to 45%.",
            "Egnyte AI Control Center enforces USA CMMC 2.0 and EU GDPR/NIS2 data sovereignty so proprietary project bids never leak into public LLMs.",
            "Slate.ai cross-analyzes Primavera/MS Project schedules against global switchgear lead times to prevent mega-project delays."
        ],
        "region": "Global"
    },
    {
        "id": "wire-5",
        "title": "Nikkei Asia & Australian Financial Review (APAC): Japan MLIT i-Construction 2.0, Singapore CORENET X & ANZ Digital Twins Scale",
        "category": "APAC • Autonomous Civil & BIM",
        "sourceName": "Nikkei Asia",
        "daysAgo": 6,
        "url": "https://asia.nikkei.com/Business/Technology",
        "rssQuery": "Japan MLIT i-Construction Singapore CORENET X Australia digital twin BIM",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Commercial & Inst"
        ],
        "summary": "Across the Asia-Pacific region, government mandates—including Singapore’s BCA CORENET X automated IFC regulatory approval portal, Japan’s MLIT i-Construction 2.0, and Australian state Digital Engineering Frameworks—are setting global benchmarks for automated BIM compliance.",
        "bullets": [
            "Singapore’s CORENET X requires multidisciplinary teams to submit unified OpenBIM IFC+SG models for automated AI code-compliance checking.",
            "Japan’s Ministry of Land, Infrastructure, Transport and Tourism (MLIT) expands mandatory 3D BIM/CIM and autonomous GNSS earthmoving to offset labor caps.",
            "Australian utilities and transport authorities tie long-term P3 concession payments to live ISO 19650 digital twin asset performance."
        ],
        "region": "APAC"
    },
    {
        "id": "wire-6",
        "title": "Global Private Equity & Industrialized Construction (DfMA): PE Roll-Ups Standardize Multi-Region Engineering Tech Stacks",
        "category": "Global • PE M&A & DfMA Modular",
        "sourceName": "ENR",
        "daysAgo": 8,
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "private equity engineering MEP M&A modular prefabrication DfMA construction",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Healthcare & Life Sci"
        ],
        "summary": "Tracked by Morrissey Goodale (USA/Global) and European M&A monitors, private equity sponsors rolling up mid-market MEP, civil, and environmental firms across North America, Europe, and Australia are immediately standardizing acquired offices onto single Cloud CDEs and DfMA workflows.",
        "bullets": [
            "PE-backed engineering platforms consolidate fragmented regional licenses into enterprise-wide Autodesk, Bluebeam, Procore, and Egnyte agreements.",
            "Specialty MEP and structural contractors shift 35–50% of work into off-site modular fabrication shops using Revit-to-Inventor/Tekla pipelines.",
            "Standardized BIM templates and cloud document governance boost EBITDA margins by 300–500 basis points within 18 months of acquisition."
        ],
        "region": "Global"
    }
];

window.arkanceNewsData = [
    {
        "id": "ark-1",
        "title": "ARKANCE Scales Global Platinum & Sapphire Partner Footprint Across USA, 18 EMEA Countries & Australia/NZ (ANZ)",
        "badge": "Global • Platinum & Sapphire Scale",
        "daysAgo": 2,
        "sourceName": "ARKANCE USA",
        "url": "https://www.arkance.us/about-arkance",
        "rssQuery": "ARKANCE USA Europe UK ANZ Monnoyeur Autodesk Platinum Bluebeam Sapphire",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Commercial & Inst"
        ],
        "summary": "Operating across North America (USA), 18 European countries (France, UK, Benelux, Germany/DACH, Nordics, Spain, Italy, Poland, Czechia, Hungary, Turkey), and APAC (Australia & New Zealand) as a subsidiary of the €3.2B+ Monnoyeur Group, ARKANCE supports 40,000+ AEC and manufacturing clients.",
        "bullets": [
            "Deploys 1,300+ industry specialists globally as an elite Autodesk Platinum Partner and Bluebeam Sapphire Partner.",
            "Delivers harmonized multi-region enterprise agreements for multinational engineering and EPC firms operating across the USA, Europe, and ANZ.",
            "Unites Autodesk Construction Cloud, Bluebeam Max, Egnyte, HCSS, Aurigo, and Trimble/Topcon field integrations under one partner."
        ]
    },
    {
        "id": "ark-2",
        "title": "ARKANCE Be.Smart Portfolio (Holixa & Smartaps) Automates Revit, Civil 3D & Plant Workflows Across USA, EMEA & ANZ",
        "badge": "Global • Proprietary IP (Be.Smart)",
        "daysAgo": 6,
        "sourceName": "ARKANCE UK",
        "url": "https://www.arkance.uk/be-smart-software",
        "rssQuery": "ARKANCE Be.Smart Holixa Revit Civil 3D BIM automation",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "ARKANCE’s proprietary Be.Smart software portfolio (including Holixa and Smartaps) automates repetitive 3D modeling, sheet generation, and localized standards inside Revit, Civil 3D, and Plant 3D for engineering teams in the USA, Europe, and Australia/New Zealand.",
        "bullets": [
            "Includes localized templates for USA state DOTs, UK/EU BS EN ISO 19650 & Eurocodes, and Australian/NZ digital engineering standards.",
            "Synchronizes BIM metadata bi-directionally with Autodesk Construction Cloud, ERP financial systems, and asset management databases.",
            "Directly offsets the 1.1M+ global engineering and craft labor shortage by accelerating per-seat modeling productivity by up to 35%."
        ]
    },
    {
        "id": "ark-3",
        "title": "ARKANCE North America (USA) Accelerates DOT Digital Delivery, Heavy Civil & Hyperscale Data Center Execution",
        "badge": "USA • Infrastructure & Fab",
        "daysAgo": 10,
        "sourceName": "ARKANCE USA",
        "url": "https://www.arkance.us/industries/civil-infrastructure",
        "rssQuery": "ARKANCE USA civil infrastructure DOT data center Autodesk HCSS Aurigo",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "Across the United States, ARKANCE’s dedicated civil, public-sector, and construction practices guide state DOTs, municipalities, and ENR Top 400 contractors through FHWA 3D digital delivery, IIJA grant execution, and hyperscale data center prefabrication.",
        "bullets": [
            "Connects Autodesk Civil 3D and Construction Cloud with Aurigo Masterworks capital planning and HCSS HeavyBid/HeavyJob field operations.",
            "Configures CMMC 2.0 / FedRAMP-ready cloud repositories with Egnyte and Autodesk for USA defense, energy grid, and federal contractors.",
            "Helps USA MEP and general contractors implement off-site modular DfMA spooling with Revit and OFC Desk."
        ]
    },
    {
        "id": "ark-4",
        "title": "ARKANCE UK & EMEA Lead Building Safety Act \"Golden Thread\", EU CSRD Carbon & £104B AMP8 Water Rollouts",
        "badge": "EMEA • Regulatory & Water",
        "daysAgo": 14,
        "sourceName": "ARKANCE UK",
        "url": "https://www.arkance.uk/services/bim-iso-19650-consulting",
        "rssQuery": "ARKANCE UK Europe Building Safety Act ISO 19650 AMP8 water BIM",
        "verticals": [
            "Commercial & Inst",
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Across the United Kingdom and Continental Europe, ARKANCE consulting teams guide tier-1 contractors, housing developers, and water utilities through UK Gateway 2/3 \"Golden Thread\" audits, EU CSRD embodied carbon reporting, and UK Ofwat AMP8 digital delivery.",
        "bullets": [
            "Configures BS EN ISO 19650-compliant Common Data Environments in Autodesk Construction Cloud and Bluebeam Cloud for UK and EU tenders.",
            "Implements automated embodied carbon (EPD) quantity tracking inside Revit and Autodesk Forma to meet EU CSRD and UK RICS Whole Life Carbon rules.",
            "Supports UK water utilities and civil contractors deploying Autodesk Innovyze (InfoWorks/InfoDrainage) and Civil 3D."
        ]
    },
    {
        "id": "ark-5",
        "title": "ARKANCE ANZ (Australia & New Zealand) Scales ISO 19650 Digital Engineering for Metro Rail, Water & Renewable Grid Projects",
        "badge": "APAC • ANZ Infrastructure",
        "daysAgo": 18,
        "sourceName": "ARKANCE ANZ",
        "url": "https://www.arkance.au/digital-construction-solutions",
        "rssQuery": "ARKANCE Australia New Zealand BIM infrastructure Autodesk Bluebeam",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid",
            "Commercial & Inst"
        ],
        "summary": "Across Australia (Sydney, Melbourne, Brisbane, Perth) and New Zealand (Auckland, Wellington, Christchurch), ARKANCE ANZ delivers ISO 19650 digital engineering, Autodesk Construction Cloud, and Bluebeam workflows for major transport, water, and energy alliances.",
        "bullets": [
            "Supports contractors bidding on Australian A$120B transport corridors, Rewiring the Nation grid upgrades, and Brisbane 2032 Olympic venues.",
            "Aligns BIM Execution Plans (BEPs) with NSW Digital Engineering, Victorian Digital Asset Strategy (VDAS), and New Zealand BIM mandates.",
            "Connects ANZ offices seamlessly with global joint-venture partners in the UK, Europe, and the USA."
        ]
    },
    {
        "id": "ark-6",
        "title": "Pinnacle Series Multilingual LMS & ARKANCE Enablement Drive Global Enterprise BIM Adoption Across USA, EMEA & APAC",
        "badge": "Global • Workforce Enablement",
        "daysAgo": 22,
        "sourceName": "ARKANCE USA",
        "url": "https://www.arkance.us/pinnacle-series",
        "rssQuery": "Eagle Point Pinnacle Series ARKANCE AEC training BIM",
        "verticals": [
            "Commercial & Inst",
            "Healthcare & Life Sci",
            "Data Centers & Mfg"
        ],
        "summary": "Delivered across the USA, Europe (in 10+ languages), and ANZ, the Pinnacle Series Learning Management System (LMS) embeds firm-specific ISO 19650 and DOT BIM Execution Plans directly inside Revit, Civil 3D, and Bluebeam.",
        "bullets": [
            "Cuts onboarding time by 40% for private-equity-backed engineering and MEP roll-ups integrating newly acquired offices.",
            "Provides on-demand micro-learning and contextual workflow guidance directly inside Autodesk and Nemetschek applications.",
            "Tracks enterprise software utilization, skill gaps, and regulatory compliance across global engineering workforces."
        ]
    }
];

window.regulatoryData = [
    {
        "id": "reg-1",
        "title": "Global Cybersecurity & Data Sovereignty: USA DoD CMMC 2.0 / FedRAMP, EU NIS2 Directive & Australia SOCI Act",
        "badge": "Global • Cyber & Sovereignty",
        "daysAgo": 2,
        "sourceName": "ENR",
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "CMMC 2.0 FedRAMP NIS2 Directive SOCI Act construction engineering cybersecurity",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Civil & Transport"
        ],
        "summary": "Critical infrastructure, defense, and energy contractors face mandatory supply-chain cybersecurity laws across all three global theatres: USA DoD CMMC 2.0 & FedRAMP/NIST 800-171, the European Union NIS2 Directive & UK Cyber Essentials Plus, and Australia’s Security of Critical Infrastructure (SOCI) Act.",
        "bullets": [
            "USA (DoD CMMC 2.0 / NIST 800-171): Enforcement disqualifies non-compliant GCs and engineering subs from federal, military, and energy grid contracts.",
            "EMEA (EU NIS2 Directive): Holds European engineering boards personally liable for cyber breaches across energy, water, and rail supply chains.",
            "APAC (Australia SOCI Act & Japan): Critical infrastructure and semiconductor security rules require sovereign cloud residency (Egnyte GovCloud / regional ACC)."
        ],
        "region": "Global"
    },
    {
        "id": "reg-2",
        "title": "Global OpenBIM & Digital Delivery Mandates: USA FHWA IFC 4.3, UK/EU BS EN ISO 19650 & Singapore CORENET X / ANZ",
        "badge": "Global • ISO 19650 & OpenBIM",
        "daysAgo": 5,
        "sourceName": "BIM+",
        "url": "https://www.bimplus.co.uk/",
        "rssQuery": "ISO 19650 OpenBIM IFC 4.3 FHWA digital delivery Singapore CORENET X",
        "verticals": [
            "Civil & Transport",
            "Commercial & Inst",
            "Healthcare & Life Sci"
        ],
        "summary": "Public infrastructure and institutional owners globally are converging on buildingSMART OpenBIM (IFC 4.3) and ISO 19650 Common Data Environments—led by USA FHWA/DOT digital delivery grants, UK/European BS EN ISO 19650 mandates, and APAC’s Singapore CORENET X & Australian VDAS/NSW frameworks.",
        "bullets": [
            "USA (FHWA / AASHTO): Over 30 state DOTs advance IFC 4.3 and 3D model-as-legal-document handovers for bridges, highways, and rail.",
            "EMEA (BS EN ISO 19650): Mandatory across UK public procurement, France Plan BIM, Germany BIM Deutschland, and Nordic transport ministries.",
            "APAC (CORENET X / MLIT / ANZ): Singapore BCA CORENET X mandates automated IFC model code checking; Japan MLIT and ANZ enforce 3D digital twin handovers."
        ],
        "region": "Global"
    },
    {
        "id": "reg-3",
        "title": "USA Federal & State \"Buy Clean\" EPD Mandates, Local Law 97 & SEC/California Climate Disclosure Rules (USA)",
        "badge": "USA • Embodied Carbon & ESG",
        "daysAgo": 8,
        "sourceName": "Construction Dive",
        "url": "https://www.constructiondive.com/topic/technology/",
        "rssQuery": "USA Buy Clean GSA EPD steel concrete NYC Local Law 97 construction carbon",
        "verticals": [
            "Commercial & Inst",
            "Civil & Transport",
            "Data Centers & Mfg"
        ],
        "summary": "In the United States, federal GSA/FHWA \"Buy Clean\" procurement rules, California and state Buy Clean statutes, and municipal operational carbon caps (such as New York City Local Law 97 and Boston BERDO) tie project funding and occupancy permits to verified Environmental Product Declarations (EPDs).",
        "bullets": [
            "Requires USA contractors to submit facility-specific type III EPDs proving low-carbon structural steel, ready-mix concrete, asphalt, and flat glass.",
            "Forces commercial landlords in major USA cities to fund deep MEP and façade energy retrofits to avoid steep annual carbon fines.",
            "Drives adoption of early-stage carbon simulation inside Autodesk Forma, Revit, and EC3 across North American design firms."
        ],
        "region": "USA"
    },
    {
        "id": "reg-4",
        "title": "EU CSRD, Energy Performance of Buildings Directive (EPBD), CBAM Carbon Tariffs & UK Building Safety Act \"Golden Thread\" (EMEA)",
        "badge": "EMEA • Golden Thread & CSRD",
        "daysAgo": 11,
        "sourceName": "Building UK",
        "url": "https://www.building.co.uk/building-safety",
        "rssQuery": "UK Building Safety Act Golden Thread EU CSRD EPBD CBAM construction",
        "verticals": [
            "Commercial & Inst",
            "Healthcare & Life Sci",
            "Data Centers & Mfg"
        ],
        "summary": "Across EMEA, contractors and designers face the world’s strictest dual regulatory regime: the UK Building Safety Regulator’s Gateway 2 & 3 \"Golden Thread\" digital safety sign-offs alongside the European Union’s CSRD, revised EPBD whole-life carbon rules, CBAM import tariffs, and EU AI Act.",
        "bullets": [
            "UK Gateway 2 (pre-construction) and Gateway 3 (pre-occupation) legally halt projects lacking auditable 3D Golden Thread change control.",
            "EU EPBD and national laws (France RE2020, Nordic climate declarations, UK RICS Whole Life Carbon v2) mandate cradle-to-grave BIM carbon calculation.",
            "The EU AI Act classifies AI systems in critical civil, water, and energy infrastructure as high-risk, requiring governed human-in-the-loop audit logs."
        ],
        "region": "EMEA"
    },
    {
        "id": "reg-5",
        "title": "APAC Regulatory Transformation: Japan 2024/2026 Overtime Cap Laws, Australia NCC / NABERS Embodied Carbon & Singapore Green Plan",
        "badge": "APAC • Labor Caps & Green Codes",
        "daysAgo": 15,
        "sourceName": "Nikkei Asia",
        "url": "https://asia.nikkei.com/Business/Technology",
        "rssQuery": "Japan construction overtime cap MLIT Australia NABERS NCC Singapore Green Plan BIM",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Commercial & Inst"
        ],
        "summary": "In the Asia-Pacific region, regulatory mandates are directly forcing digital construction adoption: Japan’s strict statutory caps on construction overtime (\"2024 Problem\" enforcement), Australia’s National Construction Code (NCC) & NABERS embodied carbon framework, and Singapore’s 80-80-80 Green Building Masterplan.",
        "bullets": [
            "Japan: Strict legal penalties on site engineer and craft overtime force Japanese GCs to deploy automated BIM, 3D drones, and remote inspections.",
            "Australia & NZ: Mandatory NABERS embodied carbon ratings and Australian AASB S2 climate disclosures require verified BIM material takeoffs.",
            "Singapore & Hong Kong: Mandate DfMA/PPVC modular prefabrication quotas and automated OpenBIM e-submission across public and private builds."
        ],
        "region": "APAC"
    },
    {
        "id": "reg-6",
        "title": "Global Subsurface Utility & Jobsite Safety Mandates: USA OSHA / ASCE 38-22, UK NUAR / CDM & Global Builder’s Risk Underwriting",
        "badge": "Global • Safety, Utility & Insurance",
        "daysAgo": 19,
        "sourceName": "ENR",
        "url": "https://www.enr.com/topics/214-transportation",
        "rssQuery": "OSHA construction safety ASCE 38-22 UK NUAR CDM Builders Risk insurance BIM",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Across the USA (OSHA electronic injury reporting & heat rules + ASCE 38-22 subsurface utility standards), EMEA (UK CDM Principal Designer rules + statutory National Underground Asset Register NUAR), and ANZ (WHS digital safety), insurers in New York, London, and Sydney tie Builder’s Risk premiums to digital telemetry.",
        "bullets": [
            "Global insurance syndicates (Lloyd’s of London, Zurich, Chubb) offer 8–15% Builder’s Risk premium credits for active IoT water-leak and digital safety logs.",
            "USA ASCE 38-22, UK NUAR, French DT-DICT, and Dutch KLIC laws mandate 3D subsurface utility modeling to prevent cable and pipeline strikes.",
            "Automates digital safety sign-offs, RAMS/JHAs, and utility clash avoidance inside Autodesk Build, Civil 3D, Procore, and HCSS."
        ],
        "region": "Global"
    }
];

window.softwareOemData = [
    {
        "name": "Autodesk",
        "relationship": "partner",
        "badge": "Global • Core Ecosystem OEM (NASDAQ: ADSK)",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Energy & Grid",
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Headquartered in San Francisco (USA) with major regional hubs in Dublin/London/Munich (EMEA) and Singapore/Tokyo/Sydney (APAC), Autodesk is the global standard for BIM authoring, water modeling, and Cloud CDE delivery via Autodesk Construction Cloud (ACC), Revit, Civil 3D, Innovyze, and Forma.",
        "stories": [
            {
                "title": "Global & USA: Autodesk Scales Autodesk Construction Cloud (ACC), Forma AI & State DOT Digital Delivery Across North America",
                "sourceName": "Autodesk News",
                "url": "https://adsknews.autodesk.com/",
                "rssQuery": "Autodesk Construction Cloud Forma AI USA DOT digital delivery",
                "bullets": [
                    "Morningstar highlights 95%+ enterprise renewal rates globally as USA ENR Top 400 contractors consolidate BIM and field management onto ACC.",
                    "Powers 3D corridor modeling and OpenBIM IFC 4.3 handovers across 30+ USA state DOTs and hyperscale data center campuses."
                ],
                "region": "Global"
            },
            {
                "title": "EMEA: Autodesk Expands EU Sovereign Cloud (Frankfurt/Dublin), UK ISO 19650 Golden Thread & £104B AMP8 Water (Innovyze)",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Autodesk Construction Cloud Europe UK ISO 19650 Innovyze AMP8 water",
                "bullets": [
                    "Supports UK water utilities (InfoWorks/InfoDrainage) across the £104B AMP8 cycle and European TEN-T rail corridors under ISO 19650.",
                    "Norway-origin Autodesk Forma AI accelerates early-stage embodied carbon and microclimate analysis for EU CSRD/EPBD compliance."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Autodesk Powers Singapore CORENET X IFC Submissions, Japan MLIT BIM/CIM & Australian Infrastructure Alliances",
                "sourceName": "Nikkei Asia",
                "url": "https://asia.nikkei.com/Business/Technology",
                "rssQuery": "Autodesk Singapore CORENET X Japan BIM Australia infrastructure",
                "bullets": [
                    "Regional AWS data residency in Sydney and Tokyo enables Australian and Japanese transport agencies to standardize on Autodesk Docs and Build.",
                    "Bridges Revit and Inventor/Fusion for off-site modular DfMA prefabrication across Singapore, Japan, and Australia."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Nemetschek Group / Bluebeam",
        "relationship": "partner",
        "badge": "Global • Strategic Partner OEM (ETR: NEM)",
        "verticals": [
            "Data Centers & Mfg",
            "Commercial & Inst",
            "Civil & Transport",
            "Healthcare & Life Sci"
        ],
        "summary": "Headquartered in Munich (Germany) with Bluebeam headquartered in Pasadena, California (USA) and growing APAC hubs in Sydney, Singapore, and Tokyo, the Nemetschek Group unites Bluebeam, Allplan, Solibri, Graphisoft, and dRofus across global AEC markets.",
        "stories": [
            {
                "title": "USA & Global: Pasadena-Based Bluebeam Unveils Bluebeam Max (MCP AI) & Scales Cloud Submittal Automation Across ENR Top 400",
                "sourceName": "Bluebeam",
                "url": "https://www.bluebeam.com/company/newsroom/bluebeam-max-ai-cloud-usa-enr-construction-submittal-review",
                "rssQuery": "Bluebeam Max AI Cloud USA ENR construction submittal review",
                "bullets": [
                    "Used by 94% of top USA general contractors and design firms to automate drawing overlays, specification reviews, and Studio collaborative sessions.",
                    "Bluebeam Max (built on Model Context Protocol) connects AI agents directly to project PDFs and cloud CDE repositories."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Munich’s Nemetschek Group Surpasses 85% Recurring SaaS Share Across DACH, UK, France & Nordics",
                "sourceName": "Nemetschek",
                "url": "https://www.nemetschek.com/en/news-media/nemetschek-group-munich-bluebeam-allplan-solibri-saas-arr-europe-uk",
                "rssQuery": "Nemetschek Group Munich Bluebeam Allplan Solibri SaaS ARR Europe UK",
                "bullets": [
                    "Combines German Allplan civil/precast, Finnish Solibri IFC model checking, and Bluebeam Cloud to enforce UK Golden Thread and EU ISO 19650 rules.",
                    "Champions buildingSMART OpenBIM (IFC 4.3) and EU CSRD embodied carbon workflows across European public and private tenders."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Bluebeam, Graphisoft & Solibri Expand Rapidly Across Australian Transport Alliances & Singapore CORENET X",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/technology",
                "rssQuery": "Bluebeam Nemetschek Solibri Graphisoft Australia Singapore BIM",
                "bullets": [
                    "Solibri and Archicad lead automated OpenBIM IFC code-compliance checking for Singapore’s mandatory CORENET X portal.",
                    "Australian and New Zealand tier-1 contractors standardize design review and QA/QC sign-offs on Bluebeam Cloud."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Egnyte",
        "relationship": "partner",
        "badge": "Global • Cloud & Cyber Partner OEM",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid",
            "Data Centers & Mfg",
            "Healthcare & Life Sci"
        ],
        "summary": "Headquartered in Mountain View, California (USA) with EMEA hubs in London (UK) and Poznań (Poland) alongside global edge caching across APAC, Egnyte delivers sovereign AEC cloud file acceleration, AI governance, and CMMC 2.0 / NIS2 cybersecurity.",
        "stories": [
            {
                "title": "USA: Egnyte GovCloud & CMMC 2.0 / FedRAMP Compliance Secure Defense, Grid & ENR Top 400 Engineering Archives",
                "sourceName": "Egnyte",
                "url": "https://www.egnyte.com/press-releases",
                "rssQuery": "Egnyte AEC CMMC 2.0 FedRAMP USA construction cybersecurity",
                "bullets": [
                    "Enables USA federal, defense, and critical infrastructure contractors to meet strict DoD CMMC 2.0 and NIST 800-171 mandates without slowing BIM collaboration.",
                    "Egnyte Smart Cache synchronizes multi-gigabyte Revit, Civil 3D, and point-cloud files at LAN speeds across remote jobsite trailers."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Egnyte Scales UK & European Channel Delivery for EU NIS2 Directive, GDPR & ISO 19650 Data Residency",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Egnyte UK Europe AEC cloud NIS2 GDPR ISO 19650",
                "bullets": [
                    "Provides sovereign European cloud residency (Frankfurt and London regions) to satisfy EU NIS2, GDPR, and UK Cyber Essentials Plus audits.",
                    "Integrates directly with Autodesk Construction Cloud, Bluebeam Studio, and Procore across UK and European joint ventures."
                ],
                "region": "EMEA"
            },
            {
                "title": "Global & APAC: Egnyte Context Studio & AI Control Center Prevent IP Leakage Across Multinational Mega-Projects",
                "sourceName": "Forbes",
                "url": "https://www.forbes.com/innovation/",
                "rssQuery": "Egnyte AI Control Center Context Studio AEC engineering global",
                "bullets": [
                    "Allows engineering teams across the USA, Europe, and APAC/Australia to run generative AI search across project archives with zero-trust permission boundaries.",
                    "Protects semiconductor cleanroom and energy grid schematics from ransomware and unauthorized external LLM training."
                ],
                "region": "Global"
            }
        ],
        "region": "USA"
    },
    {
        "name": "Procore Technologies",
        "relationship": "competing",
        "badge": "Global • Competing Field OEM (NYSE: PCOR)",
        "verticals": [
            "Commercial & Inst",
            "Data Centers & Mfg",
            "Healthcare & Life Sci",
            "Civil & Transport"
        ],
        "summary": "Headquartered in Carpinteria, California (USA) with international hubs in London/Dublin/Paris/Munich (EMEA) and Sydney/Singapore (APAC), Procore is a cloud construction management platform competing directly with Autodesk Build.",
        "stories": [
            {
                "title": "USA & Global: Morningstar Tracks Procore Copilot AI Rollout, Procore Pay & Platform Competition with Autodesk Build",
                "sourceName": "Morningstar",
                "url": "https://www.morningstar.com/stocks/xnys/pcor/quote",
                "rssQuery": "Procore PCOR Morningstar Copilot AI Procore Pay construction software",
                "bullets": [
                    "Expands Procore Pay lien-waiver/disbursement workflows and Copilot AI across USA general contractors and hyperscale owners.",
                    "Faces increasing competitive bundling pressure as Autodesk includes Autodesk Build inside enterprise EBA renewals."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Procore Targets UK Building Safety Act \"Golden Thread\" & European Data Center GCs Across London, Dublin & Frankfurt",
                "sourceName": "Building UK",
                "url": "https://www.building.co.uk/building-safety",
                "rssQuery": "Procore UK Building Safety Act Golden Thread Europe construction",
                "bullets": [
                    "Localizes UK JCT/NEC4 contract administration and ISO 19650 document naming to win British, Irish, and Continental European contractors.",
                    "Requires third-party BIM connectors to bridge Revit, Navisworks, and Nemetschek authoring models with Procore field execution."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Procore Scales Across Australian (Sydney/Melbourne) Tier-1 Contractors & Southeast Asian Commercial Builders",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/technology",
                "rssQuery": "Procore Australia Sydney Melbourne construction software WHS",
                "bullets": [
                    "Widely adopted across Australian commercial, residential, and social-infrastructure builders for WHS safety and subcontractor management.",
                    "Integrates with regional ANZ accounting/ERP platforms and Bluebeam Cloud."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Bentley Systems",
        "relationship": "competing",
        "badge": "Global • Competing Civil OEM (NASDAQ: BSY)",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Headquartered in Exton, Pennsylvania (USA) with its EMEA headquarters in Dublin (Ireland) and strong APAC operations in Sydney, Tokyo, and Singapore, Bentley Systems delivers ProjectWise, OpenRoads, iTwin, and New Zealand-born Seequent subsurface software.",
        "stories": [
            {
                "title": "USA & Global: Bentley Scales OpenRoads, ProjectWise & Cesium 3D AI Across USA State DOTs & Electric Utilities",
                "sourceName": "Morningstar",
                "url": "https://www.morningstar.com/stocks/xnas/bsy/quote",
                "rssQuery": "Bentley Systems BSY Morningstar Cesium iTwin USA DOT infrastructure",
                "bullets": [
                    "Dominates civil road/rail design and PLS-CADD high-voltage transmission engineering across USA state DOTs and investor-owned utilities.",
                    "Requires seamless IFC 4.3 and DWG/RVT interoperability with Autodesk Civil 3D and Revit on joint-venture megaprojects."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Bentley Year in Infrastructure Highlights European TEN-T Rail, UK HS2 & North Sea Offshore Grid Digital Twins",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Bentley Systems Europe UK HS2 TEN-T rail digital twin iTwin",
                "bullets": [
                    "Powers ISO 19650 Common Data Environments on cross-border European rail tunnels (Fehmarnbelt, Lyon–Turin) and UK water/grid programs.",
                    "Transitions EMEA enterprise engineering consultancies to E365 consumption-based licensing."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Christchurch (NZ)-Born Seequent Subsurface & Bentley iTwin Power Australian Metro Rail & Asian Hydropower/Grid",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/technology",
                "rssQuery": "Bentley Systems Seequent New Zealand Australia rail mining geotechnical",
                "bullets": [
                    "Seequent (headquartered in Christchurch, New Zealand) leads 3D geological and tunneling digital twins across ANZ, Japan, and Southeast Asia.",
                    "Supports Australian state digital twin portals across Sydney, Melbourne, and Brisbane."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Trimble",
        "relationship": "competing",
        "badge": "Global • Competing BIM & GNSS OEM (NASDAQ: TRMB)",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Commercial & Inst"
        ],
        "summary": "Headquartered in Westminster, Colorado (USA) with its Tekla structural BIM division in Espoo (Finland), European MEP hubs in the Netherlands/UK, and strong ANZ/Japan civil operations, Trimble unites GNSS machine control and Tekla Structures.",
        "stories": [
            {
                "title": "USA & Global: Morningstar Tracks Trimble Construction One (TC1) Recurring ARR & Joint AGCO/Civil GNSS Ecosystem",
                "sourceName": "Morningstar",
                "url": "https://www.morningstar.com/stocks/xnas/trmb/quote",
                "rssQuery": "Trimble TRMB Morningstar Construction One Tekla recurring revenue",
                "bullets": [
                    "Bundles Viewpoint Spectrum/Vista ERP, e-Builder capital program management, and Tekla Structures for USA general and specialty contractors.",
                    "Recurring software subscriptions now exceed 60% of total Trimble revenue globally."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Finland-Engineered Tekla Structures & Dutch Stabicad Anchor European Precast, Steel & MEP Detailing",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Trimble Tekla Structures Finland Europe UK Stabicad BIM steel precast",
                "bullets": [
                    "Tekla Structures leads LOD 400 structural steel, rebar, and precast concrete fabrication modeling across the Nordics, UK, Germany, France, and the USA.",
                    "Exchanges OpenBIM IFC 4.3 models bi-directionally with Autodesk Revit and Nemetschek Allplan/Solibri."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Trimble 3D GNSS Machine Control & Earthworks Automate Japan MLIT i-Construction & Australian Highway Projects",
                "sourceName": "Nikkei Asia",
                "url": "https://asia.nikkei.com/Business/Technology",
                "rssQuery": "Trimble machine control Japan i-Construction Australia civil earthmoving",
                "bullets": [
                    "Connects 3D civil corridor surfaces directly to autonomous excavators and graders across Japanese and Australian infrastructure sites.",
                    "Competes directly with Topcon Positioning Systems and Autodesk Civil 3D connected jobsite workflows."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Aurigo Software",
        "relationship": "partner",
        "badge": "USA & Global • Public Owner Partner OEM",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Headquartered in Austin, Texas (USA) with engineering centers in Bengaluru (India/APAC) and expanding North American and international public-sector deployments, Aurigo delivers Masterworks cloud capital program and Lumina AI software.",
        "stories": [
            {
                "title": "USA: State DOTs, Transit Authorities & Water Utilities Standardize on Aurigo Masterworks & Autodesk Construction Cloud",
                "sourceName": "Aurigo",
                "url": "https://www.aurigo.com/newsroom/aurigo-masterworks-autodesk-usa-dot-capital-program-infrastructure",
                "rssQuery": "Aurigo Masterworks Autodesk USA DOT capital program infrastructure",
                "bullets": [
                    "Manages over $450B+ in multi-year capital improvement plans (CIP), IIJA federal grant tracking, and right-of-way across USA public agencies.",
                    "Integrates natively with Autodesk Civil 3D and Autodesk Construction Cloud to unify capital budgeting and 3D digital delivery."
                ],
                "region": "USA"
            },
            {
                "title": "Global AI: Aurigo Lumina Generative AI Forecasts Infrastructure Bid Escalation & Supply-Chain Risk for Public Owners",
                "sourceName": "ENR",
                "url": "https://www.enr.com/topics/214-transportation",
                "rssQuery": "Aurigo Lumina AI infrastructure construction bid estimating",
                "bullets": [
                    "Analyzes historical public bid tabulations against steel, concrete, and electrical inflation indices to improve engineer cost estimates.",
                    "Automates environmental permitting, DBE compliance, and mobile field inspection logs."
                ],
                "region": "Global"
            },
            {
                "title": "Global & APAC R&D: Connecting Esri GIS, Capital Planning & ISO 19650 Digital Twins for Municipal Asset Owners",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "Aurigo Autodesk Esri GIS digital delivery municipal water transit",
                "bullets": [
                    "Provides a single pane of glass from 5-year legislative funding through 3D BIM design and lifecycle asset maintenance.",
                    "Reduces change-order cycle times by up to 50% on complex civil and water programs."
                ],
                "region": "Global"
            }
        ],
        "region": "USA"
    },
    {
        "name": "HCSS",
        "relationship": "partner",
        "badge": "USA • Heavy Civil Partner OEM",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid",
            "Data Centers & Mfg"
        ],
        "summary": "Headquartered in Sugar Land, Texas (USA) and strategically partnered with Autodesk and ARKANCE, HCSS is the premier heavy civil estimating (HeavyBid), field operations (HeavyJob), telematics, and safety platform for infrastructure contractors.",
        "stories": [
            {
                "title": "USA Heavy Civil: ENR Top 400 Infrastructure & Hyperscale Site Contractors Link HCSS HeavyBid/HeavyJob with Autodesk",
                "sourceName": "HCSS",
                "url": "https://www.hcss.com/news/hcss-heavybid-heavyjob-autodesk-civil-construction-software-usa",
                "rssQuery": "HCSS HeavyBid HeavyJob Autodesk civil construction software USA",
                "bullets": [
                    "Eliminates manual re-entry between Autodesk Civil 3D quantity takeoffs, HeavyBid estimates, and daily HeavyJob field production tracking.",
                    "Gives civil project executives real-time visibility into earthwork, paving, and underground utility unit-cost margins."
                ],
                "region": "USA"
            },
            {
                "title": "USA & Global Telematics: HCSS Mixed-Fleet GPS Telematics & AI Bidding Insights Offset Heavy Equipment & Labor Shortages",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "HCSS construction estimating telematics safety heavy civil",
                "bullets": [
                    "Ingests mixed-fleet OEM equipment telematics (Caterpillar, John Deere, Komatsu, Volvo) to automate preventive maintenance and idle-time tracking.",
                    "Digital safety inspections (HCSS Safety) help contractors qualify for Builder’s Risk and workers’ compensation insurance credits."
                ],
                "region": "USA"
            },
            {
                "title": "Bridging 3D Civil Corridor Authoring and Field Execution on Highway, Water & Data Center Site-Work Packages",
                "sourceName": "ENR",
                "url": "https://www.enr.com/topics/214-transportation",
                "rssQuery": "HCSS civil construction estimating highway water data center",
                "bullets": [
                    "Synchronizes design model revisions directly with field crew timecards, material receipts, and subcontractor pay applications.",
                    "Protects contractor profitability on fixed-price and progressive Design-Build infrastructure contracts."
                ],
                "region": "Global"
            }
        ],
        "region": "USA"
    },
    {
        "name": "Slate.ai",
        "relationship": "partner",
        "badge": "Global • AI Analytics Partner OEM",
        "verticals": [
            "Data Centers & Mfg",
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Headquartered in the San Francisco Bay Area (USA) and deployed on mega-projects across North America, Europe, and APAC, Slate.ai is a predictive decision-intelligence AI platform that cross-analyzes schedules, BIM models, RFIs, and supply-chain telemetry.",
        "stories": [
            {
                "title": "USA & EMEA Mega-Projects: Slate.ai Predictive Schedule AI Flags Long-Lead Switchgear & MEP Bottlenecks Early",
                "sourceName": "Slate.ai",
                "url": "https://slate.ai/",
                "rssQuery": "Slate.ai construction AI schedule risk predictive data center",
                "bullets": [
                    "Continuously correlates Primavera P6, Asta Powerproject, and MS Project schedules against submittal logs to surface hidden critical-path risks.",
                    "Alerts project executives in Virginia, Texas, London, Frankfurt, and Sydney weeks before electrical switchgear delays hit site assembly."
                ],
                "region": "USA"
            },
            {
                "title": "Global ConTech: Tier-1 Contractors Pair Slate.ai Natural Language Querying with Autodesk Construction Cloud Archives",
                "sourceName": "Forbes",
                "url": "https://www.forbes.com/innovation/",
                "rssQuery": "AI predictive schedule risk construction mega project BIM",
                "bullets": [
                    "Transforms millions of historical tender specifications, RFIs, and change orders into an instant preconstruction risk radar.",
                    "Protects fee margins on multi-billion-dollar hyperscale data center, semiconductor fab, and hospital builds."
                ],
                "region": "Global"
            },
            {
                "title": "Generative Construction Scheduling Optimizes Crane, Concrete & Off-Site DfMA Prefabrication Sequencing",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "generative scheduling AI construction prefabrication BIM",
                "bullets": [
                    "Simulates thousands of trade sequencing permutations to compress mega-project schedules by 8–12%.",
                    "Integrates cleanly with enterprise Cloud CDEs across USA, European, and Australian contractors."
                ],
                "region": "Global"
            }
        ],
        "region": "USA"
    },
    {
        "name": "Topcon Positioning Systems",
        "relationship": "competing",
        "badge": "Global • 3D Positioning OEM (TYO: 7732)",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Energy & Grid"
        ],
        "summary": "With its corporate parent in Tokyo (Japan / APAC), positioning headquarters in Livermore, California (USA), and European headquarters in Capelle aan den IJssel (Netherlands / EMEA), Topcon delivers GNSS precision positioning, robotic total stations, and APTIX 3D machine control.",
        "stories": [
            {
                "title": "APAC & Global: Tokyo-Headquartered Topcon (TYO: 7732) Scales Autonomous ICT Earthmoving for Japan MLIT & Australia (ANZ)",
                "sourceName": "Nikkei Asia",
                "url": "https://asia.nikkei.com/Business/Technology",
                "rssQuery": "Topcon 7732 Japan MLIT i-Construction autonomous construction Australia",
                "bullets": [
                    "Leads Japan’s MLIT i-Construction 2.0 rollout and Australian heavy civil automation with 3D GNSS machine control and haul-truck management.",
                    "Directly offsets heavy equipment operator shortages across Japan, Australia, Europe, and the United States."
                ],
                "region": "APAC"
            },
            {
                "title": "USA: Topcon Livermore HQ Rolls Out APTIX Cloud Integration & Laser-Scan Slab Verification on Hyperscale & DOT Sites",
                "sourceName": "Topcon",
                "url": "https://www.topconpositioning.com/news-events/topcon-positioning-aptix-machine-control-laser-scanning-usa-civil",
                "rssQuery": "Topcon Positioning APTIX machine control laser scanning USA civil",
                "bullets": [
                    "Streams live Autodesk Civil 3D and Bentley corridor surface updates directly to cab-mounted excavator and dozer displays on USA highway projects.",
                    "Verifies concrete floor flatness against Revit and Navisworks tolerances in real time on USA data center campuses."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Topcon Europe (Netherlands HQ) Powers 3D Machine Control & Reality Capture Across UK, German & Nordic Rail/Grid",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/reality-capture/",
                "rssQuery": "Topcon Europe machine control laser scanning BIM UK Germany rail",
                "bullets": [
                    "Tracks earthwork compaction and payload emissions telemetry to satisfy EU CSRD and UK infrastructure sustainability mandates.",
                    "Maintains strategic interoperability connectors with Autodesk Civil 3D, Navisworks, and PointCab."
                ],
                "region": "EMEA"
            }
        ],
        "region": "APAC"
    },
    {
        "name": "OFC Desk",
        "relationship": "partner",
        "badge": "Global • MEP & DfMA Partner OEM",
        "verticals": [
            "Data Centers & Mfg",
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Specialized MEP BIM content, fabrication spooling, and Revit-to-shop workflow automation platform supporting mechanical, electrical, and plumbing contractors across the USA, Europe, and APAC.",
        "stories": [
            {
                "title": "USA & EMEA Hyperscale: MEP Contractors Deploy OFC Desk & Revit Automation to Scale Off-Site Modular Prefabrication",
                "sourceName": "OFC Desk",
                "url": "https://www.ofcdesk.com/",
                "rssQuery": "MEP prefabrication Revit spooling data center construction USA Europe",
                "bullets": [
                    "Automates fabrication spool sheets, multi-service MEP corridor racks, and bill-of-materials exports from LOD 400 Revit models.",
                    "Enables electrical and mechanical trades in Virginia, Ohio, Frankfurt, London, and Sydney to meet compressed hyperscale schedules."
                ],
                "region": "USA"
            },
            {
                "title": "Global Healthcare & Cleanrooms: Manufacturer-Specific BIM Content Eliminates Field Clash Rework",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "BIM MEP fabrication hospital cleanroom construction clash detection",
                "bullets": [
                    "Replaces generic placeholder geometry with dimensionally accurate valves, chillers, ductwork, and busways compliant with ASME, Eurocode, and ANZ standards.",
                    "Integrates seamlessly with Autodesk Revit and Autodesk Construction Cloud."
                ],
                "region": "Global"
            },
            {
                "title": "Bridging Consulting MEP Engineers and Off-Site Trade Fabricators in Collaborative Design-Build Delivery",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "design-build MEP BIM prefabrication modular contractor",
                "bullets": [
                    "Eliminates redundant remodeling between consulting engineers and off-site MEP fabrication shops.",
                    "Protects specialty contractor margins amid severe skilled trade deficits across the USA, UK/EU, and Australia."
                ],
                "region": "Global"
            }
        ],
        "region": "Global"
    },
    {
        "name": "CivCore",
        "relationship": "partner",
        "badge": "USA & EMEA • Civil & Subsurface Partner OEM",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid"
        ],
        "summary": "Civil infrastructure data integration, 3D subsurface utility coordination (supporting USA ASCE 38-22, UK NUAR, French DT-DICT, and Australian AS 5488 workflows), and automated public plan-review software.",
        "stories": [
            {
                "title": "USA & EMEA Subsurface Safety: CivCore & Civil 3D Streamline 3D Utility Mapping (ASCE 38-22 & UK NUAR)",
                "sourceName": "CivCore",
                "url": "https://www.civcore.com/",
                "rssQuery": "subsurface utility engineering BIM Civil 3D ASCE 38-22 NUAR infrastructure",
                "bullets": [
                    "Automates 3D utility conflict matrices and permit tracking across highway, rail, water, and high-voltage grid corridors.",
                    "Reduces underground cable and pipeline strike risk during USA IIJA, UK AMP8 water, and European HVDC trenching."
                ],
                "region": "USA"
            },
            {
                "title": "Global GIS-to-BIM Pipelines Connect Municipal & Utility Asset Registries with 3D Civil Engineering Models",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "GIS BIM integration civil infrastructure water utility",
                "bullets": [
                    "Synchronizes Esri GIS and national underground utility layers directly into Civil 3D and Autodesk Construction Cloud.",
                    "Accelerates environmental and right-of-way clearances on public infrastructure programs in the USA, Europe, and ANZ."
                ],
                "region": "Global"
            },
            {
                "title": "Automated Digital As-Built Handovers Support Water, Energy & Transit Lifecycle Digital Twins",
                "sourceName": "ENR",
                "url": "https://www.enr.com/topics/214-transportation",
                "rssQuery": "digital as-built municipal water transit BIM IFC",
                "bullets": [
                    "Captures GPS-verified pipe, valve, and HVDC cable attributes during trench installation.",
                    "Delivers ISO 19650 and OpenBIM IFC 4.3 digital twin datasets directly to utility operations teams."
                ],
                "region": "Global"
            }
        ],
        "region": "USA"
    }
];

window.channelMatrixData = [
    {
        "name": "ARKANCE (Global #1 Benchmark: USA, EMEA & APAC/ANZ)",
        "badge": "Global • #1 Platinum & Sapphire Partner (Score: 94)",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Energy & Grid",
            "Healthcare & Life Sci",
            "Commercial & Inst"
        ],
        "summary": "Part of the €3.2B+ Monnoyeur Group, ARKANCE is the #1 global Autodesk Platinum & Bluebeam Sapphire Partner—uniquely operating at full enterprise scale across all three global regions: North America (USA), 18 EMEA countries (France, UK, Germany/DACH, Benelux, Nordics, Spain, Italy, Poland, Czechia), and APAC (Australia & New Zealand).",
        "stories": [
            {
                "title": "Global Reach: ARKANCE Unites Full USA, 18-Country European & ANZ (Australia/NZ) Delivery for 40,000+ Clients",
                "sourceName": "ARKANCE USA",
                "url": "https://www.arkance.us/about-arkance",
                "rssQuery": "ARKANCE USA Europe UK Australia Autodesk Platinum Bluebeam Sapphire",
                "bullets": [
                    "Only channel partner globally with deep on-the-ground engineering and consulting teams across North America, EMEA, and APAC (ANZ).",
                    "Delivers unified multi-brand enterprise agreements spanning Autodesk Construction Cloud, Bluebeam Max, Egnyte, Aurigo, and HCSS."
                ],
                "region": "Global"
            },
            {
                "title": "Proprietary IP & Enablement: ARKANCE Be.Smart (Holixa / Smartaps) Plugins & Multilingual Pinnacle Series LMS",
                "sourceName": "ARKANCE UK",
                "url": "https://www.arkance.uk/be-smart-software",
                "rssQuery": "ARKANCE Be.Smart Holixa Pinnacle Series BIM automation",
                "bullets": [
                    "Automates USA DOT, UK/European ISO 19650 & Eurocode, and ANZ BIM standards inside Revit, Civil 3D, and Plant 3D.",
                    "Helps private-equity-backed engineering roll-ups standardize BIM templates and workforce training across acquired international offices."
                ],
                "region": "Global"
            },
            {
                "title": "Regional Execution: Leading USA DOT Digital Delivery, UK Golden Thread / AMP8 Water & Australian Metro Rail BIM",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "ARKANCE ISO 19650 BIM digital twin infrastructure water rail",
                "bullets": [
                    "Guides tier-1 contractors across the USA, UK, France, Germany, and Australia through ISO 19650 accreditation and Cloud CDE deployment.",
                    "Ranks #1 globally on the Channel Partner Active Index (94/100)."
                ],
                "region": "Global"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Graitec",
        "badge": "EMEA & USA • Transatlantic Platinum Partner (Score: 82)",
        "verticals": [
            "Commercial & Inst",
            "Data Centers & Mfg",
            "Civil & Transport"
        ],
        "summary": "Headquartered near Paris (France) and backed by private equity firm Seven2, Graitec is a major transatlantic Autodesk Platinum Partner operating across Europe (France, UK, Germany, Spain, Italy, Poland, Czechia) and North America (USA & Canada), with no direct APAC/ANZ footprint.",
        "stories": [
            {
                "title": "USA & EMEA Fabrication: Graitec Bundles Advance Design 2027, Stratus MEP & Ideate Software Across Transatlantic Accounts",
                "sourceName": "Graitec",
                "url": "https://graitec.com/us/news/graitec-usa-france-uk-advance-design-stratus-ideate-autodesk",
                "rssQuery": "Graitec USA France UK Advance Design Stratus Ideate Autodesk",
                "bullets": [
                    "Combines US-acquired Stratus (sheet-metal/MEP fabrication) and Ideate Software (Revit data tools) with European Advance Design structural analysis.",
                    "Targets structural steel, precast concrete, and MEP contractors across the USA, Canada, France, and the UK."
                ],
                "region": "USA"
            },
            {
                "title": "PE Consolidation: Backed by Seven2, Graitec Expands North American & European VAR Roll-Ups",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Graitec Seven2 acquisition BIM software reseller USA Europe UK",
                "bullets": [
                    "Competes directly with ARKANCE across North America, France, the UK, Germany, Spain, and Poland.",
                    "Focuses on structural Eurocode/AISC code checking and Advance Workshop off-site fabrication."
                ],
                "region": "Global"
            },
            {
                "title": "EMEA & North American Cloud Consulting: Scaling ISO 19650 CDE & Autodesk Construction Cloud Migrations",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "Graitec ISO 19650 Autodesk Construction Cloud UK Europe USA",
                "bullets": [
                    "Assists British, European, and North American firms with UK Building Safety Act Golden Thread and ACC implementation.",
                    "Holds an 82/100 score on the Channel Partner Active Index (lacks APAC/ANZ operations)."
                ],
                "region": "EMEA"
            }
        ],
        "region": "EMEA"
    },
    {
        "name": "Symetri (Addnode Group)",
        "badge": "EMEA & USA • Public Platinum Partner (Score: 80)",
        "verticals": [
            "Data Centers & Mfg",
            "Commercial & Inst",
            "Healthcare & Life Sci"
        ],
        "summary": "Operating as the Design Management division of Stockholm-listed Addnode Group (Nasdaq Stockholm: ANOD-B), Symetri operates across Northern Europe (Sweden, Norway, Denmark, Finland, UK, Ireland) and the United States (via Microdesk/Team D3 acquisitions), without APAC/ANZ offices.",
        "stories": [
            {
                "title": "USA & Northern Europe: Addnode Group Scales Symetri Across USA (Microdesk/Team D3), UK & Nordics with Naviate IP",
                "sourceName": "Symetri",
                "url": "https://www.symetri.us/insights/addnode-group-symetri-usa-uk-nordics-naviate-autodesk",
                "rssQuery": "Addnode Group Symetri USA UK Nordics Naviate Autodesk",
                "bullets": [
                    "Pairs Autodesk Platinum agency scale in the USA, UK, and Nordics with proprietary Naviate (Revit/Civil 3D) and Sovelia PLM software.",
                    "Uses Addnode Group’s public Swedish balance sheet to fund transatlantic bolt-on acquisitions in AEC and manufacturing."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA Sustainability: Symetri Naviate Zero Automates Embodied Carbon Calculation for EU CSRD & UK/Nordic Climate Laws",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Symetri Naviate Zero embodied carbon BIM UK Nordics USA",
                "bullets": [
                    "Helps architects in Sweden, Norway, Finland, Denmark, the UK, and the USA track real-time embodied carbon inside Revit.",
                    "Competes with ARKANCE across the USA, UK, and Nordic regions."
                ],
                "region": "EMEA"
            },
            {
                "title": "USA & UK Institutional Owners: Targeting Healthcare, Higher-Ed & Life-Sciences Digital Twins",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "Symetri UK USA BIM facilities management digital twin",
                "bullets": [
                    "Leverages legacy Excitech (UK) and Microdesk (USA) relationships with NHS trusts, universities, and port authorities.",
                    "Scores 80/100 on the Global Channel Partner Active Index."
                ],
                "region": "USA"
            }
        ],
        "region": "EMEA"
    },
    {
        "name": "NTI Group",
        "badge": "EMEA • European VAR Consolidator (Score: 79)",
        "verticals": [
            "Commercial & Inst",
            "Data Centers & Mfg",
            "Civil & Transport"
        ],
        "summary": "Headquartered in Denmark and backed by Nordic private equity firm Axcel, NTI Group is a pure-play European Autodesk Platinum and Bluebeam Partner operating across 12 EMEA countries (Nordics, Germany/DACH, UK/Ireland, Italy, Spain, France, Benelux).",
        "stories": [
            {
                "title": "EMEA Roll-Up: Denmark’s NTI Group Acquires DiRoots (UK/Portugal), Cadbim (France/Italy) & RMR Across 12 EU Countries",
                "sourceName": "NTI Group",
                "url": "https://www.nti-group.com/home/nti-group-denmark-axcel-diroots-autodesk-europe-acquisition",
                "rssQuery": "NTI Group Denmark Axcel DiRoots Autodesk Europe acquisition",
                "bullets": [
                    "Backed by PE sponsor Axcel, NTI has consolidated regional VARs and popular Revit plugin developer DiRoots across Western, Northern, and Southern Europe.",
                    "Generates €300M+ in European AEC and manufacturing software/services revenue."
                ],
                "region": "EMEA"
            },
            {
                "title": "European BIM Automation: NTI FOR REVIT & DiRoots Plugins Target ISO 19650 Standardization",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "NTI Group DiRoots Revit BIM Europe UK ISO 19650",
                "bullets": [
                    "Bundles DiRoots sheet/parameter tools with NTI FOR REVIT and NTI CONNECT across European Autodesk agency renewals.",
                    "Competes directly with ARKANCE EMEA across the Nordics, Germany, Benelux, UK, Italy, and Spain."
                ],
                "region": "EMEA"
            },
            {
                "title": "Bluebeam Cloud & EU CSRD Sustainability Advisory Across Mid-Market European Design Firms",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "NTI Group Bluebeam sustainability BIM Europe",
                "bullets": [
                    "Cross-sells Bluebeam Cloud, Autodesk Construction Cloud, and EU CSRD carbon reporting workflows across European practices.",
                    "Scores 79/100 on the Channel Partner Active Index (no USA or APAC offices)."
                ],
                "region": "Global"
            }
        ],
        "region": "EMEA"
    },
    {
        "name": "IMAGINiT Technologies (Rand Worldwide)",
        "badge": "USA • North American Platinum VAR (Score: 77)",
        "verticals": [
            "Data Centers & Mfg",
            "Civil & Transport",
            "Commercial & Inst"
        ],
        "summary": "Headquartered in Framingham/Baltimore (USA) as the operating division of Rand Worldwide (OTCQX: RWWI), IMAGINiT is a regional North American (USA & Canada) Autodesk Platinum Partner, tracked for Clarity automation and eLearning comparison.",
        "stories": [
            {
                "title": "USA & Canada: Rand Worldwide (IMAGINiT) Scales Clarity Revit/ACC Task Automation Across North American Offices",
                "sourceName": "IMAGINiT",
                "url": "https://www.imaginit.com/about/news-events/press-releases",
                "rssQuery": "IMAGINiT Technologies Rand Worldwide Clarity Autodesk USA",
                "bullets": [
                    "Automates background Revit model health checks, PDF/IFC publishing, and sheet synchronization via IMAGINiT Clarity for USA and Canadian firms.",
                    "Operates exclusively in North America (after ARKANCE acquired former Rand sister division VinZero), giving global partners an edge on multinational RFPs."
                ],
                "region": "USA"
            },
            {
                "title": "North American Brownfield Reality Capture (Leica Geosystems) & Archibus Facilities Management Integration",
                "sourceName": "ENR",
                "url": "https://www.enr.com/topics/214-transportation",
                "rssQuery": "IMAGINiT reality capture Leica BIM facilities management USA",
                "bullets": [
                    "Pairs high-definition Leica laser scanning hardware with scan-to-BIM services for USA manufacturing plants and hospital retrofits.",
                    "Competes with ARKANCE USA across North American civil, architectural, and manufacturing accounts."
                ],
                "region": "USA"
            },
            {
                "title": "ProductivityNOW eLearning Competes with Pinnacle Series LMS in North American Mid-Market Enablement",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "IMAGINiT ProductivityNOW AEC training software USA",
                "bullets": [
                    "Bundles self-paced Autodesk video libraries with North American helpdesk support contracts.",
                    "Holds a 77/100 score on the Global Channel Partner Active Index."
                ],
                "region": "USA"
            }
        ],
        "region": "USA"
    },
    {
        "name": "Man and Machine (Mensch und Maschine)",
        "badge": "EMEA • European Platinum Specialist (Score: 75)",
        "verticals": [
            "Civil & Transport",
            "Data Centers & Mfg",
            "Commercial & Inst"
        ],
        "summary": "Part of Germany-headquartered Mensch und Maschine SE (Frankfurt Xetra: MUM, with 60+ offices across Germany/DACH, the UK, France, Italy, Poland, Spain, and India), Man and Machine is a premier European Autodesk Platinum & Elite Construction Partner.",
        "stories": [
            {
                "title": "EMEA (DACH & UK): Germany’s Mensch und Maschine SE (ETR: MUM) Expands High-Margin MuM BIM Booster & CAM IP",
                "sourceName": "Man and Machine",
                "url": "https://www.manandmachine.co.uk/news/mensch-und-maschine-man-and-machine-germany-uk-autodesk-bim",
                "rssQuery": "Mensch und Maschine Man and Machine Germany UK Autodesk BIM",
                "bullets": [
                    "Combines Autodesk Platinum agency representation across Germany, Austria, Switzerland, and the UK with proprietary MuM BIM Booster plugins.",
                    "Delivers specialized UK water utility (Innovyze InfoDrainage/InfoWorks) and German BIM Deutschland infrastructure consulting."
                ],
                "region": "EMEA"
            },
            {
                "title": "UK Infrastructure & Building Safety: Man and Machine UK Scales ISO 19650 CDE & AMP8 Water Delivery",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "Man and Machine UK ISO 19650 Autodesk Construction Cloud water",
                "bullets": [
                    "Assists British civil contractors, water authorities, and architects with BS EN ISO 19650 accreditation and Autodesk Construction Cloud.",
                    "Competes with ARKANCE across the UK, Germany/DACH, France, Poland, and Italy (Index Score: 75/100)."
                ],
                "region": "EMEA"
            },
            {
                "title": "Bridging European Industrial Manufacturing (CAM/PLM) and Off-Site AEC Prefabrication (DfMA)",
                "sourceName": "BIM+",
                "url": "https://www.bimplus.co.uk/",
                "rssQuery": "Man and Machine Mensch und Maschine BIM manufacturing prefabrication Europe",
                "bullets": [
                    "Leverages deep German industrial Inventor/Vault PLM expertise to help European MEP and façade fabricators automate Revit-to-shop production.",
                    "Publicly traded on Frankfurt Xetra (`ETR: MUM`) as a benchmark for European engineering software spend."
                ],
                "region": "Global"
            }
        ],
        "region": "EMEA"
    }
];

window.advisoryMatrixData = [
    {
        "name": "Accenture",
        "badge": "Global • Tech SI & Capital Projects (NYSE: ACN)",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Civil & Transport"
        ],
        "summary": "With massive North American (USA) and European (Dublin HQ, London, Madrid, Milan, Frankfurt) practices alongside APAC hubs in Sydney, Tokyo, and Singapore, Accenture Industry X has acquired Anser Advisory & Comtech (USA/Canada), BOSLAN (Spain/EU), IQT (Italy), and Soben (UK/USA).",
        "stories": [
            {
                "title": "USA Mega-Projects: Accenture Integrates Anser Advisory & Comtech to Lead North American DOT, Grid & Data Center PMOs",
                "sourceName": "Morningstar",
                "url": "https://www.morningstar.com/stocks/xnys/acn/quote",
                "rssQuery": "Accenture Anser Advisory Comtech USA infrastructure capital projects data center",
                "bullets": [
                    "With the acquisitions of USA-based Anser Advisory and North American Comtech, Accenture employs thousands of civil, transit, and power-grid PMO specialists across the USA.",
                    "Competes directly with ENR Top 500 program managers while relying on specialized Autodesk/Bluebeam partners for technical BIM execution."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA Roll-Up: Accenture Acquires BOSLAN (Spain/UK/EU), IQT Group (Italy) & Soben (UK) for European Grid & Hyperscale",
                "sourceName": "Building UK",
                "url": "https://www.building.co.uk/building-safety",
                "rssQuery": "Accenture BOSLAN IQT Soben Europe UK infrastructure data center acquisition",
                "bullets": [
                    "Adds deep European engineering, net-zero HVDC grid, and FLAP-D data center cost/project management across the UK, Spain, Italy, and Germany.",
                    "Deploys AI agents to audit 10,000-page NEC4, FIDIC, and AIA EPC tender specifications."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC & Global AI: Accenture Scales Digital Twin & Cloud CDE Integration Across Australian Utilities & Asian Semiconductor Fabs",
                "sourceName": "Accenture",
                "url": "https://newsroom.accenture.com/",
                "rssQuery": "Accenture Industry X digital twin construction AI Australia Japan",
                "bullets": [
                    "Connects enterprise SAP/Oracle ERPs with Autodesk Construction Cloud, Bentley iTwin, and Primavera across global capital programs.",
                    "Helps hyperscale cloud providers coordinate megawatt power queues across the USA, Europe, and APAC."
                ],
                "region": "APAC"
            }
        ],
        "region": "Global"
    },
    {
        "name": "Deloitte",
        "badge": "Global • Capital Projects Advisory",
        "verticals": [
            "Civil & Transport",
            "Energy & Grid",
            "Healthcare & Life Sci"
        ],
        "summary": "Operating market-leading Infrastructure & Capital Projects practices across the United States (New York/DC), EMEA (London Global HQ, Frankfurt, Paris, Benelux), and APAC (Sydney, Melbourne, Tokyo, Singapore), Deloitte advises public DOTs, utilities, and hospital systems.",
        "stories": [
            {
                "title": "USA Infrastructure & CHIPS Act: Deloitte US Advises State DOTs, Semiconductor Fabs & Hospital Systems on Digital PMOs",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "Deloitte USA infrastructure capital projects CHIPS Act DOT BIM",
                "bullets": [
                    "Guides USA state DOTs, aviation authorities, and semiconductor builders on IIJA/CHIPS grant governance and Cloud CDE architectures.",
                    "Supports USA healthcare networks executing collaborative Integrated Project Delivery (IPD) hospital campuses."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA: Deloitte Crane Survey (London/Paris) & UK £104B AMP8 Water / TEN-T Rail ISO 19650 PMO Governance",
                "sourceName": "Deloitte",
                "url": "https://www2.deloitte.com/uk/en/pages/real-estate/articles/crane-survey.html",
                "rssQuery": "Deloitte Crane Survey London Paris UK AMP8 infrastructure BIM",
                "bullets": [
                    "Deloitte’s benchmark European Crane Surveys highlight record adaptive-reuse office retrofits driven by EU EPBD and UK MEES energy laws.",
                    "Audits EU CSRD embodied carbon, NIS2 cybersecurity, and UK Building Safety Act Golden Thread compliance."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC: Deloitte Access Economics (Australia) & Japan Practice Lead Olympic, Metro Rail & Renewable Grid Advisory",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/property/commercial",
                "rssQuery": "Deloitte Access Economics Australia infrastructure Brisbane 2032 digital twin",
                "bullets": [
                    "Advises Australian state governments (NSW, Victoria, Queensland Brisbane 2032) and Japanese ministries on digital twin asset handovers.",
                    "Partners with technical ecosystem integrators to deploy Autodesk, Esri GIS, and Aurigo."
                ],
                "region": "APAC"
            }
        ],
        "region": "USA"
    },
    {
        "name": "Capgemini",
        "badge": "Global • SI & Digital Twin Leader (EPA: CAP)",
        "verticals": [
            "Energy & Grid",
            "Data Centers & Mfg",
            "Civil & Transport"
        ],
        "summary": "Headquartered in Paris (France) with over 60,000 engineers in Capgemini Engineering across EMEA (France, UK, Germany), North America (USA), and APAC (India, Australia, Japan, Singapore), Capgemini leads PLM-to-BIM convergence and nuclear/grid digital twins.",
        "stories": [
            {
                "title": "EMEA Energy & Rail: Paris-Based Capgemini Scales European Nuclear (EDF/Sizewell C), HVDC Grid & Rail Digital Twins",
                "sourceName": "Capgemini",
                "url": "https://www.capgemini.com/news/capgemini-france-uk-europe-digital-twin-nuclear-energy-grid-rail",
                "rssQuery": "Capgemini France UK Europe digital twin nuclear energy grid rail",
                "bullets": [
                    "Connects enterprise SAP/PLM systems with Autodesk, Bentley, and GIS platforms for French (EDF/SNCF), UK (Sizewell C/National Grid), and German utilities.",
                    "Deploys sovereign European AI and EU CSRD Scope 3 carbon tracking across EMEA infrastructure owners."
                ],
                "region": "EMEA"
            },
            {
                "title": "USA Advanced Manufacturing: Capgemini US Unifies Factory PLM & AEC BIM for North American EV, Battery & Chip Campuses",
                "sourceName": "Forbes",
                "url": "https://www.forbes.com/innovation/",
                "rssQuery": "Capgemini Engineering USA gigafactory semiconductor digital twin BIM",
                "bullets": [
                    "Bridges 3D building shells (Revit/ACC) with automated production-line digital twins across USA semiconductor and clean-tech megaprojects.",
                    "Reduces factory commissioning delays by simulating MEP utility clashes prior to equipment installation."
                ],
                "region": "USA"
            },
            {
                "title": "APAC: Capgemini Australia & Asia-Pacific Expand Smart Grid, Mining & Rail Asset Management Digital Twins",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/technology",
                "rssQuery": "Capgemini Australia APAC energy grid rail digital twin",
                "bullets": [
                    "Supports Australian utility transmission upgrades and Singapore/Japanese industrial automation programs.",
                    "Creates high-value co-delivery opportunities for global BIM and Cloud CDE implementation partners."
                ],
                "region": "APAC"
            }
        ],
        "region": "EMEA"
    },
    {
        "name": "McKinsey & Company",
        "badge": "Global • Executive Strategy & Capital Excellence",
        "verticals": [
            "Data Centers & Mfg",
            "Energy & Grid",
            "Civil & Transport"
        ],
        "summary": "With flagship Capital Excellence hubs in New York/Chicago (USA), London/Munich/Paris (EMEA), and Tokyo/Sydney/Singapore (APAC), McKinsey shapes boardroom capital allocation across AI data centers, energy transition, and industrialized DfMA construction.",
        "stories": [
            {
                "title": "Global & USA Capital Excellence: McKinsey Projects $5T+ Global AI Data Center & Grid CapEx Amid Engineering Bottlenecks",
                "sourceName": "McKinsey",
                "url": "https://www.mckinsey.com/capabilities/operations/our-insights",
                "rssQuery": "McKinsey capital projects data center power grid construction productivity USA",
                "bullets": [
                    "Identifies multi-year electrical transformer queues, utility permitting, and a 1.1M+ global skilled labor deficit as top threats to USA and global buildouts.",
                    "Urges hyperscale and industrial owners to lock in off-site modular prefabrication (DfMA) and unified Cloud CDEs."
                ],
                "region": "Global"
            },
            {
                "title": "EMEA & APAC Productivity: Closing the AEC Productivity Gap via Collaborative Contracting (NEC4 / Alliancing / IPD)",
                "sourceName": "AEC Magazine UK",
                "url": "https://aecmag.com/bim/",
                "rssQuery": "McKinsey construction productivity BIM cloud Europe UK Australia collaborative",
                "bullets": [
                    "Demonstrates that fragmented point software and adversarial lump-sum tenders erode 15–20% of capital efficiency across USA, European, and Australian builds.",
                    "Validates enterprise demand for integrated software platforms, automated BIM plugins, and continuous workforce enablement."
                ],
                "region": "EMEA"
            },
            {
                "title": "Private Equity AEC Roll-Up Playbooks: Standardizing Multi-Region Engineering Tech Stacks for EBITDA Expansion",
                "sourceName": "Forbes",
                "url": "https://www.forbes.com/business/",
                "rssQuery": "McKinsey private equity engineering construction roll-up software EBITDA",
                "bullets": [
                    "PE sponsors acquiring mid-market MEP and civil firms in the USA, Europe, and ANZ prioritize immediate Autodesk, Bluebeam, and Egnyte harmonization.",
                    "Drives multi-year, multi-country enterprise implementation and training agreements."
                ],
                "region": "Global"
            }
        ],
        "region": "Global"
    },
    {
        "name": "PwC",
        "badge": "Global • Capital Projects, M&A & ESG Advisory",
        "verticals": [
            "Energy & Grid",
            "Commercial & Inst",
            "Civil & Transport"
        ],
        "summary": "Anchored by major practices in the USA (New York/Dallas), EMEA (London Global HQ, Frankfurt, Paris, Amsterdam), and APAC (Sydney, Tokyo, Singapore), PwC leads AEC private-equity M&A due diligence, USA tax-credit structuring, and EU CSRD carbon auditing.",
        "stories": [
            {
                "title": "USA M&A & Clean Energy: PwC US Advises on AEC Private Equity Roll-Ups & IRA / CHIPS Act Tax-Credit Compliance",
                "sourceName": "PwC",
                "url": "https://www.pwc.com/us/en/industries/capital-projects-infrastructure.html",
                "rssQuery": "PwC USA capital projects infrastructure M&A clean energy construction",
                "bullets": [
                    "Structures USA clean-energy, grid, and manufacturing financing requiring auditable digital field prevailing-wage and domestic-content logs.",
                    "Advises North American private equity funds acquiring regional MEP, civil, and structural engineering platforms."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA Sustainability Law: PwC UK & Europe Lead Mandatory EU CSRD, EU Taxonomy & RICS Whole-Life Carbon Audits",
                "sourceName": "Building UK",
                "url": "https://www.building.co.uk/building-safety",
                "rssQuery": "PwC UK Europe CSRD EU Taxonomy embodied carbon construction real estate",
                "bullets": [
                    "Audits BIM-derived Environmental Product Declarations (EPDs) so European developers qualify for green-bond financing under the EU Taxonomy.",
                    "Drives urgent demand among UK and European architects for automated carbon tracking inside Revit and Forma."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC Infrastructure: PwC Australia & Asia Guide Sovereign P3 Concessions, Metro Rail & Renewable Grid Procurement",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/property/commercial",
                "rssQuery": "PwC Australia APAC infrastructure PPP energy grid construction",
                "bullets": [
                    "Advises Australian and Southeast Asian governments on public-private partnership (P3) risk allocation and digital asset handovers.",
                    "Requires standardized ISO 19650 project controls across multi-contractor alliances."
                ],
                "region": "APAC"
            }
        ],
        "region": "EMEA"
    },
    {
        "name": "EY (Ernst & Young)",
        "badge": "Global • Infrastructure, Real Estate & Cyber Risk",
        "verticals": [
            "Commercial & Inst",
            "Energy & Grid",
            "Data Centers & Mfg"
        ],
        "summary": "With global leadership across the USA, EMEA (London Global HQ, Paris, Frankfurt), and APAC (Sydney, Melbourne, Tokyo, Singapore), EY advises on industrial FDI site selection, USA CMMC / EU NIS2 cybersecurity, and P3 digital twin concessions.",
        "stories": [
            {
                "title": "USA Reshoring & Cyber: EY US Advises Megaproject Owners on Data Center Site Selection & CMMC 2.0 Supply-Chain Security",
                "sourceName": "Construction Dive",
                "url": "https://www.constructiondive.com/topic/technology/",
                "rssQuery": "EY USA construction data center reshoring cybersecurity CMMC",
                "bullets": [
                    "Guides USA semiconductor, battery, and hyperscale owners on megawatt utility power availability, tax incentives, and GMP contract risk.",
                    "Audits DoD CMMC 2.0 and NIST 800-171 cybersecurity across engineering and construction cloud repositories."
                ],
                "region": "USA"
            },
            {
                "title": "EMEA Attractiveness & CBAM: EY Europe Tracks Industrial FDI in France, UK & Germany Alongside EU CBAM Carbon Tariffs",
                "sourceName": "EY",
                "url": "https://www.ey.com/en_gl/real-estate-hospitality-construction/ey-european-attractiveness-survey-france-uk-germany-construction-cbam",
                "rssQuery": "EY European Attractiveness Survey France UK Germany construction CBAM",
                "bullets": [
                    "Helps European EPC contractors model EU Carbon Border Adjustment Mechanism (CBAM) duties on imported steel/cement inside NEC4 and FIDIC contracts.",
                    "Highlights scan-to-BIM reality capture and ISO 19650 CDEs as critical for brownfield European industrial and office conversions."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC & ANZ Concessions: Digital Twin Asset Handovers Become Mandatory in Australian & Asian P3 Infrastructure Deals",
                "sourceName": "Australian Financial Review",
                "url": "https://www.afr.com/property/commercial",
                "rssQuery": "EY Australia infrastructure PPP digital twin construction",
                "bullets": [
                    "Across Australian (NSW, Victoria, Queensland) and Asian P3 concessions, lifecycle availability payments are tied to live ISO 19650 digital twin performance.",
                    "Requires uninterrupted BIM metadata continuity from design through 30-year operations."
                ],
                "region": "APAC"
            }
        ],
        "region": "USA"
    },
    {
        "name": "KPMG",
        "badge": "Global • Infrastructure & PMO Governance",
        "verticals": [
            "Civil & Transport",
            "Healthcare & Life Sci",
            "Energy & Grid"
        ],
        "summary": "Operating across the USA (New York/Chicago), EMEA (Amstelveen Global HQ, London, Frankfurt), and APAC (Sydney, Tokyo, Singapore), KPMG authors the Global Construction Survey and advises transport, water, port, and healthcare owners on PMO governance.",
        "stories": [
            {
                "title": "Global & USA Construction Survey: Collaborative Delivery (Design-Build / IPD) & Generative AI Top Owner Agendas",
                "sourceName": "KPMG",
                "url": "https://kpmg.com/xx/en/what-we-do/industries/infrastructure.html",
                "rssQuery": "KPMG global construction survey USA Europe APAC infrastructure AI",
                "bullets": [
                    "Finds that over 65% of mega-project owners in the USA, Europe, and Australia are adopting collaborative Design-Build, NEC4, or Alliance contracts.",
                    "Collaborative procurement moves Cloud CDE, BIM, and AI software selection to day-one consortium mobilization."
                ],
                "region": "Global"
            },
            {
                "title": "EMEA Supply Chain & Solvency: KPMG UK & Europe Monitor Subcontractor Liquidity & TEN-T Rail Digital PMO Dashboards",
                "sourceName": "Building UK",
                "url": "https://www.building.co.uk/building-safety",
                "rssQuery": "KPMG UK Europe construction insolvency supply chain rail PMO",
                "bullets": [
                    "Uses real-time field progress, cost-value reconciliation (CVR), and payment telemetry in the UK, Germany, and France to spot distressed tier-2 subs early.",
                    "Aggregates live cost, schedule, and BIM telemetry across European rail, port, and aviation authorities."
                ],
                "region": "EMEA"
            },
            {
                "title": "APAC Smart Cities & ANZ Infrastructure: KPMG Australia & Japan Advise on Digital Engineering & Grid Modernization",
                "sourceName": "Nikkei Asia",
                "url": "https://asia.nikkei.com/Business/Technology",
                "rssQuery": "KPMG Australia Japan smart city infrastructure digital twin BIM",
                "bullets": [
                    "Advises Australian state infrastructure bodies and Japanese municipal agencies on ISO 19650 asset information governance.",
                    "Relies on standardized data schemas from Autodesk Construction Cloud, Bentley, and Nemetschek."
                ],
                "region": "APAC"
            }
        ],
        "region": "APAC"
    }
];

window.stockTrackerData = [
    {
        "name": "Autodesk",
        "ticker": "NASDAQ: ADSK (USA / Global)",
        "yahooSymbol": "ADSK",
        "price": "$294.80",
        "change": "+1.65%",
        "isPositive": true,
        "note": "Global BIM, Civil 3D, Innovyze, ACC & Forma Leader Across USA, EMEA & APAC",
        "url": "https://www.morningstar.com/stocks/xnas/adsk/quote",
        "region": "Global"
    },
    {
        "name": "Procore Technologies",
        "ticker": "NYSE: PCOR (USA / Global)",
        "yahooSymbol": "PCOR",
        "price": "$71.40",
        "change": "+1.18%",
        "isPositive": true,
        "note": "USA-Headquartered Cloud Construction Management OEM Scaling in USA, UK/EU & ANZ",
        "url": "https://www.morningstar.com/stocks/xnys/pcor/quote",
        "region": "USA"
    },
    {
        "name": "Bentley Systems",
        "ticker": "NASDAQ: BSY (USA / Global)",
        "yahooSymbol": "BSY",
        "price": "$52.90",
        "change": "+0.94%",
        "isPositive": true,
        "note": "USA-Headquartered Civil Infrastructure Digital Twins, ProjectWise & NZ Seequent",
        "url": "https://www.morningstar.com/stocks/xnas/bsy/quote",
        "region": "Global"
    },
    {
        "name": "Trimble",
        "ticker": "NASDAQ: TRMB (USA / Global)",
        "yahooSymbol": "TRMB",
        "price": "$64.15",
        "change": "+1.42%",
        "isPositive": true,
        "note": "USA-Headquartered Connected Construction, Finland Tekla Structures & Global GNSS",
        "url": "https://www.morningstar.com/stocks/xnas/trmb/quote",
        "region": "Global"
    },
    {
        "name": "Accenture",
        "ticker": "NYSE: ACN (USA / EMEA / APAC)",
        "yahooSymbol": "ACN",
        "price": "$358.20",
        "change": "+1.32%",
        "isPositive": true,
        "note": "Global SI Scaling Capital Projects Across USA (Anser), EMEA (BOSLAN/Soben) & APAC",
        "url": "https://www.morningstar.com/stocks/xnys/acn/quote",
        "region": "Global"
    },
    {
        "name": "Rand Worldwide (IMAGINiT)",
        "ticker": "OTCQX: RWWI (USA & Canada)",
        "yahooSymbol": "RWWI",
        "price": "$24.50",
        "change": "+0.40%",
        "isPositive": true,
        "note": "Public Parent of Regional North American VAR IMAGINiT Technologies (USA & CA)",
        "url": "https://www.rand.com/investor-relations",
        "region": "USA"
    },
    {
        "name": "Nemetschek Group",
        "ticker": "ETR: NEM (Munich, EMEA / US)",
        "yahooSymbol": "NEM.DE",
        "price": "€104.20",
        "change": "+2.05%",
        "isPositive": true,
        "note": "Germany-Headquartered Parent of US Bluebeam, German Allplan & Finnish Solibri",
        "url": "https://www.nemetschek.com/en/investor-relations",
        "region": "EMEA"
    },
    {
        "name": "Addnode Group (Symetri)",
        "ticker": "STO: ANOD-B (SE / UK / USA)",
        "yahooSymbol": "ANOD-B.ST",
        "price": "SEK 114.60",
        "change": "+1.10%",
        "isPositive": true,
        "note": "Sweden-Headquartered Public Parent of Symetri Operating in Nordics, UK & USA",
        "url": "https://www.addnodegroup.com/en/investors/",
        "region": "EMEA"
    },
    {
        "name": "Mensch und Maschine",
        "ticker": "ETR: MUM (Germany / UK / EU)",
        "yahooSymbol": "MUM.DE",
        "price": "€56.80",
        "change": "+0.75%",
        "isPositive": true,
        "note": "Germany-Headquartered Public Parent of Man and Machine Across DACH, UK & Europe",
        "url": "https://www.mum.de/en/investor-relations",
        "region": "EMEA"
    },
    {
        "name": "Capgemini",
        "ticker": "EPA: CAP (Paris, EMEA / Global)",
        "yahooSymbol": "CAP.PA",
        "price": "€192.40",
        "change": "+1.25%",
        "isPositive": true,
        "note": "France-Headquartered CAC 40 Global SI & Digital Twin Leader Across EMEA, US & APAC",
        "url": "https://investors.capgemini.com/en/",
        "region": "EMEA"
    },
    {
        "name": "Topcon Corporation",
        "ticker": "TYO: 7732 (Tokyo, APAC / Global)",
        "yahooSymbol": "7732.T",
        "price": "¥1,845",
        "change": "+0.85%",
        "isPositive": true,
        "note": "Japan-Headquartered GNSS Positioning & 3D Machine Control Across APAC, US & EMEA",
        "url": "https://global.topcon.com/invest/",
        "region": "APAC"
    },
    {
        "name": "Obayashi Corporation",
        "ticker": "TYO: 1802 (Tokyo, APAC / USA)",
        "yahooSymbol": "1802.T",
        "price": "¥1,910",
        "change": "+1.54%",
        "isPositive": true,
        "note": "APAC Tier-1 Smart Construction & Robotics Benchmark Operating in Japan, ANZ & USA",
        "url": "https://www.obayashi.co.jp/en/ir/",
        "region": "APAC"
    }
];

window.linkLibraryData = [
    {
        "category": "Global & USA Industry Publications",
        "links": [
            {
                "label": "Morningstar Equity & Market Research",
                "url": "https://www.morningstar.com/"
            },
            {
                "label": "Forbes Innovation & AI Coverage",
                "url": "https://www.forbes.com/innovation/"
            },
            {
                "label": "Engineering News-Record (ENR — USA/Global)",
                "url": "https://www.enr.com/"
            },
            {
                "label": "Construction Dive (USA News Wire)",
                "url": "https://www.constructiondive.com/"
            },
            {
                "label": "AIA Architecture Billings Index (USA ABI)",
                "url": "https://www.aia.org/resource-center/architecture-billings-index"
            },
            {
                "label": "Dodge Construction Network (USA DMI)",
                "url": "https://www.construction.com/news/"
            },
            {
                "label": "ABC Construction Backlog Indicator (USA CBI)",
                "url": "https://www.abc.org/Economics/Construction-Backlog-Indicator"
            },
            {
                "label": "FHWA BIM & Digital Delivery Portal (USA)",
                "url": "https://www.fhwa.dot.gov/construction/bim/"
            }
        ]
    },
    {
        "category": "EMEA & APAC Publications & Benchmarks",
        "links": [
            {
                "label": "AEC Magazine UK & Europe (aecmag.com)",
                "url": "https://aecmag.com/"
            },
            {
                "label": "Building UK (building.co.uk)",
                "url": "https://www.building.co.uk/"
            },
            {
                "label": "BIM+ UK & EMEA (bimplus.co.uk)",
                "url": "https://www.bimplus.co.uk/"
            },
            {
                "label": "RICS Global & UK/EU Construction Monitor",
                "url": "https://www.rics.org/news-insights/market-surveys/uk-construction-monitor"
            },
            {
                "label": "European Construction Federation (FIEC)",
                "url": "https://www.fiec.eu/"
            },
            {
                "label": "Nikkei Asia Construction & Tech (APAC)",
                "url": "https://asia.nikkei.com/Business/Technology"
            },
            {
                "label": "Australian Financial Review (AFR — ANZ)",
                "url": "https://www.afr.com/property/commercial"
            },
            {
                "label": "buildingSMART International (OpenBIM / IFC)",
                "url": "https://www.buildingsmart.org/"
            }
        ]
    },
    {
        "category": "Global Software OEM Newsrooms",
        "links": [
            {
                "label": "Autodesk Official Newsroom (Global)",
                "url": "https://adsknews.autodesk.com/"
            },
            {
                "label": "Nemetschek Group Newsroom (EMEA/Global)",
                "url": "https://www.nemetschek.com/en/news-media"
            },
            {
                "label": "Bluebeam Press & Max AI Newsroom (USA/Global)",
                "url": "https://www.bluebeam.com/company/newsroom/"
            },
            {
                "label": "Egnyte AEC Cloud Security (USA/EMEA)",
                "url": "https://www.egnyte.com/solutions/aec"
            },
            {
                "label": "Procore Investor & Global Newsroom",
                "url": "https://investors.procore.com/"
            },
            {
                "label": "Bentley Systems Newsroom (Global)",
                "url": "https://www.bentley.com/news/"
            },
            {
                "label": "Trimble / Tekla Construction Newsroom",
                "url": "https://www.trimble.com/en/news"
            },
            {
                "label": "Topcon Positioning Newsroom (APAC/US/EU)",
                "url": "https://www.topconpositioning.com/news-events"
            }
        ]
    },
    {
        "category": "ARKANCE Global, Channel & Advisory Portals",
        "links": [
            {
                "label": "ARKANCE North America (arkance.us)",
                "url": "https://www.arkance.us/"
            },
            {
                "label": "ARKANCE UK (arkance.uk)",
                "url": "https://www.arkance.uk/"
            },
            {
                "label": "ARKANCE France (arkance.fr)",
                "url": "https://www.arkance.fr/"
            },
            {
                "label": "ARKANCE ANZ (arkance.au)",
                "url": "https://www.arkance.au/"
            },
            {
                "label": "Graitec Newsroom (EMEA & North America)",
                "url": "https://graitec.com/us/news/"
            },
            {
                "label": "Symetri / Addnode Group (EMEA & USA)",
                "url": "https://www.symetri.us/insights"
            },
            {
                "label": "NTI Group (Pan-European Portal)",
                "url": "https://www.nti-group.com/home/"
            },
            {
                "label": "Capgemini & Accenture Capital Projects",
                "url": "https://www.capgemini.com/news/"
            }
        ]
    }
];

window.AI_VERTICAL_GROWTH_SERIES = {
    "all": {
        "label": "Composite All-Vertical Construction Growth (% YoY)",
        "data": [
            11.4,
            12.8,
            13.9,
            14.7,
            15.6,
            16.2
        ],
        "color": "#113E5D",
        "bg": "rgba(17, 62, 93, 0.12)",
        "caption": "Showing: Composite All-Vertical Construction Growth (+16.2% YoY)"
    },
    "Data Centers & Mfg": {
        "label": "Data Centers & Advanced Mfg Growth (% YoY)",
        "data": [
            19.5,
            21.8,
            23.4,
            25.1,
            26.8,
            28
        ],
        "color": "#F59E0B",
        "bg": "rgba(245, 158, 11, 0.16)",
        "caption": "Showing: Data Centers & Advanced Mfg (+28.0% YoY CapEx Velocity)"
    },
    "Energy & Grid": {
        "label": "Energy & Grid Modernization Growth (% YoY)",
        "data": [
            15.2,
            16.9,
            18.3,
            19.8,
            21.1,
            22
        ],
        "color": "#10B981",
        "bg": "rgba(16, 185, 129, 0.14)",
        "caption": "Showing: Energy & Grid Modernization (+22.0% YoY CapEx Velocity)"
    },
    "Civil & Transport": {
        "label": "Civil & Transport Infrastructure Growth (% YoY)",
        "data": [
            12,
            13.1,
            14,
            14.8,
            15.5,
            16
        ],
        "color": "#0284C7",
        "bg": "rgba(2, 132, 199, 0.14)",
        "caption": "Showing: Civil & Transport Infrastructure (+16.0% YoY IIJA/TEN-T Lettings)"
    },
    "Healthcare & Life Sci": {
        "label": "Healthcare & Life Sciences Growth (% YoY)",
        "data": [
            8.4,
            9.1,
            9.6,
            10.2,
            10.7,
            11
        ],
        "color": "#6366F1",
        "bg": "rgba(99, 102, 241, 0.14)",
        "caption": "Showing: Healthcare & Life Sciences (+11.0% YoY IPD & Cleanroom CapEx)"
    },
    "Commercial & Inst": {
        "label": "Commercial & Institutional Growth (% YoY)",
        "data": [
            2.1,
            2.5,
            2.9,
            3.3,
            3.7,
            4
        ],
        "color": "#64748B",
        "bg": "rgba(100, 116, 139, 0.14)",
        "caption": "Showing: Commercial & Institutional (+4.0% YoY — Tight SLOOS Credit)"
    }
};
