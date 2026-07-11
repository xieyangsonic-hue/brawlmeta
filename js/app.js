/**
 * BrawlMeta v3 - Arena-Inspired Application
 * Enhanced particle system with gold dust, purple sparks, HP bars
 */

// ============================================
// CANVAS PARTICLE SYSTEM — Gold Dust + Purple Sparks
// ============================================
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  const particles = [];
  const maxParticles = 70;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.x = Math.random() * w;
      this.y = init ? Math.random() * h : h + 20;
      this.radius = Math.random() * 2.2 + 0.4;
      this.speedY = -(Math.random() * 0.5 + 0.08);
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.opacity = Math.random() * 0.55 + 0.08;
      // Mix: purple (60%), gold (35%), pink (5%)
      const r = Math.random();
      if (r < 0.6) this.hue = 260 + Math.random() * 20; // purple range
      else if (r < 0.95) this.hue = 42 + Math.random() * 15; // gold range
      else this.hue = 330 + Math.random() * 10; // pink range
      this.twinkle = Math.random() * Math.PI * 2;
      this.twinkleSpeed = Math.random() * 0.03 + 0.01;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01 + this.twinkle) * 0.15;
      this.twinkle += this.twinkleSpeed;
      if (this.y < -20 || this.x < -20 || this.x > w + 20) {
        this.reset(false);
      }
    }
    draw(ctx) {
      const twinkleAlpha = this.opacity * (0.6 + 0.4 * Math.sin(this.twinkle));
      const saturation = this.hue > 200 ? 85 : 90;

      // Glow halo
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, ${saturation}%, 55%, ${twinkleAlpha * 0.1})`;
      ctx.fill();

      // Core particle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, ${saturation}%, 65%, ${twinkleAlpha})`;
      ctx.fill();

      // Inner bright spot
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 60%, 90%, ${twinkleAlpha * 0.9})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.update();
      p.draw(ctx);
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  });
  reveals.forEach(el => observer.observe(el));
}

// ============================================
// ANIMATED NUMBER COUNTER
// ============================================
function animateCounter(el, target, duration) {
  if (!el) return;
  const start = 0;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    el.textContent = current + '+';
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// ============================================
// HP BAR ANIMATION
// ============================================
function animateHPBars() {
  document.querySelectorAll('.hp-bar-fill').forEach(bar => {
    const target = parseFloat(bar.dataset.width || bar.style.width) || 100;
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      bar.style.width = target + '%';
    });
  });
}

// ============================================
// BRAWLER AVATAR SILHOUETTES
// Original stylized silhouettes inspired by each brawler's theme.
// No copyrighted game art is used; all graphics are custom SVG paths.
// ============================================
const AVATAR_SVGS = {
  // Featured / visible brawlers
  kenji: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M30 38 Q50 24 70 38 L75 54 Q50 72 25 54 Z"/><path d="M36 46 L64 46" stroke="#000" stroke-width="3" fill="none" opacity="0.25"/><path d="M22 64 L40 45 L60 45 L78 64" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  surge: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M25 35 L75 35 L70 65 L30 65 Z"/><path d="M35 30 L40 20 L45 30" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M55 30 L60 20 L65 30" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M38 48 L62 48" stroke="#000" stroke-width="4" opacity="0.25"/></svg>`,
  cordelius: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M20 55 Q50 10 80 55 Q65 75 50 75 Q35 75 20 55 Z"/><circle cx="35" cy="45" r="4" opacity="0.3"/><circle cx="55" cy="38" r="3" opacity="0.3"/><circle cx="68" cy="50" r="5" opacity="0.3"/></svg>`,
  gale: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M25 40 Q50 20 75 40 L70 65 Q50 80 30 65 Z"/><path d="M35 55 Q50 65 65 55" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M30 75 Q50 85 70 75" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  spike: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 30 Q50 20 65 30 L65 70 Q50 80 35 70 Z"/><path d="M25 40 L30 50 L20 55 L30 60 L25 70" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M75 40 L70 50 L80 55 L70 60 L75 70" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  crow: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M30 35 L70 35 L60 60 L40 60 Z"/><path d="M50 60 L50 75" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M35 45 L65 45" stroke="#000" stroke-width="3" opacity="0.25"/></svg>`,
  amber: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 50 Q50 25 65 50 Q75 60 65 70 Q50 80 35 70 Q25 60 35 50 Z"/><path d="M42 35 Q50 15 58 35" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M40 55 L60 55" stroke="#000" stroke-width="3" opacity="0.25"/></svg>`,
  sandy: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M28 40 Q50 25 72 40 L68 65 Q50 78 32 65 Z"/><path d="M40 52 Q50 58 60 52" fill="none" stroke="#000" stroke-width="3" opacity="0.25" stroke-linecap="round"/><path d="M22 72 Q50 88 78 72" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  lou: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 35 L65 35 L60 55 L40 55 Z"/><path d="M30 55 L70 55 L60 85 L40 85 Z"/><path d="M38 45 L62 45" stroke="#000" stroke-width="3" opacity="0.25"/></svg>`,
  max: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M30 38 Q50 28 70 38 L65 62 Q50 72 35 62 Z"/><path d="M35 30 L40 20 L45 30" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M55 30 L60 20 L65 30" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M38 48 L62 48" stroke="#000" stroke-width="4" opacity="0.25"/></svg>`,
  gene: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 30 Q50 25 65 30 L55 60 L45 60 Z"/><path d="M40 60 Q30 75 40 85" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M60 60 Q70 75 60 85" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M50 60 L50 75" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>`,
  byron: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 30 L65 30 L60 75 L40 75 Z"/><path d="M42 45 L58 45" stroke="#000" stroke-width="3" opacity="0.25"/><path d="M45 60 L55 60" stroke="#000" stroke-width="3" opacity="0.25"/></svg>`,
  otis: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 35 Q50 25 65 35 Q70 50 60 60 Q50 70 40 60 Q30 50 35 35 Z"/><path d="M25 60 Q20 75 30 80" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M75 60 Q80 75 70 80" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  leon: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M30 35 Q50 25 70 35 L65 60 Q50 70 35 60 Z"/><path d="M40 50 Q50 55 60 50" fill="none" stroke="#000" stroke-width="3" opacity="0.25" stroke-linecap="round"/><path d="M72 45 L85 40" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,

  // Role-based fallbacks
  assassin: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M30 35 Q50 22 70 35 L65 58 Q50 68 35 58 Z"/><path d="M22 62 L42 45" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M78 62 L58 45" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>`,
  fighter: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M35 30 L65 30 L60 55 L40 55 Z"/><circle cx="40" cy="70" r="10"/><circle cx="60" cy="70" r="10"/></svg>`,
  'damage dealer': `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M50 20 L60 40 L80 50 L60 60 L50 80 L40 60 L20 50 L40 40 Z"/><circle cx="50" cy="50" r="12" fill="none" stroke="#fff" stroke-width="4"/></svg>`,
  marksman: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-width="6"/><circle cx="50" cy="50" r="12" fill="none" stroke="#fff" stroke-width="4"/><path d="M50 10 L50 25 M50 75 L50 90 M10 50 L25 50 M75 50 L90 50" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  support: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 62 L30 75 L35 55 L20 40 L40 40 Z"/><circle cx="50" cy="50" r="8" opacity="0.25"/></svg>`,
  controller: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M25 50 Q50 20 75 50 Q50 80 25 50 Z" fill="none" stroke="#fff" stroke-width="6"/><path d="M50 30 L50 70" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M30 50 L70 50" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>`,
  tank: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><path d="M25 35 L75 35 L70 70 L30 70 Z"/><path d="M35 45 L65 45" stroke="#000" stroke-width="3" opacity="0.25"/></svg>`,
  thrower: `<svg viewBox="0 0 100 100" class="brawler-avatar-svg" fill="#fff"><circle cx="50" cy="55" r="22"/><path d="M50 33 L50 15" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M30 25 Q50 5 70 25" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`
};

function getBrawlerAvatar(id, role) {
  const roleKey = role.toLowerCase();
  const svg = AVATAR_SVGS[id] || AVATAR_SVGS[roleKey] || AVATAR_SVGS.fighter;
  return svg;
}

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initHeaderScroll();

  // Mobile menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav');
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        (currentPath === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Render all sections
  updateStatsBar();
  renderHeroTierShowcase();
  renderTierPreview();
  renderBrawlerCards();
  renderNewsCards();
  renderGuideCards();
  renderTierList();
  renderMetaSummary();
  setupBrawlerModals();
  setupGuideModals();
  setupSearch();
  initScrollReveal();

  // Animate counters when stats bar visible
  const statsBar = document.getElementById('statsBar');
  if (statsBar) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(document.getElementById('statBrawlers'), BRAWLERS.length, 1500);
          animateCounter(document.getElementById('statGuides'), GUIDES.length, 1200);
          animateCounter(document.getElementById('statModes'), GAME_MODES.length, 1000);
          animateCounter(document.getElementById('statUpdates'), UPDATES.length, 800);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(statsBar);
  }

  // Animate HP bars on scroll
  const hpBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        const fill = entry.target.querySelector('.hp-bar-fill');
        if (fill) {
          const width = fill.style.width || fill.dataset.width || '0%';
          fill.style.width = '0%';
          requestAnimationFrame(() => {
            fill.style.width = width;
          });
        }
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.hp-bar').forEach(bar => hpBarObserver.observe(bar));

  // Add click sparkle effect to gem decorations
  document.querySelectorAll('.gem-decoration').forEach(gem => {
    gem.addEventListener('click', (e) => {
      createSparkle(e.clientX, e.clientY);
    });
  });

  // Close modal with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

// ============================================
// CLICK SPARKLE EFFECT
// ============================================
function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.style.cssText = `
    position: fixed;
    left: ${x - 20}px;
    top: ${y - 20}px;
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    animation: sparklePop 0.6s ease-out forwards;
    color: #ffd54f;
    filter: drop-shadow(0 0 6px rgba(255,213,79,0.8));
  `;
  sparkle.textContent = '✨';
  document.body.appendChild(sparkle);
  sparkle.addEventListener('animationend', () => sparkle.remove());

  // Inject keyframe if not exists
  if (!document.getElementById('sparkle-style')) {
    const style = document.createElement('style');
    style.id = 'sparkle-style';
    style.textContent = `
      @keyframes sparklePop {
        0% { opacity: 1; transform: scale(0.3) translateY(0); }
        50% { opacity: 1; transform: scale(1.2) translateY(-10px); }
        100% { opacity: 0; transform: scale(1.5) translateY(-30px); }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// STATS BAR
// ============================================
function updateStatsBar() {
  const elBrawlers = document.getElementById('statBrawlers');
  const elGuides = document.getElementById('statGuides');
  const elModes = document.getElementById('statModes');
  const elUpdates = document.getElementById('statUpdates');
  if (elBrawlers) elBrawlers.textContent = '0';
  if (elGuides) elGuides.textContent = '0';
  if (elModes) elModes.textContent = '0';
  if (elUpdates) elUpdates.textContent = '0';
}

// ============================================
// HERO TIER SHOWCASE
// ============================================
function renderHeroTierShowcase() {
  const container = document.getElementById('heroTierShowcase');
  if (!container) return;

  const tierConfig = [
    { tier: 'S', label: 's-tier', name: 'S TIER', desc: 'Meta defining — Must pick/ban' },
    { tier: 'A', label: 'a-tier', name: 'A TIER', desc: 'Very strong — Top contenders' },
    { tier: 'B', label: 'b-tier', name: 'B TIER', desc: 'Viable — Solid counter picks' },
    { tier: 'C', label: 'c-tier', name: 'C TIER', desc: 'Niche — Situationally strong' },
  ];

  container.innerHTML = tierConfig.map(config => {
    const brawlersInTier = BRAWLERS.filter(b => b.tier === config.tier).slice(0, 5);
    return `
      <div class="hero-tier-row">
        <div class="hero-tier-badge ${config.label}">${config.tier}</div>
        <div class="hero-tier-info">
          <div class="hero-tier-name">${config.name}</div>
          <div class="hero-tier-desc">${config.desc}</div>
          <div class="hero-tier-brawlers">
            ${brawlersInTier.map(b => `
              <span class="hero-tier-avatar" style="background:${b.color};"
                    title="${b.name} — ${b.role}"
                    onclick="openBrawlerDetail('${b.id}')">
                ${getBrawlerAvatar(b.id, b.role)}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// TIER PREVIEW (HOMEPAGE) — with HP Bars
// ============================================
function renderTierPreview() {
  const container = document.getElementById('tierPreview');
  if (!container) return;

  const tiers = ['S', 'A', 'B'];
  const tierDesc = { S: 'Meta Defining', A: 'Very Strong', B: 'Viable Picks' };
  const tierPercent = { S: 95, A: 78, B: 55 };

  container.innerHTML = tiers.map(tier => {
    const brawlersInTier = BRAWLERS.filter(b => b.tier === tier);
    return `
      <div class="tier-block reveal">
        <div class="tier-block-header">
          <span class="tier-badge ${tier.toLowerCase()}">${tier}</span>
          <h3>${tierDesc[tier]}</h3>
          <span class="tier-count">${brawlersInTier.length} heroes</span>
        </div>
        <div class="tier-block-body" style="flex-direction:column;gap:12px;">
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${brawlersInTier.map(b => `
              <span class="brawler-chip" onclick="openBrawlerDetail('${b.id}')" title="${b.name} — ${b.role}">
                <span class="brawler-chip-img" style="background:${b.color};color:#fff;">${getBrawlerAvatar(b.id, b.role)}</span>
                ${b.name}
              </span>
            `).join('')}
          </div>
          <div class="hp-bar">
            <div class="hp-bar-fill ${tier.toLowerCase()}-tier" data-width="${tierPercent[tier]}%"
                 style="width:${tierPercent[tier]}%;"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// BRAWLER CARDS (HOMEPAGE)
// ============================================
function renderBrawlerCards() {
  const container = document.getElementById('featuredBrawlers');
  if (!container) return;

  const featured = [
    ...BRAWLERS.filter(b => b.tier === 'S'),
    ...BRAWLERS.filter(b => b.tier === 'A')
  ];

  container.innerHTML = featured.map(b => `
    <div class="brawler-card ${b.rarity.replace(/\s+/g, '-').toLowerCase()} reveal"
         onclick="openBrawlerDetail('${b.id}')">
      <div class="brawler-card-avatar-container">
        <div class="brawler-card-avatar-ring"></div>
        <div class="brawler-card-avatar" style="background:linear-gradient(135deg, ${b.color}, ${b.color}dd);color:#fff;">
          ${getBrawlerAvatar(b.id, b.role)}
        </div>
      </div>
      <div class="brawler-card-name">${b.name}</div>
      <div class="brawler-card-rarity rarity-${b.rarity.replace(/\s+/g, '-').toLowerCase()}">
        ${b.rarity}
      </div>
      <div class="brawler-card-meta">
        <span class="brawler-card-role">${b.role}</span>
        <span class="brawler-card-tier tier-badge ${b.tier.toLowerCase()}">${b.tier}</span>
      </div>
    </div>
  `).join('');

  initScrollReveal();
}

// ============================================
// NEWS CARDS (HOMEPAGE)
// ============================================
function renderNewsCards() {
  const container = document.getElementById('newsGrid');
  if (!container) return;

  container.innerHTML = UPDATES.map((u, i) => `
    <article class="news-card reveal reveal-delay-${i + 1}" onclick="openNewsDetail('${u.id}')">
      <div class="news-card-image">${u.icon}</div>
      <div class="news-card-body">
        <span class="news-card-tag">${u.tag}</span>
        <h4 class="news-card-title">${u.title}</h4>
        <p class="news-card-excerpt">${u.excerpt}</p>
        <span class="news-card-date">${u.date}</span>
      </div>
    </article>
  `).join('');
}

// ============================================
// NEWS DETAIL MODAL
// ============================================
function openNewsDetail(newsId) {
  const article = UPDATES.find(u => u.id === newsId);
  if (!article || !article.content) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  const sectionsHtml = article.content.sections.map(section => `
    <div class="modal-section">
      <h4>${section.title}</h4>
      <ul class="guide-list">
        ${section.items.map(item => {
          const [label, detail] = item.split(' — ');
          return `<li><strong>${label}</strong>${detail ? ' — ' + detail : ''}</li>`;
        }).join('')}
      </ul>
    </div>
  `).join('');

  const statsHtml = article.content.stats.map(s => `
    <div class="detail-stat">
      <div class="detail-stat-value">${s.value}</div>
      <div class="detail-stat-label">${s.label}</div>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="modal news-modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-brawler-info">
          <div class="modal-avatar news-avatar" style="background:linear-gradient(135deg, var(--accent-purple), var(--accent-blue));color:#fff;">
            ${article.icon}
          </div>
          <div>
            <h3>${article.title}</h3>
            <span style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">${article.tag} · ${article.date}</span>
          </div>
        </div>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>

      <div class="modal-body">
        <p style="color:var(--text-secondary);margin-bottom:24px;line-height:1.7;font-size:1rem;">
          ${article.content.intro}
        </p>

        <div class="modal-section news-hero">
          <h4>${article.content.hero}</h4>
        </div>

        ${sectionsHtml}

        <div class="modal-section">
          <h4>📊 Key Numbers</h4>
          <div class="detail-stats-grid">
            ${statsHtml}
          </div>
        </div>

        <div class="modal-section">
          <h4>📝 Takeaway</h4>
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:18px;color:var(--accent-gold);font-weight:500;line-height:1.6;">
            ${article.content.conclusion}
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-top:16px;border-top:1px solid var(--border);color:var(--text-muted);font-size:0.8rem;">
          <span>By ${article.content.author}</span>
          <span>${article.content.readTime}</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// ============================================
// GUIDE CARDS (HOMEPAGE)
// ============================================
function renderGuideCards() {
  const container = document.getElementById('guidesGrid');
  if (!container) return;

  container.innerHTML = GUIDES.map((g, i) => `
    <div class="guide-card reveal reveal-delay-${i + 1}" onclick="openGuideDetail('${g.id}')">
      <div class="guide-card-icon ${g.iconClass}">${g.icon}</div>
      <h4>${g.title}</h4>
      <p>${g.description}</p>
    </div>
  `).join('');
}

// ============================================
// META SUMMARY (HOMEPAGE)
// ============================================
function renderMetaSummary() {
  const container = document.getElementById('metaSummary');
  if (!container) return;

  container.innerHTML = `
    <p style="color:var(--text-secondary);line-height:1.75;">
      ${META_SUMMARY.description}
    </p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;">
      <div>
        <strong style="color:var(--tier-s);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;">
          🔝 Top Picks
        </strong>
        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;">
          ${META_SUMMARY.topPicks.map(name => {
            const b = BRAWLERS.find(x => x.name === name);
            return `<span class="brawler-chip" onclick="openBrawlerDetail('${b ? b.id : ''}')">${name}</span>`;
          }).join('')}
        </div>
      </div>
      <div>
        <strong style="color:#69f0ae;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;">
          📈 Rising Stars
        </strong>
        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;">
          ${META_SUMMARY.risingStars.map(name => {
            const b = BRAWLERS.find(x => x.name === name);
            return `<span class="brawler-chip" onclick="openBrawlerDetail('${b ? b.id : ''}')">${name}</span>`;
          }).join('')}
        </div>
      </div>
      <div>
        <strong style="color:var(--tier-d);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;">
          ⚠️ Falling Off
        </strong>
        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;">
          ${META_SUMMARY.fallingOff.map(name => {
            const b = BRAWLERS.find(x => x.name === name);
            return `<span class="brawler-chip" onclick="openBrawlerDetail('${b ? b.id : ''}')">${name}</span>`;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// FULL TIER LIST (TIER-LIST.HTML)
// ============================================
function renderTierList() {
  const container = document.getElementById('tierList');
  if (!container) return;

  const tiers = ['S', 'A', 'B', 'C', 'D'];

  container.innerHTML = tiers.map(tier => {
    const data = TIER_LIST[tier];
    const brawlersInTier = BRAWLERS.filter(b => b.tier === tier);
    return `
      <div class="tier-row">
        <div class="tier-label ${tier.toLowerCase()}">
          ${tier}
          <small>${data.description.split(' — ')[0]}</small>
        </div>
        <div class="tier-content">
          ${brawlersInTier.map(b => `
            <div class="tier-brawler" onclick="openBrawlerDetail('${b.id}')">
              <span class="tier-brawler-avatar" style="background:linear-gradient(135deg, ${b.color}, ${b.color}dd);color:#fff;">
                ${getBrawlerAvatar(b.id, b.role)}
              </span>
              ${b.name}
              <span class="rarity-${b.rarity.replace(/\s+/g, '-').toLowerCase()}" style="font-size:0.7rem;opacity:0.7;">
                ${b.role}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Tier descriptions
  const descContainer = document.getElementById('tierDescriptions');
  if (descContainer) {
    descContainer.innerHTML = tiers.map(tier => {
      const data = TIER_LIST[tier];
      const parts = data.description.split(' — ');
      return `
        <div style="display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid var(--border);">
          <span class="tier-badge ${tier.toLowerCase()}" style="flex-shrink:0;width:34px;height:34px;">${tier}</span>
          <div>
            <strong style="font-size:0.95rem;">${parts[0]}</strong>
            <p style="color:var(--text-secondary);font-size:0.84rem;margin-top:3px;">${parts[1] || parts[0]}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ============================================
// BRAWLER DETAIL MODAL
// ============================================
function setupBrawlerModals() {}

function openBrawlerDetail(brawlerId) {
  const brawler = BRAWLERS.find(b => b.id === brawlerId);
  if (!brawler) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  modal.innerHTML = `
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-brawler-info">
          <div class="modal-avatar" style="background:linear-gradient(135deg, ${brawler.color}, ${brawler.color}dd);color:#fff;">
            ${getBrawlerAvatar(brawler.id, brawler.role)}
          </div>
          <div>
            <h3>${brawler.name}</h3>
            <span class="rarity-${brawler.rarity.replace(/\s+/g, '-').toLowerCase()}" style="font-size:0.85rem;font-weight:600;">
              ${brawler.rarity.toUpperCase()} · ${brawler.role}
            </span>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="tier-badge ${brawler.tier.toLowerCase()}" style="width:38px;height:38px;font-size:1.1rem;">${brawler.tier}</span>
          <button class="modal-close" onclick="closeModal()">✕</button>
        </div>
      </div>

      <div class="modal-body">
        <p style="color:var(--text-secondary);margin-bottom:24px;line-height:1.7;">
          ${brawler.description}
        </p>

        <div class="modal-section">
          <h4>Abilities</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;
            background:var(--bg-card);border:1px solid var(--border);
            border-radius:var(--radius-md);padding:18px;">
            <div>
              <span style="color:var(--text-muted);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">⚔️ Attack</span>
              <p style="font-size:0.9rem;margin-top:6px;line-height:1.5;">${brawler.attack}</p>
            </div>
            <div>
              <span style="color:var(--text-muted);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">💥 Super</span>
              <p style="font-size:0.9rem;margin-top:6px;line-height:1.5;">${brawler.super}</p>
            </div>
          </div>
        </div>

        <div class="modal-section">
          <h4>Quick Stats</h4>
          <div class="detail-stats-grid">
            <div class="detail-stat">
              <div class="detail-stat-value">${brawler.tier}</div>
              <div class="detail-stat-label">Tier</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${brawler.role}</div>
              <div class="detail-stat-label">Role</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${brawler.bestMode}</div>
              <div class="detail-stat-label">Best Mode</div>
            </div>
            <div class="detail-stat">
              <div class="detail-stat-value">${brawler.rarity.toUpperCase()}</div>
              <div class="detail-stat-label">Rarity</div>
            </div>
          </div>
        </div>

        <div class="modal-section">
          <h4>Best Build</h4>
          <div style="background:var(--bg-card);border:1px solid var(--border);
            border-radius:var(--radius-md);padding:18px;font-size:0.9rem;
            color:var(--accent-gold);font-weight:500;line-height:1.5;">
            ${brawler.bestBuild}
          </div>
        </div>

        <div class="modal-section">
          <h4>✅ Strengths</h4>
          <div class="detail-tags">
            ${brawler.strengths.map(s => `<span class="detail-tag best">${s}</span>`).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h4>⚠️ Weaknesses</h4>
          <div class="detail-tags">
            ${brawler.weaknesses.map(w => `<span class="detail-tag weak">${w}</span>`).join('')}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="modal-section">
            <h4>🟢 Counters</h4>
            <div class="detail-tags">
              ${brawler.counters.map(c => `<span class="detail-tag best">${c}</span>`).join('')}
            </div>
          </div>
          <div class="modal-section">
            <h4>🔴 Countered By</h4>
            <div class="detail-tags">
              ${brawler.counteredBy.map(c => `<span class="detail-tag counter">${c}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Animate avatar ring rotate in modal
  const avatarRing = modal.querySelector('.modal-avatar');
  if (avatarRing) {
    avatarRing.style.transition = 'all 0.3s ease';
  }
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

// ============================================
// GUIDE DETAIL MODAL
// ============================================
function setupGuideModals() {}

function openGuideDetail(guideId) {
  const guide = GUIDES.find(g => g.id === guideId);
  if (!guide || !guide.content) return;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  const sectionsHtml = guide.content.sections.map(section => `
    <div class="modal-section">
      <h4>${section.title}</h4>
      <ul class="guide-list">
        ${section.items.map(item => {
          const [label, detail] = item.split(' — ');
          return `<li><strong>${label}</strong>${detail ? ' — ' + detail : ''}</li>`;
        }).join('')}
      </ul>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="modal guide-modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-brawler-info">
          <div class="modal-avatar guide-avatar" style="background:linear-gradient(135deg, var(--accent-${guide.iconClass === 'purple' ? 'purple' : guide.iconClass === 'blue' ? 'blue' : guide.iconClass === 'green' ? 'green' : guide.iconClass === 'orange' ? 'orange' : guide.iconClass === 'red' ? 'red' : 'gold'}), transparent);color:#fff;">
            ${guide.icon}
          </div>
          <div>
            <h3>${guide.title}</h3>
            <span style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Strategy Guide · July 2026</span>
          </div>
        </div>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>

      <div class="modal-body">
        <p style="color:var(--text-secondary);margin-bottom:24px;line-height:1.7;">
          ${guide.content.intro}
        </p>

        ${sectionsHtml}

        <div class="modal-section">
          <h4>💡 Pro Tip</h4>
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);padding:18px;color:var(--accent-gold);font-weight:500;line-height:1.6;">
            ${guide.content.tips[0]}
          </div>
        </div>

        <div class="modal-section">
          <h4>🗓️ Current Meta Note</h4>
          <p style="color:var(--text-secondary);line-height:1.7;">
            ${guide.content.updateNote}
          </p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// ============================================
// BRAWLER SEARCH / FILTER
// ============================================
function setupSearch() {
  const searchInput = document.getElementById('brawlerSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    document.querySelectorAll('.brawler-card').forEach(card => {
      const name = card.querySelector('.brawler-card-name')?.textContent.toLowerCase() || '';
      const rarity = card.querySelector('.brawler-card-rarity')?.textContent.toLowerCase() || '';
      card.style.display = (name.includes(query) || rarity.includes(query)) ? '' : 'none';
    });

    document.querySelectorAll('.tier-row').forEach(row => {
      const items = row.querySelectorAll('.tier-brawler');
      let visibleCount = 0;
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = text.includes(query);
        item.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      row.style.display = (query && visibleCount === 0) ? 'none' : '';
    });
  });
}
