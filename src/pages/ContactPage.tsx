import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { FinalCTA } from '@/components/FinalCTA';
import { CallButton } from '@/components/CallButton';
import { BUSINESS } from '@/data/business';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/data/schema';
import { Phone, MapPin, Globe, ExternalLink, Clock } from 'lucide-react';

interface ContactPageProps {
  navigate: (to: string) => void;
}

export function ContactPage({ navigate }: ContactPageProps) {
  const jsonLd = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Contact Us | Kent Pest Control Service — Kent, WA"
        description="Contact Kent Pest Control Service for water damage restoration in Kent, WA. Call (253) 523-3921. Located at 327 5th Ave S, Kent, WA 98032. Phone calls only — no forms."
        canonical="/contact"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Kent Pest Control Service"
        description="The best way to reach us is by phone. Call us to discuss your water damage restoration needs. We handle all inquiries by phone — no forms, no online booking."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
        navigate={navigate}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">Contact Information</span>
              <h2 className="section-title">Reach Us By Phone</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 text-pretty">
                We handle all communication by phone. Whether you need water damage restoration,
                water removal, structural drying, or flood damage cleanup, calling us is the fastest
                way to get help.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-50">
                    <Phone className="h-6 w-6 text-aqua-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Phone</div>
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-lg font-bold text-navy-700 transition-colors hover:text-brand-500"
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="mt-1 text-sm text-neutral-500">Call us directly — no forms needed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <MapPin className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Address</div>
                    <p className="text-base font-medium text-navy-700">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                    >
                      View on Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Globe className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Website</div>
                    <a
                      href={BUSINESS.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-navy-700 transition-colors hover:text-brand-500"
                    >
                      www.kent-pestcontrol.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Clock className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Business Hours</div>
                    <p className="text-base font-medium text-navy-700">Call to confirm availability</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Business hours are not published. Call {BUSINESS.phone} to discuss your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-neutral-200/60">
                <iframe
                  src={BUSINESS.googleMapsEmbed}
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '450px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Kent Pest Control Service location on Google Maps"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-navy-700 p-6 text-center">
                <h3 className="text-lg font-bold text-white">Prefer to speak with us directly?</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Call now to discuss your water damage restoration needs.
                </p>
                <div className="mt-4">
                  <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Call Kent Pest Control Service Today"
        description="Phone calls are the only way we handle inquiries. No forms, no online booking, no chat widgets — just a direct conversation about how we can help."
      />
    </>
  );
}
