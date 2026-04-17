# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static, client-side website for tracking US state and Canadian/Mexican license plates seen during road trips. No build system, no framework, no backend — pure vanilla HTML/CSS/JavaScript hosted on GitHub Pages.

The plate data is managed by a separate internal backend app that writes to the JSON files. This site is read-only display only.

## Architecture

### Data Layer
Two JSON files drive all content:
- [states.json](states.json) — 50 US states with `{ "ID": "AL", "Name": "Alabama", "seen": true/false }`
- [other.json](other.json) — Canadian provinces, Mexican states, and DC with the same shape

### JavaScript Files
Each JS file has a single responsibility and fetches JSON directly from GitHub raw content URLs (`raw.githubusercontent.com/condio/licenseplatesite/main/`):
- [stats.js](stats.js) — counts seen/remaining/other, populates stat card elements by ID, and animates the progress bar
- [stylestates.js](stylestates.js) — injects CSS rules targeting each state's SVG path ID (`#AL`, `#TX`, etc.) — seen = `#10b981` (emerald), unseen = `#374151` (dark slate)
- [other.js](other.js) — renders seen regions as green pill chips inside `#otherinfo`
- [remaining.js](remaining.js) — renders unseen states as amber pill chips inside `#remaining`

### SVG Map
The interactive US map is embedded directly in [index.html](index.html). The SVG paths have hardcoded `fill` attributes but these are overridden by the ID-based CSS rules injected by `stylestates.js`. **Do not modify the SVG path data** — it will break the map.

### Design System
The site shares visual identity with the owner's main site (cond.io). Key design tokens in [style.css](style.css):
- **Background**: dark `#111827` → `#1F2937` vertical gradient, fixed
- **Gradient**: blue → emerald green (`#3b82f6` → `#10b981`), used on title, stat numbers, and progress bar
- **Fonts**: Montserrat 700/800 (headings), Inter 400/500/600 (body) — loaded from Google Fonts
- **Surface/cards**: `#1F2937` with subtle white border
- **Text**: `#E5E7EB` primary, `#9CA3AF` muted
- **Chips**: green-tinted for collected plates, muted gray for remaining states

## Updating Plate Data

To mark a plate as seen, edit the `"seen"` field in [states.json](states.json) or [other.json](other.json). The site re-fetches from GitHub raw URLs on each page load, so changes take effect after committing.

## Deployment

Pushing to `main` automatically updates the live site. The [CNAME](CNAME) file configures the custom domain for GitHub Pages — do not modify it unless changing the domain.
