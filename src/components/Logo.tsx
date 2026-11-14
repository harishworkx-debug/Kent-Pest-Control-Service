import { Droplets } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-700';
  const subColor = variant === 'light' ? 'text-aqua-300' : 'text-aqua-600';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-700 shadow-md">
        <Droplets className="h-5 w-5 text-aqua-400" />
      </div>
      <div className="leading-tight">
        <div className={`text-base font-bold ${textColor}`}>Kent Pest Control</div>
        <div className={`text-[0.7rem] font-semibold uppercase tracking-wider ${subColor}`}>
          Water Damage Restoration
        </div>
      </div>
    </div>
  );
}
