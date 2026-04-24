const { navLinks, services, socials } = require('./siteData');

function attrs(items) {
  return items.map(([key, value]) => `${key}="${value}"`).join(' ');
}

function pageShell({ title, description, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${description}"/>
  <script>if(location.protocol!=='https:'&&location.hostname!=='localhost'){location.replace('https://www.klickkk.com'+location.pathname+location.search+location.hash);}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
  <script src="/script.js"></script>
</body>
</html>`;
}

function header() {
  return `<nav class="navbar" id="navbar">
    <div class="container nav-container">
      <a href="/" class="logo"><span class="logo-k">Klickkk</span><span class="logo-d">Digital</span></a>
      <div class="nav-links" id="navLinks">
        ${navLinks.map(link => `<a href="${link.href}" class="nav-link">${link.label}</a>`).join('')}
      </div>
      <div class="nav-right">
        <a href="/contact" class="btn btn-primary">Get Started</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer framer-footer">
    <div class="container framer-footer-inner">
      <div class="framer-footer-nav-card">
        <a href="/" class="footer-logo"><span class="logo-k">Klickkk</span><span class="logo-d">Digital</span></a>
        <nav class="framer-footer-nav" aria-label="Footer navigation">
          ${navLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}
        </nav>
      </div>
      <div class="framer-footer-kicker">Get In Touch</div>
      <div class="framer-footer-main">
        <form class="framer-footer-form" action="https://formsubmit.co/hello@klickkk.com" method="POST">
          <input type="hidden" name="_subject" value="New Footer Enquiry from Klickkk Digital Website"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="text" name="_honey" style="display:none"/>
          <h2>LET&apos;S<br/>TALK</h2>
          <label><span>Name</span><input type="text" name="Name" placeholder="Jane Smith" required/></label>
          <label><span>Email</span><input type="email" name="Email" placeholder="jane@company.com" required/></label>
          <label><span>Message</span><textarea name="Message" placeholder="Write your message" required></textarea></label>
          <button type="submit">Submit</button>
        </form>
        <div class="framer-footer-info">
          <div class="framer-footer-services">
            <h5>Services</h5>
            ${services.map(service => `<a href="/${service.slug}">${service.title}</a>`).join('')}
          </div>
          <div class="framer-contact-grid">
            <a class="framer-contact-card" href="mailto:hello@klickkk.com">HELLO@KLICKKK.COM</a>
            <div class="framer-contact-card framer-contact-stack">
              <a href="tel:+919403891565">INDIA: +91 9403 891 565</a>
              <a href="tel:+13023425049">USA: +1 302 342 5049</a>
            </div>
            <div class="framer-contact-card framer-contact-stack framer-address-card">
              <a href="https://share.google/jX4Kh93XlyLv12AoE" target="_blank" rel="noopener">INDIA: MARTINI SPACES, UNIT 2, GARG TRADE CENTER, SECTOR 11, ROHINI, DELHI-110089</a>
              <span>USA: 1041 N DUPONT HWY, DOVER, DELAWARE 19901, USA</span>
            </div>
          </div>
        </div>
      </div>
      <div class="framer-social-card">
        <h5>Follow us:</h5>
        <div class="framer-social-links">
          ${socials.map(item => `<a href="${item.href}" target="_blank" rel="noopener" aria-label="${item.label}">${item.text}</a>`).join('')}
        </div>
      </div>
      <div class="framer-footer-bottom-card">
        <p>Copyright © 2025 | <a href="/">Klickkk Digital</a> | All Rights Reserved</p>
        <div><a href="/privacy-policy">Privacy Policy</a><a href="/terms-of-service">Terms Of Service</a></div>
      </div>
    </div>
  </footer>`;
}

function serviceIcon() {
  return `<div class="svc-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 18L20 6M20 6H8M20 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
}

function serviceCards({ compact = false } = {}) {
  const className = compact ? 'other-svc-card reveal' : 'svc-card reveal';
  return services.map(service => `<a href="/${service.slug}" class="${className}${service.featured && !compact ? ' svc-featured' : ''}">
    ${compact ? '<div class="other-svc-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : serviceIcon()}
    <div class="${compact ? '' : 'svc-body'}"><h3>${service.title}</h3><p>${service.description}</p></div>
    <div class="${compact ? 'other-svc-arrow' : 'svc-arrow'}"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
  </a>`).join('');
}

function ctaSection() {
  return `<section class="section cta-section" id="contact">
    <div class="container">
      <div class="cta-box">
        <div class="cta-content reveal">
          <div class="section-chip">Get In Touch</div>
          <h2>Ready to <span class="accent">Grow</span> Your Brand?</h2>
          <p>Let's build something amazing together. Schedule a free consultation with our experts today.</p>
          <div class="cta-btns">
            <a href="mailto:hello@klickkk.com" class="btn btn-primary btn-lg">Get Free Consultation</a>
            <a href="tel:+919403891565" class="btn btn-ghost btn-lg">Call Us Now</a>
          </div>
        </div>
        <div class="cta-visual" aria-hidden="true"></div>
      </div>
    </div>
  </section>`;
}

function homePage() {
  return pageShell({
    title: 'Klickkk Digital - Digital Marketing Agency',
    description: 'Klickkk Digital is a full-service digital marketing agency offering Influencer Marketing, Performance Marketing, SEO, Social Media Marketing, Marketplace Management, and Web Design & Development.',
    body: `<section class="hero" id="home">
      <div class="container hero-inner">
        <div class="hero-badge"><span class="live-dot"></span>India's Premier Digital Marketing Agency</div>
        <h1 class="hero-title">We Help Brands<br/><span class="accent">Grow Digitally</span></h1>
        <p class="hero-sub">From strategy to execution, we deliver data-driven digital marketing solutions that amplify your brand's reach, engagement, and revenue.</p>
        <div class="hero-buttons"><a href="#contact" class="btn btn-primary btn-lg">Get Started</a><a href="/services" class="btn btn-ghost btn-lg">Our Services</a></div>
        <div class="stats-strip">
          ${[['200','Happy Clients','+'],['500','Campaigns Delivered','+'],['5','Years Experience','+'],['95','Client Retention','%']].map(([target,label,suffix], index) => `${index ? '<div class="stat-sep"></div>' : ''}<div class="stat-item"><div class="stat-count"><span class="count" data-target="${target}">0</span><span class="suffix">${suffix}</span></div><div class="stat-label">${label}</div></div>`).join('')}
        </div>
      </div>
    </section>
    <div class="marquee-wrap"><div class="marquee-track"><div class="marquee-inner">${[...services, ...services].map(service => `<span>${service.title}</span><span class="dot">●</span>`).join('')}</div></div></div>
    ${servicesSection({ id: 'services' })}
    <section class="section why-section" id="about">
      <div class="container"><div class="why-grid">
        <div class="why-left reveal"><div class="section-chip">Why Klickkk</div><h2>We Don't Just <span class="accent">Market</span>,<br/>We Grow Your Business</h2><p class="why-desc">At Klickkk Digital, we combine creativity with data to deliver marketing that moves the needle. Every strategy is built around your unique goals and audience.</p><a href="#contact" class="btn btn-primary">Start Growing Today</a></div>
        <div class="why-right">${['Data-Driven Strategies','Lightning-Fast Results','Dedicated Expert Team','Transparent Reporting'].map(title => `<div class="feat reveal"><div class="feat-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg></div><div class="feat-text"><h4>${title}</h4><p>Focused execution, clear communication, and measurable progress for your brand.</p></div></div>`).join('')}</div>
      </div></div>
    </section>
    <section class="section process-section" id="process">
      <div class="container"><div class="section-head"><div class="section-chip">How We Work</div><h2>Our <span class="accent">Process</span></h2><p>A proven four-step approach to transform your digital marketing from good to exceptional.</p></div>
      <div class="process-grid">${['Discovery & Strategy','Creative Execution','Launch & Optimise','Report & Scale'].map((title, index) => `<div class="proc-card reveal"><div class="proc-num">${String(index + 1).padStart(2, '0')}</div><h3>${title}</h3><p>We move from clear planning to sharp execution, then measure and scale what works.</p></div>`).join('')}</div></div>
    </section>
    <section class="section testimonials-section" id="reviews"><div class="container"><div class="section-head"><div class="section-chip">Client Love</div><h2>What Our <span class="accent">Clients</span> Say</h2></div><div class="testi-grid">${['Rahul Sharma','Priya Kapoor','Arjun Mehta'].map((name, index) => `<div class="testi-card ${index === 1 ? 'testi-featured ' : ''}reveal"><div class="stars">★★★★★</div><p>"Klickkk Digital helped us turn digital campaigns into clearer growth and stronger brand visibility."</p><div class="testi-author"><div class="avatar">${name.split(' ').map(part => part[0]).join('')}</div><div><strong>${name}</strong><span>Client Partner</span></div></div></div>`).join('')}</div></div></section>
    ${ctaSection()}`
  });
}

function servicesSection({ id = '' } = {}) {
  return `<section class="section services-section"${id ? ` id="${id}"` : ''}>
    <div class="container">
      <div class="section-head"><div class="section-chip">What We Do</div><h2>Our <span class="accent">Services</span></h2><p>Comprehensive digital marketing solutions tailored to drive growth, visibility, and measurable results for your brand.</p></div>
      <div class="services-grid">${serviceCards()}</div>
    </div>
  </section>`;
}

function servicesPage() {
  return pageShell({
    title: 'Services - Klickkk Digital',
    description: "Explore Klickkk Digital's full-service digital marketing solutions, including influencer marketing, performance marketing, SEO, social media, marketplace management, and web design.",
    body: `${pageHero({ title: 'Digital Marketing Services Built for Growth', badge: 'Services', description: 'From strategy to execution, our team brings together performance, content, search, marketplaces, and web experiences to grow your brand with measurable results.' })}
    ${servicesSection()}
    ${ctaSection()}`
  });
}

function pageHero({ title, badge, description, current = '', parent }) {
  return `<section class="svc-page-hero"><div class="container">
    <div class="breadcrumb"><a href="/">Home</a>${parent ? `<span class="sep">/</span><a href="${parent.href}">${parent.label}</a>` : ''}<span class="sep">/</span><span class="current">${current || badge}</span></div>
    <div class="svc-page-badge">${badge}</div>
    <h1 class="svc-page-title">${title}</h1>
    <p class="svc-page-sub">${description}</p>
  </div></section>`;
}

function servicePage(service) {
  const others = services.filter(item => item.slug !== service.slug);
  return pageShell({
    title: `${service.title} - Klickkk Digital`,
    description: service.meta,
    body: `${pageHero({ title: service.hero, badge: 'Service', description: service.sub, current: service.title, parent: { label: 'Services', href: '/services' } })}
    <section class="section offers-section"><div class="container"><div class="section-head"><div class="section-chip">What We Offer</div><h2>${service.title} That Delivers Real Results</h2><p>${service.description}</p></div><div class="offers-grid">${service.offers.map(offer => `<div class="offer-card reveal">${serviceIcon()}<h3>${offer}</h3><p>Planned, executed, and improved by a team focused on practical business outcomes.</p></div>`).join('')}</div></div></section>
    <section class="section process-section"><div class="container"><div class="section-head"><div class="section-chip">How We Work</div><h2>Our ${service.title} <span style="color:#babbbb">Process</span></h2></div><div class="process-grid">${service.process.map((step, index) => `<div class="proc-card reveal"><div class="proc-num">${String(index + 1).padStart(2, '0')}</div><h3>${step}</h3><p>Each step keeps your brand goals, audience, and measurable results in focus.</p></div>`).join('')}</div></div></section>
    <section class="section other-services-section"><div class="container"><div class="section-head"><div class="section-chip">Explore More</div><h2>Our Other <span style="color:#babbbb">Services</span></h2></div><div class="other-svc-grid">${others.map(item => `<a href="/${item.slug}" class="other-svc-card reveal"><div class="other-svc-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><h4>${item.title}</h4><p>${item.description}</p></div><div class="other-svc-arrow">↗</div></a>`).join('')}</div></div></section>
    ${ctaSection()}`
  });
}

function contactPage() {
  return pageShell({
    title: 'Contact Us - Klickkk Digital',
    description: 'Get in touch with Klickkk Digital. Reach out to our team in India or the USA for a free consultation on your digital marketing needs.',
    body: `${pageHero({ title: "Let's Build Something Amazing Together", badge: 'Get In Touch', description: "Ready to grow your brand? Reach out to our team and we'll get back to you within 24 hours with a tailored plan.", current: 'Contact Us' })}
    <section class="container"><div class="contact-layout">
      <div class="contact-info-wrap"><h2>Contact Information</h2><p>We're here to help. Reach out through any channel below or fill in the form.</p>
        ${[
          ['Email', '<a href="mailto:hello@klickkk.com">hello@klickkk.com</a>'],
          ['Phone - India', '<a href="tel:+919403891565">+91 9403 891 565</a>'],
          ['Phone - USA', '<a href="tel:+13023425049">+1 302 342 5049</a>'],
          ['Office - India', 'Martini Spaces, Garg Trade Center,<br/>Sector 11, Rohini, Delhi-110089'],
          ['Office - USA', '1041 N Dupont Hwy, Dover,<br/>Delaware, 19901 USA']
        ].map(([label, value]) => `<div class="info-card reveal"><div class="info-card-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg></div><div class="info-card-body"><span class="info-card-label">${label}</span><div class="info-card-value">${value}</div></div></div>`).join('')}
      </div>
      <div class="contact-form-box reveal"><h3>Send Us a Message</h3><p>Fill in the form below and our team will respond within 24 hours.</p>${contactForm()}</div>
    </div></section>`
  });
}

function contactForm() {
  return `<form class="form-grid" id="contactForm" action="https://formsubmit.co/hello@klickkk.com" method="POST">
    <input type="hidden" name="_subject" value="New Enquiry from Klickkk Digital Website"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_template" value="table"/><input type="text" name="_honey" style="display:none"/>
    <div class="form-row-2"><div class="form-field"><label for="name">Full Name</label><input type="text" id="name" name="name" placeholder="Rahul Sharma" required/></div><div class="form-field"><label for="email">Email Address</label><input type="email" id="email" name="email" placeholder="you@company.com" required/></div></div>
    <div class="form-row-2"><div class="form-field"><label for="phone">Phone Number</label><input type="tel" id="phone" name="phone" placeholder="+91 98765 43210"/></div><div class="form-field"><label for="company">Company / Brand</label><input type="text" id="company" name="company" placeholder="Your Company Name"/></div></div>
    <div class="form-field"><label for="service">Service Interested In</label><select id="service" name="service"><option value="" disabled selected>Select a service...</option>${services.map(service => `<option value="${service.title}">${service.title}</option>`).join('')}<option value="Multiple Services">Multiple Services</option><option value="Other">Other / Not Sure</option></select></div>
    <div class="form-field"><label for="message">Message</label><textarea id="message" name="message" placeholder="Tell us about your brand, goals, and how we can help..." required></textarea></div>
    <div class="form-submit"><button type="submit" class="btn btn-primary btn-lg">Send Message</button></div>
  </form>`;
}

function simplePage({ title, badge, description, body }) {
  return pageShell({
    title: `${title} - Klickkk Digital`,
    description,
    body: `${pageHero({ title, badge, description, current: title })}
    <section class="section"><div class="container"><div class="section-head"><div class="section-chip">${badge}</div><h2>${title}</h2><p>${body}</p></div></div></section>`
  });
}

function legalPage(kind) {
  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  return pageShell({
    title: `${title} - Klickkk Digital`,
    description: isPrivacy ? "Read Klickkk Digital's privacy policy." : "Read Klickkk Digital's terms and conditions.",
    body: `${pageHero({ title, badge: 'Policy', description: isPrivacy ? 'How we collect, use, and protect information shared with Klickkk Digital.' : 'Terms governing use of our website and services.', current: title })}
    <section class="section"><div class="container"><div class="contact-form-box"><h3>${title}</h3><p>${isPrivacy ? 'We use submitted contact information to respond to enquiries, deliver services, and improve communication. We do not sell personal information.' : 'By using this website or engaging our services, you agree to work with us under clear project terms, payment terms, and responsible website usage.'}</p><p>For questions, email <a href="mailto:hello@klickkk.com">hello@klickkk.com</a>.</p></div></div></section>`
  });
}

function notFoundPage() {
  return pageShell({
    title: 'Page Not Found - Klickkk Digital',
    description: 'The requested page could not be found.',
    body: pageHero({ title: 'Page Not Found', badge: '404', description: 'The page you are looking for does not exist.', current: '404' })
  });
}

module.exports = {
  homePage,
  servicesPage,
  servicePage,
  contactPage,
  simplePage,
  legalPage,
  notFoundPage
};
