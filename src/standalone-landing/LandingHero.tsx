import { Phone, ArrowDown, ShieldCheck, Clock, MapPin, CheckCircle, Droplet } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export function LandingHero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-24 lg:py-28">
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-aqua-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-aqua-300 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-aqua-400" />
              <span>Direct Emergency Dispatch • Kent, WA & King County</span>
            </div>

            {/* Strict H1: [Niche] in [Location, State] */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Water Damage Restoration in Kent, WA
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-6 text-lg leading-relaxed text-neutral-300 sm:text-xl text-pretty max-w-2xl">
              Rapid on-site emergency water extraction, commercial dehumidification, and structural drying. We stabilize moisture in drywall, flooring, and crawl spaces across Kent and South King County before structural rot or mold takes hold.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={LANDING_DATA.phoneLink}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 px-7 py-4 text-base font-bold text-navy-950 shadow-xl shadow-aqua-500/25 transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                <Phone className="h-5 w-5 fill-navy-950" />
                <span>Call {LANDING_DATA.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-navy-800/80 px-6 py-4 text-base font-semibold text-neutral-100 shadow-sm transition-all duration-200 hover:border-neutral-500 hover:bg-navy-700 active:scale-95"
              >
                <span>Request Rapid Inspection</span>
                <ArrowDown className="h-4 w-4 text-aqua-400" />
              </a>
            </div>

            {/* Quick Location Snapshot */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-aqua-400" />
                <span>24/7 Immediate Dispatch</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-aqua-400" />
                <span>Service Base: 327 5th Ave S, Kent, WA 98032</span>
              </span>
            </div>
          </div>

          {/* Hero Feature Box / Trust Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-700/80 bg-navy-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-navy-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-400/15 text-aqua-400">
                    <Droplet className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Emergency Response Standard</h2>
                    <p className="text-xs text-neutral-400">Kent & South King County</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                  Active Dispatch
                </span>
              </div>

              {/* 4 Trust Criteria */}
              <ul className="mt-6 space-y-4 text-sm text-neutral-200">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <span>
                    <strong className="text-white">IICRC S500 Standards:</strong> Comprehensive moisture extraction and structural drying protocols.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <span>
                    <strong className="text-white">Local Kent Dispatch:</strong> Positioned near Hwy 167 & WA-516 for rapid Valley & East Hill arrival.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <span>
                    <strong className="text-white">Insurance Assistance:</strong> Daily psychrometric readings, drying logs & photo documentation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <span>
                    <strong className="text-white">Commercial Drying Equipment:</strong> LGR industrial dehumidifiers, air movers & thermal cameras.
                  </span>
                </li>
              </ul>

              {/* Direct Call Banner inside Card */}
              <div className="mt-8 rounded-xl bg-navy-950/80 p-4 border border-navy-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-neutral-400">Direct Technician Line</p>
                  <p className="text-base font-bold text-white">{LANDING_DATA.phone}</p>
                </div>
                <a
                  href={LANDING_DATA.phoneLink}
                  className="rounded-lg bg-aqua-400 px-3.5 py-2 text-xs font-bold text-navy-950 transition hover:bg-aqua-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
