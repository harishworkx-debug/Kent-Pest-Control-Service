import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQSection } from '@/components/FAQSection';
import { CallButton } from '@/components/CallButton';
import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  getService,
  getServiceArea,
  getServiceUrl,
} from '@/data/business';
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildFAQSchema,
} from '@/data/schema';
import { AlertTriangle, ArrowRight, Phone, Wrench, MapPin } from 'lucide-react';

interface ServiceLocationPageProps {
  serviceSlug: string;
  areaSlug: string;
  navigate: (to: string) => void;
}

export function ServiceLocationPage({ serviceSlug, areaSlug, navigate }: ServiceLocationPageProps) {
  const service = getService(serviceSlug);
  const area = getServiceArea(areaSlug);

  if (!service || !area) {
    return null;
  }

  const isPrimaryArea = area.slug === BUSINESS.primaryLocationSlug;
  const canonical = `/${service.slug}-${area.urlSlug}`;

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
    .filter((s) => s.slug !== service.slug);

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const seoTitle = `${service.name} in ${area.name} | Kent Pest Control Service`;
  const seoDesc = `${service.name} services in ${area.name}. ${service.description} Call ${BUSINESS.phone} for professional ${service.name.toLowerCase()} in ${area.shortName}, WA.`;

  const faqs = generateComboFaqs(service.name, area.name, area.shortName);

  const jsonLd = [
    buildServiceSchema(service, area),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: '/service-areas' },
      { name: area.name, url: getServiceAreaUrl(area.slug) },
      { name: `${service.name} in ${area.name}`, url: canonical },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={`${service.name}`}
        title={`${service.name} in ${area.name}`}
        description={`${service.description} Available in ${area.name}${isPrimaryArea ? ' — our primary service area' : ' and surrounding communities'}. Call ${BUSINESS.phone} to discuss your needs.`}
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: area.name, url: getServiceAreaUrl(area.slug) },
          { name: `${service.name} in ${area.name}`, url: canonical },
        ]}
        navigate={navigate}
      />

      {/* Overview with image */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">{area.name}</span>
              <h2 className="section-title">
                {service.name} Services in {area.shortName}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 text-pretty">
                <p>
                  {service.longDescription.split('.')[0]}. In {area.name}, we provide {service.name.toLowerCase()}{' '}
                  services to {isPrimaryArea ? 'homes and businesses throughout the Kent community' : `properties in the ${area.shortName} area`}.
                </p>
                <p>
                  {area.description} Whether you are dealing with a burst pipe, appliance leak, storm damage,
                  or another water-related issue in {area.shortName}, our {service.name.toLowerCase()} services
                  are available to help address the situation.
                </p>
                <p>
                  Need full-spectrum water damage support? Explore our comprehensive{' '}
                  <a
                    href={getServiceAreaUrl(area.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(getServiceAreaUrl(area.slug));
                    }}
                    className="font-semibold text-brand-500 hover:text-brand-600 underline"
                  >
                    Water Damage Restoration in {area.name} Guide
                  </a>.
                </p>
                <p>
                  Call us at{' '}
                  <a href={BUSINESS.phoneLink} className="font-semibold text-brand-500 hover:text-brand-600">
                    {BUSINESS.phone}
                  </a>{' '}
                  to discuss {service.name.toLowerCase()} in {area.shortName} and confirm service availability.
                </p>
              </div>
              <div className="mt-8">
                <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-neutral-200/60">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="h-[400px] w-full object-cover lg:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="section-eyebrow">{area.shortName} Property Issues</span>
              <h2 className="section-title">
                When You Need {service.name} in {area.shortName}
              </h2>
              <p className="mt-4 text-lg text-neutral-600 text-pretty">
                These are common situations that may require {service.name.toLowerCase()} services in the{' '}
                {area.shortName} area. If you are experiencing any of these, call us to discuss your options.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white p-5 ring-1 ring-neutral-200/60"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <p className="text-sm leading-relaxed text-neutral-700 text-pretty">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service process */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="section-eyebrow">Our Process</span>
              <h2 className="section-title">
                {service.name} Process in {area.shortName}
              </h2>
              <p className="mt-4 text-lg text-neutral-600 text-pretty">
                Our approach to {service.name.toLowerCase()} in {area.shortName} follows a structured process
                to ensure thorough restoration results.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-5">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-700">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services in this area + other areas for this service */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Related services in this area */}
            <div>
              <span className="section-eyebrow">More in {area.shortName}</span>
              <h2 className="mt-3 text-2xl font-bold text-navy-700">
                Other Restoration Services in {area.shortName}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 text-pretty">
                In addition to {service.name}, we offer these water damage restoration services in {area.name}.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {otherServices.map((otherService) => {
                  const comboUrl = `/${otherService.slug}-${area.urlSlug}`;
                  return (
                    <a
                      key={otherService.slug}
                      href={comboUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(comboUrl);
                      }}
                      className="card group flex items-center justify-between p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Wrench className="h-5 w-5 text-aqua-600" />
                        <span className="text-sm font-semibold text-navy-700 group-hover:text-brand-500">
                          {otherService.name} in {area.shortName}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* This service in other areas */}
            <div>
              <span className="section-eyebrow">Other Locations</span>
              <h2 className="mt-3 text-2xl font-bold text-navy-700">
                {service.name} in Other Areas
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 text-pretty">
                {service.name} is also available in these Washington communities.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {otherAreas.map((otherArea) => {
                  const comboUrl = `/${service.slug}-${otherArea.urlSlug}`;
                  return (
                    <a
                      key={otherArea.slug}
                      href={comboUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(comboUrl);
                      }}
                      className="card group flex items-center justify-between p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-brand-500" />
                        <span className="text-sm font-semibold text-navy-700 group-hover:text-brand-500">
                          {service.name} in {otherArea.name}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`${service.name} in ${area.shortName} — FAQs`} />

      <FinalCTA
        title={`Call for ${service.name} in ${area.shortName}`}
        description={`Contact Kent Pest Control Service for ${service.name.toLowerCase()} services in ${area.name}. Call ${BUSINESS.phone} to speak with our team directly. No forms — just a phone call.`}
      />
    </>
  );
}

function generateComboFaqs(serviceName: string, areaName: string, shortName: string) {
  return [
    {
      q: `Do you offer ${serviceName} in ${areaName}?`,
      a: `Yes, we provide ${serviceName} services in ${areaName}. Our Kent, WA-based team serves ${shortName} and surrounding communities. Call ${BUSINESS.phone} to confirm availability and discuss your specific situation.`,
    },
    {
      q: `How quickly should I call about ${serviceName.toLowerCase()} in ${shortName}?`,
      a: `It is best to call as soon as you discover a problem that may require ${serviceName.toLowerCase()}. Fast action minimizes damage and can prevent further issues like mold growth. Call ${BUSINESS.phone} to discuss your situation in ${shortName}.`,
    },
    {
      q: `What does ${serviceName.toLowerCase()} in ${shortName} involve?`,
      a: `${serviceName} in ${shortName} follows our standard restoration process. The specific steps depend on the service and your situation. Call ${BUSINESS.phone} to discuss the details and how we can help with your property in ${shortName}.`,
    },
    {
      q: `Are you based near ${shortName}?`,
      a: shortName === 'Kent'
        ? `Yes, we are located at ${BUSINESS.address} in Kent. We serve the Kent community directly with ${serviceName.toLowerCase()} and other water damage restoration services.`
        : `Our business is based in Kent, WA at ${BUSINESS.address}. ${shortName} is within our service coverage area. Call ${BUSINESS.phone} to confirm we can serve your location.`,
    },
  ];
}
