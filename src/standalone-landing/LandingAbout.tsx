import { ShieldCheck, CloudRain, ThermometerSnowflake, Home, CheckCircle2 } from 'lucide-react';
import { LANDING_DATA } from './landingData';

export function LandingAbout() {
  return (
    <section id="about" className="bg-navy-950 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Visual Info Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl border border-navy-800 bg-navy-900/80 p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-aqua-400">
                Pacific Northwest Environmental Realities
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Why Water Mitigation in Kent Requires Local Knowledge
              </h3>

              <div className="mt-6 space-y-5 text-sm text-neutral-300">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-aqua-400 border border-navy-700">
                    <CloudRain className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Green River Valley Moisture</h4>
                    <p className="mt-0.5 text-xs text-neutral-400">
                      Persistent high ambient humidity in the Kent valley impedes natural evaporation, requiring industrial desiccant or LGR dehumidification to prevent wood rot.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-aqua-400 border border-navy-700">
                    <ThermometerSnowflake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Winter Freezing Snaps</h4>
                    <p className="mt-0.5 text-xs text-neutral-400">
                      Uninsulated crawl space supply lines and exterior hose bibs frequently freeze during sub-freezing Arctic winds, causing sudden burst pipes behind finished drywall.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-aqua-400 border border-navy-700">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Local Crawl Space Construction</h4>
                    <p className="mt-0.5 text-xs text-neutral-400">
                      Many Kent homes feature post-and-pier foundations over natural soil that require specialized vapor barrier evaluation and structural joist drying after flooding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regulatory Standards Callout */}
              <div className="mt-6 rounded-xl border border-navy-700 bg-navy-950/90 p-4">
                <p className="text-xs font-medium text-neutral-400">Compliance & Regulatory Standards</p>
                <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                  Every extraction and structural drying plan follows the Washington State Department of Labor & Industries (L&I) worker safety standards and IICRC S500 guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
              Regional Experience & Standards
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Specialized Water Extraction & Drying Built for Kent Homes
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
              When water intrudes into a residential or commercial building in Kent, WA, standard surface cleaning is never enough. Moisture rapidly migrates behind baseboards, absorbs upward through drywall via capillary action, and settles into subflooring and framing cavities.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Without rapid high-capacity extraction and balanced psychrometric drying, moisture creates long-term structural weakness and microbial colonization. We deploy calibrated moisture meters, penetrating pin sensors, and infrared thermography to map hidden water corridors throughout your property before executing an engineered dry-out plan.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-neutral-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-aqua-400 shrink-0" />
                <span>Zero guesswork moisture logging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-aqua-400 shrink-0" />
                <span>Direct insurance claim assistance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-aqua-400 shrink-0" />
                <span>Non-destructive drying when feasible</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-aqua-400 shrink-0" />
                <span>Hospital-grade antimicrobial sanitization</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={LANDING_DATA.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl bg-aqua-400 px-5 py-3 text-sm font-bold text-navy-950 shadow-md hover:bg-aqua-300 transition-colors"
              >
                <span>Speak with an On-Call Technician</span>
              </a>
              <span className="text-xs text-neutral-400">
                Centrally located at 327 5th Ave S, Kent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
