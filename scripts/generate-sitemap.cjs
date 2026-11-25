const fs = require('fs');
const path = require('path');

const domain = 'https://www.kent-pestcontrol.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

const serviceAreas = [
  'kent-wa',
  'renton-wa',
  'auburn-wa',
  'covington-wa',
  'federal-way-wa',
  'tukwila-wa',
  'seatac-wa',
  'des-moines-wa',
  'maple-valley-wa',
  'burien-wa',
];

const services = [
  'water-damage-restoration',
  'water-removal',
  'water-extraction',
  'structural-drying',
  'flood-damage-cleanup',
  'water-damage-repair',
  'sewage-backup-cleanup',
  'basement-flood-cleanup',
  'burst-pipe-water-cleanup',
  'residential-water-mitigation',
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Static Pages (${staticPages.length}) -->
`;

for (const page of staticPages) {
  const url = page.path === '/' ? `${domain}/` : `${domain}${page.path}`;
  xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

xml += `
  <!-- Standalone Service Area Hubs (${serviceAreas.length}) -->
`;

for (const area of serviceAreas) {
  xml += `  <url>
    <loc>${domain}/water-damage-${area}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

xml += `
  <!-- Services & Location Combination Pages (${services.length * serviceAreas.length}) -->
`;

for (const service of services) {
  for (const area of serviceAreas) {
    const isPrimary = area === 'kent-wa';
    xml += `  <url>
    <loc>${domain}/${service}-${area}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${isPrimary ? '0.9' : '0.8'}</priority>
  </url>
`;
  }
}

xml += `</urlset>
`;

const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf8');
console.log(`Generated sitemap at ${publicPath} with ${staticPages.length + serviceAreas.length + (services.length * serviceAreas.length)} URLs`);

const distPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
if (fs.existsSync(path.dirname(distPath))) {
  fs.writeFileSync(distPath, xml, 'utf8');
  console.log(`Also updated ${distPath}`);
}
