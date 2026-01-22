# Dynamic Service System

## Overview

This is a **single-source-of-truth** dynamic service page system. All 16 services are managed through one reusable template, eliminating redundancy and making maintenance effortless.

## Architecture

```
src/dynamicService/
├── data/
│   └── servicesData.js      # Centralized service data (single source of truth)
├── pages/
│   └── DynamicServicePage.jsx  # Reusable template component
└── README.md                # This file
```

## How It Works

1. **Single Data Source**: All service information is stored in `servicesData.js`
2. **Dynamic Routing**: Routes use `:serviceSlug` parameter (e.g., `/services/website-designing`)
3. **Auto-Generation**: When you add a service to the data file, the page is automatically available
4. **Consistent Design**: All services use the same luxury, minimal UI template

## Adding a New Service

Simply add a new object to the `servicesData` array in `src/dynamicService/data/servicesData.js`:

```javascript
{
  id: 17,  // Unique ID
  title: 'Your Service Name',
  slug: 'your-service-slug',  // Auto-generated from title, or custom
  seo: {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: 'keyword1, keyword2, keyword3',
  },
  hero: {
    headline: 'Main Headline',
    subtext: 'Subheadline text',
    ctaText: 'Get Started',
    ctaLink: '/contact',
  },
  overview: `Your detailed overview text here...`,
  features: [
    {
      title: 'Feature Title',
      description: 'Feature description',
      icon: '🎯',  // Emoji or icon
    },
    // ... more features
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // ... more benefits
  ],
  process: [
    {
      step: '01',
      title: 'Step Title',
      description: 'Step description',
    },
    // ... more steps
  ],
  faqs: [
    {
      question: 'Your question?',
      answer: 'Your answer.',
    },
    // ... more FAQs
  ],
}
```

**That's it!** The page will be automatically available at `/services/your-service-slug`.

## Route Structure

- **Dynamic Route**: `/services/:serviceSlug`
- **Example**: `/services/website-designing`
- **Fallback**: If service not found, redirects to `/explore`

## Data Structure

Each service object contains:

### Required Fields
- `id` - Unique identifier
- `title` - Service name
- `slug` - URL-friendly identifier
- `seo` - SEO metadata
- `hero` - Hero section content
- `overview` - Detailed description

### Optional Fields
- `features` - Array of feature objects
- `benefits` - Array of benefit strings
- `process` - Array of process step objects
- `faqs` - Array of FAQ objects

## Features

✅ **Zero Redundancy** - One template, multiple services  
✅ **Auto-Generation** - Add data, page appears automatically  
✅ **SEO Optimized** - Dynamic meta tags per service  
✅ **Consistent Design** - Same luxury UI for all services  
✅ **Easy Maintenance** - Update data once, changes everywhere  
✅ **CMS-Ready** - Structure ready for CMS integration  
✅ **Scalable** - Add unlimited services easily  

## Integration Points

### Explore Page
The Explore page (`src/sections/explore/Explore.jsx`) automatically uses services from `servicesData.js` and links to dynamic service pages.

### Navigation
Service cards in Explore section link to `/services/[slug]` automatically.

### Breadcrumbs
Dynamic breadcrumbs show: Home > Services > [Service Name]

## SEO Features

Each service page includes:
- Dynamic `<title>` tag
- Meta description
- Meta keywords
- Open Graph tags
- Canonical URL

## Future CMS Integration

To migrate to a CMS:

1. Replace `servicesData.js` import with API call
2. Fetch service data from CMS
3. Keep the same data structure
4. No template changes needed!

Example:
```javascript
// Instead of:
import { servicesData } from '../data/servicesData'

// Use:
const servicesData = await fetchServicesFromCMS()
```

## Helper Functions

### `getServiceBySlug(slug)`
Get a single service by its slug.

### `getAllServiceSlugs()`
Get all service slugs (useful for static generation).

### `getRelatedServices(currentServiceId, limit)`
Get related services (excludes current service).

## Maintenance

### Updating a Service
1. Find the service in `servicesData.js`
2. Update the data
3. Changes reflect immediately

### Removing a Service
1. Remove from `servicesData` array
2. Page automatically becomes unavailable
3. Links redirect to `/explore`

### Reordering Services
1. Reorder array in `servicesData.js`
2. Order updates everywhere automatically

## Best Practices

1. **Keep slugs unique** - Use descriptive, URL-friendly slugs
2. **Complete data** - Fill all fields for best results
3. **Consistent structure** - Follow the same format for all services
4. **SEO optimization** - Write compelling SEO metadata
5. **Regular updates** - Keep service information current

## Support

For questions or issues, refer to:
- Service data structure: `src/dynamicService/data/servicesData.js`
- Template component: `src/dynamicService/pages/DynamicServicePage.jsx`
- Routing: `src/App.jsx`
