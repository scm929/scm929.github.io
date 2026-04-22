# Sophia McConnell Website

This repository contains the source for [sophiamcconnell.com](https://sophiamcconnell.com) — a personal site for writing, reading lists, and general presence on the web. It is a zero-dependency static site built with plain HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages.

## File Structure

```
/
├── index.html              # Main page markup and section structure
├── style.css               # All styles, including theme variables
├── js/
│   ├── theme.js            # Theme switching, FOUC prevention, localStorage persistence
│   └── main.js             # Section navigation and active state
├── posts/
│   └── mandarin-seasons.html  # Individual blog post page
├── assets/
│   └── images/             # Headshot and theme background images
└── CNAME                   # Custom domain config for GitHub Pages
```

## How It Works

### Layout

The page uses a two-panel layout:

- `.sidebar` — headshot and navigation links
- `main` — content area that shows one section at a time

On desktop these sit side by side. On smaller screens the media query in `style.css` stacks them vertically.

### Section Navigation

Each sidebar link has a `data-section` attribute matching the `id` of a `<section>` inside `main`. `js/main.js` handles showing/hiding sections and setting the active nav state. It also reads `window.location.hash` on load, so linking directly to a section (e.g. `index.html#random-writing`) works.

Current sections: `start-here`, `random-writing`, `reading-list`, `site-info`.

### Theming

Four location-based color themes are defined as CSS custom property sets in `style.css`:

| Theme | Class | Emoji |
|-------|-------|-------|
| Rhode Island | `theme-rhode-island` | 🌊 |
| Arizona | `theme-arizona` | 🌵 |
| Japan | `theme-japan` | 🌳 |
| Ireland | `theme-ireland` | ☘️ |

`js/theme.js` runs at the top of `<body>` (before the DOM is parsed) to immediately apply the saved theme from `localStorage`, preventing a flash of the default theme. It also handles:

- Theme button wiring and active states
- Crossfade transition via `#theme-overlay`
- Favicon updates to match the active theme emoji

### Blog Posts

Individual posts live in `posts/` as standalone HTML files. Each post includes `js/theme.js` and the location switcher so theme persistence works across pages. The back link returns to `index.html#random-writing`.

### Easter Eggs

- **Dolphin 🐬** (Rhode Island only) — appears in the top-left corner 10 seconds after the theme is active
- **Snake 🐍** (Arizona only) — slithers across the bottom of the screen on theme load or switch

### Font

The site uses [Piazzolla](https://fonts.google.com/specimen/Piazzolla), loaded from Google Fonts — a variable serif with a literary, expressive character.

## Local Development

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Deployment

Pushing to `main` automatically deploys to GitHub Pages at `sophiamcconnell.com`.
