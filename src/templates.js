const {
  navLinks,
  services,
  socials,
  framerImages,
  caseStudies,
  testimonials,
  pricingPlans,
  blogPosts,
  faqs
} = require('./siteData');

function attrs(items) {
  return items.map(([key, value]) => `${key}="${value}"`).join(' ');
}

function pageShell({ title, description, body, reviewsBeforeFooter = false }) {
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
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
  ${header()}
  ${body}
  ${reviewsBeforeFooter ? testimonialSection({ compact: true }) : ''}
  ${footer()}
  <script src="/script.js"></script>
</body>
</html>`;
}

function header() {
  return `<nav class="navbar kd-header" id="navbar">
    <div class="container nav-container">
      <a href="/" class="logo"><span class="logo-k">Klickkk</span><span class="logo-d">Digital</span></a>
      <div class="nav-links" id="navLinks">
        ${navLinks.map(link => `<a href="${link.href}" class="nav-link">${link.label}</a>`).join('')}
      </div>
      <div class="nav-right">
        <a href="/contact-us" class="btn btn-primary">Get Started</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer framer-footer">
    <div class="container framer-footer-inner">
      <div class="framer-footer-nav-card">
        <a href="/" class="footer-logo" aria-label="Klickkk Digital"><img src="${framerImages.footerLogo}" alt="Klickkk Digital"/></a>
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
        <div><a href="/policies/privacy-policy">Privacy Policy</a><a href="/policies/terms-of-service">Terms Of Service</a></div>
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
    ${compact ? '' : `<div class="kd-card-cta"><span>${service.cta}</span><span class="kd-mini-arrow">↗</span></div>`}
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
    title: 'Klickkk Digital - Digital Marketing Agency in India & USA | Web Design, SEO & Ads Experts',
    description: 'Klickkk Digital is a digital marketing agency in India and USA for web design, SEO, paid ads, influencer marketing, social media, and marketplace growth.',
    body: `${framerHero()}
    ${servicesSection({ id: 'services' })}
    ${brandSection()}
    ${aboutStatsSection()}
    ${caseStudiesSection()}
    ${testimonialSection()}
    ${pricingSection()}
    ${specialitiesSection()}
    ${blogsSection()}
    ${faqSection()}`
  });
}

function sectionHeading(label, title, text = '') {
  return `<div class="kd-section-heading reveal"><div class="section-chip">${label}</div><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div>`;
}

function framerHero() {
  return `<section class="kd-framer-hero" id="home">
    <div class="container">
      <div class="kd-hero-topline reveal">
        <div class="kd-pill">#1 Digital Marketing Agency in Asia</div>
        <div class="kd-review-stack">${framerImages.portraits.map(src => `<img src="${src}" alt="Client review"/>`).join('')}<span>200+ 5 Star Reviews</span></div>
      </div>
      <div class="kd-hero-title reveal">
        <h1><span>The</span><span>Best</span><span class="kd-highlight">Digital</span><span>Maketing</span><img src="${framerImages.stamp}" alt="Klickkk sticker"/><span>Agency.</span></h1>
        <p>We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.</p>
      </div>
      <div class="kd-hero-visual reveal">
        <img src="${framerImages.hero}" alt="Best Digital Marketing Agency"/>
        <div class="kd-hero-marquee"><span>Best Digital Marketing Agency</span><span>Best Digital Marketing Agency</span><span>Best Digital Marketing Agency</span></div>
        <a class="kd-play" href="#about">✦ PLAY VIDEO ✦ KNOW ABOUT US ✦ AGENCEE</a>
      </div>
    </div>
  </section>`;
}

function servicesSection({ id = '' } = {}) {
  return `<section class="section services-section"${id ? ` id="${id}"` : ''}>
    <div class="container">
      ${sectionHeading('Services', 'What we are offering')}
      <div class="kd-section-action"><a href="/services" class="kd-orange-btn">View All Services <span>↗</span></a></div>
      <div class="services-grid">${serviceCards()}</div>
    </div>
  </section>`;
}

function brandSection() {
  return `<section class="section kd-brand-section">
    <div class="container">
      ${sectionHeading('Brands Collaboraations', 'Brands that trust us')}
      <div class="kd-logo-grid reveal">${[...framerImages.logos, ...framerImages.logos.slice(0, 1)].map(src => `<div class="kd-logo-card"><img src="${src}" alt="Brand logo"/></div>`).join('')}</div>
    </div>
  </section>`;
}

function aboutStatsSection() {
  const stats = [['7+', 'Years of Experience'], ['150+', 'Successful Projects'], ['120+', 'Happy Clients'], ['160', '5 Star Reviews']];
  return `<section class="section kd-about-section" id="about">
    <div class="container kd-about-grid">
      <div class="kd-image-panel reveal"><img src="${framerImages.about}" alt="Digital marketing team"/></div>
      <div class="kd-about-content">
        <div class="kd-stats-grid reveal">${stats.map(([num, label]) => `<div><strong>${num}</strong><span>${label}</span></div>`).join('')}</div>
        <div class="kd-feature-columns">
          ${[
            ['Proven Track Record', 'We have built a reputation as a trusted and reliable partner in achieving business success.'],
            ['Tailored Solutions', 'We offer personalized solutions tailored to your specific goals, audience, and industry.'],
            ['Client-Centric Focus', 'Your success is our priority. We prioritize understanding your business goals.']
          ].map(([title, text]) => `<article class="kd-feature-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
        <div class="kd-value-list reveal">${['Continuous Innovation','Dedicated Support','Positive Client Experiences','Commitment to Excellence'].map(item => `<span>${item}</span>`).join('')}</div>
      </div>
    </div>
  </section>`;
}

function caseStudiesSection() {
  return `<section class="section kd-projects-section" id="projects">
    <div class="container">
      ${sectionHeading('Works', 'Case Studies')}
      <div class="kd-project-grid">${projectCards(caseStudies)}</div>
      <div class="kd-section-action"><a href="/projects" class="kd-orange-btn">View All Projects <span>↗</span></a></div>
    </div>
  </section>`;
}

function projectCards(items) {
  return items.map(project => `<a href="/projects" class="kd-project-card reveal">
    <img src="${project.image}" alt="${project.client}"/>
    <div class="kd-project-content">
      <span>Projects</span>
      <h3>${project.client}</h3>
      <p>${project.title}</p>
      <div class="kd-project-metrics">${project.metrics.map(([value, label]) => `<strong>${value}<small>${label}</small></strong>`).join('')}</div>
      <b>Learn More</b>
    </div>
  </a>`).join('');
}

function testimonialSection({ compact = false } = {}) {
  return `<section class="section kd-testimonial-section" id="reviews">
    <div class="container">
      ${sectionHeading('REVIEWS', 'TESTIMONIAL')}
      <div class="kd-testimonial-grid">${testimonials.slice(0, compact ? 3 : testimonials.length).map(([name, role, quote], index) => `<article class="kd-testimonial-card reveal"><p>${quote}</p><div><div class="avatar">${name.split(' ').map(part => part[0]).join('').slice(0, 2)}</div><div><h5>${name}</h5><span>${role}</span></div></div></article>`).join('')}</div>
      ${compact ? '' : '<div class="kd-section-action"><a href="/#reviews" class="kd-orange-btn">View All Reviews <span>↗</span></a></div>'}
    </div>
  </section>`;
}

function pricingSection() {
  return `<section class="section kd-pricing-section">
    <div class="container">
      ${sectionHeading('Pricing', 'Profitable Pricing Plans')}
      <div class="kd-pricing-grid">${pricingPlans.map(([name, price, features, badge]) => `<article class="kd-price-card reveal">${badge ? `<div class="kd-best">${badge}</div>` : ''}<h4>${name}</h4><div class="kd-price"><span>$</span>${price}<em>/month</em></div><ul>${features.map(feature => `<li>${feature}</li>`).join('')}</ul><a href="/contact">Get Started</a></article>`).join('')}</div>
    </div>
  </section>`;
}

function specialitiesSection() {
  return `<section class="section kd-special-section">
    <div class="container">
      ${sectionHeading('Why Us', 'Our Specialities', 'Our top-notch digital marketing agency not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.')}
      <div class="kd-special-grid">
        <div class="kd-special-stat reveal"><img src="${framerImages.specialty}" alt="Specialities"/><strong>150%</strong><span>Average Traffic Increase</span><p>Clients choose to stay with us over the long run due to the exceptional results we deliver and the strong relationships we build.</p></div>
        <div class="kd-special-stat kd-special-dark reveal"><strong>$74M</strong><span>Revenue Generated</span><p>We help generated $74M revenue for our clients around the globe</p></div>
        <div class="kd-tag-cloud reveal">${['Quality','Personalization','Reliability','Collaboration','Innovation','Customer Focus','Long-Term Relationships','Positive Experience','Trustworthiness','Passion','Customer Support'].map(item => `<span>${item}</span>`).join('')}</div>
        <div class="kd-special-stat reveal"><strong>80%</strong><span>Enhanced Brand Visibility</span><p>Our agency developed a content marketing plan for a client, resulting in a significant increase in brand visibility and recognition.</p></div>
      </div>
    </div>
  </section>`;
}

function blogsSection() {
  return `<section class="section kd-blogs-section" id="blogs">
    <div class="container">
      ${sectionHeading('Blogs', 'Dive into our collection of engaging blog posts')}
      <div class="kd-section-action"><a href="/blogs" class="kd-orange-btn">Read Blogs <span>↗</span></a></div>
      <div class="kd-blog-grid">${blogCards(blogPosts)}</div>
    </div>
  </section>`;
}

function blogCards(items) {
  return items.map(post => `<a href="/blogs" class="kd-blog-card reveal">
    <img src="${post.image}" alt="${post.title}"/>
    <div><span>${post.date}</span><em>${post.category}</em><h3>${post.title}</h3></div>
  </a>`).join('');
}

function faqSection() {
  return `<section class="section kd-faq-section">
    <div class="container">
      ${sectionHeading('Frequently Asked Questions', "Got Questions? We've Got Answers!")}
      <div class="kd-faq-list reveal">${faqs.map(question => `<details><summary>${question}</summary><p>Share your details through the form and the Klickkk Digital team will guide you with the next practical step.</p></details>`).join('')}</div>
    </div>
  </section>`;
}

function servicesPage() {
  return pageShell({
    title: 'Services - Klickkk Digital',
    description: "Explore Klickkk Digital's full-service digital marketing solutions, including influencer marketing, performance marketing, SEO, social media, marketplace management, and web design.",
    body: `${servicesSection()}
    ${ctaSection()}`,
    reviewsBeforeFooter: true
  });
}

function servicePage(service) {
  const others = services.filter(item => item.slug !== service.slug);
  return pageShell({
    title: `${service.title} - Klickkk Digital`,
    description: service.meta,
    body: `<section class="section offers-section page-first-section"><div class="container"><div class="section-head"><div class="section-chip">What We Offer</div><h2>${service.title} That Delivers Real Results</h2><p>${service.description}</p></div><div class="offers-grid">${service.offers.map(offer => `<div class="offer-card reveal">${serviceIcon()}<h3>${offer}</h3><p>Planned, executed, and improved by a team focused on practical business outcomes.</p></div>`).join('')}</div></div></section>
    <section class="section process-section"><div class="container"><div class="section-head"><div class="section-chip">How We Work</div><h2>Our ${service.title} <span style="color:#babbbb">Process</span></h2></div><div class="process-grid">${service.process.map((step, index) => `<div class="proc-card reveal"><div class="proc-num">${String(index + 1).padStart(2, '0')}</div><h3>${step}</h3><p>Each step keeps your brand goals, audience, and measurable results in focus.</p></div>`).join('')}</div></div></section>
    <section class="section other-services-section"><div class="container"><div class="section-head"><div class="section-chip">Explore More</div><h2>Our Other <span style="color:#babbbb">Services</span></h2></div><div class="other-svc-grid">${others.map(item => `<a href="/${item.slug}" class="other-svc-card reveal"><div class="other-svc-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><h4>${item.title}</h4><p>${item.description}</p></div><div class="other-svc-arrow">↗</div></a>`).join('')}</div></div></section>
    ${ctaSection()}`,
    reviewsBeforeFooter: true
  });
}

function aboutPage() {
  return pageShell({
    title: 'About Us - Klickkk Digital',
    description: 'Learn about Klickkk Digital, our digital marketing approach, experience, team values, and growth-focused work across India and the USA.',
    body: `${aboutStatsSection()}
    ${brandSection()}
    ${specialitiesSection()}
    ${ctaSection()}`,
    reviewsBeforeFooter: true
  });
}

function contactPage() {
  return pageShell({
    title: 'Contact Us - Klickkk Digital',
    description: 'Get in touch with Klickkk Digital. Reach out to our team in India or the USA for a free consultation on your digital marketing needs.',
    body: `<section class="container"><div class="contact-layout page-first-section">
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
    </div></section>`,
    reviewsBeforeFooter: true
  });
}

function projectsPage() {
  return pageShell({
    title: 'Projects - Klickkk Digital',
    description: 'A focused look at how Klickkk Digital builds, launches, and improves growth campaigns.',
    body: `<section class="section kd-projects-section page-first-section"><div class="container">
      ${sectionHeading('Works', 'Case Studies')}
      <div class="kd-project-grid">${projectCards(caseStudies)}</div>
    </div></section>`,
    reviewsBeforeFooter: true
  });
}

function blogsPage() {
  return pageShell({
    title: 'Blogs - Klickkk Digital',
    description: 'Digital marketing ideas, guides, and updates from Klickkk Digital.',
    body: `<section class="section kd-blogs-section page-first-section"><div class="container">
      ${sectionHeading('Blogs', 'Dive into our collection of engaging blog posts')}
      <div class="kd-blog-grid">${blogCards(blogPosts)}</div>
    </div></section>`,
    reviewsBeforeFooter: true
  });
}

function reviewsPage() {
  return pageShell({
    title: 'Reviews - Klickkk Digital',
    description: 'Client reviews and testimonials for Klickkk Digital.',
    body: `<div class="page-first-section">${testimonialSection()}</div>`
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

function simplePage({ title, badge, description, body, reviewsBeforeFooter = false }) {
  return pageShell({
    title: `${title} - Klickkk Digital`,
    description,
    body: `<section class="section page-first-section"><div class="container"><div class="section-head"><div class="section-chip">${badge}</div><h2>${title}</h2><p>${body}</p></div></div></section>`,
    reviewsBeforeFooter
  });
}

function legalPage(kind) {
  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  return pageShell({
    title: `${title} - Klickkk Digital`,
    description: isPrivacy ? "Read Klickkk Digital's privacy policy." : "Read Klickkk Digital's terms and conditions.",
    body: `<section class="section page-first-section"><div class="container"><div class="contact-form-box"><h3>${title}</h3><p>${isPrivacy ? 'We use submitted contact information to respond to enquiries, deliver services, and improve communication. We do not sell personal information.' : 'By using this website or engaging our services, you agree to work with us under clear project terms, payment terms, and responsible website usage.'}</p><p>For questions, email <a href="mailto:hello@klickkk.com">hello@klickkk.com</a>.</p></div></div></section>`
  });
}

function notFoundPage() {
  return pageShell({
    title: 'Page Not Found - Klickkk Digital',
    description: 'The requested page could not be found.',
    body: `<section class="section page-first-section"><div class="container"><div class="section-head"><div class="section-chip">404</div><h2>Page Not Found</h2><p>The page you are looking for does not exist.</p></div></div></section>`
  });
}

module.exports = {
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
};
