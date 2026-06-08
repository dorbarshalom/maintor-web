/* ================================================================
   MAINTOR.SYSTEMS — Main JavaScript
   ================================================================ */

(function () {
  'use strict';

  // ── Sticky nav scroll effect ────────────────────────────────────
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile menu ─────────────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) mobileMenu.classList.remove('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── Scroll-triggered animations ─────────────────────────────────
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if (animatedEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    );
    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    animatedEls.forEach(el => el.classList.add('visible'));
  }

  // ── Animated stat counters ──────────────────────────────────────
  const counterEls = document.querySelectorAll('.counter');
  if (counterEls.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const isFloat = el.dataset.float === 'true' || (target % 1 !== 0);
          const duration = 1600;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = Math.min(now - startTime, duration);
            const progress = elapsed / duration;
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = isFloat ? target.toFixed(1) : Math.floor(target);
            }
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach(el => counterObserver.observe(el));
  }

  // ── Live downtime timer ─────────────────────────────────────────
  const timerEl = document.querySelector('.breakdown-timer-val');
  if (timerEl) {
    // Start from a plausible ongoing breakdown time (47m 23s)
    let totalSeconds = 47 * 60 + 23;
    const pad = (n) => String(n).padStart(2, '0');
    const updateTimer = () => {
      totalSeconds++;
      const h = pad(Math.floor(totalSeconds / 3600));
      const m = pad(Math.floor((totalSeconds % 3600) / 60));
      const s = pad(totalSeconds % 60);
      timerEl.textContent = `${h}:${m}:${s}`;
    };
    setInterval(updateTimer, 1000);
  }

  // ── Smooth scroll for anchor links ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Active nav link highlight ────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach(s => sectionObserver.observe(s));
  }

})();
