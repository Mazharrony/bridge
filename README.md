# BRIDGE - Business Development & Advisory

A modern, premium corporate website for BRIDGE, a business development and advisory service based in Dubai.

## Features

- **Modern Navbar**: Transparent on hero, becomes opaque with blur on scroll
- **Hero Section**: Two-column layout with compelling messaging and CTAs
- **Responsive Design**: Mobile-first approach with collapsible menu
- **Professional Design**: Executive, trustworthy, and corporate aesthetic

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
bridge/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Hero.tsx        # Hero section component
└── public/             # Static assets
```

## Customization

### Update Contact Information

Edit the phone number in `components/Navbar.tsx`:
- Line 61: Update the `href="tel:+971XXXXXXXXX"` with your actual phone number

### Replace Placeholder Images

The hero section currently uses a gradient placeholder. Replace it with actual Dubai skyline imagery in `components/Hero.tsx`.

### Brand Colors

Colors can be customized in the Tailwind classes throughout the components. The current palette uses:
- Primary: Gray-900 (Dark navy/charcoal)
- Background: White/Gray-50
- Text: Gray-900, Gray-700, Gray-600

## Build for Production

```bash
npm run build
npm start
```

## Vision

BRIDGE connects ambition to opportunity in Dubai's business landscape.

