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
  serviceCategory: 'Emergency Water Extraction & Structural Drying',

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
  hours: '24/7 Emergency Dispatch',
  coverageRadius: 'Serving Kent, WA & Surrounding King County Communities',

  // Clean Embed Map (Zero business parameter)
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Kent,+WA+98032&t=&z=13&ie=UTF8&iwloc=&output=embed',

  // 6 Verified Services
  services: [
    {
      id: 'structural-drying',
      title: 'Water Damage Restoration & Structural Drying',
      shortDesc:
        'Full-scale structural restoration following clean, gray, or contaminated water intrusions. We dry framing, drywall, subfloors, and insulation.',
      badge: 'Full Restoration',
      features: [
        'Non-invasive thermal imaging & deep moisture tracking',
        'Commercial LGR dehumidifiers & air movers',
        'Antimicrobial treatments to inhibit secondary damage',
        'Direct moisture logging for insurance records',
      ],
      responseTime: '24/7 Immediate Dispatch',
    },
    {
      id: 'water-extraction',
      title: 'Emergency Water Removal & Extraction',
      shortDesc:
        'Immediate evacuation of standing surface water from hardwood, tile, concrete, and carpet to stop ongoing structural absorption.',
      badge: 'High-Volume Pumping',
      features: [
        'Truck-mounted high-vacuum extraction systems',
        'Submersible trash pumps for multi-inch pooling',
        'Deep carpet pad and subfloor extraction tools',
        'Rapid perimeter containment barriers',
      ],
      responseTime: '60-Minute Response in Kent',
    },
    {
      id: 'flood-cleanup',
      title: 'Flood Damage Cleanup & Storm Mitigation',
      shortDesc:
        'Comprehensive cleanup for weather-related flood intrusions, seasonal Puget Sound storm runoff, and outdoor drainage overflows.',
      badge: 'Storm Response',
      features: [
        'Rapid floodwater pumping and sediment evacuation',
        'Sanitization of mud, silt, and runoff contaminants',
        'Structural stability inspection and moisture mapping',
        'Controlled material removal where required',
      ],
      responseTime: 'Priority Storm Routing',
    },
    {
      id: 'burst-pipes',
      title: 'Burst Pipe & Plumbing Leak Cleanup',
      shortDesc:
        'Targeted mitigation for pressurized copper, PEX, water heater, and appliance supply line ruptures inside walls and ceilings.',
      badge: 'Pressurized Leaks',
      features: [
        'Overhead ceiling and wall cavity drying',
        'Thermal detection of concealed pipe spray corridors',
        'Targeted drying mats for saturated hardwood flooring',
        'Complete dry-out verification before repairs',
      ],
      responseTime: 'Fast Dispatch',
    },
    {
      id: 'sewage-cleanup',
      title: 'Sewage Backup Cleanup & Sanitization',
      shortDesc:
        'Safe Category 3 blackwater containment, extraction, and hospital-grade sanitization for drain line backflows and mainline backups.',
      badge: 'Biohazard Protocol',
      features: [
        'Strict containment barriers and negative air filtration',
        'EPA-registered antimicrobial and disinfectant treatments',
        'Odor neutralization and HEPA air scrubbing',
        'Safe, compliant handling of non-salvageable materials',
      ],
      responseTime: 'Immediate Emergency Care',
    },
    {
      id: 'crawlspace-basement',
      title: 'Basement & Crawl Space Water Extraction',
      shortDesc:
        'Specialized below-grade water removal, standing water pumping, and moisture stabilization for local foundations and crawl spaces.',
      badge: 'Below-Grade Specialists',
      features: [
        'Sump pump failure and ground water intrusion pumping',
        'Damaged vapor barrier evaluation and standing puddle removal',
        'Sub-floor framing and sill plate moisture monitoring',
        'High-volume directional air circulation',
      ],
      responseTime: 'Same-Day Dispatch',
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

  // 4 Verifiable Pillars
  pillars: [
    {
      title: 'WA Standards & Code Compliance',
      description:
        'All structural mitigation, drying protocols, and safety practices adhere strictly to Washington State standards and IICRC S500 guidelines.',
    },
    {
      title: 'Rapid Kent & South King County Dispatch',
      description:
        'Centrally dispatched from 5th Ave S in Kent, WA, ensuring rapid arrival times across Kent East Hill, West Hill, and the Green River Valley.',
    },
    {
      title: 'Transparent Pricing & Insurance Assistance',
      description:
        'Upfront evaluations and standard insurance-compatible psychrometric logging to support seamless homeowner and commercial claims.',
    },
    {
      title: 'Moisture Mapping & Root-Cause Diagnostics',
      description:
        'Non-invasive surface meters, penetrating probes, and infrared cameras verify complete equilibrium before structural sign-off.',
    },
  ],

  // 5 Real Homeowner FAQs
  faqs: [
    {
      q: 'How fast can emergency water extraction crews arrive at my Kent, WA property?',
      a: 'Emergency response units are dispatched immediately across Kent and surrounding South King County communities. Because crews operate locally within the Kent service area, arrival times typically range from 45 to 90 minutes depending on weather and road conditions.',
    },
    {
      q: 'Does homeowner insurance cover water damage restoration in Washington?',
      a: 'Most standard homeowner insurance policies cover sudden and accidental water damage, such as burst supply lines, water heater ruptures, and appliance overflows. We provide full moisture logs, photographic evidence, and itemized dry-out scopes required by adjusters.',
    },
    {
      q: 'What immediate steps should I take while waiting for the response team?',
      a: 'First, prioritize life safety: avoid standing water if electrical outlets or appliances are submerged. If safe to do so, shut off the main water valve to stop ongoing intrusion. Do not turn on standard household vacuums to extract water. Avoid entering contaminated or sagging ceiling areas.',
    },
    {
      q: 'How long does the structural drying and dehumidification process take?',
      a: 'On average, professional structural drying requires 3 to 5 days of continuous industrial dehumidification and air movement. Daily moisture readings track the drying curve of structural framing, drywall, and subfloors until dry standards are achieved.',
    },
    {
      q: 'What are the most frequent causes of water damage in the Kent area?',
      a: 'The Kent and Green River Valley region frequently experiences water damage from winter freezing temperature pipe bursts, aging plumbing fixtures, heavy Pacific Northwest storm runoff overloading perimeter drains, and ground water intrusion into lower crawl spaces.',
    },
  ] as LandingFAQ[],
} as const;
