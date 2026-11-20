import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { LANDING_DATA, LandingFAQ as LandingFAQItem } from './landingData';

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-navy-900 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
            Homeowner Inquiries
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Real answers regarding local Kent water extraction, drying timeframes, and insurance protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3">
          {LANDING_DATA.faqs.map((faq: LandingFAQItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-navy-800 bg-navy-950/80 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-navy-900/60"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-aqua-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-aqua-400 text-navy-950' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-navy-800/80 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 rounded-xl border border-navy-800 bg-navy-950/50 p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-aqua-400">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Have a specific water loss question?</p>
              <p className="text-xs text-neutral-400">Our dispatchers can assess structural risk and quote immediate emergency logistics.</p>
            </div>
          </div>

          <a
            href={LANDING_DATA.phoneLink}
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-aqua-400 px-4 py-2.5 text-xs font-bold text-navy-950 hover:bg-aqua-300 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call {LANDING_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
