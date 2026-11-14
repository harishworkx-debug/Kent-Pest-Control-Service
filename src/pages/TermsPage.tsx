import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { BUSINESS } from '@/data/business';
import { buildBreadcrumbSchema } from '@/data/schema';

interface TermsPageProps {
  navigate: (to: string) => void;
}

export function TermsPage({ navigate }: TermsPageProps) {
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Terms and Conditions', url: '/terms-and-conditions' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Terms and Conditions | Kent Pest Control Service"
        description="Terms and conditions for the Kent Pest Control Service website. Review the terms governing use of our water damage restoration website."
        canonical="/terms-and-conditions"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="The terms governing use of the Kent Pest Control Service website."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Terms and Conditions', url: '/terms-and-conditions' },
        ]}
        navigate={navigate}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-neutral-500">Last updated: November 2026</p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Acceptance of Terms</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                By accessing and using this website, you accept and agree to be bound by these terms and
                conditions. If you do not agree to these terms, please do not use this website.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">About This Website</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website is operated by {BUSINESS.name}, a water damage restoration service located at
                {' '}{BUSINESS.address}. The website provides information about our water damage restoration
                services in Kent, WA and surrounding communities.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Phone Calls Only</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website does not offer online booking, contact forms, estimate forms, or any other
                online lead-capture functionality. The only way to contact us through this website is by
                clicking a phone link, which initiates a phone call to {BUSINESS.phone}. By using this
                website, you acknowledge that all service inquiries and arrangements are handled by phone.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">No Guarantee of Service</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                The information on this website describes services we may provide. Availability of services
                depends on various factors including location, scheduling, and the nature of the situation.
                Calling us does not guarantee that we can or will provide services. Service availability
                and terms are confirmed directly by phone.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Information Accuracy</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                We strive to provide accurate information on this website. However, we do not warrant that
                all information is current, complete, or error-free. Business details, service availability,
                and coverage areas may change. Call us at {BUSINESS.phone} to confirm current information.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">No Professional Advice</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Content on this website is provided for general informational purposes only and does not
                constitute professional advice. Water damage situations vary, and the information on this
                website should not be relied upon as a substitute for direct consultation. Call us to
                discuss your specific situation.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">External Links</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website may contain links to external websites, including Google Maps. We are not
                responsible for the content, privacy practices, or terms of external websites.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Limitation of Liability</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {BUSINESS.name} shall not be liable for any damages arising from the use of this website
                or reliance on information contained herein. This includes but is not limited to direct,
                indirect, incidental, and consequential damages.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Changes to Terms</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                We may update these terms and conditions at any time. Changes will be posted on this page
                with an updated revision date. Continued use of the website after changes constitutes
                acceptance of the updated terms.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Contact</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                For questions about these terms and conditions, call us at{' '}
                <a href={BUSINESS.phoneLink} className="font-semibold text-brand-500 hover:text-brand-600">
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
