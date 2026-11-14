import { SEO } from '@/components/SEO';
import { CallButton } from '@/components/CallButton';
import { BUSINESS } from '@/data/business';
import { Droplets, Home, Wrench, MapPin } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (to: string) => void;
}

export function NotFoundPage({ navigate }: NotFoundPageProps) {
  return (
    <>
      <SEO
        title="Page Not Found | Kent Pest Control Service"
        description="The page you are looking for could not be found. Call (253) 523-3921 for water damage restoration services in Kent, WA."
        canonical="/404"
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-700 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-700 to-brand-800" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-aqua-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />

        <div className="container-page relative text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <Droplets className="h-10 w-10 text-aqua-400" />
          </div>

          <h1 className="mt-8 text-6xl font-extrabold text-white sm:text-7xl">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page Not Found</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300 text-pretty">
            The page you are looking for may have been moved or no longer exists. Call us directly for
            water damage restoration services, or explore our main pages below.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton variant="large" label={`Call ${BUSINESS.phone}`} />
            <button
              onClick={() => navigate('/')}
              className="btn-outline"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </button>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <button
              onClick={() => navigate('/services')}
              className="rounded-xl bg-white/5 p-5 text-center ring-1 ring-white/10 transition-all hover:bg-white/10"
            >
              <Wrench className="mx-auto h-6 w-6 text-aqua-400" />
              <div className="mt-2 text-sm font-semibold text-white">Our Services</div>
            </button>
            <button
              onClick={() => navigate('/service-areas')}
              className="rounded-xl bg-white/5 p-5 text-center ring-1 ring-white/10 transition-all hover:bg-white/10"
            >
              <MapPin className="mx-auto h-6 w-6 text-aqua-400" />
              <div className="mt-2 text-sm font-semibold text-white">Service Areas</div>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-xl bg-white/5 p-5 text-center ring-1 ring-white/10 transition-all hover:bg-white/10"
            >
              <Droplets className="mx-auto h-6 w-6 text-aqua-400" />
              <div className="mt-2 text-sm font-semibold text-white">Contact Us</div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
