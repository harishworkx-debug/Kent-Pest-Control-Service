import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CallButtonProps {
  variant?: 'default' | 'large' | 'outline' | 'outline-navy' | 'text';
  label?: string;
  className?: string;
}

export function CallButton({ variant = 'default', label, className = '' }: CallButtonProps) {
  const text = label || `Call ${BUSINESS.phone}`;

  if (variant === 'text') {
    return (
      <a
        href={BUSINESS.phoneLink}
        className={`inline-flex items-center gap-2 font-semibold text-aqua-600 transition-colors hover:text-aqua-700 ${className}`}
      >
        <Phone className="h-4 w-4" />
        {text}
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a href={BUSINESS.phoneLink} className={`btn-outline ${className}`}>
        <Phone className="h-5 w-5" />
        {text}
      </a>
    );
  }

  if (variant === 'outline-navy') {
    return (
      <a href={BUSINESS.phoneLink} className={`btn-outline-navy ${className}`}>
        <Phone className="h-5 w-5" />
        {text}
      </a>
    );
  }

  if (variant === 'large') {
    return (
      <a href={BUSINESS.phoneLink} className={`btn-call-lg ${className}`}>
        <Phone className="h-6 w-6" />
        {text}
      </a>
    );
  }

  return (
    <a href={BUSINESS.phoneLink} className={`btn-call ${className}`}>
      <Phone className="h-5 w-5" />
      {text}
    </a>
  );
}
