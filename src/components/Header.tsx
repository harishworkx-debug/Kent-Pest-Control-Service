import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/business';
import { useRouter } from '@/hooks/useRouter';

interface HeaderProps {
  navigate: (to: string) => void;
  currentPath: string;
}

export function Header({ navigate, currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [currentPath]);

  const handleNav = (to: string) => {
    setMobileOpen(false);
    navigate(to);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(path + '-') || currentPath === path;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
            <button onClick={() => handleNav('/')} className="shrink-0">
              <Logo />
            </button>

            <nav className="hidden items-center gap-7 lg:flex">
              <button
                onClick={() => handleNav('/')}
                className={`nav-link ${isActive('/') ? 'text-brand-500' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('/about')}
                className={`nav-link ${isActive('/about') ? 'text-brand-500' : ''}`}
              >
                About Us
              </button>

              <div className="group relative">
                <button className={`nav-link flex items-center gap-1 ${currentPath.startsWith('/services') || SERVICES.some(s => currentPath.includes(s.slug)) ? 'text-brand-500' : ''}`}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="dropdown-panel">
                  <div className="grid gap-0.5">
                    <button
                      onClick={() => handleNav('/services')}
                      className="rounded-lg px-3 py-2 text-left text-sm font-medium text-navy-600 transition-colors hover:bg-neutral-50 hover:text-brand-500"
                    >
                      All Services
                    </button>
                    <div className="my-1 h-px bg-neutral-100" />
                    {SERVICES.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleNav(`/services/${service.slug}`)}
                        className="rounded-lg px-3 py-2 text-left text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-brand-500"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className={`nav-link flex items-center gap-1 ${currentPath.startsWith('/service-areas') || currentPath.includes('-wa') ? 'text-brand-500' : ''}`}>
                  Service Areas
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="dropdown-panel">
                  <div className="grid gap-0.5">
                    <button
                      onClick={() => handleNav('/service-areas')}
                      className="rounded-lg px-3 py-2 text-left text-sm font-medium text-navy-600 transition-colors hover:bg-neutral-50 hover:text-brand-500"
                    >
                      All Service Areas
                    </button>
                    <div className="my-1 h-px bg-neutral-100" />
                    {SERVICE_AREAS.map((area) => (
                      <button
                        key={area.slug}
                        onClick={() => handleNav(`/service-areas/${area.slug}`)}
                        className="rounded-lg px-3 py-2 text-left text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-brand-500"
                      >
                        {area.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleNav('/contact')}
                className={`nav-link ${isActive('/contact') ? 'text-brand-500' : ''}`}
              >
                Contact
              </button>
            </nav>

            <div className="hidden lg:block">
              <CallButton label={`Call ${BUSINESS.phone}`} />
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-neutral-100 bg-white lg:hidden">
            <div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
              <div className="flex flex-col gap-1">
                <MobileLink onClick={() => handleNav('/')} active={isActive('/')}>Home</MobileLink>
                <MobileLink onClick={() => handleNav('/about')} active={isActive('/about')}>About Us</MobileLink>

                <div className="py-1">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-medium text-navy-700"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-neutral-200 pl-3">
                      <MobileSubLink onClick={() => handleNav('/services')}>All Services</MobileSubLink>
                      {SERVICES.map((service) => (
                        <MobileSubLink key={service.slug} onClick={() => handleNav(`/services/${service.slug}`)}>
                          {service.name}
                        </MobileSubLink>
                      ))}
                    </div>
                  )}
                </div>

                <div className="py-1">
                  <button
                    onClick={() => setAreasOpen(!areasOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-medium text-navy-700"
                  >
                    Service Areas
                    <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {areasOpen && (
                    <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-neutral-200 pl-3">
                      <MobileSubLink onClick={() => handleNav('/service-areas')}>All Service Areas</MobileSubLink>
                      {SERVICE_AREAS.map((area) => (
                        <MobileSubLink key={area.slug} onClick={() => handleNav(`/service-areas/${area.slug}`)}>
                          {area.name}
                        </MobileSubLink>
                      ))}
                    </div>
                  )}
                </div>

                <MobileLink onClick={() => handleNav('/contact')} active={isActive('/contact')}>Contact</MobileLink>
              </div>

              <div className="mt-4">
                <CallButton label={`Call ${BUSINESS.phone}`} className="w-full" />
              </div>
            </div>
          </div>
        )}
      </header>

      <MobileCallBar />
    </>
  );
}

function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <a
        href={BUSINESS.phoneLink}
        className="flex items-center justify-center gap-2.5 bg-aqua-400 py-3.5 text-base font-bold text-navy-900 shadow-lg transition-colors hover:bg-aqua-300 active:bg-aqua-500"
      >
        <Phone className="h-5 w-5" />
        Call Now — {BUSINESS.phone}
      </a>
    </div>
  );
}

function MobileLink({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-2.5 text-left text-base font-medium transition-colors ${
        active ? 'bg-brand-50 text-brand-500' : 'text-navy-700 hover:bg-neutral-50'
      }`}
    >
      {children}
    </button>
  );
}

function MobileSubLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-left text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-brand-500"
    >
      {children}
    </button>
  );
}
