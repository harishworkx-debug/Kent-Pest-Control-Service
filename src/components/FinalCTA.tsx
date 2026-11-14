import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface FinalCTAProps {
  title?: string;
  description?: string;
}

export function FinalCTA({
  title = 'Call Kent Pest Control Service Today',
  description = 'Contact us to discuss your water damage restoration needs. Our team is ready to help you with professional restoration services in Kent, WA and surrounding communities.',
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 via-brand-800 to-navy-800 py-16 lg:py-20">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-aqua-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-aqua-400/5 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-200 text-pretty">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-aqua-400 px-8 py-4 text-lg font-bold text-navy-900 transition-all duration-300 ease-out-expo hover:bg-aqua-300 hover:shadow-xl hover:shadow-aqua-400/30 hover:-translate-y-0.5"
            >
              <Phone className="h-6 w-6" />
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            Phone calls only — no forms, no online booking
          </p>
        </div>
      </div>
    </section>
  );
}
