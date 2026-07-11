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
                ${b.name[0]}
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
                <span class="brawler-chip-img" style="background:${b.color};color:#fff;">${b.name[0]}</span>
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
          ${b.name[0]}
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
    <article class="news-card reveal reveal-delay-${i + 1}">
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
// GUIDE CARDS (HOMEPAGE)
// ============================================
function renderGuideCards() {
  const container = document.getElementById('guidesGrid');
  if (!container) return;

  container.innerHTML = GUIDES.map((g, i) => `
    <div class="guide-card reveal reveal-delay-${i + 1}">
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
                ${b.name[0]}
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
            ${brawler.name[0]}
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
