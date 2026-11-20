import { ShieldCheck, Zap, FileText, Activity } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export function LandingWhyUs() {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="h-6 w-6 text-aqua-400" />;
      case 1:
        return <Zap className="h-6 w-6 text-aqua-400" />;
      case 2:
        return <FileText className="h-6 w-6 text-aqua-400" />;
      case 3:
        return <Activity className="h-6 w-6 text-aqua-400" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-aqua-400" />;
    }
  };

  return (
    <section id="why-us" className="bg-navy-950 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
            Professional Standards
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Property Owners Rely on Our Mitigation Standard
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg text-pretty">
            Structured protocols, non-destructive moisture diagnostics, and verifiable drying curves to protect structural integrity and property value.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_DATA.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-navy-800 bg-navy-900/70 p-6 transition-all duration-300 hover:border-navy-700 hover:bg-navy-900 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 border border-navy-700">
                {getPillarIcon(idx)}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Highlights strip */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 border-t border-navy-800/80 pt-8 text-center sm:text-left">
          <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-800">
            <span className="text-2xl font-extrabold text-aqua-400">100%</span>
            <p className="mt-1 text-sm font-semibold text-white">Moisture Meter Documented</p>
            <p className="text-xs text-neutral-400">Thermal imaging verification on every structural member before completion.</p>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-800">
            <span className="text-2xl font-extrabold text-aqua-400">24/7</span>
            <p className="mt-1 text-sm font-semibold text-white">Continuous Monitoring</p>
            <p className="text-xs text-neutral-400">Daily psychrometric temperature, relative humidity, and grain-depression logs.</p>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-800">
            <span className="text-2xl font-extrabold text-aqua-400">Direct</span>
            <p className="mt-1 text-sm font-semibold text-white">Carrier Itemization</p>
            <p className="text-xs text-neutral-400">Standardized line-item documentation accepted by all major insurance adjusters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
