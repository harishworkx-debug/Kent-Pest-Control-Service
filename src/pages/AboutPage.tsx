import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, SERVICES, SERVICE_AREAS, getServiceUrl } from '@/data/business';
import { buildOrganizationSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/data/schema';
import { Phone, MapPin, Droplets, Wind, Hammer, Shield, Users, Wrench } from 'lucide-react';

interface AboutPageProps {
  navigate: (to: string) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  const jsonLd = [
    buildLocalBusinessSchema(),
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ]),
  ];

  return (
    <>
      <SEO
        title="About Us | Kent Pest Control Service — Kent, WA"
        description="Kent Pest Control Service provides professional water damage restoration in Kent, WA. Serving Kent and surrounding Washington communities with comprehensive restoration services."
        canonical="/about"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="About Our Company"
        title="About Kent Pest Control Service"
        description="A Kent, WA-based water damage restoration company serving our local community and surrounding areas with professional property restoration services."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ]}
        navigate={navigate}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">Our Company</span>
              <h2 className="section-title">Water Damage Restoration in Kent, WA</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 text-pretty">
                <p>
                  Kent Pest Control Service is a water damage restoration company located in Kent, Washington.
                  Despite our name, our actual business category is Water Damage Restoration Service — we
                  provide professional restoration services to property owners dealing with water damage
                  throughout Kent and surrounding communities.
                </p>
                <p>
                  We understand that water damage is stressful and disruptive. Whether caused by a burst pipe,
                  appliance failure, roof leak, or storm, water damage requires prompt and thorough attention
                  to prevent further destruction and mold growth. Our approach focuses on complete restoration
                  — from initial water removal through structural drying and final repairs.
                </p>
                <p>
                  We believe in direct, personal communication. That is why we handle everything by phone.
                  No forms, no online booking, no automated systems. When you call us, you speak with our team
                  directly to discuss your situation and determine how we can help.
                </p>
              </div>
              <div className="mt-8">
                <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-neutral-200/60">
                <img
                  src="https://images.pexels.com/photos/8961296/pexels-photo-8961296.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                  alt="Professional restoration team examining blueprints on a project"
                  loading="lazy"
                  className="h-[450px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our Water Damage Restoration Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              We provide a complete range of water damage restoration services to address every phase
              of the restoration process.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                onClick={() => navigate(getServiceUrl(service.slug))}
                className="card group p-6 text-left"
              >
                <h3 className="text-lg font-bold text-navy-700 group-hover:text-brand-500">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What Guides Our Work</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Droplets, title: 'Complete Restoration', description: 'We address every phase of water damage — from water removal to structural drying and repairs.' },
              { icon: Users, title: 'Direct Communication', description: 'No forms or automated systems. Call us and speak with our team directly about your needs.' },
              { icon: Shield, title: 'Professional Approach', description: 'We use professional-grade equipment and proven restoration techniques for thorough results.' },
              { icon: MapPin, title: 'Community Focused', description: `Based in Kent, WA, we proudly serve our local community and surrounding Washington areas.` },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-700">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">Our Service Approach</span>
              <h2 className="section-title">How We Approach Restoration</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 text-pretty">
                <p>
                  Water damage restoration requires a systematic approach. We begin by assessing the full extent
                  of damage — identifying the water source, mapping all affected areas, and determining the
                  appropriate response.
                </p>
                <p>
                  Water removal and extraction come first, using professional equipment to clear standing water
                  and pull moisture from building materials. Structural drying follows, with industrial
                  dehumidifiers and air movers running until moisture levels return to safe targets.
                </p>
                <p>
                  Finally, we handle repairs — replacing damaged drywall, flooring, and structural elements to
                  return your property to its pre-loss condition. Throughout the process, we communicate with
                  you directly by phone.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { icon: Wrench, title: 'Assessment', text: 'Full inspection of damage extent, water source, and affected materials.' },
                { icon: Droplets, title: 'Water Removal', text: 'Professional extraction of standing water and absorbed moisture.' },
                { icon: Wind, title: 'Structural Drying', text: 'Industrial dehumidifiers and air movers with daily moisture monitoring.' },
                { icon: Hammer, title: 'Repairs', text: 'Drywall, flooring, and structural repairs to restore your property.' },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-neutral-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-50">
                      <Icon className="h-5 w-5 text-aqua-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-aqua-600">Step {index + 1}</span>
                      </div>
                      <h3 className="text-base font-bold text-navy-700">{step.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600 text-pretty">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Service Coverage</span>
            <h2 className="section-title">Areas We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              Based in Kent, WA, our water damage restoration services extend to communities throughout
              the surrounding area.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <button
                key={area.slug}
                onClick={() => navigate(`/service-areas/${area.slug}`)}
                className="rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-navy-600 ring-1 ring-neutral-200/60 transition-all hover:bg-brand-50 hover:text-brand-500 hover:ring-brand-200"
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Call to Discuss Your Restoration Needs"
        description="Contact Kent Pest Control Service to discuss our water damage restoration services and how we can help with your property."
      />
    </>
  );
}
