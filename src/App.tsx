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
import {
  SERVICES,
  SERVICE_AREAS,
  BUSINESS,
  getService,
  getServiceArea,
  getServiceUrl,
} from '@/data/business';

function App() {
  const { path, navigate } = useRouter();

  // Redirect legacy /services/{service-slug} URLs and legacy URLs without -wa to /{service-slug}-{area-slug}
  useEffect(() => {
    if (path.startsWith('/services/')) {
      const serviceSlug = path.replace('/services/', '');
      const service = getService(serviceSlug);
      if (service) {
        navigate(getServiceUrl(service.slug), true);
        return;
      }
    }

    const combo = matchServiceLocation(path);
    if (combo && combo.isLegacy) {
      const area = getServiceArea(combo.areaSlug);
      if (area) {
        navigate(`/${combo.serviceSlug}-${area.urlSlug}`, true);
      }
    }
  }, [path, navigate]);

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

    // Service area detail: /service-areas/{area-slug}
    if (path.startsWith('/service-areas/')) {
      const areaSlug = path.replace('/service-areas/', '');
      if (getServiceArea(areaSlug)) {
        return <ServiceAreaPage areaSlug={areaSlug} navigate={navigate} />;
      }
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
