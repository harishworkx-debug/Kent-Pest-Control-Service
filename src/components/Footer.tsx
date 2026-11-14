import { Phone, MapPin, Globe, Droplets, Clock } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { BUSINESS, SERVICES, SERVICE_AREAS, getServiceUrl, getServiceAreaUrl } from '@/data/business';

interface FooterProps {
  navigate: (to: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const handleNav = (to: string) => {
    navigate(to);
  };

  return (
    <footer className="bg-navy-700 text-neutral-200">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              Professional water damage restoration services serving Kent, Washington and surrounding communities.
              Call us to discuss your property restoration needs.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-aqua-400 px-5 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-aqua-300 hover:shadow-lg hover:shadow-aqua-400/20"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-aqua-400">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a
                    href={getServiceUrl(service.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(getServiceUrl(service.slug));
                    }}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/services');
                  }}
                  className="text-sm font-semibold text-aqua-400 transition-colors hover:text-aqua-300"
                >
                  View All Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-aqua-400">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <a
                    href={getServiceAreaUrl(area.slug)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(getServiceAreaUrl(area.slug));
                    }}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    Water Damage in {area.shortName}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/service-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/service-areas');
                  }}
                  className="text-sm font-semibold text-aqua-400 transition-colors hover:text-aqua-300"
                >
                  View All Areas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-aqua-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-start gap-2.5 text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" />
                {BUSINESS.address}
              </li>
              <li>
                <a
                  href={BUSINESS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" />
                  Official Website
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" />
                  Google Maps Listing
                </a>
              </li>
            </ul>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/about');
                }}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                About Us
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/contact');
                }}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Contact
              </a>
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/privacy-policy');
                }}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('/terms-and-conditions');
                }}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

        {/* City-by-City Restoration Coverage Directory (SEO Internal Linking Mesh) */}
        <div className="mt-12 border-t border-navy-600/60 pt-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-aqua-400">
              Washington Service Area Directory & Local Coverage
            </span>
            <p className="text-xs text-neutral-400">
              Explore 24/7 water damage restoration, water removal, and emergency cleanup across King County communities:
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 text-xs sm:grid-cols-3 md:grid-cols-5">
            {SERVICE_AREAS.map((area) => (
              <div key={area.slug} className="flex flex-col gap-1.5">
                <a
                  href={getServiceAreaUrl(area.slug)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(getServiceAreaUrl(area.slug));
                  }}
                  className="font-bold text-white transition-colors hover:text-aqua-300"
                >
                  {area.name}
                </a>
                <ul className="space-y-1 text-neutral-400">
                  {SERVICES.slice(0, 5).map((s) => {
                    const comboUrl = `/${s.slug}-${area.urlSlug}`;
                    return (
                      <li key={s.slug}>
                        <a
                          href={comboUrl}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNav(comboUrl);
                          }}
                          className="transition-colors hover:text-neutral-200"
                        >
                          {s.shortName}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 border-t border-navy-600 pt-6 text-xs text-neutral-400">
          <Droplets className="h-3.5 w-3.5 text-aqua-400" />
          {BUSINESS.name} — {BUSINESS.category}
          <span className="ml-auto">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
