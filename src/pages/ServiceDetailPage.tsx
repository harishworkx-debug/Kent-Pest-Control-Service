import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQSection } from '@/components/FAQSection';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, SERVICES, SERVICE_AREAS, getService, getServiceUrl } from '@/data/business';
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildFAQSchema,
} from '@/data/schema';
import { AlertTriangle, CheckCircle2, ArrowRight, Phone, MapPin, Wrench } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
  navigate: (to: string) => void;
}

export function ServiceDetailPage({ serviceSlug, navigate }: ServiceDetailPageProps) {
  const service = getService(serviceSlug);

  if (!service) {
    return null;
  }

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const serviceUrl = getServiceUrl(service.slug);
  const seoTitle = `${service.name} in Kent, WA | Kent Pest Control Service`;
  const seoDesc = `${service.description} Call ${BUSINESS.phone} for professional ${service.name.toLowerCase()} services in Kent, WA and surrounding communities.`;

  const jsonLd = [
    buildServiceSchema(service),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: serviceUrl },
    ]),
    buildFAQSchema(service.faqs),
  ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        canonical={serviceUrl}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Our Services"
        title={`${service.name} in Kent, WA`}
        description={service.description}
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name, url: serviceUrl },
        ]}
        navigate={navigate}
      />

      {/* Overview with image */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">Service Overview</span>
              <h2 className="section-title">Professional {service.name}</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 text-pretty">
                {service.longDescription}
              </p>
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

      {/* Common Problems */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="section-eyebrow">When You Need This Service</span>
              <h2 className="section-title">Common Problems We Address</h2>
              <p className="mt-4 text-lg text-neutral-600 text-pretty">
                If you are experiencing any of these issues, call us to discuss whether {service.name.toLowerCase()}{' '}
                is the right solution for your situation.
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

            <div className="mt-8 text-center">
              <CallButton label={`Call About ${service.shortName}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="section-eyebrow">Our Process</span>
              <h2 className="section-title">How {service.name} Works</h2>
              <p className="mt-4 text-lg text-neutral-600 text-pretty">
                Our approach to {service.name.toLowerCase()} follows a clear, step-by-step process to ensure
                thorough results.
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

      {/* Service Areas with internal links */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Service Coverage</span>
            <h2 className="section-title">{service.name} Service Areas</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
              {service.name} is available in Kent, WA and surrounding Washington communities. Select your
              city to view {service.name.toLowerCase()} services in your area.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => {
              const url = `/${service.slug}-${area.urlSlug}`;
              const isCurrent = area.slug === BUSINESS.primaryLocationSlug;
              return (
                <button
                  key={area.slug}
                  onClick={() => navigate(url)}
                  className={`card group flex items-center justify-between p-5 text-left ${
                    isCurrent ? 'ring-2 ring-brand-500 bg-brand-50/20' : ''
                  }`}
                >
                  <div>
                    <h3 className="text-base font-bold text-navy-700 group-hover:text-brand-500">
                      {service.name} in {area.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {isCurrent ? 'Primary Location (Current)' : `Available in ${area.shortName}`}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Related Services</span>
            <h2 className="section-title">Related Restoration Services</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((relService) => (
              <button
                key={relService.slug}
                onClick={() => navigate(getServiceUrl(relService.slug))}
                className="card group p-6 text-left"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-50">
                  <Wrench className="h-5 w-5 text-aqua-600" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-700 group-hover:text-brand-500">
                  {relService.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 text-pretty">
                  {relService.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} />

      <FinalCTA
        title={`Call for ${service.name}`}
        description={`Contact Kent Pest Control Service to discuss your ${service.name.toLowerCase()} needs. Call ${BUSINESS.phone} to speak with our team directly.`}
      />
    </>
  );
}
