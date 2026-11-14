import { Phone, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { CallButton } from '@/components/CallButton';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbItems: { name: string; url: string }[];
  navigate: (to: string) => void;
}

export function PageHero({ eyebrow, title, description, breadcrumbItems, navigate }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-700 pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-700 to-brand-800" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-aqua-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-page relative">
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-300">
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />}
              <button
                onClick={() => navigate(item.url)}
                className={index === breadcrumbItems.length - 1 ? 'font-medium text-white' : 'transition-colors hover:text-aqua-300'}
              >
                {item.name}
              </button>
            </span>
          ))}
        </nav>

        {eyebrow && (
          <div className="section-eyebrow text-aqua-400">{eyebrow}</div>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-200 text-pretty">
            {description}
          </p>
        )}
        <div className="mt-8">
          <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
        </div>
      </div>
    </section>
  );
}
