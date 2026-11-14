export const BUSINESS = {
  name: 'Kent Pest Control Service',
  phone: '(253) 523-3921',
  phoneLink: 'tel:+12535233921',
  phoneRaw: '+12535233921',
  address: '327 5th Ave S, Kent, WA 98032, United States',
  addressStreet: '327 5th Ave S',
  addressCity: 'Kent',
  addressState: 'WA',
  addressZip: '98032',
  addressCountry: 'US',
  website: 'https://www.kent-pestcontrol.com/',
  googleMaps: 'https://maps.app.goo.gl/LXcRpvdV2Lu5Nude6',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.6985160038953!2d-122.23909279999998!3d47.3788024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b65a049076fd%3A0x62b064cc70007bb6!2sKent%20Pest%20Control%20Service!5e0!3m2!1sen!2sin!4v1794643014499!5m2!1sen!2sin',
  category: 'Water Damage Restoration Service',
  serviceType: 'Water Damage Restoration',
  primaryLocation: 'Kent, WA',
  primaryLocationSlug: 'kent-wa',
  geo: {
    latitude: 47.3788024,
    longitude: -122.2390928,
  },
} as const;

export interface ServiceInfo {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  problems: string[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  relatedServiceSlugs: string[];
}

export interface ServiceAreaInfo {
  slug: string;
  urlSlug: string;
  name: string;
  shortName: string;
  description: string;
  geo: { lat: number; lng: number };
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    shortName: 'Water Damage Restoration',
    description:
      'Complete water damage restoration for homes and businesses in Kent, WA — from initial assessment through final repairs.',
    longDescription:
      'Water damage can strike at any time, whether from a burst pipe, appliance failure, roof leak, or severe weather. Kent Pest Control Service provides comprehensive water damage restoration services to property owners throughout Kent and the surrounding Washington communities. Our restoration process addresses every phase of water damage — from water removal and structural drying to repairs and final restoration. We work to minimize further damage, reduce the risk of mold growth, and help return your property to its pre-loss condition.',
    image: 'https://images.pexels.com/photos/5317154/pexels-photo-5317154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Interior of a home undergoing restoration after water damage',
    problems: [
      'Burst or leaking pipes causing water to spread across floors and walls',
      'Appliance failures such as washing machine or water heater leaks',
      'Roof leaks allowing water to enter through ceilings and attics',
      'Storm-driven rain and weather events causing structural water intrusion',
      'Sewage backups contaminating living spaces with hazardous water',
      'Long-term hidden leaks leading to structural weakening and mold growth',
    ],
    process: [
      {
        title: 'Initial Assessment',
        description:
          'We assess the full extent of water damage, identifying the source, water category, and all affected areas including hidden moisture behind walls and under floors.',
      },
      {
        title: 'Water Removal',
        description:
          'Standing water is extracted using professional-grade pumps and vacuums to remove water quickly and prevent further spread.',
      },
      {
        title: 'Structural Drying',
        description:
          'Industrial air movers and dehumidifiers are deployed to dry walls, floors, and building materials thoroughly, monitored daily until moisture targets are met.',
      },
      {
        title: 'Cleaning & Sanitizing',
        description:
          'Affected areas are cleaned and sanitized to remove contaminants and inhibit mold growth, protecting indoor air quality.',
      },
      {
        title: 'Restoration & Repair',
        description:
          'Damaged materials are repaired or replaced — drywall, flooring, insulation, and finishes — to return your property to its pre-loss condition.',
      },
    ],
    faqs: [
      {
        q: 'How quickly should I call after discovering water damage?',
        a: 'It is best to call as soon as you discover water damage. The faster water is removed and drying begins, the less damage occurs. Waiting even a few hours can allow water to seep deeper into building materials and increase the risk of mold. Call Kent Pest Control Service at (253) 523-3921 to discuss your situation.',
      },
      {
        q: 'Can water damage be hidden behind walls?',
        a: 'Yes. Water often travels behind wall cavities, under flooring, and into insulation where it is not visible. Professional moisture detection equipment helps identify all affected areas so that hidden moisture does not lead to mold growth or structural damage later.',
      },
      {
        q: 'How long does the water damage restoration process take?',
        a: 'The timeline depends on the extent of damage, the amount of water, and the materials affected. Water removal may take hours, while structural drying typically takes several days. Full restoration including repairs may take longer. Call us to discuss the specifics of your situation.',
      },
    ],
    relatedServiceSlugs: ['water-removal', 'structural-drying', 'flood-damage-cleanup', 'water-damage-repair'],
  },
  {
    slug: 'water-removal',
    name: 'Water Removal',
    shortName: 'Water Removal',
    description:
      'Rapid water removal and extraction services to clear standing water from your property and stop damage from spreading.',
    longDescription:
      'When water invades your home or business, fast removal is critical. Kent Pest Control Service provides professional water removal services using industrial-grade extraction equipment designed to handle everything from small leaks to significant flooding. The goal is simple: remove standing water as quickly as possible to prevent it from soaking deeper into floors, walls, and furnishings. Our team serves property owners in Kent and nearby Washington communities.',
    image: 'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Professional water extraction equipment removing water from a carpeted floor',
    problems: [
      'Standing water from burst pipes or plumbing failures flooding rooms',
      'Appliance leaks spreading water across kitchens, laundry rooms, or basements',
      'Stormwater entering homes through doors, windows, or foundation cracks',
      'Overflowing tubs, sinks, or toilets causing water to pool on floors',
      'Water seeping under flooring and into subfloor materials',
    ],
    process: [
      {
        title: 'Rapid Response',
        description:
          'Call (253) 523-3921 and explain the situation. We discuss the scope of water present and determine the appropriate response.',
      },
      {
        title: 'Water Extraction',
        description:
          'Powerful extraction units remove standing water from floors, carpets, and hard surfaces — pulling water out before it can penetrate deeper.',
      },
      {
        title: 'Moisture Survey',
        description:
          'After visible water is removed, we check for remaining moisture in walls, floors, and building materials that may require further drying.',
      },
      {
        title: 'Equipment Setup',
        description:
          'Air movers and dehumidifiers are positioned to begin the structural drying phase, continuing the work started by extraction.',
      },
    ],
    faqs: [
      {
        q: 'How fast can water be removed from my property?',
        a: 'Water removal begins as soon as our team arrives on-site. The extraction equipment we use can remove significant volumes of water efficiently. The key is calling quickly — the sooner we start, the less damage occurs. Call (253) 523-3921 to discuss your situation.',
      },
      {
        q: 'Is water removal different from water damage restoration?',
        a: 'Water removal is the first and most urgent step — extracting standing water from the property. Full water damage restoration includes water removal plus structural drying, cleaning, and repairs. Water removal alone is not sufficient; thorough drying must follow to prevent mold and further damage.',
      },
      {
        q: 'Can I remove water myself with a shop vacuum?',
        a: 'Consumer-grade equipment can handle very small spills, but for any significant water intrusion, professional extraction equipment is needed. Professional extractors remove water more completely and faster, and a moisture survey ensures hidden water is not left behind.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-extraction', 'structural-drying', 'flood-damage-cleanup'],
  },
  {
    slug: 'water-extraction',
    name: 'Water Extraction',
    shortName: 'Water Extraction',
    description:
      'Professional water extraction services using industrial equipment to remove water from carpets, flooring, and building materials.',
    longDescription:
      'Water extraction goes beyond simple water removal — it targets water that has been absorbed into carpets, padding, subfloors, and building materials. Kent Pest Control Service uses specialized extraction tools that pull water from deep within materials, not just the surface. This thorough extraction is essential before drying can be effective. We serve the Kent, WA area and surrounding communities.',
    image: 'https://images.pexels.com/photos/4030028/pexels-photo-4030028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Empty room with carpet flooring being prepared for water extraction',
    problems: [
      'Water absorbed into carpet and padding that surface removal cannot address',
      'Moisture trapped under hardwood and laminate flooring',
      'Water wicking up drywall and insulation inside wall cavities',
      'Saturated subfloor materials that can weaken and develop mold',
      'Water pooling in low spots and under heavy furniture or cabinetry',
    ],
    process: [
      {
        title: 'Assessment & Categorization',
        description:
          'We identify the water source and category (clean, gray, or black water) to determine the appropriate extraction approach and safety measures.',
      },
      {
        title: 'Deep Extraction',
        description:
          'Weighted extraction tools press water out of carpet and padding, while specialized attachments pull moisture from flooring and hard surfaces.',
      },
      {
        title: 'Material Evaluation',
        description:
          'After extraction, we evaluate which materials can be saved through drying and which may need removal and replacement due to contamination or damage.',
      },
      {
        title: 'Drying Transition',
        description:
          'With excess water extracted, dehumidifiers and air movers are deployed to remove remaining moisture from the structure.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between water removal and water extraction?',
        a: 'Water removal typically refers to clearing visible standing water from surfaces. Water extraction goes deeper — it targets water absorbed into carpets, padding, subfloors, and building materials using specialized equipment. Both are important steps in the full restoration process.',
      },
      {
        q: 'Will my carpet need to be replaced after water extraction?',
        a: 'It depends on the water category and how long the carpet was wet. Clean water situations often allow carpet to be saved with proper extraction and drying. If the water was contaminated (gray or black water), or if the carpet was wet for an extended period, replacement may be recommended. Call us to discuss your specific situation.',
      },
      {
        q: 'How do you know when extraction is complete?',
        a: 'We use moisture meters and thermal imaging to check moisture levels in all affected materials. Extraction is considered complete when no more water can be pulled from materials and remaining moisture can be handled by dehumidification equipment.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-removal', 'structural-drying', 'water-damage-repair'],
  },
  {
    slug: 'structural-drying',
    name: 'Structural Drying',
    shortName: 'Structural Drying',
    description:
      'Professional structural drying using industrial dehumidifiers and air movers to remove moisture from walls, floors, and framing.',
    longDescription:
      'Structural drying is the critical phase that follows water extraction. Even after visible water is removed, building materials like drywall, wood framing, insulation, and subfloors retain significant moisture. Kent Pest Control Service deploys commercial-grade dehumidifiers and high-velocity air movers to drive this moisture out of the structure. Daily monitoring ensures drying progresses properly until moisture content returns to acceptable levels, preventing mold growth and structural deterioration.',
    image: 'https://images.pexels.com/photos/4030033/pexels-photo-4030033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Industrial drying equipment set up in a room with carpet flooring and ceiling fan',
    problems: [
      'Moisture trapped inside wall cavities after water extraction is complete',
      'Wet wood framing and subflooring that can warp, swell, or rot',
      'Saturated drywall that softens, sags, or becomes a breeding ground for mold',
      'Damp insulation that loses effectiveness and harbors microbial growth',
      'Hidden moisture in crawl spaces and attics that goes unnoticed',
    ],
    process: [
      {
        title: 'Moisture Mapping',
        description:
          'We map moisture levels across all affected areas using professional meters, establishing baseline readings to track drying progress.',
      },
      {
        title: 'Equipment Deployment',
        description:
          'Air movers are positioned to create airflow across wet surfaces, while dehumidifiers pull moisture from the air. The combination accelerates evaporation from building materials.',
      },
      {
        title: 'Daily Monitoring',
        description:
          'Moisture levels are checked daily and equipment is repositioned as needed. Drying continues until all materials reach target moisture content.',
      },
      {
        title: 'Final Verification',
        description:
          'Once moisture readings confirm the structure is dry, equipment is removed and the area is ready for cleaning, repair, and restoration.',
      },
    ],
    faqs: [
      {
        q: 'How long does structural drying take?',
        a: 'Structural drying typically takes 3 to 5 days depending on the extent of water damage, the materials involved, and ambient conditions. Some situations may dry faster, while others — particularly those with deep saturation — may take longer. Daily monitoring ensures the process is on track.',
      },
      {
        q: 'Why can\'t I just open windows and use fans to dry my home?',
        a: 'Household fans and open windows cannot match the drying power of commercial dehumidifiers and air movers. More importantly, without moisture monitoring, you cannot know whether hidden moisture remains inside walls or under floors. Incomplete drying leads to mold growth and structural damage that may not appear until weeks later.',
      },
      {
        q: 'What happens if structural drying is not done properly?',
        a: 'Residual moisture in building materials creates ideal conditions for mold growth, which can begin within 24-48 hours. It can also cause wood to warp, drywall to deteriorate, and structural components to weaken. Proper structural drying with professional monitoring is essential to prevent these long-term problems.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-extraction', 'water-damage-repair', 'flood-damage-cleanup'],
  },
  {
    slug: 'flood-damage-cleanup',
    name: 'Flood Damage Cleanup',
    shortName: 'Flood Damage Cleanup',
    description:
      'Flood damage cleanup services for properties affected by stormwater, overflowing rivers, or severe weather events in Kent, WA.',
    longDescription:
      'Flood damage presents unique challenges compared to typical water damage. Floodwater often carries contaminants, debris, and sediment that require specialized cleanup approaches. Kent Pest Control Service provides flood damage cleanup for properties in Kent and surrounding Washington communities affected by stormwater intrusion, heavy rainfall, overflowing waterways, and other flood events. Our cleanup process addresses water removal, contamination, debris clearing, and structural drying in one coordinated effort.',
    image: 'https://images.pexels.com/photos/28447774/pexels-photo-28447774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Suburban house surrounded by floodwater after heavy rain',
    problems: [
      'Stormwater entering homes through doors, windows, and foundation openings',
      'Contaminated floodwater carrying mud, debris, and bacteria into living spaces',
      'Saturated building materials requiring removal due to contamination',
      'Electrical systems compromised by floodwater contact',
      'Mud and sediment deposited throughout the property requiring thorough cleaning',
    ],
    process: [
      {
        title: 'Safety Assessment',
        description:
          'Before cleanup begins, we assess safety concerns including electrical hazards, structural integrity, and contamination levels to ensure the site is safe to work in.',
      },
      {
        title: 'Water & Debris Removal',
        description:
          'Floodwater and accumulated debris, mud, and sediment are removed from the property using extraction equipment and manual clearing.',
      },
      {
        title: 'Contaminated Material Removal',
        description:
          'Porous materials that have absorbed contaminated floodwater — such as carpet, padding, drywall, and insulation — are removed and disposed of properly.',
      },
      {
        title: 'Cleaning & Sanitizing',
        description:
          'All remaining structural surfaces are thoroughly cleaned and sanitized to remove contaminants and inhibit mold growth.',
      },
      {
        title: 'Structural Drying',
        description:
          'The structure is dried using dehumidifiers and air movers, with moisture monitored until all materials reach safe levels.',
      },
    ],
    faqs: [
      {
        q: 'Is floodwater more dangerous than regular water damage?',
        a: 'Yes. Floodwater, especially from external sources like storms or overflowing waterways, is typically classified as black water — the most contaminated category. It can carry bacteria, chemicals, sewage, and debris. This is why flood damage cleanup requires removing and replacing porous materials that absorbed the contaminated water, rather than just drying them.',
      },
      {
        q: 'What materials need to be removed after flood damage?',
        a: 'Porous materials that have absorbed contaminated floodwater generally need to be removed and replaced. This typically includes carpet, padding, saturated drywall, insulation, and any upholstered items that were submerged. Non-porous materials can often be cleaned and sanitized. The specifics depend on the contamination level and extent of contact.',
      },
      {
        q: 'Can flood damage lead to mold problems?',
        a: 'Absolutely. The combination of moisture and organic contaminants in floodwater creates ideal mold growth conditions. Mold can begin growing within 24-48 hours. Prompt flood damage cleanup — including water removal, contaminated material removal, cleaning, and thorough drying — is essential to prevent mold colonization.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-removal', 'structural-drying', 'water-damage-repair'],
  },
  {
    slug: 'water-damage-repair',
    name: 'Water Damage Repair',
    shortName: 'Water Damage Repair',
    description:
      'Water damage repair services to restore damaged drywall, flooring, ceilings, and structural elements after water intrusion.',
    longDescription:
      'After water is removed and the structure is dried, the repair phase begins. Water damage can compromise drywall, flooring, ceilings, baseboards, insulation, and even structural framing. Kent Pest Control Service provides water damage repair services to restore these elements and return your property to its pre-loss condition. We handle everything from minor repairs to more extensive reconstruction, serving Kent and surrounding Washington communities.',
    image: 'https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Professional contractor installing new drywall during water damage repair',
    problems: [
      'Drywall that has softened, sagged, or developed water stains after water damage',
      'Warped or buckled hardwood and laminate flooring from prolonged moisture exposure',
      'Ceiling damage from upper-floor or roof leaks causing sagging and discoloration',
      'Rotting or weakened structural framing from sustained moisture contact',
      'Damaged baseboards, trim, and door frames swollen from water absorption',
    ],
    process: [
      {
        title: 'Damage Assessment',
        description:
          'We inspect all areas affected by water damage and identify which materials need repair versus replacement, providing a clear scope of work.',
      },
      {
        title: 'Material Removal',
        description:
          'Damaged materials that cannot be saved — compromised drywall, warped flooring, deteriorated insulation — are carefully removed.',
      },
      {
        title: 'Structural Repairs',
        description:
          'Framing, subfloors, and structural elements are repaired or reinforced as needed before new finishes are installed.',
      },
      {
        title: 'Finish Installation',
        description:
          'New drywall, flooring, trim, and other finishes are installed to match the surrounding area and restore the property to its pre-loss condition.',
      },
    ],
    faqs: [
      {
        q: 'Does water-damaged drywall always need to be replaced?',
        a: 'Not always. Drywall with minor water exposure that was dried quickly may only need repainting. However, drywall that has absorbed significant moisture, become soft or saggy, or shows signs of mold growth typically needs to be cut out and replaced. We assess each area individually.',
      },
      {
        q: 'Can water-damaged hardwood floors be saved?',
        a: 'In many cases, yes. Hardwood floors that were exposed to water for a short period can often be saved through proper drying and refinishing. However, if the flooring has warped, buckled, or cupped significantly, replacement of the affected boards may be necessary. The key is how quickly drying was initiated.',
      },
      {
        q: 'How long does water damage repair take?',
        a: 'Repair timelines vary widely depending on the extent of damage. Minor repairs such as replacing a section of drywall may take a day or two. More extensive repairs involving multiple rooms, flooring replacement, and structural work will take longer. Call (253) 523-3921 to discuss your situation.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'structural-drying', 'flood-damage-cleanup', 'water-extraction'],
  },
  {
    slug: 'sewage-backup-cleanup',
    name: 'Sewage Backup Cleanup',
    shortName: 'Sewage Cleanup',
    description:
      'Emergency sewage backup cleanup, hazardous waste removal, and deep sanitization for properties in Kent, WA.',
    longDescription:
      'Sewage backups introduce hazardous black water containing harmful pathogens, bacteria, and viruses into living and working spaces. Kent Pest Control Service provides professional sewage backup cleanup and decontamination across Kent, WA and nearby Washington communities. We quickly contain the contamination, safely extract toxic wastewater, dispose of non-salvageable porous items, apply hospital-grade disinfectants, and complete structural drying to make your building safe once again.',
    image: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Restoration technician in protective gear cleaning and sanitizing contaminated area after sewage backup',
    problems: [
      'Main sewer line backups causing raw wastewater to overflow into bathrooms and basements',
      'Severe toilet or drain overflows spreading contaminated black water across floors',
      'Harmful airborne biohazard contaminants and persistent sewer odors spreading through ductwork',
      'Porous materials like carpet, padding, and drywall saturated with dangerous bacteria',
      'High risk of illness and disease from exposure to sewage-borne microorganisms',
      'Subfloor and wall cavity contamination requiring controlled removal and antimicrobial sanitization',
    ],
    process: [
      {
        title: 'Containment & Safety',
        description:
          'We establish containment barriers and utilize full personal protective equipment (PPE) to isolate hazardous biohazards and prevent pathogen spread.',
      },
      {
        title: 'Sewage Extraction',
        description:
          'Standing wastewater and hazardous sewage solids are extracted using specialized pumping and vacuum equipment following environmental safety protocols.',
      },
      {
        title: 'Contaminated Material Removal',
        description:
          'Porous materials that cannot be safely disinfected — such as soaked carpet, padding, and affected drywall sections — are removed and safely disposed of.',
      },
      {
        title: 'Deep Disinfection & Sanitization',
        description:
          'Hospital-grade EPA-registered disinfectants and antimicrobial agents are applied to all affected framing, concrete, and hard surfaces.',
      },
      {
        title: 'Dehumidification & Structural Drying',
        description:
          'Industrial dehumidifiers and air movers run continuously with moisture meter tracking to restore safe moisture levels throughout the structure.',
      },
    ],
    faqs: [
      {
        q: 'Is sewage backup considered a health emergency?',
        a: 'Yes. Sewage water is classified as Category 3 (black water) and contains hazardous bacteria, parasites, and chemical contaminants. Avoid direct contact and call Kent Pest Control Service at (253) 523-3921 for immediate professional cleanup.',
      },
      {
        q: 'Can carpets or drywall be saved after a sewage spill?',
        a: 'In almost all cases, porous materials like carpets, padding, and low-wall drywall that absorb raw sewage cannot be completely sanitized and must be removed and replaced for health safety. Non-porous surfaces like tile and concrete can be thoroughly disinfected.',
      },
      {
        q: 'How fast should sewage cleanup begin?',
        a: 'Immediately. Bacteria and microbes multiply rapidly within hours of a sewage backup. The faster our team begins extraction and sanitization, the less damage and biohazard risk your property will face.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-removal', 'flood-damage-cleanup', 'structural-drying'],
  },
  {
    slug: 'basement-flood-cleanup',
    name: 'Basement Flood Cleanup',
    shortName: 'Basement Flood Cleanup',
    description:
      'Rapid basement water extraction, sump pump failure remediation, and structural drying in Kent, WA.',
    longDescription:
      'Basements in the Pacific Northwest frequently face flooding from heavy winter rains, failed sump pumps, foundation seepage, and plumbing failures. Kent Pest Control Service provides comprehensive basement flood cleanup across Kent, WA and surrounding communities. We extract standing water, thoroughly dry concrete slabs and foundation framing, prevent moisture accumulation behind basement walls, and protect your home from subterranean mold growth.',
    image: 'https://images.pexels.com/photos/4030026/pexels-photo-4030026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Flooded basement floor undergoing professional water extraction and structural drying',
    problems: [
      'Sump pump failure during prolonged rainstorms causing rapid basement water accumulation',
      'Hydrostatic pressure pushing groundwater through foundation wall cracks and expansion joints',
      'Basement water heater or washing machine supply hose failure flooding the lower level',
      'Excess moisture pooling under finished basement subflooring and vinyl plank flooring',
      'Persistent dampness, high subterranean humidity, and musty basement odors',
      'Moisture wicking into framing studs, perimeter drywall, and basement insulation',
    ],
    process: [
      {
        title: 'Rapid Water Extraction',
        description:
          'Heavy-duty submersible extractors and high-volume suction units remove pooled groundwater and standing water from the basement floor.',
      },
      {
        title: 'Moisture Detection & Mapping',
        description:
          'Thermal cameras and pinless moisture meters identify moisture trapped in concrete slabs, foundation perimeters, and wall cavities.',
      },
      {
        title: 'Material Removal & Salvage Assessment',
        description:
          'We inspect carpets, baseboards, and drywall to determine what can be dried in place and what damaged elements require controlled removal.',
      },
      {
        title: 'Specialized Concrete & Structural Drying',
        description:
          'Industrial low-grain refrigerant (LGR) dehumidifiers and high-velocity air movers draw moisture out of dense concrete pores and wood framing.',
      },
      {
        title: 'Antimicrobial Protection & Odor Control',
        description:
          'EPA-registered antimicrobial treatments are applied to prevent mold colonization and eliminate subterranean damp odors.',
      },
    ],
    faqs: [
      {
        q: 'What should I do first if my basement floods?',
        a: 'First, check for electrical hazards — do not enter standing water if electrical outlets or appliances are submerged. Shut off main power if safely accessible, then call Kent Pest Control Service at (253) 523-3921 for rapid water extraction.',
      },
      {
        q: 'Why do basements take longer to dry than upper levels?',
        a: 'Basements have limited natural ventilation, high ambient humidity, and are built with concrete, which retains moisture deep within its pores. Specialized high-capacity commercial dehumidifiers are required to pull moisture out thoroughly.',
      },
      {
        q: 'Will my flooded basement develop mold?',
        a: 'Mold can begin forming within 24 to 48 hours of water intrusion. Fast extraction and aggressive commercial drying keep moisture levels below the threshold where mold spores can germinate.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-extraction', 'structural-drying', 'flood-damage-cleanup'],
  },
  {
    slug: 'burst-pipe-water-cleanup',
    name: 'Burst Pipe Water Cleanup',
    shortName: 'Burst Pipe Cleanup',
    description:
      'Fast-response water removal and structural drying for frozen or burst plumbing pipes in Kent, WA.',
    longDescription:
      'A burst or ruptured water pipe can release hundreds of gallons of pressurized water in a matter of minutes, soaking ceilings, walls, and flooring across multiple floors. Kent Pest Control Service specializes in burst pipe water cleanup in Kent, WA and nearby areas. Whether caused by winter freeze-ups, elevated water pressure, or aging pipe materials, our team stops further spread, extracts standing water, dries hidden cavities, and restores your property.',
    image: 'https://images.pexels.com/photos/5691653/pexels-photo-5691653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Plumbing pipe burst repair and wall cavity drying in a residential property',
    problems: [
      'Pipes freezing and bursting during cold snaps inside exterior walls, attics, or crawl spaces',
      'Sudden high-pressure plumbing line breaks discharging large volumes of water across rooms',
      'Water penetrating multiple levels from upstairs bathroom or supply line ruptures',
      'Collapsed ceiling drywall and saturated insulation from overhead pipe failures',
      'Hidden moisture migrating inside wall cavities, behind cabinets, and beneath hardwood floors',
      'Swelling baseboards, door frames, and buckled flooring caused by pressurized water exposure',
    ],
    process: [
      {
        title: 'Emergency Water Containment',
        description:
          'We verify the main water shutoff is engaged and locate the pipe rupture point to halt incoming water flow immediately.',
      },
      {
        title: 'Intense Water Extraction',
        description:
          'High-power extraction units pull water from carpet, hardwood, and tile before deeper subfloor saturation occurs.',
      },
      {
        title: 'Cavity & Wall Assembly Drying',
        description:
          'Specialized cavity drying systems and injectidry units circulate warm, dry air into enclosed wall and ceiling spaces.',
      },
      {
        title: 'Daily Thermal Monitoring',
        description:
          'Infrared thermal cameras and moisture meters monitor hidden drying progress behind drywall and under cabinets every day.',
      },
      {
        title: 'Surface Restoration & Repairs',
        description:
          'Damaged drywall, insulation, and trim are prepped for repair and replacement to return the home to pre-loss condition.',
      },
    ],
    faqs: [
      {
        q: 'How much water can a burst pipe release?',
        a: 'A typical supply line pipe burst can discharge 4 to 8 gallons per minute under residential pressure — translating to hundreds of gallons within an hour. Rapid water extraction is vital to minimize structural damage.',
      },
      {
        q: 'Can drywall and wall cavities be dried without tearing everything down?',
        a: 'If water is extracted promptly and the water source is clean, specialized wall cavity drying equipment can often dry framing and drywall in place without requiring full demolition.',
      },
      {
        q: 'Why do pipes burst in the Kent, WA region?',
        a: 'Sub-freezing temperatures in winter freeze water within uninsulated or exterior-facing pipes. The expanding ice creates intense pressure that ruptures copper, PEX, or PVC lines.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-removal', 'water-damage-repair', 'structural-drying'],
  },
  {
    slug: 'commercial-water-damage',
    name: 'Commercial Water Damage Restoration',
    shortName: 'Commercial Restoration',
    description:
      'Large-scale commercial water extraction and drying to minimize downtime for businesses in Kent, WA.',
    longDescription:
      'Water emergencies in commercial properties disrupt daily operations, damage valuable inventory, and create safety concerns for tenants and employees. Kent Pest Control Service delivers rapid, professional commercial water damage restoration tailored for businesses, industrial warehouses, offices, and retail facilities in Kent, WA and the surrounding Puget Sound corridor. We work around the clock to contain damage, dry large open spaces, and get your business operational.',
    image: 'https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Commercial warehouse and industrial facility undergoing commercial water damage restoration',
    problems: [
      'Commercial fire sprinkler system malfunctions or pipe breaks discharging thousands of gallons',
      'Roof failure or HVAC condensation line overflows impacting retail and office areas',
      'Multi-story commercial plumbing line leaks affecting multiple corporate tenant suites',
      'Flooding across large warehouse, showroom, or distribution center concrete floors',
      'Potential damage to sensitive electronic equipment, office documents, and commercial inventory',
      'Revenue and operational losses caused by mandatory business downtime during water emergencies',
    ],
    process: [
      {
        title: 'Commercial Assessment & Containment',
        description:
          'We assess facility impact, establish containment zones to protect unaffected business areas, and prioritize critical assets.',
      },
      {
        title: 'High-Volume Extraction',
        description:
          'Industrial trailer-mounted and high-capacity extractors rapidly clear massive square footage of standing water.',
      },
      {
        title: 'Asset & Inventory Protection',
        description:
          'We protect office equipment, industrial machinery, and merchandise using containment barriers and climate stabilization.',
      },
      {
        title: 'Large-Scale Structural Drying',
        description:
          'Industrial desiccant and high-capacity LGR dehumidifiers dry commercial structures, concrete slabs, and subfloors efficiently.',
      },
      {
        title: 'Sanitization & Re-occupancy Clearance',
        description:
          'All affected surfaces are disinfected and tested to verify dry standards and air quality before employees and customers return.',
      },
    ],
    faqs: [
      {
        q: 'Can our business remain open during commercial water restoration?',
        a: 'In many situations, yes. We utilize containment barriers and negative air scrubbers to isolate damaged areas, allowing your business to maintain operations safely in unaffected areas.',
      },
      {
        q: 'Do you service large industrial facilities in the Kent Valley?',
        a: 'Yes. Kent has major warehouse, logistics, and manufacturing hubs. Our commercial equipment is specifically scaled to handle large-scale water extraction and drying across extensive square footage.',
      },
      {
        q: 'How fast can you mobilize for a commercial water emergency?',
        a: 'We understand that commercial downtime directly costs money. Call (253) 523-3921 right away to speak with our team and deploy emergency commercial restoration equipment.',
      },
    ],
    relatedServiceSlugs: ['water-damage-restoration', 'water-removal', 'structural-drying', 'flood-damage-cleanup'],
  },
];

export const SERVICE_AREAS: ServiceAreaInfo[] = [
  {
    slug: 'kent-wa',
    urlSlug: 'kent-wa',
    name: 'Kent, WA',
    shortName: 'Kent',
    description:
      'As a Kent-based business, we provide water damage restoration services directly to homes and businesses throughout the city of Kent, Washington.',
    geo: { lat: 47.3788, lng: -122.2391 },
  },
  {
    slug: 'renton-wa',
    urlSlug: 'renton-wa',
    name: 'Renton, WA',
    shortName: 'Renton',
    description:
      'We extend our water damage restoration services to property owners in Renton, WA, a neighboring community just north of Kent.',
    geo: { lat: 47.4828, lng: -122.2031 },
  },
  {
    slug: 'auburn-wa',
    urlSlug: 'auburn-wa',
    name: 'Auburn, WA',
    shortName: 'Auburn',
    description:
      'Our water damage restoration services are available to homes and businesses in Auburn, WA, located just south of Kent.',
    geo: { lat: 47.3073, lng: -122.2285 },
  },
  {
    slug: 'covington-wa',
    urlSlug: 'covington-wa',
    name: 'Covington, WA',
    shortName: 'Covington',
    description:
      'Covington, WA residents and businesses can access our water damage restoration services for their property restoration needs.',
    geo: { lat: 47.3612, lng: -122.1062 },
  },
  {
    slug: 'federal-way-wa',
    urlSlug: 'federal-way-wa',
    name: 'Federal Way, WA',
    shortName: 'Federal Way',
    description:
      'We serve property owners in Federal Way, WA with professional water damage restoration and cleanup services.',
    geo: { lat: 47.3223, lng: -122.3126 },
  },
  {
    slug: 'tukwila-wa',
    urlSlug: 'tukwila-wa',
    name: 'Tukwila, WA',
    shortName: 'Tukwila',
    description:
      'Tukwila, WA property owners can rely on our water damage restoration services for water removal, drying, and repair.',
    geo: { lat: 47.4693, lng: -122.2437 },
  },
  {
    slug: 'seatac-wa',
    urlSlug: 'seatac-wa',
    name: 'SeaTac, WA',
    shortName: 'SeaTac',
    description:
      'Our water damage restoration services extend to homes and businesses in SeaTac, WA, serving the community near Seattle-Tacoma International Airport.',
    geo: { lat: 47.4438, lng: -122.2954 },
  },
  {
    slug: 'des-moines-wa',
    urlSlug: 'des-moines-wa',
    name: 'Des Moines, WA',
    shortName: 'Des Moines',
    description:
      'Des Moines, WA residents and businesses can access our water damage restoration services along the Puget Sound waterfront.',
    geo: { lat: 47.4018, lng: -122.3243 },
  },
  {
    slug: 'maple-valley-wa',
    urlSlug: 'maple-valley-wa',
    name: 'Maple Valley, WA',
    shortName: 'Maple Valley',
    description:
      'We provide water damage restoration services to property owners in Maple Valley, WA, southeast of Kent.',
    geo: { lat: 47.3943, lng: -122.0457 },
  },
  {
    slug: 'burien-wa',
    urlSlug: 'burien-wa',
    name: 'Burien, WA',
    shortName: 'Burien',
    description:
      'Burien, WA property owners can contact us for water damage restoration, water removal, and structural drying services.',
    geo: { lat: 47.4704, lng: -122.3406 },
  },
];

export function getService(slug: string): ServiceInfo | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceArea(slug: string): ServiceAreaInfo | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

export const MAIN_SERVICE_AREA =
  SERVICE_AREAS.find((a) => a.slug === BUSINESS.primaryLocationSlug) ?? SERVICE_AREAS[0];

export function getServiceUrl(serviceSlug: string): string {
  return `/${serviceSlug}-${MAIN_SERVICE_AREA.urlSlug}`;
}

export function getServiceAreaUrl(areaSlug: string): string {
  const area = getServiceArea(areaSlug);
  if (!area) return '/service-areas';
  return `/water-damage-${area.urlSlug}`;
}

export function buildServiceAreaUrl(serviceSlug: string, areaSlug: string): string {
  const service = getService(serviceSlug);
  const area = getServiceArea(areaSlug);
  if (!service || !area) return '/';
  return `/${serviceSlug}-${area.urlSlug}`;
}

export function getAllServiceAreaUrls(): { url: string; service: ServiceInfo; area: ServiceAreaInfo }[] {
  const urls: { url: string; service: ServiceInfo; area: ServiceAreaInfo }[] = [];
  for (const service of SERVICES) {
    for (const area of SERVICE_AREAS) {
      urls.push({
        url: `/${service.slug}-${area.urlSlug}`,
        service,
        area,
      });
    }
  }
  return urls;
}
