/* ══════════════════════════════════════════════════════════
   Klickkk Digital — Main Script
   ══════════════════════════════════════════════════════════ */

/* ─── NAVBAR SCROLL ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── MOBILE MENU ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── SMOOTH SCROLL (for older browsers) ────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── ANIMATED COUNTERS ──────────────────────────────────── */
function animateCount(el, target, duration = 1800) {
  const start     = performance.now();
  const easeOut   = t => 1 - Math.pow(1 - t, 3);

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(easeOut(progress) * target);
    if (progress < 1) requestAnimationFrame(frame);
    else el.textContent = target;
  }
  requestAnimationFrame(frame);
}

/* ─── INTERSECTION OBSERVER ──────────────────────────────── */
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;

    const el    = entry.target;
    const delay = parseFloat(el.dataset.delay || 0);

    setTimeout(() => el.classList.add('visible'), delay);
    revealObserver.unobserve(el);
  });
}, observerOptions);

/* stagger siblings inside grids */
function staggerReveal(selector, baseDelay = 80) {
  const groups = {};
  document.querySelectorAll(selector).forEach(el => {
    const parent = el.parentElement;
    groups[parent] = groups[parent] || [];
    groups[parent].push(el);
  });
  Object.values(groups).forEach(group => {
    group.forEach((el, i) => {
      el.dataset.delay = i * baseDelay;
      revealObserver.observe(el);
    });
  });
}

staggerReveal('.svc-card',   100);
staggerReveal('.proc-card',  90);
staggerReveal('.testi-card', 100);
staggerReveal('.feat',       80);

/* standalone reveals */
document.querySelectorAll('.why-left, .cta-content').forEach(el => {
  revealObserver.observe(el);
});

/* ─── COUNTER OBSERVER ───────────────────────────────────── */
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    animateCount(el, target);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count').forEach(el => countObserver.observe(el));

/* ─── ACTIVE NAV HIGHLIGHT ON SCROLL ────────────────────── */
const sections = document.querySelectorAll('section[id], div[id]');
const navItems = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navItems.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

/* ─── NAVBAR ACTIVE STYLE ────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--text); background: var(--border); }`;
document.head.appendChild(style);

/* ─── SERVICE CARD TILT (subtle) ────────────────────────── */
document.querySelectorAll('.svc-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `translateY(-5px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
    card.style.transformOrigin = 'center';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
