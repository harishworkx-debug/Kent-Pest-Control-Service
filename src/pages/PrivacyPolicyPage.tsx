import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { BUSINESS } from '@/data/business';
import { buildBreadcrumbSchema } from '@/data/schema';

interface PrivacyPolicyPageProps {
  navigate: (to: string) => void;
}

export function PrivacyPolicyPage({ navigate }: PrivacyPolicyPageProps) {
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Kent Pest Control Service"
        description="Privacy policy for Kent Pest Control Service website. Learn how we handle information on our water damage restoration website."
        canonical="/privacy-policy"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Kent Pest Control Service handles information on this website."
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
        navigate={navigate}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none">
              <p className="text-sm text-neutral-500">Last updated: November 2026</p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Introduction</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Kent Pest Control Service ({BUSINESS.name}) operates this website to provide information about
                our water damage restoration services in Kent, WA and surrounding communities. This privacy
                policy explains how information is handled when you visit our website.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Information We Do Not Collect</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website does not use contact forms, quote request forms, estimate forms, booking forms,
                email forms, newsletter sign-ups, chat widgets, or any other lead-capture functionality.
                We do not ask you to submit personal information through this website. The primary way to
                contact us is by phone at {BUSINESS.phone}.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Information Collected Automatically</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Like most websites, this site may collect certain technical information automatically when
                you visit, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-600">
                <li>IP address and browser type</li>
                <li>Pages visited and referring URLs</li>
                <li>Date and time of visits</li>
                <li>General geographic location based on IP address</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This information is used for website analytics and may be used to improve the website.
                It is not used to identify you personally.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Cookies</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website does not use cookies for tracking or advertising purposes. Standard browser
                caching may occur as part of normal website operation.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Third-Party Services</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website embeds a Google Maps iframe to display our business location. Google may
                collect information about your interaction with the embedded map. We do not control
                Google's data collection practices. Please refer to Google's privacy policy for more
                information.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Images on this website may be served from third-party content delivery networks (CDNs).
                These services may log technical information such as IP addresses.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Phone Communications</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                When you call us at {BUSINESS.phone}, information you share during the phone call is handled
                according to applicable laws and business practices. This website does not facilitate or
                record phone calls.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Children's Privacy</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                This website is not directed at children under the age of 13. We do not knowingly collect
                personal information from children.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Changes to This Policy</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                We may update this privacy policy from time to time. Changes will be posted on this page
                with an updated revision date.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-navy-700">Contact Us</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                If you have questions about this privacy policy, call us at{' '}
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
