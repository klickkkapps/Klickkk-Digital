const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');
const { services } = require('./src/siteData');
const {
  homePage,
  aboutPage,
  servicesPage,
  servicePage,
  contactPage,
  projectsPage,
  blogsPage,
  reviewsPage,
  simplePage,
  legalPage,
  notFoundPage
} = require('./src/templates');

const rootDir = __dirname;
const port = process.env.PORT || 8080;
const framerOrigin = 'https://klickkk.framer.website';
const framerCache = new Map();
const framerCacheTtl = 60 * 1000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function send(res, statusCode, headers, body = '') {
  res.writeHead(statusCode, {
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    ...headers
  });
  res.end(body);
}

function redirect(res, location, statusCode = 301) {
  send(res, statusCode, { Location: location });
}

function renderPage(res, html, statusCode = 200) {
  send(res, statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  }, html);
}

function normalizeFramerPath(pathname) {
  const aliases = new Map([
    ['/about', '/about-us'],
    ['/contact', '/contact-us'],
    ['/privacy-policy', '/policies/privacy-policy'],
    ['/terms-of-service', '/policies/terms-of-service'],
    ['/influencer-marketing', '/services/influencer-marketing'],
    ['/marketplace-management', '/services/marketplaces-management'],
    ['/marketplaces-management', '/services/marketplaces-management'],
    ['/performance-marketing', '/services/performance-marketing'],
    ['/search-engine-optimization', '/services/search-engine-optimization'],
    ['/social-media-marketing', '/services/social-media-marketing'],
    ['/web-design-development', '/services/web-design-development']
  ]);

  return aliases.get(pathname) || pathname;
}

function cleanFramerHtml(html) {
  return html
    .replace(/<div id="__framer-badge-container"[\s\S]*?<\/div>/g, '')
    .replace(/<[^>]*href="https:\/\/framer\.com\/[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '');
}

function fetchFramerHtml(pathname, search = '', redirects = 0) {
  const framerPath = normalizeFramerPath(pathname);
  const cacheKey = `${framerPath}${search}`;
  const cached = framerCache.get(cacheKey);

  if (cached && Date.now() - cached.createdAt < framerCacheTtl) {
    return Promise.resolve(cached.html);
  }

  return new Promise((resolve, reject) => {
    const targetUrl = new URL(`${framerPath}${search}`, framerOrigin);
    const request = https.get(targetUrl, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'KlickkkDigitalMirror/1.0'
      }
    }, response => {
      const location = response.headers.location;

      if (location && response.statusCode >= 300 && response.statusCode < 400 && redirects < 4) {
        response.resume();
        const nextUrl = new URL(location, targetUrl);
        fetchFramerHtml(nextUrl.pathname, nextUrl.search, redirects + 1).then(resolve, reject);
        return;
      }

      if (!response.statusCode || response.statusCode >= 400) {
        response.resume();
        reject(new Error(`Framer responded with ${response.statusCode || 'unknown status'}`));
        return;
      }

      let html = '';
      response.setEncoding('utf8');
      response.on('data', chunk => {
        html += chunk;
      });
      response.on('end', () => {
        html = cleanFramerHtml(html);
        framerCache.set(cacheKey, { html, createdAt: Date.now() });
        resolve(html);
      });
    });

    request.setTimeout(12000, () => {
      request.destroy(new Error('Framer request timed out'));
    });
    request.on('error', reject);
  });
}

function resolveStaticFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
  const relativePath = cleanPath.replace(/^\/+/, '');
  const requestedPath = path.resolve(rootDir, relativePath);
  const isInsideRoot = requestedPath === rootDir || requestedPath.startsWith(`${rootDir}${path.sep}`);

  if (!isInsideRoot) {
    return null;
  }

  if (fs.existsSync(requestedPath) && fs.statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  return undefined;
}

function serveFile(req, res, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || 'application/octet-stream';
  const isHtml = extension === '.html';

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Internal Server Error');
  });

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': isHtml ? 'no-cache' : 'public, max-age=31536000, immutable',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  });
  stream.pipe(res);
}

const serviceMap = new Map(services.map(service => [`/${service.slug}`, service]));
const marketplaceService = services.find(service => service.slug === 'marketplaces-management');
if (marketplaceService) serviceMap.set('/marketplace-management', marketplaceService);

function renderRoute(pathname) {
  if (pathname === '/') return homePage();
  if (pathname === '/about' || pathname === '/about-us') return aboutPage();
  if (pathname === '/services') return servicesPage();
  if (pathname === '/contact' || pathname === '/contact-us') return contactPage();
  if (pathname === '/privacy-policy' || pathname === '/policies/privacy-policy') return legalPage('privacy');
  if (pathname === '/terms-of-service' || pathname === '/policies/terms-of-service') return legalPage('terms');
  if (pathname === '/projects') return projectsPage();
  if (pathname === '/academy') {
    return simplePage({
      title: 'Academy',
      badge: 'Learning',
      description: 'Practical digital marketing learning from the Klickkk Digital team.',
      body: 'Practical lessons, frameworks, and digital marketing resources from the Klickkk Digital team.'
    });
  }
  if (pathname === '/reviews') return reviewsPage();
  if (pathname === '/blogs') return blogsPage();
  if (serviceMap.has(pathname)) return servicePage(serviceMap.get(pathname));
  return null;
}

const server = http.createServer(async (req, res) => {
  const host = req.headers.host || '';
  const forwardedProto = req.headers['x-forwarded-proto'];
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');

  if (!isLocal && forwardedProto === 'http') {
    return redirect(res, `https://www.klickkk.com${req.url}`);
  }

  const requestUrl = new URL(req.url, `http://${host || 'localhost'}`);
  const pathname = requestUrl.pathname;

  if (pathname === '/index.html') {
    return redirect(res, `/${requestUrl.search}`);
  }

  if (pathname.endsWith('.html')) {
    return redirect(res, `${pathname.slice(0, -5)}${requestUrl.search}`);
  }

  const filePath = resolveStaticFile(pathname);
  if (filePath) {
    return serveFile(req, res, filePath);
  }

  if (filePath === null) {
    return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');
  }

  try {
    const html = await fetchFramerHtml(pathname, requestUrl.search);
    return renderPage(res, html);
  } catch (error) {
    console.error(`Unable to mirror Framer page ${pathname}:`, error.message);
  }

  const rendered = renderRoute(pathname);
  if (rendered) {
    return renderPage(res, rendered);
  }

  return renderPage(res, notFoundPage(), 404);
});

server.listen(port, () => {
  console.log(`Klickkk Digital website running on http://localhost:${port}`);
});
