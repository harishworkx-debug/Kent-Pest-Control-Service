import { Droplets, Phone, MapPin, Shield } from 'lucide-react';
import { LANDING_DATA } from './landingData';

interface LandingFooterProps {
  navigate?: (to: string) => void;
}

export function LandingFooter({ navigate }: LandingFooterProps) {
  const handleLegalLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  const handleAnchor = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-neutral-400 border-t border-navy-800 pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-navy-800">
          {/* Identity Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-600 text-navy-950">
                <Droplets className="h-5 w-5 fill-current" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                {LANDING_DATA.identityTitle}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400 max-w-md">
              Specialized 24/7 structural drying, thermal moisture tracking, and emergency water extraction serving property owners throughout Kent, WA and King County communities.
            </p>

            <div className="mt-4 flex flex-col gap-1.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-aqua-400 shrink-0" />
                <span>{LANDING_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-aqua-400 shrink-0" />
                <a href={LANDING_DATA.phoneLink} className="hover:text-aqua-300">
                  {LANDING_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation & Sections
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <a
                href="#services"
                onClick={(e) => handleAnchor(e, '#services')}
                className="hover:text-aqua-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleAnchor(e, '#about')}
                className="hover:text-aqua-300 transition-colors"
              >
                Local PNW Standards
              </a>
              <a
                href="#service-area"
                onClick={(e) => handleAnchor(e, '#service-area')}
                className="hover:text-aqua-300 transition-colors"
              >
                Service Areas
              </a>
              <a
                href="#why-us"
                onClick={(e) => handleAnchor(e, '#why-us')}
                className="hover:text-aqua-300 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#faq"
                onClick={(e) => handleAnchor(e, '#faq')}
                className="hover:text-aqua-300 transition-colors"
              >
                Homeowner FAQ
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, '#contact')}
                className="hover:text-aqua-300 transition-colors"
              >
                Emergency Contact
              </a>
            </div>
          </div>

          {/* Standards & Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Standards & Policies
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Compliant with Washington State Department of Labor & Industries requirements and IICRC S500 standard reference guide.
            </p>
            <div className="mt-4 flex flex-col space-y-1.5 text-xs">
              <a
                href="/privacy-policy"
                onClick={(e) => handleLegalLink(e, '/privacy-policy')}
                className="hover:text-aqua-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                onClick={(e) => handleLegalLink(e, '/terms-and-conditions')}
                className="hover:text-aqua-300 transition-colors"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {LANDING_DATA.identityTitle}. All rights reserved.</p>
          <p>Direct Emergency Water Extraction & Structural Drying in South King County, WA.</p>
        </div>
      </div>
    </footer>
  );
}
