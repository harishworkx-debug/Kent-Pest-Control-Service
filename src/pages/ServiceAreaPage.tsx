import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQSection } from '@/components/FAQSection';
import { CallButton } from '@/components/CallButton';
import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  getServiceArea,
  getServiceAreaUrl,
} from '@/data/business';
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
} from '@/data/schema';
import { ArrowRight, Phone, MapPin, Wrench, CheckCircle2 } from 'lucide-react';

interface ServiceAreaPageProps {
  areaSlug: string;
  navigate: (to: string) => void;
}

export function ServiceAreaPage({ areaSlug, navigate }: ServiceAreaPageProps) {
  const area = getServiceArea(areaSlug);

  if (!area) {
    return null;
  }

  const isPrimary = area.slug === BUSINESS.primaryLocationSlug;
  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);
  const areaUrl = getServiceAreaUrl(area.slug);

  const seoTitle = `Water Damage Restoration in ${area.name} | Kent Pest Control Service`;
  const seoDesc = `Water damage restoration services in ${area.name}. Water removal, extraction, structural drying, flood cleanup, and repairs. Call ${BUSINESS.phone} for restoration services in ${area.shortName}.`;

  const areaFaqs = generateAreaFaqs(area.name, area.shortName);

  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: '/service-areas' },
      { name: area.name, url: areaUrl },
    ]),
    buildFAQSchema(areaFaqs),
  ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        canonical={areaUrl}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={isPrimary ? 'Primary Service Area' : 'Service Area'}
        title={`Water Damage Restoration in ${area.name}`}
        description={area.description}
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: area.name, url: areaUrl },
        ]}
        navigate={navigate}
      />

      {/* Area introduction */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">About {area.shortName}</span>
              <h2 className="section-title">Serving {area.name}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 text-pretty">
                <p>
                  {area.description} {isPrimary
                    ? `As a locally based business at ${BUSINESS.address}, we are positioned to respond to water damage restoration needs throughout the Kent community.`
                    : `Located just a short distance from ${area.shortName}, our Kent-based team is positioned to serve property owners in this community when water damage occurs.`}
                </p>
                <p>
                  Water damage in {area.shortName} can result from various causes — burst pipes, appliance
                  failures, roof leaks, and weather events are common in the {area.shortName} area. Our
                  water damage restoration services address each phase of restoration, from water removal
                  through structural drying and repairs.
                </p>
                <p>
                  If your property in {area.shortName} has experienced water damage, call us at{' '}
                  <a href={BUSINESS.phoneLink} className="font-semibold text-brand-500 hover:text-brand-600">
                    {BUSINESS.phone}
                  </a>{' '}
                  to discuss your situation and available services.
                </p>
              </div>
              <div className="mt-8">
                <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-neutral-200/60">
              <img
                src="https://images.pexels.com/photos/5524265/pexels-photo-5524265.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                alt={`Residential property in the ${area.shortName} area`}
                loading="lazy"
                className="h-[400px] w-full object-cover lg:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Available services with internal links */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Available Services</span>
            <h2 className="section-title">Restoration Services in {area.shortName}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              The following water damage restoration services are available in {area.name}. Select a service
              to view details, or call us to discuss your specific needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const comboUrl = `/${service.slug}-${area.urlSlug}`;
              return (
                <div key={service.slug} className="card group flex flex-col overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white">
                      {service.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-relaxed text-neutral-600 text-pretty">
                      {service.name} services in {area.shortName}, WA.
                    </p>
                    <div className="mt-4 flex items-center gap-3 pt-2">
                      <a
                        href={comboUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(comboUrl);
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                      >
                        {service.name} in {area.shortName}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                    <div className="mt-3 border-t border-neutral-100 pt-3">
                      <a
                        href={BUSINESS.phoneLink}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-aqua-600 transition-colors hover:text-aqua-700"
                      >
                        <Phone className="h-4 w-4" />
                        Call about this service
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby service areas */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Nearby Areas</span>
            <h2 className="section-title">Other Communities We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              In addition to {area.name}, we provide water damage restoration services to surrounding
              Washington communities.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherAreas.map((otherArea) => (
              <a
                key={otherArea.slug}
                href={getServiceAreaUrl(otherArea.slug)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(getServiceAreaUrl(otherArea.slug));
                }}
                className="card group flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-500" />
                  <div>
                    <h3 className="text-base font-bold text-navy-700 group-hover:text-brand-500">
                      {otherArea.name}
                    </h3>
                    <p className="text-sm text-neutral-500">Restoration services</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={areaFaqs} title={`${area.shortName} Water Damage Restoration FAQs`} />

      <FinalCTA
        title={`Call for Water Damage Restoration in ${area.shortName}`}
        description={`Contact Kent Pest Control Service for water damage restoration services in ${area.name}. Call ${BUSINESS.phone} to discuss your needs.`}
      />
    </>
  );
}

function generateAreaFaqs(areaName: string, shortName: string) {
  return [
    {
      q: `Do you provide water damage restoration services in ${areaName}?`,
      a: `Yes, we provide water damage restoration services in ${areaName}. Our services include water removal, water extraction, structural drying, flood damage cleanup, and water damage repair. Call ${BUSINESS.phone} to confirm availability and discuss your specific situation.`,
    },
    {
      q: `How quickly can you respond to water damage in ${shortName}?`,
      a: `Response times depend on various factors including current availability and the nature of the situation. We encourage calling as soon as you discover water damage, as fast action minimizes damage. Call ${BUSINESS.phone} to discuss your situation and available response options.`,
    },
    {
      q: `What water damage services are available in ${shortName}?`,
      a: `We offer water damage restoration, water removal, water extraction, structural drying, flood damage cleanup, and water damage repair in ${shortName}. Each service addresses a specific phase of the restoration process. Call us to discuss which services you may need.`,
    },
    {
      q: `Are you located near ${shortName}?`,
      a: shortName === 'Kent'
        ? `Yes, our business is located at ${BUSINESS.address}, right in Kent. We serve the Kent community directly and extend our services to surrounding areas.`
        : `Our business is based in Kent, WA at ${BUSINESS.address}. ${shortName} is within our service coverage area, and we are positioned to serve property owners there. Call ${BUSINESS.phone} to confirm service availability.`,
    },
  ];
}
