import { BUSINESS } from '@/data/business';
import type { ServiceInfo, ServiceAreaInfo } from '@/data/business';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.website}#business`,
    name: BUSINESS.name,
    description: `${BUSINESS.name} provides ${BUSINESS.category.toLowerCase()} in ${BUSINESS.primaryLocation} and surrounding communities.`,
    url: BUSINESS.website,
    telephone: BUSINESS.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.addressStreet,
      addressLocality: BUSINESS.addressCity,
      addressRegion: BUSINESS.addressState,
      postalCode: BUSINESS.addressZip,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Kent, WA' },
      { '@type': 'City', name: 'Renton, WA' },
      { '@type': 'City', name: 'Auburn, WA' },
      { '@type': 'City', name: 'Covington, WA' },
      { '@type': 'City', name: 'Federal Way, WA' },
      { '@type': 'City', name: 'Tukwila, WA' },
      { '@type': 'City', name: 'SeaTac, WA' },
      { '@type': 'City', name: 'Des Moines, WA' },
      { '@type': 'City', name: 'Maple Valley, WA' },
      { '@type': 'City', name: 'Burien, WA' },
    ],
    hasMap: BUSINESS.googleMaps,
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS.website}#organization`,
    name: BUSINESS.name,
    url: BUSINESS.website,
    telephone: BUSINESS.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.addressStreet,
      addressLocality: BUSINESS.addressCity,
      addressRegion: BUSINESS.addressState,
      postalCode: BUSINESS.addressZip,
      addressCountry: BUSINESS.addressCountry,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS.website}#website`,
    name: BUSINESS.name,
    url: BUSINESS.website,
  };
}

export function buildServiceSchema(service: ServiceInfo, area?: ServiceAreaInfo) {
  const areaName = area ? area.name : BUSINESS.primaryLocation;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: area ? `${service.name} in ${areaName}` : service.name,
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.addressStreet,
        addressLocality: BUSINESS.addressCity,
        addressRegion: BUSINESS.addressState,
        postalCode: BUSINESS.addressZip,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: {
      '@type': 'City',
      name: areaName,
    },
    description: area
      ? `${service.name} services available in ${areaName}. ${service.description}`
      : service.description,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = BUSINESS.website.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const path = item.url.startsWith('/') ? item.url : `/${item.url}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${path}`,
      };
    }),
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
