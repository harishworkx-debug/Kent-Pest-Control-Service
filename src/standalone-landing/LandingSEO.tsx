import { useEffect } from 'react';
import { LANDING_DATA } from './landingData';

interface LandingSEOProps {
  currentPath?: string;
}

const BASE_URL = 'https://www.kent-pestcontrol.com';

export function LandingSEO({ currentPath = '/' }: LandingSEOProps) {
  useEffect(() => {
    const pageTitle = `${LANDING_DATA.identityTitle} | Emergency Water Extraction & Drying`;
    const metaDescription = `Professional water damage restoration in Kent, WA. 24/7 rapid water extraction, structural drying, and flood mitigation. Call ${LANDING_DATA.phone} today.`;
    const canonicalUrl = currentPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${currentPath}`;

    document.title = pageTitle;

    const upsertMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        if (selector.startsWith('meta[')) {
          const keyMatch = selector.match(/\[(\w+)="([^"]*)"/);
          if (keyMatch) {
            el = document.createElement('meta');
            el.setAttribute(keyMatch[1], keyMatch[2]);
            document.head.appendChild(el);
          }
        } else if (selector.startsWith('link[rel="canonical"')) {
          el = document.createElement('link');
          el.setAttribute('rel', 'canonical');
          document.head.appendChild(el);
        }
      }
      if (el) el.setAttribute(attr, value);
    };

    upsertMeta('meta[name="description"]', 'content', metaDescription);
    upsertMeta('link[rel="canonical"]', 'href', canonicalUrl);
    upsertMeta('meta[property="og:title"]', 'content', pageTitle);
    upsertMeta('meta[property="og:description"]', 'content', metaDescription);
    upsertMeta('meta[property="og:url"]', 'content', canonicalUrl);
    upsertMeta('meta[property="og:type"]', 'content', 'website');
    upsertMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'content', pageTitle);
    upsertMeta('meta[name="twitter:description"]', 'content', metaDescription);

    // Dynamic JSON-LD Schema (LocalBusiness / EmergencyService)
    const existingScript = document.getElementById('landing-jsonld');
    if (existingScript) existingScript.remove();

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'EmergencyService',
      '@id': `${canonicalUrl}#service`,
      name: LANDING_DATA.identityTitle,
      description: metaDescription,
      url: canonicalUrl,
      telephone: LANDING_DATA.phoneRaw,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: LANDING_DATA.street,
        addressLocality: LANDING_DATA.city,
        addressRegion: LANDING_DATA.state,
        postalCode: LANDING_DATA.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: LANDING_DATA.geo.lat,
        longitude: LANDING_DATA.geo.lng,
      },
      areaServed: LANDING_DATA.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area.name,
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
    };

    const script = document.createElement('script');
    script.id = 'landing-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('landing-jsonld');
      if (el) el.remove();
    };
  }, [currentPath]);

  return null;
}
