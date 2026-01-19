# Color Palette Update - B2B/SaaS Professional Theme

## New Color Palette

- **Primary**: `#0A1B2E` – Midnight Navy (use `primary` or `bg-primary`)
- **Secondary**: `#102A43` – Deep Blue Gray (use `secondary` or `bg-secondary`)
- **Accent**: `#2F80ED` – Electric Blue (use `accent` or `bg-accent`)
- **Text**: `#EAF0F6` – Soft White (use `text` or `text-text`)
- **Muted**: `#7A8CA3` – Muted Gray (use `muted` or `text-muted`)

## Color Replacements

### Tailwind Classes
- `terminal-green` → `accent`
- `obsidian` → `primary`
- `text-gray-300` → `text-text/80` or `text-text`
- `text-gray-400` → `text-text/60` or `text-muted`
- `text-gray-500` → `text-muted`
- `text-gray-600` → `text-muted`
- `bg-terminal-green` → `bg-accent`
- `border-terminal-green` → `border-accent`

### RGBA Colors
- `rgba(0, 255, 65, ...)` → `rgba(47, 128, 237, ...)` (Electric Blue)
- `rgba(5, 5, 5, ...)` → `rgba(10, 27, 46, ...)` (Midnight Navy)

## Updated Files

✅ **Completed:**
- `tailwind.config.js` - Added new color palette
- `src/index.css` - Updated base styles and grid background
- `src/sections/hero/Hero.jsx` - All colors updated
- `src/layout/Navigation.jsx` - All colors updated
- `src/layout/Footer.jsx` - All colors updated

## Remaining Files to Update

The following files still need color updates:
- `src/sections/services/Services.jsx`
- `src/sections/why-choose-us/WhyChooseUs.jsx`
- `src/sections/about/AboutUs.jsx`
- `src/sections/process/Process.jsx`
- `src/sections/portfolio/Portfolio.jsx`
- `src/sections/testimonials/Testimonials.jsx`
- `src/sections/contact/Contact.jsx`
- `src/shared/Placeholder3D.jsx`

## Usage Examples

```jsx
// Background
<div className="bg-primary">...</div>

// Text
<p className="text-text">...</p>
<p className="text-muted">...</p>

// Accent colors
<button className="bg-accent text-text">...</button>
<span className="text-accent">...</span>

// Borders
<div className="border-accent/50">...</div>
```
