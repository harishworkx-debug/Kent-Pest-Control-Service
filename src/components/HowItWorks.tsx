import { Phone, MessageSquare, Wrench, CheckCircle2 } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Call Us',
      description: `Call ${BUSINESS.phone} to reach Kent Pest Control Service and speak with our team directly.`,
    },
    {
      icon: MessageSquare,
      title: 'Explain Your Situation',
      description: 'Describe your property damage or service need so we can understand what you are dealing with.',
    },
    {
      icon: Wrench,
      title: 'Discuss Service Options',
      description: 'We will discuss available services, service areas, and whether we can assist with your specific situation.',
    },
    {
      icon: CheckCircle2,
      title: 'Confirm Next Steps',
      description: 'Together, we confirm the next steps — all handled by phone, no forms or online booking required.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 text-pretty">
            Getting help is straightforward — just pick up the phone and call us. Here is what to expect.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-bold text-aqua-600">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-navy-700">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 text-pretty">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex">
                    <div className="h-px w-6 bg-neutral-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.phoneLink}
            className="btn-call-lg"
          >
            <Phone className="h-6 w-6" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
