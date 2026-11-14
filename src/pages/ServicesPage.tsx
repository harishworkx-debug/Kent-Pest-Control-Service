import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQSection } from '@/components/FAQSection';
import { ServiceCard } from '@/components/Cards';
import { SERVICES, SERVICE_AREAS, BUSINESS, getServiceAreaUrl } from '@/data/business';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/data/schema';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  navigate: (to: string) => void;
}

export function ServicesPage({ navigate }: ServicesPageProps) {
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ]),
    buildFAQSchema(servicesFaqs),
  ];

  return (
    <>
      <SEO
        title="Water Damage Restoration Services | Kent, WA"
        description="Professional water damage restoration services in Kent, WA — water removal, water extraction, structural drying, flood damage cleanup, and water damage repair. Call (253) 523-3921."
        canonical="/services"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Our Services"
        title="Water Damage Restoration Services in Kent, WA"
        description="Professional restoration services for properties affected by water damage. From water removal to structural drying and repairs, we serve Kent and surrounding Washington communities."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
        navigate={navigate}
      />

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Complete Restoration</span>
            <h2 className="section-title">Comprehensive Water Damage Restoration</h2>
            <p className="mt-4 text-lg text-neutral-600 text-pretty">
              Water damage requires a multi-step approach to fully restore your property. We provide services
              that address every phase of the restoration process — from initial water removal through final
              repairs. Each service below can be discussed in detail by phone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Service Coverage</span>
            <h2 className="section-title">Services Available in Your Area</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              Our water damage restoration services are available in Kent, WA and surrounding communities.
              Select your city to see available services in your area.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <a
                key={area.slug}
                href={getServiceAreaUrl(area.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(getServiceAreaUrl(area.slug));
                }}
                className="card group flex items-center justify-between p-5 text-left"
              >
                <div>
                  <h3 className="text-base font-bold text-navy-700 group-hover:text-brand-500">
                    {area.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500">Restoration services available</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={servicesFaqs} />

      <FinalCTA />
    </>
  );
}

const servicesFaqs = [
  {
    q: 'What water damage restoration services do you offer?',
    a: `We offer water damage restoration, water removal, water extraction, structural drying, flood damage cleanup, and water damage repair. Each service addresses a specific phase of the restoration process. Call ${BUSINESS.phone} to discuss which services you may need.`,
  },
  {
    q: 'Do I need all of these services, or just some?',
    a: 'The services you need depend on the extent and type of water damage. Most water damage situations require water removal, extraction, and structural drying at minimum. Flood damage may require additional cleanup and contaminated material removal. Repairs depend on what was damaged. Call us to discuss your specific situation.',
  },
  {
    q: 'Are these services available in my area?',
    a: `Our services are available in Kent, WA and surrounding communities including Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, Des Moines, Maple Valley, and Burien. Call ${BUSINESS.phone} to confirm availability in your specific location.`,
  },
  {
    q: 'How do I schedule a service?',
    a: `All scheduling is handled by phone. Call ${BUSINESS.phone} to speak with our team. We do not use online booking, forms, or automated scheduling. We will discuss your situation and confirm next steps directly.`,
  },
];
