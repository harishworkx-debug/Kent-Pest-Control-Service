import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQSection } from '@/components/FAQSection';
import { SERVICE_AREAS, SERVICES, BUSINESS, getServiceUrl, getServiceAreaUrl } from '@/data/business';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/data/schema';
import { ArrowRight, MapPin } from 'lucide-react';

interface ServiceAreasPageProps {
  navigate: (to: string) => void;
}

export function ServiceAreasPage({ navigate }: ServiceAreasPageProps) {
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: '/service-areas' },
    ]),
    buildFAQSchema(areaFaqs),
  ];

  return (
    <>
      <SEO
        title="Service Areas | Kent Pest Control Service — Kent, WA"
        description="Water damage restoration services available in Kent, WA and surrounding communities including Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, and more. Call (253) 523-3921."
        canonical="/service-areas"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Water Damage Restoration Service Areas"
        description="Based in Kent, WA, we provide water damage restoration services to Kent and surrounding Washington communities. Call us to confirm service availability in your area."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
        ]}
        navigate={navigate}
      />

      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Where We Serve</span>
            <h2 className="section-title">Communities We Serve</h2>
            <p className="mt-4 text-lg text-neutral-600 text-pretty">
              Our primary service area is Kent, WA. We also extend our water damage restoration services
              to neighboring communities in the South King County region. Select your city to view
              available services.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area, index) => (
              <a
                key={area.slug}
                href={getServiceAreaUrl(area.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(getServiceAreaUrl(area.slug));
                }}
                className="card group p-6 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <MapPin className="h-6 w-6 text-brand-500" />
                  </div>
                  {index === 0 && (
                    <span className="rounded-full bg-aqua-50 px-3 py-1 text-xs font-semibold text-aqua-700">
                      Primary Location
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy-700 group-hover:text-brand-500">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                  View services in {area.shortName}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Available Services</span>
            <h2 className="section-title">Services Available Across Our Service Areas</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              All of our water damage restoration services are available throughout our service area.
              Call us to confirm availability for your specific location.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SERVICES.map((service) => (
              <a
                key={service.slug}
                href={getServiceUrl(service.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(getServiceUrl(service.slug));
                }}
                className="rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-navy-600 ring-1 ring-neutral-200/60 transition-all hover:bg-brand-50 hover:text-brand-500 hover:ring-brand-200"
              >
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={areaFaqs} />

      <FinalCTA
        title="Call to Confirm Service in Your Area"
        description={`Not sure if we serve your location? Call ${BUSINESS.phone} to confirm service availability and discuss your water damage restoration needs.`}
      />
    </>
  );
}

const areaFaqs = [
  {
    q: 'What areas does Kent Pest Control Service cover?',
    a: 'Our primary service area is Kent, WA. We also serve surrounding Washington communities including Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac, Des Moines, Maple Valley, and Burien. Call (253) 523-3921 to confirm we can help in your specific location.',
  },
  {
    q: 'Is Kent, WA your primary service area?',
    a: 'Yes. Kent, WA is our primary service area and where our business is located at 327 5th Ave S, Kent, WA 98032. We serve Kent directly and extend services to neighboring communities in the South King County region.',
  },
  {
    q: 'How do I know if you serve my city?',
    a: 'If your city is listed on our service areas page, we likely serve your area. However, we recommend calling (253) 523-3921 to confirm service availability for your specific location and discuss your needs.',
  },
  {
    q: 'Are all services available in every service area?',
    a: 'Our full range of water damage restoration services is available across our service areas. However, availability may depend on the specific situation and location. Call us to discuss your needs and confirm service availability.',
  },
];
