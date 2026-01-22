# Website Layout Information

## Route Structure

### 1. **Homepage (`/`)**
**Route:** `/`
**File:** `src/App.jsx`

**Section Order (Top to Bottom):**
1. **Navigation** (`src/layout/Navigation.jsx`)
   - Site navigation menu

2. **Hero** (`src/sections/hero/Hero.jsx`)
   - Main hero section with primary CTA

3. **Why Choose Us** (`src/sections/why-choose-us/WhyChooseUs.jsx`)
   - "Who we are" section
   - "Precision, Power, and Performance" section
   - "WHAT SETS US APART" section

4. **Give Your Brand** (`src/sections/give_your/give_your.jsx`)
   - "GIVE YOUR BRAND A CREATIVE TOUCH" hero section
   - Animated background text and particles

5. **About Us** (`src/sections/about/AboutUs.jsx`)
   - Company information and story

6. **Service New** (`src/sections/serviceNew/servicenew.jsx`)
   - "Services We Provide" section
   - Service cards with "Explore More" button (links to `/explore`)

7. **Portfolio** (`src/sections/portfolio/Portfolio.jsx`)
   - Portfolio/work showcase

8. **Testimonials** (`src/sections/testimonials/Testimonials.jsx`)
   - Client testimonials

9. **Animation2** (`src/sections/animation2/animation2.jsx`)
   - Animated section with gradient text

10. **Green** (`src/sections/green/green.jsx`)
    - Additional content section

11. **Grn2** (`src/sections/grn2/grn2.jsx`)
    - Additional content section

12. **Footer** (`src/layout/Footer.jsx`)
    - Site footer with links and information

---

### 2. **Explore Page (`/explore`)**
**Route:** `/explore`
**File:** `src/pages/ExplorePage.jsx`

**Section Order (Top to Bottom):**
1. **Navigation** (`src/layout/Navigation.jsx`)

2. **Explore** (`src/sections/explore/Explore.jsx`)
   - Comprehensive Digital Marketing Services
   - Services Grid (2 columns, clickable cards)
   - "Why Choose Our Digital Marketing Services" section
   - Stats section
   - Process steps
   - "Let's Work Together" CTA section
   - "View All Services" section

3. **Testimonials** (`src/sections/testimonials/Testimonials.jsx`)

4. **Green** (`src/sections/green/green.jsx`)

5. **Grn2** (`src/sections/grn2/grn2.jsx`)

6. **Footer** (`src/layout/Footer.jsx`)

---

### 3. **Contact Page (`/contact`)**
**Route:** `/contact`
**File:** `src/pages/ContactPage.jsx`

**Section Order (Top to Bottom):**
1. **Navigation** (`src/layout/Navigation.jsx`)

2. **Contact** (`src/sections/contact/Contact.jsx`)
   - Contact form and information

3. **Footer** (`src/layout/Footer.jsx`)

---

## Navigation Flow

### From Homepage:
- **ServiceNew Section** → "Explore More" button → `/explore` page
- Navigation menu links to various pages

### From Explore Page:
- **Service Cards** → Click any service card → `/services/[service-slug]` (if ServiceDetailPage exists)
- Navigation menu links

---

## Section Details

### Available Sections (Not all used):
- `hero/` - Hero section
- `why-choose-us/` - Why Choose Us section
- `give_your/` - Give Your Brand section
- `about/` - About Us section
- `serviceNew/` - Services section
- `portfolio/` - Portfolio section
- `testimonials/` - Testimonials section
- `animation2/` - Animation section
- `green/` - Green section
- `grn2/` - Grn2 section
- `explore/` - Explore/Services detail section
- `contact/` - Contact section
- `animation/` - Animation section (not currently used)
- `alphabets/` - Alphabets section (not currently used)
- `process/` - Process section (not currently used)
- `services/` - Services section (not currently used)

---

## Visual Layout Summary

```
┌─────────────────────────────────────┐
│         NAVIGATION (All Pages)      │
├─────────────────────────────────────┤
│                                     │
│  HOMEPAGE (/)                       │
│  ├─ Hero                           │
│  ├─ Why Choose Us                  │
│  ├─ Give Your Brand                │
│  ├─ About Us                       │
│  ├─ Service New                    │
│  │  └─ [Explore More → /explore]  │
│  ├─ Portfolio                      │
│  ├─ Testimonials                   │
│  ├─ Animation2                     │
│  ├─ Green                          │
│  └─ Grn2                           │
│                                     │
├─────────────────────────────────────┤
│  EXPLORE PAGE (/explore)            │
│  ├─ Explore (Services Grid)        │
│  ├─ Testimonials                   │
│  ├─ Green                          │
│  └─ Grn2                           │
│                                     │
├─────────────────────────────────────┤
│  CONTACT PAGE (/contact)            │
│  └─ Contact                        │
│                                     │
├─────────────────────────────────────┤
│         FOOTER (All Pages)          │
└─────────────────────────────────────┘
```

---

## Key Features

1. **Navigation** appears on all pages
2. **Footer** appears on all pages
3. **Background** (`grid-bg noise-grain scanline`) applied to all pages
4. **Service Cards** in Explore page are clickable (if ServiceDetailPage route exists)
5. **Explore More Button** in ServiceNew section navigates to `/explore`
