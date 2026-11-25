import {
  Phone, MapPin, Shield, Droplets, Wind, Hammer, ArrowRight, CheckCircle2,
  AlertTriangle, Clock, Home, Building2, Zap, Droplet, Wrench, Users,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { CallButton } from '@/components/CallButton';
import { FinalCTA } from '@/components/FinalCTA';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { ServiceCard, ServiceAreaCard } from '@/components/Cards';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/business';
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebSiteSchema, buildFAQSchema } from '@/data/schema';

interface HomePageProps {
  navigate: (to: string) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const jsonLd = [
    buildLocalBusinessSchema(),
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildFAQSchema(homeFaqs),
  ];

  return (
    <>
      <SEO
        title="Kent Pest Control Service | Water Damage Restoration in Kent, WA"
        description="Water damage restoration services in Kent, WA. Water removal, extraction, structural drying, flood cleanup, and repairs. Call (253) 523-3921 for restoration services."
        canonical="/"
        jsonLd={jsonLd}
      />

      <Hero navigate={navigate} />
      <TrustBar />
      <StatsSection />
      <ServicesSection navigate={navigate} />
      <RestorationProcessSection />
      <WaterDamageCausesSection />
      <WhyChooseUs />
      <ServiceAreasSection navigate={navigate} />
      <ResidentialHomeownerSection />
      <HowItWorks />
      <FAQSection faqs={homeFaqs} />
      <FinalCTA />
    </>
  );
}

function Hero({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-navy-700 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-700 to-brand-800" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-aqua-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-aqua-300 ring-1 ring-white/15">
              <MapPin className="h-4 w-4" />
              Serving Kent, WA & Surrounding Communities
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance">
              Water Damage Restoration Services in Kent, WA
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-200 text-pretty">
              Contact Kent Pest Control Service to discuss your property restoration needs and available
              services in Kent and surrounding communities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton variant="large" label="Call (253) 523-3921" />
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/services');
                }}
                className="btn-outline"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-aqua-400" />
                Based in Kent, WA
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-aqua-400" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img
                src="https://images.pexels.com/photos/5317154/pexels-photo-5317154.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                alt="Professional water damage restoration work inside a home"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-neutral-200/60 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-50">
                  <Droplets className="h-6 w-6 text-aqua-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-700">Water Damage Restoration</div>
                  <div className="text-xs text-neutral-500">Professional Service in Kent, WA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: MapPin, label: 'Kent, WA Location', value: BUSINESS.address },
    { icon: Phone, label: 'Verified Phone', value: BUSINESS.phone },
    { icon: Shield, label: 'Business Category', value: 'Water Damage Restoration Service' },
  ];

  return (
    <section className="border-b border-neutral-100 bg-white py-8">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{item.label}</div>
                  <div className="truncate text-sm font-medium text-navy-700">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Droplets, value: '10', label: 'Restoration Services' },
    { icon: MapPin, value: '10', label: 'WA Communities Served' },
    { icon: Phone, value: '1 Call', label: 'Direct Phone Contact' },
    { icon: Shield, value: 'Kent, WA', label: 'Local Business Base' },
  ];

  return (
    <section className="bg-navy-700 py-12">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-400/15">
                  <Icon className="h-6 w-6 text-aqua-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs font-medium text-neutral-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="bg-neutral-50 py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Water Damage Restoration Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Professional restoration services for homeowners and residential properties affected by water damage in Kent, WA
            and surrounding communities. Each service is just a phone call away.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RestorationProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Call & Discuss',
      description: 'Call (253) 523-3921 to explain your water damage situation. We discuss the scope and determine the appropriate response.',
    },
    {
      icon: Droplets,
      title: 'Water Removal',
      description: 'Standing water is extracted using professional-grade pumps and vacuums to remove water quickly and prevent further spread.',
    },
    {
      icon: Wind,
      title: 'Structural Drying',
      description: 'Specialized air movers and dehumidifiers are deployed to dry walls, floors, and building materials thoroughly.',
    },
    {
      icon: Shield,
      title: 'Cleaning & Sanitizing',
      description: 'Affected areas are cleaned and sanitized to remove contaminants and inhibit mold growth, protecting indoor air quality.',
    },
    {
      icon: Hammer,
      title: 'Repair & Restore',
      description: 'Damaged materials are repaired or replaced — drywall, flooring, insulation — to return your property to pre-loss condition.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Restoration Process</span>
          <h2 className="section-title">Our Water Damage Restoration Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Water damage restoration follows a structured, multi-step process. Each phase builds on the
            previous one to ensure your property is thoroughly restored.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200/60 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-aqua-600">
                      Phase {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-navy-700">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
        </div>
      </div>
    </section>
  );
}

function WaterDamageCausesSection() {
  const causes = [
    {
      icon: Droplet,
      title: 'Burst & Leaking Pipes',
      description: 'Frozen, aging, or damaged pipes can burst and release large volumes of water into your home within minutes.',
    },
    {
      icon: Wrench,
      title: 'Appliance Failures',
      description: 'Washing machines, water heaters, dishwashers, and refrigerators with water lines can leak or fail unexpectedly.',
    },
    {
      icon: Home,
      title: 'Roof Leaks',
      description: 'Damaged roofing, missing shingles, or compromised flashing allow water to enter through ceilings and attics.',
    },
    {
      icon: Zap,
      title: 'Storm & Weather Events',
      description: 'Heavy rainfall, wind-driven rain, and severe weather can cause water intrusion through various entry points.',
    },
    {
      icon: Building2,
      title: 'Plumbing Backups',
      description: 'Sewage backups and drain overflows can contaminate living spaces with hazardous water requiring specialized cleanup.',
    },
    {
      icon: AlertTriangle,
      title: 'Hidden Leaks',
      description: 'Slow, undetected leaks behind walls or under floors can cause extensive structural damage and mold over time.',
    },
  ];

  return (
    <section className="bg-neutral-50 py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Common Causes</span>
          <h2 className="section-title">What Causes Water Damage?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Water damage can come from many sources. Recognizing the cause helps determine the right
            restoration approach. If you are dealing with any of these, call us to discuss your options.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <div key={index} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-700">{cause.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                  {cause.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Clock className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-navy-700">Time Is Critical</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600 text-pretty">
                The longer water sits, the more damage it causes. Mold can begin growing within 24-48 hours.
                Calling quickly minimizes damage and reduces restoration costs.
              </p>
            </div>
            <CallButton label={`Call ${BUSINESS.phone}`} className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: Droplets,
      title: 'Comprehensive Restoration',
      description: 'From water removal to structural drying and repairs, we address every phase of the water damage restoration process.',
    },
    {
      icon: MapPin,
      title: 'Local Kent Business',
      description: 'Based in Kent, WA at 327 5th Ave S, we serve our local community and surrounding Washington areas.',
    },
    {
      icon: Wind,
      title: 'Professional Drying Equipment',
      description: 'We use high-capacity LGR structural dehumidifiers, air movers, and moisture detection tools to ensure thorough drying.',
    },
    {
      icon: Hammer,
      title: 'Repair & Restoration',
      description: 'Beyond drying, we handle drywall, flooring, and structural repairs to return your property to pre-loss condition.',
    },
    {
      icon: Phone,
      title: 'Direct Phone Contact',
      description: 'No forms or online booking. Call us directly to discuss your situation and get the help you need.',
    },
    {
      icon: Shield,
      title: 'Serving Multiple Communities',
      description: 'Our services extend to Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, and more in the Kent area.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Professional Restoration You Can Count On</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Kent Pest Control Service provides water damage restoration services backed by professional
            equipment and a direct, personal approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-50">
                  <Icon className="h-6 w-6 text-aqua-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-700">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceAreasSection({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="bg-neutral-50 py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Service Areas</span>
          <h2 className="section-title">Communities We Serve</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Based in Kent, WA, we provide water damage restoration services to Kent and surrounding
            Washington communities. Select your city to view available services in your area.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <ServiceAreaCard key={area.slug} area={area} navigate={navigate} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/service-areas')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
          >
            View All Service Areas
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ResidentialHomeownerSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Who We Serve</span>
          <h2 className="section-title">Dedicated Residential Water Restoration</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Water emergencies disrupt household routines and damage personal belongings. Our restoration services are dedicated exclusively to homeowners and residential properties throughout Kent and surrounding King County communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5524265/pexels-photo-5524265.jpeg?auto=compress&cs=tinysrgb&h=400&w=800"
                alt="Residential home in Washington State"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                <Home className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-700">Single-Family Homes & Townhomes</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                Burst pipes, appliance line leaks, roof failures, and water intrusion cause severe disruption to living spaces. We provide comprehensive residential water extraction, structural wall cavity drying, and repairs to restore your home and protect your family's living environment.
              </p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4030033/pexels-photo-4030033.jpeg?auto=compress&cs=tinysrgb&h=400&w=800"
                alt="Residential basement and crawl space water restoration"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-50">
                <Droplets className="h-6 w-6 text-aqua-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-700">Basement & Crawl Space Water Protection</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                Subterranean home spaces in South King County frequently experience foundation seepage, sump pump overflows, and moisture traps. We deploy high-capacity LGR structural dehumidification and extraction to safeguard structural foundations and prevent harmful mold colonization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const homeFaqs = [
  {
    q: 'What services does Kent Pest Control Service offer?',
    a: 'Kent Pest Control Service provides 10 comprehensive residential water damage restoration services, including water damage restoration, water removal, water extraction, structural drying, flood damage cleanup, water damage repair, sewage backup cleanup, basement flood cleanup, burst pipe water cleanup, and residential water mitigation. We serve Kent, WA and surrounding communities. Call (253) 523-3921 to discuss your specific needs.',
  },
  {
    q: 'Where is Kent Pest Control Service located?',
    a: `We are located at ${BUSINESS.address}. We serve Kent, WA as our primary service area, along with surrounding communities including Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, Des Moines, Maple Valley, and Burien.`,
  },
  {
    q: 'How do I contact Kent Pest Control Service?',
    a: `The best way to reach us is by phone. Call ${BUSINESS.phone} to speak directly with our team. We handle all inquiries by phone — no forms, no online booking. We will discuss your situation and confirm how we can help.`,
  },
  {
    q: 'What should I do immediately after discovering water damage?',
    a: 'First, ensure your safety. If there is standing water near electrical outlets or panels, do not enter the area. If safe, try to identify and stop the water source if possible. Then call (253) 523-3921 to discuss your situation. The sooner water removal and drying begin, the less damage occurs.',
  },
  {
    q: 'Do you serve areas outside of Kent, WA?',
    a: 'Yes. In addition to Kent, we provide water damage restoration services to Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, Des Moines, Maple Valley, and Burien, WA. Call us to confirm service availability in your specific area.',
  },
  {
    q: 'Why is the company called "Kent Pest Control Service" if it provides water damage restoration?',
    a: 'The business name is the registered name of the company, but our actual service category is Water Damage Restoration Service, as listed with our business information. We provide professional water damage restoration services to the Kent, WA community.',
  },
  {
    q: 'What is the water damage restoration process?',
    a: 'The process typically involves five phases: calling and discussing the situation, water removal using professional extraction equipment, structural drying with dehumidifiers and air movers, cleaning and sanitizing affected areas, and finally repairs to restore the property. Each situation is unique — call us to discuss your specific needs.',
  },
  {
    q: 'How quickly can mold grow after water damage?',
    a: 'Mold can begin growing within 24-48 hours after water damage occurs. This is why fast water removal and thorough structural drying are critical. The sooner you call, the better the chances of preventing mold growth and minimizing long-term damage. Call (253) 523-3921 right away.',
  },
];
