import { Droplets, ShieldAlert, Waves, Wrench, Shield, Home, ArrowRight, Check } from 'lucide-react';
import { LANDING_DATA, LandingService } from './landingData';

interface LandingServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function LandingServices({ onSelectService }: LandingServicesProps) {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'structural-drying':
        return <Home className="h-6 w-6 text-aqua-400" />;
      case 'water-extraction':
        return <Droplets className="h-6 w-6 text-aqua-400" />;
      case 'flood-cleanup':
        return <Waves className="h-6 w-6 text-aqua-400" />;
      case 'burst-pipes':
        return <Wrench className="h-6 w-6 text-aqua-400" />;
      case 'sewage-cleanup':
        return <ShieldAlert className="h-6 w-6 text-aqua-400" />;
      case 'crawlspace-basement':
        return <Shield className="h-6 w-6 text-aqua-400" />;
      default:
        return <Droplets className="h-6 w-6 text-aqua-400" />;
    }
  };

  const handleInquire = (e: React.MouseEvent, serviceTitle: string) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-navy-900 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
            Emergency & Structural Services
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Restoration Services in Kent, WA
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg text-pretty">
            Targeted moisture removal and drying procedures engineered for residential and commercial structures throughout Kent and King County.
          </p>
        </div>

        {/* 6 Responsive Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_DATA.services.map((service: LandingService) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-navy-700/80 bg-navy-950/70 p-6 transition-all duration-300 hover:border-aqua-400/50 hover:bg-navy-950 hover:shadow-xl hover:shadow-aqua-950/30"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 border border-navy-700">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="rounded-full bg-navy-800 px-3 py-1 text-xs font-semibold text-aqua-400 border border-navy-700">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {service.shortDesc}
                </p>

                {/* Benefit Checklist */}
                <div className="mt-5 border-t border-navy-800 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Key Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-aqua-400 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Inquiry Action */}
              <div className="mt-6 pt-5 border-t border-navy-800/80 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {service.responseTime}
                </span>
                <a
                  href="#contact"
                  onClick={(e) => handleInquire(e, service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-aqua-400 hover:text-aqua-300 transition-colors"
                >
                  <span>Request Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Urgent Call Banner */}
        <div className="mt-12 rounded-2xl border border-aqua-400/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need Immediate Water Extraction in Kent?</h3>
            <p className="mt-1 text-sm text-neutral-300">
              Standing water causes structural degradation and microbial colonization within 24–48 hours. Speak directly with a local dispatch technician.
            </p>
          </div>
          <a
            href={LANDING_DATA.phoneLink}
            className="shrink-0 inline-flex items-center gap-2.5 rounded-xl bg-aqua-400 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg hover:bg-aqua-300 transition-colors"
          >
            <span>Call {LANDING_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
