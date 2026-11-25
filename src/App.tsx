import { useEffect } from 'react';
import { useRouter } from '@/hooks/useRouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceAreasPage } from '@/pages/ServiceAreasPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ServiceAreaPage } from '@/pages/ServiceAreaPage';
import { ServiceLocationPage } from '@/pages/ServiceLocationPage';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';
import { StandaloneLandingPage } from '@/standalone-landing/StandaloneLandingPage';
import {
  SERVICES,
  SERVICE_AREAS,
  BUSINESS,
  getService,
  getServiceArea,
  getServiceUrl,
  getServiceAreaUrl,
} from '@/data/business';

function App() {
  const { path, navigate } = useRouter();

  // Redirect legacy /services/{service-slug} URLs and legacy URLs without -wa to /{service-slug}-{area-slug}
  useEffect(() => {
    // 301-style redirect for any commercial legacy paths to residential mitigation
    if (path.includes('commercial-water-damage')) {
      const redirectPath = path.replace('commercial-water-damage', 'residential-water-mitigation');
      navigate(redirectPath, true);
      return;
    }

    if (path.startsWith('/services/')) {
      const serviceSlug = path.replace('/services/', '');
      const service = getService(serviceSlug);
      if (service) {
        navigate(getServiceUrl(service.slug), true);
        return;
      }
    }

    const areaMatch = matchServiceArea(path);
    if (areaMatch && areaMatch.isLegacy) {
      navigate(getServiceAreaUrl(areaMatch.areaSlug), true);
      return;
    }

    const combo = matchServiceLocation(path);
    if (combo && combo.isLegacy) {
      const area = getServiceArea(combo.areaSlug);
      if (area) {
        navigate(`/${combo.serviceSlug}-${area.urlSlug}`, true);
      }
    }
  }, [path, navigate]);

  // Standalone Landing Page Switcher Logic
  const isStandaloneLanding =
    path === '/home-page' ||
    (USE_LANDING_PAGE_AS_HOME &&
      (path === '/' ||
       path === '' ||
       path === '/index.html' ||
       path === '/home' ||
       path === '/water-damage-restoration-kent-wa'));

  if (isStandaloneLanding) {
    return <StandaloneLandingPage navigate={navigate} currentPath={path} />;
  }

  const renderPage = () => {
    // Static routes
    if (path === '/') return <HomePage navigate={navigate} />;
    if (path === '/about') return <AboutPage navigate={navigate} />;
    if (path === '/services') return <ServicesPage navigate={navigate} />;
    if (path === '/service-areas') return <ServiceAreasPage navigate={navigate} />;
    if (path === '/contact') return <ContactPage navigate={navigate} />;
    if (path === '/privacy-policy') return <PrivacyPolicyPage navigate={navigate} />;
    if (path === '/terms-and-conditions') return <TermsPage navigate={navigate} />;

    // Service detail: /services/{service-slug} (render while redirect occurs)
    if (path.startsWith('/services/')) {
      const serviceSlug = path.replace('/services/', '');
      if (getService(serviceSlug)) {
        return <ServiceDetailPage serviceSlug={serviceSlug} navigate={navigate} />;
      }
    }

    // Service area detail: /water-damage-{area-slug} (and legacy /service-areas/{area-slug})
    const areaMatch = matchServiceArea(path);
    if (areaMatch) {
      return <ServiceAreaPage areaSlug={areaMatch.areaSlug} navigate={navigate} />;
    }

    // Combined service-location: /{service-slug}-{area-name}
    // Match against all possible combinations
    const comboMatch = matchServiceLocation(path);
    if (comboMatch) {
      // If matching the primary service area (Kent), render the main ServiceDetailPage
      if (comboMatch.areaSlug === BUSINESS.primaryLocationSlug) {
        return <ServiceDetailPage serviceSlug={comboMatch.serviceSlug} navigate={navigate} />;
      }
      return (
        <ServiceLocationPage
          serviceSlug={comboMatch.serviceSlug}
          areaSlug={comboMatch.areaSlug}
          navigate={navigate}
        />
      );
    }

    return <NotFoundPage navigate={navigate} />;
  };

  const page = renderPage();

  // 404 page renders its own full-screen layout
  if (page && (path === '/404' || (page as React.ReactElement).type === NotFoundPage)) {
    return <>{page}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header navigate={navigate} currentPath={path} />
      <main className="flex-1 pb-16 lg:pb-0">{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

function matchServiceArea(path: string): { areaSlug: string; isLegacy?: boolean } | null {
  for (const area of SERVICE_AREAS) {
    // New pattern: /water-damage-{area.urlSlug} (e.g. /water-damage-tukwila-wa)
    if (path === `/water-damage-${area.urlSlug}`) {
      return { areaSlug: area.slug };
    }
    // Legacy /service-areas/{area.slug}
    if (path === `/service-areas/${area.slug}`) {
      return { areaSlug: area.slug, isLegacy: true };
    }
    // Legacy without -wa
    const withoutWa = area.urlSlug.replace(/-wa$/, '');
    if (path === `/service-areas/${withoutWa}` || path === `/water-damage-${withoutWa}`) {
      return { areaSlug: area.slug, isLegacy: true };
    }
  }
  return null;
}

function matchServiceLocation(path: string): { serviceSlug: string; areaSlug: string; isLegacy?: boolean } | null {
  // Check all service + area combinations
  for (const service of SERVICES) {
    for (const area of SERVICE_AREAS) {
      const expectedUrl = `/${service.slug}-${area.urlSlug}`;
      if (path === expectedUrl) {
        return { serviceSlug: service.slug, areaSlug: area.slug };
      }
      // Match legacy URLs without -wa (e.g. /water-damage-restoration-kent)
      const withoutWa = area.urlSlug.replace(/-wa$/, '');
      if (path === `/${service.slug}-${withoutWa}`) {
        return { serviceSlug: service.slug, areaSlug: area.slug, isLegacy: true };
      }
    }
  }
  return null;
}

export default App;
