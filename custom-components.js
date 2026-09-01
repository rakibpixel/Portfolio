/* ══════════════════════════════════════════════════════════════════
   RAKIBUL HASAN PORTFOLIO — AUTO-INJECTOR COMPONENT SYSTEM
   <site-nav> and <site-footer> Web Components & Automation Engine
══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Detect directory level & current page
  const pathname = window.location.pathname.replace(/\\/g, '/');
  const isSubfolder = pathname.includes('/blog/') || pathname.includes('/pages/');
  const isBlogFolder = pathname.includes('/blog/');
  const isPagesFolder = pathname.includes('/pages/');
  const prefix = isSubfolder ? '../' : '';
  const currentFile = pathname.split('/').pop() || 'index.html';
  const isGalleryPage = currentFile === 'gallery.html';

  // Dynamic link builder helper
  const homeHref = `${prefix}index.html`;
  const toolsHref = isPagesFolder ? 'tools.html' : `${prefix}pages/tools.html`;
  const galleryHref = isPagesFolder ? 'gallery.html' : `${prefix}pages/gallery.html`;
  const projectsHref = isPagesFolder ? 'projects.html' : `${prefix}pages/projects.html`;
  const blogHref = isBlogFolder ? 'index.html' : `${prefix}blog/index.html`;

  const isToolsActive = currentFile === 'tools.html';
  const isGalleryActive = currentFile === 'gallery.html';

  // ══════════════════════════════════════════════════════════════════
  // 1. SITE-NAV AUTO-INJECTOR TEMPLATE
  // ══════════════════════════════════════════════════════════════════
  function getNavHtml() {
    return `
<div class="nav-wrapper">
  <nav id="nav" class="floating-nav">
    <a href="${homeHref}#home" class="nav-brand" aria-label="Rakib Pixel">
      <img src="${prefix}Asset/Logo File/Logo With Text Black.svg" alt="Rakib Pixel" class="nav-brand-logo" />
    </a>
    <div class="nav-collapsible-content">
      <ul class="nav-links">
        <li><a href="${homeHref}#about">About</a></li>
        <li><a href="${toolsHref}"${isToolsActive ? ' class="active"' : ''}>Tools</a></li>
        <li><a href="${homeHref}#services">Services</a></li>
        <li><a href="${galleryHref}"${isGalleryActive ? ' class="active"' : ''}>Gallery</a></li>
        <li><a href="${homeHref}#experience">Experience</a></li>
      </ul>
      <a href="https://drive.google.com/file/d/1V-Ful4u5xza3Cz98Q-Ppt5y1OjROQio7/view?usp=sharing" target="_blank" class="nav-contact-pill">Resume</a>
    </div>
    <!-- 3-Dots Compact Trigger Pill -->
    <div class="nav-dots-pill" aria-label="Menu">
      <span class="nav-dot"></span>
      <span class="nav-dot"></span>
      <span class="nav-dot"></span>
    </div>
  </nav>
</div>`;
  }

  // ══════════════════════════════════════════════════════════════════
  // 2. SITE-FOOTER AUTO-INJECTOR TEMPLATE
  // ══════════════════════════════════════════════════════════════════
  function getFooterHtml() {
    return `
<footer class="fullwidth-sticky-footer">
  <div class="sticky-footer-wrapper">
    <div class="footer-3col-grid">
      <!-- Col 1: Brand & Availability -->
      <div class="footer-col-card footer-col-brand footer-reveal-col">
        <div class="footer-brand-logo-wrap">
          <img src="${prefix}Asset/Logo File/Logo With Text White.svg" alt="Rakibul Hassan" class="footer-brand-logo-img" />
        </div>
        <div class="footer-avail-badge">
          <span class="footer-avail-pulse"></span>
          <span>Available for freelance &amp; select roles</span>
        </div>
        <h3 class="footer-role-summary">Creative Technologist &amp; Visualizer</h3>
        <p class="footer-brand-bio">Blending strategic visual systems, motion design, and high-performance digital aesthetics for ambitious creators and forward-thinking brands.</p>
        <a href="mailto:rakibpixel.chat@gmail.com" class="footer-email-btn">
          <span>rakibpixel.chat@gmail.com</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>

      <!-- Col 2: Interactive FAQ -->
      <div class="footer-col-card footer-col-faq footer-reveal-col">
        <div class="footer-faq-header">
          <h3 class="footer-faq-title">Frequently Asked</h3>
          <div class="footer-faq-time-badge">
            <span class="footer-faq-time-dot"></span>
            <span id="footerFaqTime">Click to open, Dhaka Time</span>
          </div>
        </div>
        <div class="footer-faq-container">
          <div class="footer-faq-item is-open">
            <button type="button" class="footer-faq-q" aria-expanded="true">
              <span>Are you open for freelance branding, UI, or design systems?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Yes, absolutely! I'm currently open for select freelance contracts, brand identity systems, high-converting motion design, and full-stack digital product design with ambitious teams worldwide.</p></div>
              </div>
            </div>
          </div>
          <div class="footer-faq-item">
            <button type="button" class="footer-faq-q" aria-expanded="false">
              <span>What exactly does your design &amp; visualization process look like?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Discovery &amp; Strategy &rarr; Direction Prototyping &rarr; Interactive Motion Systems &rarr; High-Fidelity Front-End Implementation. Everything is built with iterative feedback loops.</p></div>
              </div>
            </div>
          </div>
          <div class="footer-faq-item">
            <button type="button" class="footer-faq-q" aria-expanded="false">
              <span>How fast can you deliver a project?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Speed depends on scope. Standalone motion assets &amp; sprint designs take 1&ndash;2 weeks; complete brand identity systems &amp; web experiences typically take 3&ndash;6 weeks.</p></div>
              </div>
            </div>
          </div>
          <div class="footer-faq-item">
            <button type="button" class="footer-faq-q" aria-expanded="false">
              <span>Do you handle both design and front-end development?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Yes! As a Creative Technologist, I design fluid visual systems and write production-ready code with HTML, CSS, JavaScript, GSAP, and interactive physics engines.</p></div>
              </div>
            </div>
          </div>
          <div class="footer-faq-item">
            <button type="button" class="footer-faq-q" aria-expanded="false">
              <span>What tools and software do you specialize in?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Figma, After Effects, Cinema 4D, Illustrator, Photoshop, Blender, GSAP, WebGL/Matter.js, VS Code, and custom JavaScript automation pipelines.</p></div>
              </div>
            </div>
          </div>
          <div class="footer-faq-item">
            <button type="button" class="footer-faq-q" aria-expanded="false">
              <span>How do we get started on a project together?</span>
              <span class="footer-faq-toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
            </button>
            <div class="footer-faq-a-wrap">
              <div class="footer-faq-a-inner">
                <div class="footer-faq-a"><p>Reach out via <a href="mailto:rakibpixel.chat@gmail.com" style="color:#ffffff;text-decoration:underline;">rakibpixel.chat@gmail.com</a> or schedule a discovery call through the button in the hero section.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Col 3: Navigation Links Card -->
      <div class="footer-col-card footer-col-nav-card footer-reveal-col">
        <div class="footer-nav-block">
          <span class="footer-nav-heading">[ PAGES ]</span>
          <ul class="footer-links-list">
            <li class="footer-link-item"><a href="${homeHref}#about"><span class="btn-roll"><span class="btn-text-default">About</span><span class="btn-text-hover">About</span></span></a></li>
            <li class="footer-link-item"><a href="${toolsHref}"><span class="btn-roll"><span class="btn-text-default">Tools</span><span class="btn-text-hover">Tools</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#services"><span class="btn-roll"><span class="btn-text-default">Services</span><span class="btn-text-hover">Services</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#process"><span class="btn-roll"><span class="btn-text-default">How I Work</span><span class="btn-text-hover">How I Work</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#services"><span class="btn-roll"><span class="btn-text-default">Skills &amp; Specialties</span><span class="btn-text-hover">Skills &amp; Specialties</span></span></a></li>
            <li class="footer-link-item"><a href="${galleryHref}"><span class="btn-roll"><span class="btn-text-default">Gallery</span><span class="btn-text-hover">Gallery</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#experience"><span class="btn-roll"><span class="btn-text-default">Experience</span><span class="btn-text-hover">Experience</span></span></a></li>
            <li class="footer-link-item"><a href="https://drive.google.com/file/d/1V-Ful4u5xza3Cz98Q-Ppt5y1OjROQio7/view?usp=sharing" target="_blank"><span class="btn-roll"><span class="btn-text-default">Resume</span><span class="btn-text-hover">Resume</span></span></a></li>
            <li class="footer-link-item"><a href="${blogHref}"><span class="btn-roll"><span class="btn-text-default">Blog</span><span class="btn-text-hover">Blog</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#awards"><span class="btn-roll"><span class="btn-text-default">Awards</span><span class="btn-text-hover">Awards</span></span></a></li>
            <li class="footer-link-item"><a href="${homeHref}#reviews"><span class="btn-roll"><span class="btn-text-default">Networking</span><span class="btn-text-hover">Networking</span></span></a></li>
          </ul>
        </div>
        <div class="footer-nav-block">
          <span class="footer-nav-heading">[ CONNECT ]</span>
          <ul class="footer-links-list">
            <li class="footer-link-item"><a href="https://linkedin.com/in/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">LinkedIn</span><span class="btn-text-hover">LinkedIn</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://behance.net/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">Behance</span><span class="btn-text-hover">Behance</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://dribbble.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">Dribbble</span><span class="btn-text-hover">Dribbble</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://instagram.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">Instagram</span><span class="btn-text-hover">Instagram</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://facebook.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">Facebook</span><span class="btn-text-hover">Facebook</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://pinterest.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">Pinterest</span><span class="btn-text-hover">Pinterest</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://x.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">X / Twitter</span><span class="btn-text-hover">X / Twitter</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://artstation.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">ArtStation</span><span class="btn-text-hover">ArtStation</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
            <li class="footer-link-item"><a href="https://github.com/rakibpixel" target="_blank"><span class="btn-roll"><span class="btn-text-default">GitHub</span><span class="btn-text-hover">GitHub</span></span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom-meta footer-reveal-col">
      <span class="footer-copy">&copy; 2026 Rakib Pixel. All rights reserved.</span>
      <span class="footer-zone">Dhaka, BD / GMT+6</span>
    </div>
  </div>
</footer>`;
  }

  // ══════════════════════════════════════
  // 3. GLOBAL FAQ ACCORDION EVENT DELEGATION
  // ══════════════════════════════════════
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.footer-faq-q');
    if (!btn) return;
    
    e.preventDefault();
    e.stopPropagation();

    const currentItem = btn.closest('.footer-faq-item');
    if (!currentItem) return;

    const isOpen = currentItem.classList.contains('is-open');

    currentItem.parentElement.querySelectorAll('.footer-faq-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('is-open');
        const otherBtn = item.querySelector('.footer-faq-q');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      }
    });

    if (isOpen) {
      currentItem.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      currentItem.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Global 3-Dots Click Delegation
  document.addEventListener('click', function (e) {
    const dots = e.target.closest('.nav-dots-pill');
    if (!dots) return;
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('is-compact');
    }
  });

  // ══════════════════════════════════════
  // 4. AUTO-INJECTION EXECUTION
  // ══════════════════════════════════════
  function autoInjectComponents() {
    // 1. Inject Floating Nav
    document.querySelectorAll('site-nav').forEach(el => {
      el.outerHTML = getNavHtml();
    });

    // 2. Inject Sticky Footer
    document.querySelectorAll('site-footer').forEach(el => {
      el.outerHTML = getFooterHtml();
    });

    // 3. Auto-Inject Bottom Progressive Blur Overlay (if not on Gallery)
    if (!isGalleryPage && !document.querySelector('.bottom-blur-gradient-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'bottom-blur-gradient-overlay';
      overlay.id = 'bottomBlurOverlay';
      overlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(overlay);
    }

    initFloatingNav();
    initFooterReveal();
  }

  // ══════════════════════════════════════
  // 5. UNIVERSAL FLOATING NAV INTERACTION ENGINE
  // ══════════════════════════════════════
  function initFloatingNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    let ticking = false;

    function handleScroll() {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        nav.classList.add('is-compact');
      } else if (currentScrollY < lastScrollY || currentScrollY <= 60) {
        nav.classList.remove('is-compact');
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    let accumulatedDelta = 0;
    let wheelTimer;
    window.addEventListener('wheel', (e) => {
      accumulatedDelta += e.deltaY;
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => { accumulatedDelta = 0; }, 250);

      if (e.deltaY > 12 || accumulatedDelta > 30) {
        nav.classList.add('is-compact');
      } else if (e.deltaY < -12 || accumulatedDelta < -30) {
        nav.classList.remove('is-compact');
      }
    }, { passive: true });

    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!e.touches || !e.touches[0]) return;
      const currentY = e.touches[0].clientY;
      const diff = touchStartY - currentY;
      if (diff > 20) {
        nav.classList.add('is-compact');
      } else if (diff < -20) {
        nav.classList.remove('is-compact');
      }
    }, { passive: true });
  }

  // ══════════════════════════════════════
  // 6. MASTER FOOTER REVEAL & BLUR OVERLAY CONTROLLER
  // ══════════════════════════════════════
  function initFooterReveal() {
    const footer = document.querySelector('footer.fullwidth-sticky-footer') || document.querySelector('footer');
    if (!footer) return;

    function updateDhakaClock() {
      const clockEl = document.getElementById('footerFaqTime');
      if (clockEl) {
        clockEl.textContent = 'Click to open, ' + new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
      }
    }
    updateDhakaClock();
    setInterval(updateDhakaClock, 15000);

    let isRevealed = false;
    let ticking = false;

    function checkFooterVisibility() {
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      const distFromBottom = docHeight - (scrollY + windowHeight);

      let shouldReveal = false;

      if (distFromBottom <= 380) {
        shouldReveal = true;
      } else if (distFromBottom > 520) {
        shouldReveal = false;
      } else {
        shouldReveal = isRevealed;
      }

      if (shouldReveal !== isRevealed) {
        isRevealed = shouldReveal;
        const cols = footer.querySelectorAll('.footer-reveal-col');
        const overlays = document.querySelectorAll('.bottom-blur-gradient-overlay');

        if (shouldReveal) {
          cols.forEach(c => c.classList.add('is-revealed'));
          overlays.forEach(o => o.classList.add('is-hidden'));
        } else {
          cols.forEach(c => c.classList.remove('is-revealed'));
          overlays.forEach(o => o.classList.remove('is-hidden'));
        }
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(checkFooterVisibility);
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', checkFooterVisibility);
    checkFooterVisibility();
  }

  // Register Web Components
  if (typeof customElements !== 'undefined') {
    if (!customElements.get('site-nav')) {
      customElements.define('site-nav', class extends HTMLElement {
        connectedCallback() {
          if (!this.innerHTML.trim()) {
            this.outerHTML = getNavHtml();
            initFloatingNav();
          }
        }
      });
    }
    if (!customElements.get('site-footer')) {
      customElements.define('site-footer', class extends HTMLElement {
        connectedCallback() {
          if (!this.innerHTML.trim()) {
            this.outerHTML = getFooterHtml();
            initFooterReveal();
          }
        }
      });
    }
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInjectComponents);
  } else {
    autoInjectComponents();
  }
})();
