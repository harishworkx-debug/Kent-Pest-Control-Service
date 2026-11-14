import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const BASE_URL = 'https://www.kent-pestcontrol.com';

export function SEO({ title, description, canonical, ogImage = '/og-image.jpg', jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

    const upsert = (selector: string, attr: string, value: string) => {
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

    upsert('meta[name="description"]', 'content', description);
    upsert('link[rel="canonical"]', 'href', fullCanonical);
    upsert('meta[property="og:title"]', 'content', title);
    upsert('meta[property="og:description"]', 'content', description);
    upsert('meta[property="og:url"]', 'content', fullCanonical);
    upsert('meta[property="og:image"]', 'content', `${BASE_URL}${ogImage}`);
    upsert('meta[name="twitter:title"]', 'content', title);
    upsert('meta[name="twitter:description"]', 'content', description);

    const existingScript = document.getElementById('page-jsonld');
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('page-jsonld');
      if (script) script.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
}
