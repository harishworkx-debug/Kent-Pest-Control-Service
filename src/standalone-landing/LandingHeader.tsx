import { useState, useEffect } from 'react';
import { Droplets, Phone, Menu, X, ShieldAlert } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 text-white shadow-xl backdrop-blur-md border-b border-navy-700/60'
          : 'bg-navy-900 text-white border-b border-navy-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Text-based Identity with Icon */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-600 text-navy-950 shadow-md shadow-aqua-400/20">
              <Droplets className="h-5 w-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                {LANDING_DATA.identityTitle}
              </span>
              <span className="text-xs font-medium text-aqua-400">
                24/7 Emergency Restoration & Structural Drying
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-semibold text-neutral-200 transition-colors hover:text-aqua-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct Phone CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LANDING_DATA.phoneLink}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 px-4 py-2.5 text-sm font-bold text-navy-950 shadow-lg shadow-aqua-500/25 transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              <Phone className="h-4 w-4 fill-navy-950" />
              <span>{LANDING_DATA.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-800 text-neutral-300 transition-colors hover:text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="border-t border-navy-800 bg-navy-900/98 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-lg lg:hidden">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-neutral-200 transition-colors hover:bg-navy-800 hover:text-aqua-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-navy-800">
            <a
              href={LANDING_DATA.phoneLink}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 py-3 text-base font-bold text-navy-950 shadow-lg shadow-aqua-500/20 active:scale-98"
            >
              <Phone className="h-5 w-5 fill-navy-950" />
              <span>Call Now: {LANDING_DATA.phone}</span>
            </a>
            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
              <ShieldAlert className="h-3.5 w-3.5 text-aqua-400" />
              <span>24/7 Emergency Dispatch in Kent, WA</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
