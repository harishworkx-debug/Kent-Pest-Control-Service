export interface LandingService {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  features: string[];
  responseTime: string;
}

export interface LandingArea {
  name: string;
  county: string;
  zipCodes: string[];
  isPrimary?: boolean;
}

export interface LandingFAQ {
  q: string;
  a: string;
}

export const LANDING_DATA = {
  // Strict Service + Location Identity (ZERO company name used)
  identityTitle: 'Water Damage Restoration in Kent, WA',
  identityShort: 'Water Damage in Kent',
  serviceNiche: 'Water Damage Restoration',
  serviceCategory: 'Residential Emergency Water Extraction & Structural Drying',

  // Verified Location Facts
  city: 'Kent',
  state: 'WA',
  stateFull: 'Washington',
  county: 'King County',
  zip: '98032',
  address: '327 5th Ave S, Kent, WA 98032, United States',
  street: '327 5th Ave S',
  geo: {
    lat: 47.3788024,
    lng: -122.2390928,
  },
  kentZips: ['98030', '98031', '98032', '98035', '98042', '98064'],

  // Verified Contact Facts
  phone: '(253) 523-3921',
  phoneLink: 'tel:+12535233921',
  phoneRaw: '+12535233921',
  hours: 'Emergency Phone Routing Available (24/7)*',
  coverageRadius: 'Serving Homeowners Across Kent, WA & Surrounding King County Communities',

  // Compliance Disclaimers
  availabilityDisclaimer:
    '*24/7 Availability & Response Disclaimer: Emergency phone routing is open 24 hours a day, 7 days a week for homeowner inquiries. Actual physical response times, on-site arrival, and service dispatch are subject to local technician availability, severe regional weather events, and scheduling capacity, and are not guaranteed.',
  
  serviceProviderDisclaimer:
    'LEGAL & ADVERTISING DISCLOSURE: kent-pestcontrol.com is an independent referral and marketing service designed to assist residential homeowners in connecting with local third-party water damage restoration and mold remediation service contractors. All contractors are independent service providers, and this website does not warrant, guarantee, or assume liability for any services, estimates, or work performed. It is the sole responsibility of the homeowner to verify that any contractor hired possesses appropriate state and local licenses, insurance, and bonds required for the specific scope of work performed. Any individuals, actors, or models appearing on this website are for conceptual and illustrative purposes only and do not represent actual employees, contractors, or specific project outcomes.',

  domainBrandNotice:
    'Brand & Domain Transparency Notice: kent-pestcontrol.com operates exclusively as a local residential referral marketing portal connecting Kent, WA homeowners with trusted water damage restoration and emergency drying professionals. We are not an official government entity or trademark affiliate of any unrelated enterprise.',

  // Clean Embed Map (Zero business parameter)
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Kent,+WA+98032&t=&z=13&ie=UTF8&iwloc=&output=embed',

  // 6 Verified Residential Services (Zero commercial targeting)
  services: [
    {
      id: 'structural-drying',
      title: 'Water Damage Restoration & Structural Drying',
      shortDesc:
        'Comprehensive structural drying for residential homes and townhouses. We extract trapped moisture from drywall, flooring, subflooring, and framing.',
      badge: 'Residential Restoration',
      features: [
        'Non-invasive thermal imaging & deep moisture tracking',
        'High-capacity structural LGR dehumidifiers & air movers',
        'Antimicrobial barrier treatments for residential surfaces',
        'Direct moisture logging for homeowner insurance claims',
      ],
      responseTime: 'Immediate Dispatch Available*',
    },
    {
      id: 'water-extraction',
      title: 'Emergency Water Removal & Extraction',
      shortDesc:
        'Rapid evacuation of standing surface water from residential hardwood, tile, subflooring, and carpet to stop continuous moisture absorption.',
      badge: 'Deep Water Pumping',
      features: [
        'High-vacuum extraction systems for residential interiors',
        'Submersible water pumps for deep standing pools',
        'Carpet pad and subfloor moisture extraction tools',
        'Perimeter containment to protect unaffected rooms',
      ],
      responseTime: 'Prompt Local Response*',
    },
    {
      id: 'flood-cleanup',
      title: 'Flood Damage Cleanup & Storm Mitigation',
      shortDesc:
        'Thorough residential cleanup for heavy rainfall runoff, seasonal Puget Sound storm intrusion, and residential foundation drainage overflows.',
      badge: 'Residential Storm Cleanup',
      features: [
        'Basement and ground-level floodwater pumping',
        'Sediment, silt, and runoff debris removal',
        'Structural framing stability and moisture tracking',
        'Controlled removal of unsalvageable residential materials',
      ],
      responseTime: 'Priority Residential Routing*',
    },
    {
      id: 'burst-pipes',
      title: 'Burst Pipe & Plumbing Leak Cleanup',
      shortDesc:
        'Targeted drying for residential copper, PEX, water heater, and appliance supply line ruptures inside residential walls and ceilings.',
      badge: 'Plumbing Leak Mitigation',
      features: [
        'Ceiling cavity and residential interior wall drying',
        'Thermal detection of hidden water spray corridors',
        'Specialized drying setups for saturated residential flooring',
        'Complete dry-out verification for homeowner peace of mind',
      ],
      responseTime: 'Rapid Home Response*',
    },
    {
      id: 'sewage-cleanup',
      title: 'Sewage Backup Cleanup & Sanitization',
      shortDesc:
        'Safe Category 3 blackwater containment, extraction, and thorough sanitization for residential bathroom and drain line backups.',
      badge: 'Residential Sanitization',
      features: [
        'Strict containment barriers to isolate living spaces',
        'EPA-registered antimicrobial and disinfectant treatments',
        'Odor neutralization and HEPA air scrubbing filtration',
        'Safe, compliant removal of damaged residential soft goods',
      ],
      responseTime: 'Urgent Home Care*',
    },
    {
      id: 'crawlspace-basement',
      title: 'Basement & Crawl Space Water Extraction',
      shortDesc:
        'Specialized below-grade water pumping, standing water evacuation, and moisture stabilization for Kent residential crawl spaces and basements.',
      badge: 'Home Foundation Care',
      features: [
        'Residential sump pump failure and groundwater pumping',
        'Damp vapor barrier inspection and standing puddle removal',
        'Subfloor wood joist and sill plate moisture monitoring',
        'High-velocity directional air circulation for crawl spaces',
      ],
      responseTime: 'Timely Residential Dispatch*',
    },
  ] as LandingService[],

  // 10 Genuinely Served Service Areas (Kent Primary + 9 Surrounding)
  serviceAreas: [
    {
      name: 'Kent, WA',
      county: 'South King County',
      zipCodes: ['98030', '98031', '98032', '98035', '98042', '98064'],
      isPrimary: true,
    },
    {
      name: 'Renton, WA',
      county: 'King County',
      zipCodes: ['98055', '98056', '98057', '98058', '98059'],
    },
    {
      name: 'Auburn, WA',
      county: 'King / Pierce County',
      zipCodes: ['98001', '98002', '98092'],
    },
    {
      name: 'Covington, WA',
      county: 'King County',
      zipCodes: ['98042'],
    },
    {
      name: 'Federal Way, WA',
      county: 'King County',
      zipCodes: ['98003', '98023', '98063'],
    },
    {
      name: 'Tukwila, WA',
      county: 'King County',
      zipCodes: ['98168', '98188'],
    },
    {
      name: 'SeaTac, WA',
      county: 'King County',
      zipCodes: ['98148', '98158', '98188'],
    },
    {
      name: 'Des Moines, WA',
      county: 'King County',
      zipCodes: ['98198'],
    },
    {
      name: 'Maple Valley, WA',
      county: 'King County',
      zipCodes: ['98038'],
    },
    {
      name: 'Burien, WA',
      county: 'King County',
      zipCodes: ['98146', '98166'],
    },
  ] as LandingArea[],

  // 4 Verifiable Pillars (Removed unverifiable certification claims)
  pillars: [
    {
      title: 'Structured Residential Drying Standards',
      description:
        'All residential water mitigation and structural drying protocols follow disciplined psychrometric principles to protect home framing and drywall.',
    },
    {
      title: 'Kent & South King County Dispatch',
      description:
        'Centrally routed from 5th Ave S in Kent, WA, facilitating timely dispatch across Kent East Hill, West Hill, and the Green River Valley.',
    },
    {
      title: 'Transparent Pricing & Insurance Assistance',
      description:
        'Upfront evaluations and standard insurance-compatible psychrometric readings to support seamless homeowner insurance claim filing.',
    },
    {
      title: 'Thermal Moisture Mapping & Diagnostics',
      description:
        'Non-invasive surface meters, penetrating probes, and infrared cameras verify structural equilibrium before restoration completion.',
    },
  ],

  // 5 Real Homeowner FAQs
  faqs: [
    {
      q: 'How fast can emergency water extraction crews arrive at my Kent, WA home?',
      a: 'Emergency phone routing is available 24/7 to connect homeowners with local response providers. Because technicians operate locally within the Kent service area, arrival times typically range from 45 to 90 minutes, subject to local technician availability, severe regional weather, and traffic conditions.',
    },
    {
      q: 'Does homeowner insurance cover residential water damage restoration in Washington?',
      a: 'Most standard residential homeowner insurance policies cover sudden and accidental water damage, such as burst plumbing supply lines, water heater ruptures, and appliance overflows. Local providers supply complete moisture logs, photographic evidence, and itemized dry-out scopes required by insurance adjusters.',
    },
    {
      q: 'What immediate steps should a homeowner take while waiting for the response team?',
      a: 'First, prioritize life safety: avoid standing water if electrical outlets or appliances are submerged. If safe to do so, shut off the main water valve to stop ongoing intrusion. Do not turn on household vacuum cleaners to extract water. Avoid entering rooms with sagging ceilings or damaged drywall.',
    },
    {
      q: 'How long does the structural drying and dehumidification process take for a home?',
      a: 'On average, professional residential structural drying requires 3 to 5 days of continuous industrial dehumidification and air movement. Daily moisture readings track the drying curve of structural framing, drywall, and subfloors until dry equilibrium standards are achieved.',
    },
    {
      q: 'What are the most frequent causes of residential water damage in the Kent area?',
      a: 'The Kent and Green River Valley region frequently experiences residential water damage from winter freezing temperature pipe bursts, aging plumbing fixtures, heavy Pacific Northwest storm runoff overloading perimeter drains, and ground water intrusion into lower crawl spaces.',
    },
  ] as LandingFAQ[],
} as const;
