# Reinigung und Renovation Antohi - Website Summary

## Project Overview
Professional single-page website for a cleaning and renovation services company in St. Margrethen, Switzerland.

**Project Location:** `/workspace/output/reinigung-und-renovation`

## Tech Stack
- **Frontend:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **Languages:** German (primary), English (secondary)
- **Routing:** React Router v6 with URL-based language switching

## Design System
- **Color Theme:** Professional Slate (Construction industry-focused)
  - Primary: Deep blue-slate (#356C85)
  - Accent: Warm orange (#E8A338)
  - Background: Light gray-blue
  
- **Typography:**
  - Headings: DM Serif Display (elegant serif)
  - Body: Inter (clean sans-serif)
  - Google Fonts imported via index.css

- **Custom CSS Variables:**
  - All colors in HSL format
  - Box shadows: soft and medium variants
  - Border radius: 0.75rem (0.75 rounding)

## Components
1. **Header** - Fixed navigation with language switcher and call button
2. **Hero** - Full-screen background image with gradient overlay and CTA buttons
3. **About** - Company introduction with feature highlights (4 cards)
4. **Services** - 6 service offerings in responsive grid
5. **Gallery** - Image slider with 13 gallery images + thumbnails
6. **Hours** - Opening hours with today highlight and CheckCircle icon
7. **Contact** - Contact information cards + embedded Google Map
8. **Footer** - Links, contact info, and copyright
9. **DisclaimerModal** - Preview website disclaimer (sessionStorage-based)

## Languages & Routing
- Default: German (`/`)
- English: `/en`
- Language switcher in header (Globe icon)
- URL-based language detection (no state)
- Disclaimer resets on page refresh

## Images
- **Hero Image:** img-3.jpg (house renovation with worker)
- **Gallery Images:** 13 professional project photos
- **Logo:** logo.jpg (used as favicon)

### Gallery Descriptions (Translated)
German and English descriptions for each gallery image based on content analysis:
- Transportfahrzeug / Transport Vehicle
- Umzugsvorbereitung / Moving Preparation
- Wandrenovierung / Wall Renovation
- etc.

## Business Information
- **Name:** Reinigung und Renovation Antohi
- **Type:** Cleaning & Renovation Services
- **Address:** Rosenstrasse 2, 9430 St. Margrethen SG, Switzerland
- **Phone:** +41 78 218 03 38
- **Email:** antohii@internet.ru
- **Hours:** Monday-Saturday 08:00-19:00, Sunday Closed

## Key Features
✓ Bilingual (German/English) with language switcher
✓ Fully responsive mobile design
✓ Smooth scroll animations (Framer Motion)
✓ Disclaimer modal with sessionStorage
✓ Professional color palette (not default shadcn)
✓ Custom fonts loaded
✓ Google Maps embedded
✓ Image slider with thumbnails (13 images)
✓ Dynamic hours with today highlight
✓ Clickable scroll indicator
✓ All content translated
✓ Zero build errors/warnings

## Build
```bash
npm run build
```
Output: `/dist` directory ready for deployment
- HTML: 1.13 KB (gzip: 0.48 KB)
- CSS: 63.38 KB (gzip: 11.12 KB)
- JS: 459.98 KB (gzip: 147.32 KB)

## Development
```bash
npm run dev
```
Starts Vite dev server on localhost:5173

## File Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Hours.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── DisclaimerModal.tsx
│   └── ui/ (shadcn components)
├── pages/
│   └── Index.tsx
├── lib/
│   └── translations.ts
├── hooks/
│   └── useLanguage.tsx
└── index.css (design system)

public/images/
├── hero-bg.jpg
├── gallery-*.jpg (1-14)
├── logo.jpg
└── favicon.jpg
```

## Notes
- All colors use CSS variables (HSL format)
- No hardcoded colors anywhere
- Language context is URL-based for proper SSR support
- Images optimized for web (JPEG format)
- Component structure follows single-page best practices
- Full TypeScript type safety throughout

---
Generated with Claude Code
