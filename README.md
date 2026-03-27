# Sophia McConnell Website

This repository contains the source for Sophia McConnell's personal website. It is a simple static site built with HTML and CSS, with a small amount of vanilla JavaScript used to switch between sections in the main content area.

The site is configured for GitHub Pages and uses the custom domain `sophiamcconnell.com`.

## Project Overview

The current site layout has two main panels:

- A left sidebar with a headshot and navigation
- A main content area that shows one section at a time

The navigation works like a single-page site. Clicking an item in the sidebar hides the other `<section>` elements in `<main>` and shows the selected one.

## File Structure

- `index.html` - Main page markup, sidebar navigation, content sections, and inline JavaScript for section switching
- `style.css` - All visual styling, layout, colors, spacing, and responsive behavior
- `assets/images/headshot_photo.jpeg` - Sidebar headshot image
- `js/main.js` - Present in the repo but currently empty and not in use
- `CNAME` - Custom domain configuration for GitHub Pages

## How It Works

### Layout

The page uses a `.layout` wrapper with two children:

- `.sidebar`
- `main`

On desktop, these sit side by side. On smaller screens, the media query in `style.css` stacks them vertically.

### Navigation

Each sidebar link has a `data-section` attribute that matches the `id` of a `<section>` inside `main`.

Example:

```html
<a href="#" class="nav-header" data-section="work">work</a>
```

This connects to:

```html
<section id="work" class="hidden">
```

The inline script at the bottom of `index.html`:

- Finds all nav items
- Finds all sections in `main`
- Shows `start-here` by default
- Hides the rest with the `.hidden` class
- Adds and removes the `.active` class on nav items as the user clicks

### Styling

Most of the design is controlled in `style.css`, including:

- Panel sizing and layout
- Sidebar and main panel backgrounds
- Navbar button colors and spacing
- Card backgrounds for the start page
- Mobile behavior under `@media (max-width: 767px)`

## Current Content Sections

The main page currently includes these sections:

- `start-here`
- `work`
- `entrepreneurship`
- `climate-advocacy`
- `me`
- `connect`
- `resume`
- `other-stuff`
- `random-writing`
- `reading-list`
- `site-info`

Most sections are still placeholder content, which makes this repo a good starting point for iterating on structure and design before filling in final copy.

## Common Edits

### Change sidebar or main panel appearance

Edit the `.sidebar` and `main` rules in `style.css`.

### Change the rounded corners

Adjust `border-radius` in:

- `.sidebar`
- `main`
- `.sidebar nav a` if you want rounded nav buttons
- `.card` if you want rounded content cards

### Change spacing between the cards on the Start Here page

Edit the `gap` value in:

```css
.start-here-layout:not(.hidden) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

### Change card styling

Edit the `.card` rule in `style.css`.

Example properties you may want to change:

- `background`
- `padding`
- `border-radius`
- `box-shadow`
- `border`

### Add a new section

1. Add a new nav link in the sidebar with a unique `data-section` value.
2. Add a new `<section>` in `main` with a matching `id`.
3. Give the section `class="hidden"` if it should be hidden until clicked.

Example:

```html
<a href="#" class="nav-sub" data-section="new-section">new section</a>
```

```html
<section id="new-section" class="hidden">
  <h1>New Section</h1>
  <p>Content goes here.</p>
</section>
```

No JavaScript changes are needed as long as the `data-section` and `id` match.

## Local Development

Because this is a static site, you can preview it by opening `index.html` in a browser.

If you want a local server instead, you can use something simple like:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Deployment

This repository is set up for GitHub Pages. The `CNAME` file points the site at:

- `sophiamcconnell.com`

If GitHub Pages is enabled for this repository, pushing changes to the published branch should update the live site.

## Notes

- The JavaScript currently lives inline in `index.html` rather than in `js/main.js`.
- `js/main.js` is available if you want to move the script into a separate file later.
- The site is intentionally lightweight and easy to edit without a build step or framework.
