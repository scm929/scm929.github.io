# Tech Stack

## Overview

A zero-dependency static site — plain HTML, CSS, and JavaScript with no build step. Hosted on GitHub Pages at a custom domain. Kept intentionally simple: this is a learning and experimentation project, not a production application.

## Core Technologies

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Markup | HTML5 | No abstraction needed for a single-page site |
| Styling | CSS3 (custom properties, flexbox) | CSS variables handle the theming system cleanly |
| Behavior | Vanilla JavaScript | Minimal interactivity; no framework justified |
| Hosting | GitHub Pages | Free, reliable, deploys on push to `main` |
| Domain | Custom via CNAME | `sophiamcconnell.com` |

## Guiding Constraint

Keep it simple. No frameworks, no build tools, no package manager. The site should remain understandable and editable without deep coding knowledge. New features should fit within the existing plain HTML/CSS/JS model unless there's a strong reason to add a dependency.

## Architecture Decisions

**Single-page layout with section switching**: All sections live in the DOM; JavaScript toggles visibility. Avoids routing complexity.

**CSS custom properties for theming**: Four location-based themes (Rhode Island, Arizona, Japan, Ireland) are implemented as CSS variable sets swapped on `<body>`. Preference persists via `localStorage`. On page load, `theme.js` runs at the top of `<body>` and immediately adds the saved theme class to prevent a flash of the default theme; button wiring and active states are set up in a `DOMContentLoaded` listener.

**No build tooling**: The site can be previewed by opening `index.html` directly or running `python3 -m http.server`.

## Hosting & Deployment

- Repository: `scm929/scm929.github.io`
- Deployment: Automatic on push to `main`
- Custom domain: `sophiamcconnell.com`

## File Structure

```
/
├── index.html          # All markup and section structure
├── style.css           # All styles, including theme variables
├── js/
│   ├── theme.js        # Theme switching, FOUC prevention, localStorage persistence
│   └── main.js         # Section navigation and active state
├── assets/
│   └── images/         # Headshot and theme background images
└── CNAME               # Custom domain config
```

## Areas of Interest for Future Exploration

- Interactive animations (nature-themed, indie-web aesthetic)
