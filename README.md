# Terminal Industries - Industrial Tech Website

A high-end, professional website with an "Industrial Tech" aesthetic featuring terminal-inspired design elements.

## Features

- **Industrial Tech Aesthetic**: Deep obsidian backgrounds, terminal green accents, and monospace typography
- **Glassmorphism Cards**: Modern glass-effect components with high-contrast borders
- **Animated Effects**: Grid backgrounds, scanlines, noise grain, and glitch hover effects
- **Data Overlays**: Coordinate numbers in section corners for that technical feel
- **Smooth Animations**: Framer Motion powered reveal-on-scroll animations
- **Fully Responsive**: Mobile-first design that works on all devices

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- `obsidian`: #050505 (background)
- `terminal-green`: #00ff41 (primary accent)
- `electric-blue`: #00d9ff (alternative accent)

### Typography
Fonts are loaded from Google Fonts:
- **Inter**: Body text (sans-serif)
- **JetBrains Mono**: Headers and UI elements (monospace)

### Client Logos
Replace the placeholder client names in `src/components/ClientMarquee.jsx` with actual logo images or SVG components.

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with main headline
│   ├── Capabilities.jsx  # Services grid
│   ├── Process.jsx       # Timeline workflow
│   ├── ClientMarquee.jsx # Infinite scrolling client logos
│   └── Footer.jsx        # Footer with system status
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles and utilities
```

## Special Effects

- **Grid Background**: Subtle animated grid overlay
- **Noise Grain**: SVG-based noise texture
- **Scanlines**: Animated scanline effect
- **Glitch Hover**: Text glitch effect on buttons
- **Data Overlays**: Coordinate numbers in corners
- **Blueprint Filters**: High-contrast image filters (ready for images)
