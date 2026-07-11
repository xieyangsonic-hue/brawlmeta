# ⚡ BrawlMeta — Brawl Stars Tier List & Strategy Guide

> The ultimate Brawl Stars strategy resource. Tier lists, brawler guides, counter picks, and meta analysis — updated weekly.

**[Live Demo](https://brawlmeta.com)** (coming soon)

---

## 📊 Features

- **Full Tier List** — S/A/B/C/D rankings for 42+ brawlers, click any brawler for detailed stats
- **Brawler Detail Cards** — Attack, Super, best build, counters, strengths & weaknesses
- **Meta Analysis** — Current meta summary with top picks, rising stars, and falling off
- **Strategy Guides** — 6 guide categories covering beginners to competitive play
- **Game Modes** — Specific brawler recommendations for all 7 game modes
- **Search & Filter** — Find brawlers by name, rarity, or role instantly
- **Responsive Design** — Dark gaming theme optimized for desktop, tablet, and mobile
- **SEO Optimized** — Semantic HTML, meta tags, sitemap.xml, robots.txt

---

## 🛠 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, grid, flexbox, animations, dark theme
- **Vanilla JavaScript** — No frameworks, zero dependencies, fast load times
- **Static Site** — Can be deployed anywhere (GitHub Pages, Vercel, Netlify, Cloudflare)

---

## 📁 Project Structure

```
brawlmeta/
├── index.html           # Homepage with meta, tier preview, brawlers, guides
├── tier-list.html        # Full interactive tier list page
├── css/
│   └── style.css         # Complete styling (dark gaming theme)
├── js/
│   ├── data.js           # Brawler database, tiers, modes, guides, news
│   └── app.js            # Rendering, modals, search, navigation
├── robots.txt            # SEO crawler instructions
├── sitemap.xml           # XML sitemap for search engines
└── README.md
```

---

## 🚀 Getting Started

### Local Development
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/brawlmeta.git
cd brawlmeta

# Serve locally (Python)
python -m http.server 8080

# Or with Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.

### Deployment

**GitHub Pages (Free):**
1. Push to `main` branch
2. Go to Settings → Pages → Source: `main` branch → Save
3. Your site is live at `https://YOUR_USERNAME.github.io/brawlmeta/`

**Vercel (Free, recommended for custom domain):**
1. Import repo on vercel.com
2. Deploy — no configuration needed
3. Add custom domain in project settings

---

## 📝 Data Updates

To update the tier list or add new brawlers, edit `js/data.js`:

```javascript
// Add a new brawler
{
  id: 'new-brawler',
  name: 'New Brawler',
  rarity: 'mythic',
  role: 'Assassin',
  tier: 'A',
  color: '#ff6b81',
  description: '...',
  attack: '...',
  super: '...',
  strengths: ['...'],
  weaknesses: ['...'],
  bestMode: 'Brawl Ball',
  bestBuild: '...',
  counters: ['...'],
  counteredBy: ['...']
}
```

---

## ⚖️ Disclaimer

BrawlMeta is an **unofficial fan site** and is not affiliated with or endorsed by Supercell Oy.  
Brawl Stars and all related assets are trademarks of Supercell Oy.

---

## 📄 License

MIT — Feel free to use and modify for your own projects.

---

**Built with ❤️ for the Brawl Stars community.**
