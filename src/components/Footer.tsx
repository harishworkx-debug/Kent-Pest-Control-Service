import { Phone, MapPin, Globe, Droplets, Clock } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/business';

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
                  <button
                    onClick={() => handleNav(`/services/${service.slug}`)}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="text-sm font-semibold text-aqua-400 transition-colors hover:text-aqua-300"
                >
                  View All Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-aqua-400">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <button
                    onClick={() => handleNav(`/service-areas/${area.slug}`)}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('/service-areas')}
                  className="text-sm font-semibold text-aqua-400 transition-colors hover:text-aqua-300"
                >
                  View All Areas
                </button>
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
              <button
                onClick={() => handleNav('/about')}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                About Us
              </button>
              <button
                onClick={() => handleNav('/contact')}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Contact
              </button>
              <button
                onClick={() => handleNav('/privacy-policy')}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNav('/terms-and-conditions')}
                className="text-left text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Terms and Conditions
              </button>
            </div>
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
