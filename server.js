const fs = require('fs');
const http = require('http');
const path = require('path');
const { URL } = require('url');
const { services } = require('./src/siteData');
const {
  homePage,
  servicesPage,
  servicePage,
  contactPage,
  simplePage,
  legalPage,
  notFoundPage
} = require('./src/templates');

const rootDir = __dirname;
const port = process.env.PORT || 8080;

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

function renderRoute(pathname) {
  if (pathname === '/') return homePage();
  if (pathname === '/services') return servicesPage();
  if (pathname === '/contact') return contactPage();
  if (pathname === '/privacy-policy') return legalPage('privacy');
  if (pathname === '/terms-of-service') return legalPage('terms');
  if (pathname === '/projects') {
    return simplePage({
      title: 'Projects',
      badge: 'Work',
      description: 'A focused look at how Klickkk Digital builds, launches, and improves growth campaigns.',
      body: 'Project case studies can now be added from Node data instead of creating separate HTML files.'
    });
  }
  if (pathname === '/academy') {
    return simplePage({
      title: 'Academy',
      badge: 'Learning',
      description: 'Practical digital marketing learning from the Klickkk Digital team.',
      body: 'Academy content can be managed as JavaScript data and rendered through the shared Node layout.'
    });
  }
  if (pathname === '/blogs') {
    return simplePage({
      title: 'Blogs',
      badge: 'Insights',
      description: 'Digital marketing ideas, guides, and updates from Klickkk Digital.',
      body: 'Blog entries can be added as structured Node data without duplicating page HTML.'
    });
  }
  if (serviceMap.has(pathname)) return servicePage(serviceMap.get(pathname));
  return null;
}

const server = http.createServer((req, res) => {
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

  const rendered = renderRoute(pathname);
  if (rendered) {
    return renderPage(res, rendered);
  }

  const filePath = resolveStaticFile(pathname);
  if (!filePath) {
    if (filePath === null) {
      return send(res, 403, { 'Content-Type': 'text/plain; charset=utf-8' }, 'Forbidden');
    }
    return renderPage(res, notFoundPage(), 404);
  }

  return serveFile(req, res, filePath);
});

server.listen(port, () => {
  console.log(`Klickkk Digital website running on http://localhost:${port}`);
});
