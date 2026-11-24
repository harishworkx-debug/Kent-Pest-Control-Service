import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { LANDING_DATA } from './landingData';

interface LandingContactProps {
  initialService?: string;
}

export function LandingContact({ initialService = '' }: LandingContactProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: initialService || LANDING_DATA.services[0].title,
    address: '',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a 10-digit phone number.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your city or property street in Kent/King County.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous local verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="bg-navy-950 py-16 text-white sm:py-24 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua-400/20 bg-aqua-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-300">
            Residential Emergency Dispatch
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Request Residential Water Damage Inspection
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg text-pretty">
            Immediate phone consultation or local residential dispatch across Kent and nearby communities. Exclusively for homeowners.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Direct Call & Base Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-aqua-400/30 bg-gradient-to-br from-navy-900 to-navy-950 p-6 sm:p-8 shadow-2xl">
              <span className="inline-block rounded-full bg-aqua-400/10 px-3 py-1 text-xs font-bold text-aqua-400 border border-aqua-400/20">
                Fastest Response
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Direct Homeowner Phone Line
              </h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                For active plumbing ruptures, standing floodwater, or rapid ceiling leaks, direct phone calls bypass form review and activate immediate dispatch assistance.
              </p>

              <div className="mt-6">
                <a
                  href={LANDING_DATA.phoneLink}
                  className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 px-6 py-4 text-lg font-bold text-navy-950 shadow-xl shadow-aqua-500/25 transition hover:brightness-110 active:scale-98"
                >
                  <Phone className="h-6 w-6 fill-navy-950" />
                  <span>{LANDING_DATA.phone}</span>
                </a>
                <p className="mt-2 text-[10px] text-neutral-400 text-center">
                  *24/7 routing and emergency dispatch response times are subject to local technician availability and regional scheduling and are not guaranteed.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-navy-800 space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <div>
                    <strong className="block text-white">Physical Service Operations</strong>
                    <span className="text-xs text-neutral-400">{LANDING_DATA.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <div>
                    <strong className="block text-white">Operating Hours</strong>
                    <span className="text-xs text-neutral-400">{LANDING_DATA.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-aqua-400 mt-0.5" />
                  <div>
                    <strong className="block text-white">Residential Service Territory</strong>
                    <span className="text-xs text-neutral-400">Exclusively for residential properties in Kent, Renton, Auburn, Covington, Federal Way, Tukwila, SeaTac & Burien</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Safety Advisory */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-200/90 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
                <AlertCircle className="h-4 w-4" />
                <span>Life Safety Advisory</span>
              </div>
              Do not enter rooms with standing water if power lines, extension cords, or submerged wall sockets are live. Shut off the main circuit breaker if safely accessible from a dry area.
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-navy-800 bg-navy-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">
                    Inquiry Received & Logged
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-neutral-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your request for <span className="text-aqua-300 font-semibold">{formData.service}</span> has been registered for property address in <span className="text-white">{formData.address}</span>.
                  </p>
                  <div className="mt-6 rounded-xl border border-navy-700 bg-navy-950 p-4 inline-block text-left text-xs text-neutral-300">
                    <p><strong>For emergency water extraction within 60 minutes:</strong></p>
                    <p className="mt-1 text-aqua-400 font-bold text-base">Call {LANDING_DATA.phone} directly</p>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          service: LANDING_DATA.services[0].title,
                          address: '',
                          details: '',
                        });
                      }}
                      className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold text-white">
                    Submit Residential Service Request
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400">
                    Provide details regarding your home's water intrusion for prompt dispatcher review. (Homeowners only).
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Miller"
                        className={`w-full rounded-xl border bg-navy-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-aqua-400 transition ${
                          errors.fullName ? 'border-rose-500' : 'border-navy-700'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(253) 000-0000"
                        className={`w-full rounded-xl border bg-navy-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-aqua-400 transition ${
                          errors.phone ? 'border-rose-500' : 'border-navy-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="mt-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Required Mitigation Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-aqua-400 transition"
                    >
                      {LANDING_DATA.services.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-navy-900 text-white">
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Location */}
                  <div className="mt-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Residential Property Address or City (Kent / King County) *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 104th Ave SE, Kent, WA 98031"
                      className={`w-full rounded-xl border bg-navy-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-aqua-400 transition ${
                        errors.address ? 'border-rose-500' : 'border-navy-700'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-xs text-rose-400">{errors.address}</p>
                    )}
                  </div>

                  {/* Details / Scope */}
                  <div className="mt-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Brief Description of Residential Water Issue (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="e.g. Sump pump failure, second-floor pipe burst, standing water in basement..."
                      className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-aqua-400 transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 py-3.5 text-base font-bold text-navy-950 shadow-lg shadow-aqua-500/20 transition hover:brightness-110 active:scale-98 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Dispatch Details...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 fill-navy-950" />
                          <span>Submit Request for Rapid Review</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-xs text-neutral-400">
                      Exclusively for residential properties. All calls and form inquiries are routed to independent local service contractors.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
