import { useState } from 'react';
import { Phone, Droplet } from 'lucide-react';
import { LandingSEO } from './LandingSEO';
import { LandingHeader } from './LandingHeader';
import { LandingHero } from './LandingHero';
import { LandingServices } from './LandingServices';
import { LandingAbout } from './LandingAbout';
import { LandingAreas } from './LandingAreas';
import { LandingWhyUs } from './LandingWhyUs';
import { LandingFAQ } from './LandingFAQ';
import { LandingContact } from './LandingContact';
import { LandingFooter } from './LandingFooter';
import { LANDING_DATA } from './landingData';

interface StandaloneLandingPageProps {
  navigate?: (to: string) => void;
  currentPath?: string;
}

export function StandaloneLandingPage({ navigate, currentPath = '/' }: StandaloneLandingPageProps) {
  const [selectedService, setSelectedService] = useState<string>(LANDING_DATA.services[0].title);

  return (
    <div className="min-h-screen bg-navy-950 text-neutral-100 flex flex-col font-sans antialiased selection:bg-aqua-400 selection:text-navy-950 pb-16 lg:pb-0">
      {/* Isolated SEO & Dynamic Schema (No Parent Company Name) */}
      <LandingSEO currentPath={currentPath} />

      {/* Standalone Header with Anchor Navigation */}
      <LandingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <LandingHero />

        {/* 6 Verified Services */}
        <LandingServices onSelectService={(serviceTitle) => setSelectedService(serviceTitle)} />

        {/* About: Regional Craftsmanship & Climate Challenges */}
        <LandingAbout />

        {/* Primary Hub & Surrounding Service Areas */}
        <LandingAreas />

        {/* 4 Verifiable Pillars */}
        <LandingWhyUs />

        {/* Real Homeowner FAQs */}
        <LandingFAQ />

        {/* Contact & Interactive Inquiry Form */}
        <LandingContact initialService={selectedService} />
      </main>

      {/* Standalone Footer */}
      <LandingFooter navigate={navigate} />

      {/* Sticky Mobile Direct Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-aqua-400/30 bg-navy-950/95 p-3 backdrop-blur-lg shadow-2xl">
        <a
          href={LANDING_DATA.phoneLink}
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-aqua-500 to-aqua-400 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-aqua-500/25 active:scale-98"
        >
          <Phone className="h-4 w-4 fill-navy-950 shrink-0" />
          <div className="flex flex-col items-center leading-tight">
            <span>Call Dispatch: {LANDING_DATA.phone}*</span>
            <span className="text-[10px] font-normal text-navy-900/80 tracking-wide">*Availability not guaranteed</span>
          </div>
        </a>
      </div>
    </div>
  );
}
export default StandaloneLandingPage;
