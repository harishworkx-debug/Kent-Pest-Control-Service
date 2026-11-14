import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_AREAS, getServiceUrl, getServiceAreaUrl } from '@/data/business';
import type { ServiceInfo, ServiceAreaInfo } from '@/data/business';

interface ServiceCardProps {
  service: ServiceInfo;
  navigate: (to: string) => void;
}

export function ServiceCard({ service, navigate }: ServiceCardProps) {
  const url = getServiceUrl(service.slug);
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        navigate(url);
      }}
      className="card group flex cursor-pointer flex-col overflow-hidden text-left"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{service.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-neutral-600 text-pretty">{service.description}</p>

        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors group-hover:text-brand-600">
          View Service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>

        <div
          className="mt-4 border-t border-neutral-100 pt-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = BUSINESS.phoneLink;
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-aqua-600 transition-colors hover:text-aqua-700"
          >
            <Phone className="h-4 w-4" />
            Call about this service
          </span>
        </div>
      </div>
    </a>
  );
}

interface ServiceAreaCardProps {
  area: ServiceAreaInfo;
  navigate: (to: string) => void;
}

export function ServiceAreaCard({ area, navigate }: ServiceAreaCardProps) {
  const url = getServiceAreaUrl(area.slug);
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        navigate(url);
      }}
      className="card group flex cursor-pointer items-center justify-between p-5 text-left"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
          <MapPin className="h-5 w-5 text-brand-500" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy-700 group-hover:text-brand-500">{area.name}</h3>
          <p className="mt-0.5 text-sm text-neutral-500">Water Damage Restoration Services</p>
        </div>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-aqua-600" />
    </a>
  );
}
