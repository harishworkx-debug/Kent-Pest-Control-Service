import { MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';
import { LANDING_DATA, LandingArea } from './landingData';

export function LandingAreas() {
  return (
    <section id="service-area" className="bg-navy-900 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
            Regional Coverage
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Service Areas in Kent, WA & South King County
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg text-pretty">
            Centrally based on 5th Ave S in downtown Kent, providing prompt emergency dispatch to homes and facilities across South King County.
          </p>
        </div>

        {/* Primary Hub Spotlight */}
        <div className="mt-12 rounded-2xl border border-aqua-400/40 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-400/20 text-aqua-400 border border-aqua-400/40">
                <Navigation className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white">Primary Operations Base: Kent, WA</h3>
                  <span className="rounded-full bg-aqua-400/20 px-2.5 py-0.5 text-xs font-bold text-aqua-300">
                    Headquarters
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-300">
                  Physical Base: 327 5th Ave S, Kent, WA 98032 • Priority response across Kent East Hill, West Hill, Valley, & Scenic Hill.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {LANDING_DATA.kentZips.map((zip) => (
                    <span
                      key={zip}
                      className="rounded-md bg-navy-800 px-2 py-0.5 text-xs font-mono font-medium text-neutral-300 border border-navy-700"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={LANDING_DATA.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl bg-aqua-400 px-5 py-3 text-sm font-bold text-navy-950 shadow-md hover:bg-aqua-300 transition-colors"
              >
                <span>Dispatch to Kent: {LANDING_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map & Surrounding Communities Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* 9 Surrounding Communities */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-aqua-400" />
              <span>Genuinely Served Surrounding Communities</span>
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {LANDING_DATA.serviceAreas
                .filter((area) => !area.isPrimary)
                .map((area: LandingArea) => (
                  <div
                    key={area.name}
                    className="rounded-xl border border-navy-800 bg-navy-950/70 p-4 transition-colors hover:border-navy-700 hover:bg-navy-950"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{area.name}</span>
                      <span className="text-xs text-neutral-400">{area.county}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="rounded bg-navy-800 px-1.5 py-0.5 text-[11px] font-mono text-neutral-300"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="h-4 w-4 text-aqua-400 shrink-0" />
              <span>Emergency crews operate with standard rapid arrival times throughout all listed King County municipalities.</span>
            </div>
          </div>

          {/* Clean Google Maps Embed (Zero business parameter) */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white mb-4">
              Local Operating Coverage Map
            </h3>
            <div className="overflow-hidden rounded-2xl border border-navy-700 bg-navy-950 shadow-xl aspect-video lg:aspect-square">
              <iframe
                title="Kent WA Service Area Map"
                src={LANDING_DATA.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[110%]"
              />
            </div>
            <p className="mt-2 text-xs text-neutral-400 text-center">
              Centered on Kent, WA 98032 • Centrally dispatched across all South King County ZIP codes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
