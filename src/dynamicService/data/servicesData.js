/**
 * Centralized Services Data
 * 
 * This is the single source of truth for all service information.
 * Add or update services here, and they will automatically appear
 * throughout the application.
 * 
 * CMS-Ready Structure: This format can easily be migrated to a CMS
 * by replacing this file with an API call or CMS data fetch.
 */

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const servicesData = [
  {
    id: 1,
    title: 'Website Designing',
    slug: 'website-designing',
    // SEO Metadata
    seo: {
      title: 'Website Designing Services | Custom Web Development',
      description: 'Professional website design and development services. Responsive, intuitive websites that convert visitors into customers.',
      keywords: 'website design, responsive web design, custom website development, web design services',
    },
    // Hero Section
    hero: {
      headline: 'Website Designing',
      subtext: 'Custom, responsive websites that convert visitors into customers. Modern design meets functionality.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    // Overview
    overview: `Our website design service combines creative excellence with technical expertise to deliver websites that not only look stunning but also drive real business results. We understand that your website is often the first impression potential customers have of your brand, which is why we focus on creating experiences that are both visually compelling and highly functional.

We work closely with you to understand your brand identity, target audience, and business objectives. Our team of designers and developers then crafts a custom solution that aligns perfectly with your goals, whether you need a simple portfolio site, a complex e-commerce platform, or a corporate website with advanced features.

Every website we build is optimized for performance, search engines, and user experience. We ensure fast loading times, mobile responsiveness, and intuitive navigation that guides visitors toward your desired actions.`,
    // Key Features
    features: [
      {
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
        icon: '📱',
      },
      {
        title: 'UI/UX Optimization',
        description: 'User-centered design that enhances usability and creates engaging user experiences.',
        icon: '🎨',
      },
      {
        title: 'Custom Development',
        description: 'Tailored solutions built specifically for your business needs and requirements.',
        icon: '⚙️',
      },
      {
        title: 'Performance Optimization',
        description: 'Fast-loading websites optimized for speed, SEO, and conversion rates.',
        icon: '⚡',
      },
      {
        title: 'Content Management System',
        description: 'Easy-to-use CMS allowing you to update content without technical knowledge.',
        icon: '📝',
      },
      {
        title: 'E-commerce Integration',
        description: 'Seamless online store setup with secure payment gateways and inventory management.',
        icon: '🛒',
      },
    ],
    // Benefits
    benefits: [
      'Increase conversions and user engagement with a website that reflects your brand excellence.',
      'Improve search engine rankings with SEO-optimized, fast-loading pages.',
      'Enhance user experience leading to longer site visits and higher conversion rates.',
      'Build trust and credibility with a professional, modern web presence.',
      'Gain competitive advantage with a unique, custom-designed website.',
    ],
    // Process Steps
    process: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We start by understanding your business, goals, target audience, and requirements through detailed consultations.',
      },
      {
        step: '02',
        title: 'Design & Wireframing',
        description: 'Our designers create visual mockups and wireframes that align with your brand and user needs.',
      },
      {
        step: '03',
        title: 'Development & Testing',
        description: 'We build your website using the latest technologies, ensuring cross-browser compatibility and performance.',
      },
      {
        step: '04',
        title: 'Launch & Optimization',
        description: 'After thorough testing, we launch your site and provide ongoing support and optimization.',
      },
    ],
    // FAQs
    faqs: [
      {
        question: 'How long does it take to design and develop a website?',
        answer: 'The timeline varies based on complexity, but typically ranges from 4-12 weeks. Simple websites may take 4-6 weeks, while complex e-commerce sites can take 8-12 weeks.',
      },
      {
        question: 'Will my website be mobile-responsive?',
        answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring perfect functionality and appearance on all devices.',
      },
      {
        question: 'Do you provide content management system (CMS) training?',
        answer: 'Yes, we provide comprehensive training on how to use your CMS, along with detailed documentation and ongoing support.',
      },
      {
        question: 'Can you help with website maintenance after launch?',
        answer: 'Yes, we offer ongoing maintenance packages to keep your website updated, secure, and performing optimally.',
      },
    ],
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    slug: 'search-engine-optimization-seo',
    seo: {
      title: 'SEO Services | Search Engine Optimization',
      description: 'Enhance your organic search presence with proven SEO strategies. Improve visibility, drive quality traffic, and boost rankings.',
      keywords: 'SEO services, search engine optimization, organic search marketing, SEO company',
    },
    hero: {
      headline: 'Search Engine Optimization',
      subtext: 'Enhance your organic search presence with proven SEO strategies that improve visibility and drive quality traffic.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Search Engine Optimization (SEO) is the foundation of any successful digital marketing strategy. Our comprehensive SEO services help your business achieve higher rankings in search engine results pages (SERPs), driving organic traffic and qualified leads without the ongoing costs of paid advertising.

We take a holistic approach to SEO, combining technical optimization, content strategy, and link building to create a sustainable growth engine for your business. Our team stays current with the latest search engine algorithms and best practices to ensure your website remains competitive in an ever-evolving digital landscape.

Our SEO process begins with a thorough audit of your current website and competitive landscape. We identify opportunities, prioritize actions based on impact, and implement strategies that deliver measurable results. We provide transparent reporting so you can see exactly how your SEO investment is driving growth.`,
    features: [
      {
        title: 'Keyword Research',
        description: 'Comprehensive analysis to identify high-value keywords that drive qualified traffic to your site.',
        icon: '🔍',
      },
      {
        title: 'On-Page Optimization',
        description: 'Optimize your website\'s content, meta tags, headings, and structure for better search visibility.',
        icon: '📄',
      },
      {
        title: 'Technical SEO',
        description: 'Improve site speed, mobile-friendliness, crawlability, and fix technical issues that impact rankings.',
        icon: '⚙️',
      },
      {
        title: 'Content Strategy',
        description: 'Create high-quality, SEO-optimized content that engages users and ranks well in search results.',
        icon: '✍️',
      },
      {
        title: 'Link Building',
        description: 'Build authoritative backlinks from reputable sites to improve your domain authority and rankings.',
        icon: '🔗',
      },
      {
        title: 'Local SEO',
        description: 'Optimize your online presence for local searches to attract customers in your geographic area.',
        icon: '📍',
      },
    ],
    benefits: [
      'Achieve higher search rankings and attract qualified leads organically.',
      'Increase website traffic and visibility without paid advertising costs.',
      'Build long-term, sustainable growth through organic search results.',
      'Improve user experience and website performance as part of SEO optimization.',
      'Gain competitive advantage with better search visibility than competitors.',
    ],
    process: [
      {
        step: '01',
        title: 'SEO Audit & Analysis',
        description: 'We conduct a comprehensive audit of your website, competitors, and industry to identify opportunities.',
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Based on our findings, we create a customized SEO strategy tailored to your business goals.',
      },
      {
        step: '03',
        title: 'Implementation',
        description: 'We implement on-page optimizations, technical improvements, and content enhancements.',
      },
      {
        step: '04',
        title: 'Monitoring & Optimization',
        description: 'We continuously monitor performance, track rankings, and optimize strategies for ongoing improvement.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a long-term strategy. Typically, you\'ll see initial improvements in 3-6 months, with significant results in 6-12 months. Results vary based on competition and current website status.',
      },
      {
        question: 'Will SEO work for my industry?',
        answer: 'Yes! SEO works for virtually every industry. We customize our approach based on your specific industry, competition, and target audience.',
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer: 'While we can\'t guarantee specific rankings (as search engines control results), we guarantee our best efforts and proven strategies that typically lead to improved rankings and increased organic traffic.',
      },
      {
        question: 'What reporting do you provide?',
        answer: 'We provide monthly reports showing keyword rankings, organic traffic growth, conversion metrics, and actionable insights.',
      },
    ],
  },
  {
    id: 3,
    title: 'Social Media Optimization (SMO)',
    slug: 'social-media-optimization-smo',
    seo: {
      title: 'Social Media Optimization Services | SMO',
      description: 'Optimize your social media presence for increased engagement, reach, and brand consistency across all platforms.',
      keywords: 'social media optimization, SMO services, social media management, SMO',
    },
    hero: {
      headline: 'Social Media Optimization',
      subtext: 'Optimize your social media presence for increased engagement, reach, and brand consistency across platforms.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Social Media Optimization (SMO) is essential for building a strong online presence and connecting with your audience where they spend their time. Our SMO services help you optimize your social media profiles, create engaging content, and build a community that drives real business results.

We understand that each social media platform has its own unique audience and best practices. Our team creates platform-specific strategies that maximize your reach and engagement while maintaining consistent brand messaging across all channels.

From profile optimization to content creation and community management, we handle every aspect of your social media presence. We focus on building authentic relationships with your audience, creating shareable content, and continuously optimizing based on performance data.`,
    features: [
      {
        title: 'Profile Optimization',
        description: 'Optimize your social media profiles with compelling bios, visuals, and consistent branding.',
        icon: '✨',
      },
      {
        title: 'Content Strategy',
        description: 'Develop a content calendar that aligns with your brand voice and engages your target audience.',
        icon: '📅',
      },
      {
        title: 'Community Management',
        description: 'Engage with your audience, respond to comments, and build a loyal community around your brand.',
        icon: '💬',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Track performance metrics and provide insights to continuously improve your social media presence.',
        icon: '📊',
      },
      {
        title: 'Cross-Platform Consistency',
        description: 'Ensure consistent messaging and branding across all your social media platforms.',
        icon: '🔄',
      },
      {
        title: 'Hashtag Strategy',
        description: 'Develop and implement effective hashtag strategies to increase discoverability and reach.',
        icon: '#️⃣',
      },
    ],
    benefits: [
      'Build a strong social media presence that drives brand awareness and customer loyalty.',
      'Increase engagement rates and build meaningful connections with your audience.',
      'Improve brand consistency and recognition across all social platforms.',
      'Drive website traffic and conversions through strategic social media optimization.',
      'Gain valuable insights about your audience and their preferences.',
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Strategy',
        description: 'We audit your current social media presence and develop a comprehensive optimization strategy.',
      },
      {
        step: '02',
        title: 'Profile Optimization',
        description: 'We optimize all your social media profiles with compelling visuals, bios, and consistent branding.',
      },
      {
        step: '03',
        title: 'Content Creation',
        description: 'We create and schedule engaging content that resonates with your audience and aligns with your brand.',
      },
      {
        step: '04',
        title: 'Community Building',
        description: 'We actively engage with your audience, respond to comments, and build a loyal community.',
      },
    ],
    faqs: [
      {
        question: 'Which social media platforms should I focus on?',
        answer: 'The best platforms depend on your target audience and business type. We help you identify the most effective platforms for your specific goals.',
      },
      {
        question: 'How often should I post on social media?',
        answer: 'Posting frequency varies by platform and audience. We create a customized content calendar that optimizes posting times and frequency for maximum engagement.',
      },
      {
        question: 'Can you help with social media advertising?',
        answer: 'Yes! We offer social media marketing (SMM) services that include paid advertising campaigns alongside our optimization services.',
      },
      {
        question: 'What metrics do you track?',
        answer: 'We track engagement rates, reach, impressions, follower growth, click-through rates, and conversions to measure success.',
      },
    ],
  },
  {
    id: 4,
    title: 'Online Reputation Management (ORM)',
    slug: 'online-reputation-management-orm',
    seo: {
      title: 'Online Reputation Management | ORM Services',
      description: 'Strengthen your digital credibility by proactively managing reviews, mentions, and feedback to build a positive online reputation.',
      keywords: 'reputation management, online reputation, ORM services, brand reputation',
    },
    hero: {
      headline: 'Online Reputation Management',
      subtext: 'Strengthen your digital credibility by proactively managing reviews, mentions, and feedback.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Your online reputation directly impacts your business success. In today's digital world, potential customers research businesses online before making purchasing decisions. Our Online Reputation Management (ORM) services help you build, protect, and enhance your digital reputation.

We monitor your brand mentions across review sites, social media, forums, and search engines. When negative content appears, we work quickly to address it, respond professionally, and implement strategies to minimize its impact. We also help you generate positive reviews and create content that showcases your brand in the best light.

Our comprehensive ORM approach includes proactive monitoring, strategic content creation, review management, and crisis response. We help you maintain control of your online narrative and ensure that when people search for your business, they find positive, accurate information.`,
    features: [
      {
        title: 'Review Management',
        description: 'Monitor, respond to, and manage reviews across all major platforms to maintain a positive reputation.',
        icon: '⭐',
      },
      {
        title: 'Crisis Management',
        description: 'Develop and implement strategies to address negative feedback and protect your brand reputation.',
        icon: '🛡️',
      },
      {
        title: 'Brand Monitoring',
        description: 'Track mentions of your brand across the web and social media in real-time.',
        icon: '👁️',
      },
      {
        title: 'Reputation Recovery',
        description: 'Help rebuild your reputation after negative incidents through strategic content and engagement.',
        icon: '🔄',
      },
      {
        title: 'Content Suppression',
        description: 'Push down negative search results by creating and promoting positive content.',
        icon: '📈',
      },
      {
        title: 'Review Generation',
        description: 'Encourage satisfied customers to leave positive reviews through strategic campaigns.',
        icon: '💬',
      },
    ],
    benefits: [
      'Protect and enhance your brand reputation across all digital channels.',
      'Build trust and credibility with potential customers through positive reviews.',
      'Mitigate the impact of negative feedback with proactive management strategies.',
      'Improve search results by promoting positive content and suppressing negative content.',
      'Gain valuable insights about customer sentiment and brand perception.',
    ],
    process: [
      {
        step: '01',
        title: 'Reputation Audit',
        description: 'We conduct a comprehensive audit of your current online reputation across all platforms.',
      },
      {
        step: '02',
        title: 'Monitoring Setup',
        description: 'We set up monitoring tools to track mentions, reviews, and conversations about your brand.',
      },
      {
        step: '03',
        title: 'Strategy Development',
        description: 'We develop a customized ORM strategy based on your current reputation and business goals.',
      },
      {
        step: '04',
        title: 'Implementation & Management',
        description: 'We implement the strategy, manage reviews, create positive content, and respond to feedback.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove negative reviews?',
        answer: 'We cannot remove legitimate reviews, but we can help you respond professionally, address concerns, and implement strategies to push down negative content in search results.',
      },
      {
        question: 'How quickly can you respond to negative feedback?',
        answer: 'We monitor your reputation 24/7 and respond to critical issues within hours. Our rapid response helps mitigate potential damage.',
      },
      {
        question: 'What platforms do you monitor?',
        answer: 'We monitor Google, Yelp, Facebook, industry-specific review sites, social media platforms, forums, and news sites.',
      },
      {
        question: 'How long does it take to improve online reputation?',
        answer: 'Improvement timelines vary, but typically you\'ll see positive changes within 3-6 months with consistent effort and strategic content creation.',
      },
    ],
  },
  {
    id: 5,
    title: 'Search Engine Marketing (SEM)',
    slug: 'search-engine-marketing-sem',
    seo: {
      title: 'Search Engine Marketing | SEM Services',
      description: 'Maximize your reach and conversions through highly targeted, performance-driven paid campaigns on Google and other search engines.',
      keywords: 'SEM services, search engine marketing, Google Ads management, paid search',
    },
    hero: {
      headline: 'Search Engine Marketing',
      subtext: 'Maximize your reach and conversions through highly targeted, performance-driven paid campaigns.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Search Engine Marketing (SEM) combines the power of paid advertising with strategic optimization to deliver immediate, measurable results. While SEO builds long-term organic visibility, SEM provides instant access to prime search engine real estate, allowing you to reach potential customers exactly when they're searching for your products or services.

Our SEM services focus on maximizing your return on investment (ROI) through data-driven campaign management. We create highly targeted campaigns that reach the right audience at the right time, using advanced bidding strategies, ad copy optimization, and landing page improvements to drive conversions.

We manage every aspect of your SEM campaigns, from initial setup and keyword research to ongoing optimization and performance tracking. Our team stays current with the latest platform updates and best practices to ensure your campaigns remain competitive and cost-effective.`,
    features: [
      {
        title: 'Google Ads Management',
        description: 'Create and manage effective Google Ads campaigns including Search, Display, Shopping, and Video ads.',
        icon: '🎯',
      },
      {
        title: 'Campaign Optimization',
        description: 'Continuously optimize campaigns for better performance, lower costs, and higher ROI.',
        icon: '📊',
      },
      {
        title: 'A/B Testing',
        description: 'Test different ad variations, landing pages, and strategies to identify what works best.',
        icon: '🧪',
      },
      {
        title: 'ROI Tracking',
        description: 'Track conversions, revenue, and ROI to ensure your campaigns deliver measurable business results.',
        icon: '💰',
      },
      {
        title: 'Keyword Research',
        description: 'Identify high-intent keywords that drive qualified traffic and conversions.',
        icon: '🔍',
      },
      {
        title: 'Landing Page Optimization',
        description: 'Optimize landing pages to maximize conversion rates and campaign performance.',
        icon: '📄',
      },
    ],
    benefits: [
      'Get immediate visibility and drive qualified traffic with strategic paid advertising.',
      'Achieve faster results than organic SEO with instant search engine placement.',
      'Target specific audiences with precision using advanced targeting options.',
      'Scale your campaigns quickly based on performance and budget.',
      'Gain valuable insights about your audience and what drives conversions.',
    ],
    process: [
      {
        step: '01',
        title: 'Campaign Strategy',
        description: 'We develop a comprehensive SEM strategy based on your goals, budget, and target audience.',
      },
      {
        step: '02',
        title: 'Campaign Setup',
        description: 'We create and launch campaigns across Google Ads and other search platforms.',
      },
      {
        step: '03',
        title: 'Ongoing Optimization',
        description: 'We continuously optimize bids, keywords, ad copy, and landing pages for better performance.',
      },
      {
        step: '04',
        title: 'Performance Analysis',
        description: 'We provide detailed reporting and insights to help you understand campaign performance and ROI.',
      },
    ],
    faqs: [
      {
        question: 'How much should I budget for SEM?',
        answer: 'SEM budgets vary widely based on industry, competition, and goals. We work with you to determine an optimal budget that maximizes ROI while achieving your business objectives.',
      },
      {
        question: 'How quickly will I see results?',
        answer: 'SEM campaigns can start driving traffic immediately after launch, typically within 24-48 hours. However, optimization and performance improvements continue over time.',
      },
      {
        question: 'What\'s the difference between SEM and SEO?',
        answer: 'SEM refers to paid advertising (like Google Ads), while SEO focuses on organic search rankings. Both are valuable - SEM provides immediate results, while SEO builds long-term organic visibility.',
      },
      {
        question: 'Do you manage campaigns on platforms other than Google?',
        answer: 'Yes! We manage campaigns on Google, Bing, Yahoo, and other search platforms to maximize your reach.',
      },
    ],
  },
  {
    id: 6,
    title: 'Social Media Marketing (SMM)',
    slug: 'social-media-marketing-smm',
    seo: {
      title: 'Social Media Marketing | SMM Services',
      description: 'Amplify your brand through strategic paid advertising on Facebook, Instagram, LinkedIn, and more to drive engagement and generate leads.',
      keywords: 'social media marketing, SMM services, Facebook ads, Instagram ads, social media advertising',
    },
    hero: {
      headline: 'Social Media Marketing',
      subtext: 'Amplify your brand through strategic paid advertising on social platforms to drive engagement and generate leads.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Social Media Marketing (SMM) leverages the power of paid advertising on social platforms to reach your target audience, build brand awareness, and drive conversions. With billions of active users across platforms like Facebook, Instagram, LinkedIn, and Twitter, social media advertising offers unparalleled opportunities to connect with potential customers.

Our SMM services combine strategic planning, creative excellence, and data-driven optimization to deliver campaigns that achieve your business objectives. We understand that each platform has unique strengths and audience behaviors, so we create platform-specific strategies that maximize your advertising ROI.

From awareness campaigns that build brand recognition to conversion-focused campaigns that drive sales, we develop and manage campaigns that align with your goals. We continuously test, optimize, and refine our approach based on performance data to ensure you get the best possible results from your advertising investment.`,
    features: [
      {
        title: 'Ad Campaign Creation',
        description: 'Create compelling ad campaigns tailored to each platform\'s unique audience and best practices.',
        icon: '📢',
      },
      {
        title: 'Audience Targeting',
        description: 'Use advanced targeting options to reach your ideal customers based on demographics, interests, and behaviors.',
        icon: '🎯',
      },
      {
        title: 'Creative Development',
        description: 'Design eye-catching visuals and write persuasive ad copy that drives engagement and conversions.',
        icon: '🎨',
      },
      {
        title: 'Performance Analytics',
        description: 'Track key metrics like impressions, clicks, conversions, and ROI to optimize campaign performance.',
        icon: '📊',
      },
      {
        title: 'Retargeting Campaigns',
        description: 'Re-engage website visitors and previous customers with targeted retargeting campaigns.',
        icon: '🔄',
      },
      {
        title: 'Multi-Platform Management',
        description: 'Manage campaigns across Facebook, Instagram, LinkedIn, Twitter, and other platforms.',
        icon: '🌐',
      },
    ],
    benefits: [
      'Reach your target audience effectively and generate quality leads through social platforms.',
      'Achieve precise targeting with advanced demographic, interest, and behavioral targeting options.',
      'Scale campaigns quickly based on performance and budget.',
      'Build brand awareness and engagement through strategic social media advertising.',
      'Drive website traffic and conversions with compelling ad creative and optimized campaigns.',
    ],
    process: [
      {
        step: '01',
        title: 'Strategy & Planning',
        description: 'We develop a comprehensive SMM strategy based on your goals, target audience, and budget.',
      },
      {
        step: '02',
        title: 'Campaign Creation',
        description: 'We create compelling ad campaigns with optimized creative and targeting for each platform.',
      },
      {
        step: '03',
        title: 'Launch & Monitoring',
        description: 'We launch campaigns and continuously monitor performance, making real-time optimizations.',
      },
      {
        step: '04',
        title: 'Optimization & Scaling',
        description: 'We optimize campaigns based on data, scale successful campaigns, and refine underperforming ones.',
      },
    ],
    faqs: [
      {
        question: 'Which social media platforms should I advertise on?',
        answer: 'The best platforms depend on your target audience and business type. We help you identify the most effective platforms and allocate budget accordingly.',
      },
      {
        question: 'How much should I budget for social media advertising?',
        answer: 'Budgets vary based on goals and competition. We work with you to determine an optimal budget that maximizes ROI while achieving your objectives.',
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Social media ads can start generating results within hours of launch. However, optimization and learning periods typically take 1-2 weeks for optimal performance.',
      },
      {
        question: 'Can you help with organic social media as well?',
        answer: 'Yes! We offer Social Media Optimization (SMO) services for organic growth, which can complement paid advertising efforts.',
      },
    ],
  },
  {
    id: 7,
    title: 'Branding & Rebranding',
    slug: 'branding-rebranding',
    seo: {
      title: 'Branding & Rebranding Services | Brand Identity Design',
      description: 'Develop or refresh your brand identity with compelling visuals, messaging, and positioning that resonate with your audience.',
      keywords: 'branding services, rebranding, brand identity design, logo design, brand strategy',
    },
    hero: {
      headline: 'Branding & Rebranding',
      subtext: 'Develop or refresh your brand identity with compelling visuals, messaging, and positioning.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Your brand is more than just a logo - it's the complete experience your customers have with your business. Our branding and rebranding services help you create a cohesive, compelling brand identity that resonates with your audience and sets you apart from competitors.

Whether you're launching a new business or refreshing an existing brand, we work closely with you to understand your values, target audience, and market position. We then develop a comprehensive brand strategy that guides every aspect of your visual and verbal identity.

Our branding process combines strategic thinking with creative excellence. We create logos, color palettes, typography systems, and brand guidelines that ensure consistency across all touchpoints. For rebranding projects, we carefully manage the transition to maintain customer loyalty while refreshing your image.`,
    features: [
      {
        title: 'Brand Strategy',
        description: 'Develop a comprehensive brand strategy that defines your unique value proposition and positioning.',
        icon: '🎯',
      },
      {
        title: 'Logo Design',
        description: 'Create memorable, versatile logos that represent your brand and work across all applications.',
        icon: '✨',
      },
      {
        title: 'Visual Identity',
        description: 'Develop a complete visual identity system including colors, typography, imagery, and design elements.',
        icon: '🎨',
      },
      {
        title: 'Brand Guidelines',
        description: 'Create comprehensive brand guidelines that ensure consistent application across all touchpoints.',
        icon: '📋',
      },
      {
        title: 'Brand Messaging',
        description: 'Develop compelling brand messaging, taglines, and communication strategies.',
        icon: '💬',
      },
      {
        title: 'Rebranding Strategy',
        description: 'Plan and execute smooth rebranding initiatives that maintain customer loyalty while refreshing your image.',
        icon: '🔄',
      },
    ],
    benefits: [
      'Create a memorable brand that stands out and connects with your audience.',
      'Build brand recognition and loyalty through consistent, professional branding.',
      'Differentiate your business from competitors with a unique brand identity.',
      'Increase brand value and perceived quality through professional design.',
      'Ensure consistent brand application across all marketing materials and touchpoints.',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Research',
        description: 'We conduct research to understand your business, market, competitors, and target audience.',
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'We develop a comprehensive brand strategy that defines your positioning and unique value proposition.',
      },
      {
        step: '03',
        title: 'Design & Development',
        description: 'We create visual identity elements including logos, colors, typography, and brand guidelines.',
      },
      {
        step: '04',
        title: 'Implementation & Rollout',
        description: 'We help implement your new brand across all touchpoints and manage rebranding transitions.',
      },
    ],
    faqs: [
      {
        question: 'How long does a branding project take?',
        answer: 'Branding projects typically take 6-12 weeks, depending on complexity. Rebranding projects may take longer to ensure smooth transitions.',
      },
      {
        question: 'What\'s included in a brand identity package?',
        answer: 'A complete brand identity includes logo design, color palette, typography, brand guidelines, and often includes business card and letterhead designs.',
      },
      {
        question: 'Can you help with rebranding an existing business?',
        answer: 'Absolutely! We specialize in rebranding and help manage the transition smoothly while maintaining customer loyalty.',
      },
      {
        question: 'Do you provide brand guidelines?',
        answer: 'Yes! Comprehensive brand guidelines ensure consistent application of your brand across all materials and touchpoints.',
      },
    ],
  },
  {
    id: 8,
    title: 'Display Advertising',
    slug: 'display-advertising',
    seo: {
      title: 'Display Advertising Services | Banner Ads & Retargeting',
      description: 'Design and execute impactful display ad campaigns using compelling visuals and messaging to attract and convert customers.',
      keywords: 'display advertising, banner ads, display ad campaigns, retargeting, programmatic advertising',
    },
    hero: {
      headline: 'Display Advertising',
      subtext: 'Impactful display ad campaigns using compelling visuals and messaging to attract and convert customers.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Display advertising allows you to reach potential customers as they browse websites, read articles, and consume content online. Our display advertising services combine compelling creative design with strategic placement to create campaigns that build brand awareness and drive conversions.

We create visually striking banner ads, rich media ads, and video ads that capture attention and communicate your message effectively. Our team designs ads in various sizes and formats to work across different platforms and placements, ensuring your campaigns reach your audience wherever they are online.

We use advanced targeting options to ensure your ads reach the right people at the right time. From demographic and interest-based targeting to retargeting website visitors, we create campaigns that maximize your advertising ROI. Our programmatic advertising capabilities allow us to efficiently reach your audience across thousands of websites.`,
    features: [
      {
        title: 'Banner Design',
        description: 'Create eye-catching banner ads in various sizes optimized for different placements and platforms.',
        icon: '🖼️',
      },
      {
        title: 'Ad Placement',
        description: 'Strategically place ads on high-traffic websites and platforms where your audience spends time.',
        icon: '📍',
      },
      {
        title: 'Retargeting Campaigns',
        description: 'Re-engage website visitors with targeted display ads that remind them of your products or services.',
        icon: '🔄',
      },
      {
        title: 'Performance Tracking',
        description: 'Track impressions, clicks, conversions, and ROI to optimize campaign performance.',
        icon: '📊',
      },
      {
        title: 'Creative Testing',
        description: 'Test different ad variations to identify what resonates best with your audience.',
        icon: '🧪',
      },
      {
        title: 'Programmatic Advertising',
        description: 'Use automated buying to reach your target audience across thousands of websites efficiently.',
        icon: '🤖',
      },
    ],
    benefits: [
      'Increase brand visibility and drive conversions through strategic display advertising.',
      'Reach potential customers as they browse websites and consume content online.',
      'Build brand awareness with visually compelling ads that capture attention.',
      'Re-engage website visitors with retargeting campaigns that drive conversions.',
      'Scale campaigns efficiently using programmatic advertising technology.',
    ],
    process: [
      {
        step: '01',
        title: 'Campaign Strategy',
        description: 'We develop a display advertising strategy based on your goals, target audience, and budget.',
      },
      {
        step: '02',
        title: 'Creative Development',
        description: 'We design compelling display ads in various sizes and formats optimized for different placements.',
      },
      {
        step: '03',
        title: 'Campaign Launch',
        description: 'We launch campaigns across selected networks and platforms with optimized targeting.',
      },
      {
        step: '04',
        title: 'Optimization & Scaling',
        description: 'We continuously optimize campaigns based on performance data and scale successful placements.',
      },
    ],
    faqs: [
      {
        question: 'What sizes do display ads come in?',
        answer: 'We create ads in standard IAB sizes including 728x90 (leaderboard), 300x250 (medium rectangle), 320x50 (mobile banner), and more.',
      },
      {
        question: 'How do you measure display ad success?',
        answer: 'We track impressions, clicks, click-through rates, conversions, and ROI. We also measure brand awareness lift through surveys.',
      },
      {
        question: 'What\'s the difference between display and search advertising?',
        answer: 'Display ads appear on websites and apps, while search ads appear in search results. Display is great for awareness, while search targets active searchers.',
      },
      {
        question: 'Can display ads be used for retargeting?',
        answer: 'Yes! Retargeting is one of the most effective uses of display advertising, allowing you to re-engage website visitors.',
      },
    ],
  },
  {
    id: 9,
    title: 'E-Commerce Solutions',
    slug: 'ecommerce-solutions',
    seo: {
      title: 'E-Commerce Solutions | Online Store Development',
      description: 'Comprehensive e-commerce solutions that streamline your online store and enhance the customer shopping experience.',
      keywords: 'e-commerce development, online store design, e-commerce solutions, online store',
    },
    hero: {
      headline: 'E-Commerce Solutions',
      subtext: 'Comprehensive e-commerce solutions that streamline your online store and enhance the shopping experience.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `E-commerce has become essential for businesses of all sizes. Our comprehensive e-commerce solutions help you launch, optimize, and scale your online store to drive sales and grow your business. Whether you're starting from scratch or improving an existing store, we provide end-to-end services that create exceptional shopping experiences.

We work with leading e-commerce platforms like Shopify, WooCommerce, and Magento, or we can build custom solutions tailored to your specific needs. Our team handles everything from store setup and design to payment integration, inventory management, and optimization.

We focus on creating stores that not only look great but also convert visitors into customers. We optimize every aspect of the shopping experience, from product pages to checkout, ensuring your store drives maximum sales and customer satisfaction.`,
    features: [
      {
        title: 'Store Setup',
        description: 'Set up your online store on platforms like Shopify, WooCommerce, or custom solutions.',
        icon: '🛍️',
      },
      {
        title: 'Payment Integration',
        description: 'Integrate secure payment gateways and multiple payment options for seamless checkout.',
        icon: '💳',
      },
      {
        title: 'Inventory Management',
        description: 'Set up inventory tracking, product management, and stock control systems.',
        icon: '📦',
      },
      {
        title: 'Mobile Optimization',
        description: 'Ensure your store is fully optimized for mobile devices and provides an excellent mobile shopping experience.',
        icon: '📱',
      },
      {
        title: 'Shopping Cart Optimization',
        description: 'Optimize the shopping cart and checkout process to reduce abandonment and increase conversions.',
        icon: '🛒',
      },
      {
        title: 'Product Photography',
        description: 'Professional product photography and image optimization to showcase your products effectively.',
        icon: '📸',
      },
    ],
    benefits: [
      'Launch and scale your online store with a seamless shopping experience.',
      'Increase sales and conversions with optimized e-commerce functionality.',
      'Reach customers 24/7 with an always-available online store.',
      'Reduce operational costs with automated inventory and order management.',
      'Expand your market reach beyond geographic limitations.',
    ],
    process: [
      {
        step: '01',
        title: 'Planning & Strategy',
        description: 'We plan your e-commerce solution, select the right platform, and develop a comprehensive strategy.',
      },
      {
        step: '02',
        title: 'Design & Development',
        description: 'We design and develop your store with a focus on user experience and conversion optimization.',
      },
      {
        step: '03',
        title: 'Integration & Setup',
        description: 'We integrate payment gateways, set up inventory systems, and configure all necessary features.',
      },
      {
        step: '04',
        title: 'Launch & Optimization',
        description: 'We launch your store and provide ongoing optimization to improve performance and sales.',
      },
    ],
    faqs: [
      {
        question: 'Which e-commerce platform should I use?',
        answer: 'The best platform depends on your needs, budget, and technical requirements. We help you choose the right platform for your business.',
      },
      {
        question: 'How long does it take to set up an e-commerce store?',
        answer: 'Timeline varies based on complexity, but typically ranges from 4-12 weeks for a fully functional store with all features.',
      },
      {
        question: 'Do you handle payment gateway integration?',
        answer: 'Yes! We integrate secure payment gateways like Stripe, PayPal, and others to ensure smooth, secure transactions.',
      },
      {
        question: 'Can you help with ongoing store management?',
        answer: 'Absolutely! We offer ongoing support, maintenance, and optimization services to keep your store running smoothly.',
      },
    ],
  },
  {
    id: 10,
    title: 'PR & Marketing Services',
    slug: 'pr-marketing-services',
    seo: {
      title: 'PR & Marketing Services | Public Relations',
      description: 'Build brand credibility and visibility through targeted PR campaigns, media outreach, and press coverage.',
      keywords: 'PR services, public relations, marketing services, media relations',
    },
    hero: {
      headline: 'PR & Marketing Services',
      subtext: 'Build brand credibility and visibility through targeted PR campaigns and media outreach.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Public Relations (PR) and Marketing Services help you build brand credibility, increase visibility, and establish thought leadership through strategic media outreach and content creation. In today's competitive landscape, earned media coverage and positive public perception are invaluable assets.

Our PR services combine traditional media relations with modern digital PR strategies. We develop compelling narratives, build relationships with journalists and influencers, and secure media placements that elevate your brand. We also create thought leadership content that positions you as an industry expert.

From press releases and media outreach to event management and crisis communication, we handle every aspect of your PR strategy. We monitor media coverage, track sentiment, and provide insights that help you understand how your brand is perceived in the marketplace.`,
    features: [
      {
        title: 'Press Releases',
        description: 'Write and distribute compelling press releases that get media attention and coverage.',
        icon: '📰',
      },
      {
        title: 'Media Relations',
        description: 'Build relationships with journalists and media outlets to secure coverage for your brand.',
        icon: '🤝',
      },
      {
        title: 'Event Management',
        description: 'Plan and execute events, product launches, and press conferences that generate media buzz.',
        icon: '🎪',
      },
      {
        title: 'Crisis Communication',
        description: 'Develop and implement crisis communication strategies to protect your brand reputation.',
        icon: '🛡️',
      },
      {
        title: 'Content Creation',
        description: 'Create compelling content including articles, blog posts, and thought leadership pieces.',
        icon: '✍️',
      },
      {
        title: 'Media Monitoring',
        description: 'Monitor media coverage and mentions to track PR campaign effectiveness and brand sentiment.',
        icon: '👁️',
      },
    ],
    benefits: [
      'Build trust and credibility through strategic public relations and media coverage.',
      'Increase brand visibility and awareness through earned media placements.',
      'Establish thought leadership and industry authority through media appearances.',
      'Protect brand reputation with proactive crisis communication strategies.',
      'Generate valuable backlinks and SEO benefits through media coverage.',
    ],
    process: [
      {
        step: '01',
        title: 'Strategy Development',
        description: 'We develop a comprehensive PR strategy based on your goals, target audience, and brand messaging.',
      },
      {
        step: '02',
        title: 'Content Creation',
        description: 'We create compelling press releases, articles, and content that tell your brand story effectively.',
      },
      {
        step: '03',
        title: 'Media Outreach',
        description: 'We build relationships with journalists and pitch stories to secure media coverage.',
      },
      {
        step: '04',
        title: 'Monitoring & Reporting',
        description: 'We monitor media coverage, track sentiment, and provide detailed reporting on PR campaign effectiveness.',
      },
    ],
    faqs: [
      {
        question: 'How do you measure PR success?',
        answer: 'We measure success through media placements, reach, sentiment, website traffic from PR coverage, and brand awareness metrics.',
      },
      {
        question: 'Can you help with crisis communication?',
        answer: 'Yes! We develop crisis communication plans and help manage reputation during challenging situations.',
      },
      {
        question: 'What types of media outlets do you work with?',
        answer: 'We work with print, online, broadcast, and trade publications across various industries and markets.',
      },
      {
        question: 'How long does it take to see PR results?',
        answer: 'PR is a long-term strategy. Initial placements may take 4-8 weeks, with ongoing coverage building over time.',
      },
    ],
  },
  {
    id: 11,
    title: 'Software Development',
    slug: 'software-development',
    seo: {
      title: 'Software Development Services | Custom Applications',
      description: 'Scalable and customized software applications tailored to meet your business needs and enhance productivity.',
      keywords: 'software development, custom software, application development, software solutions',
    },
    hero: {
      headline: 'Software Development',
      subtext: 'Scalable and customized software applications tailored to meet your business needs.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Custom software development allows you to create solutions that perfectly fit your business needs, rather than forcing your processes to fit existing software. Our software development services help you build scalable, efficient applications that streamline operations, improve productivity, and drive growth.

We work with modern technologies and best practices to develop software that's not only functional but also maintainable, scalable, and secure. Whether you need a web application, mobile app, or enterprise software solution, we have the expertise to bring your vision to life.

Our development process emphasizes collaboration, transparency, and quality. We work closely with you throughout the development lifecycle, from initial planning and design to development, testing, and deployment. We also provide ongoing maintenance and support to ensure your software continues to meet your evolving needs.`,
    features: [
      {
        title: 'Custom Development',
        description: 'Build custom software solutions tailored to your specific business requirements and workflows.',
        icon: '💻',
      },
      {
        title: 'API Integration',
        description: 'Integrate your software with third-party services and APIs to extend functionality.',
        icon: '🔌',
      },
      {
        title: 'Cloud Solutions',
        description: 'Develop cloud-based applications that are scalable, secure, and accessible from anywhere.',
        icon: '☁️',
      },
      {
        title: 'Maintenance & Support',
        description: 'Provide ongoing maintenance, updates, and technical support to keep your software running smoothly.',
        icon: '🔧',
      },
      {
        title: 'Mobile App Development',
        description: 'Develop native and cross-platform mobile applications for iOS and Android.',
        icon: '📱',
      },
      {
        title: 'Legacy System Modernization',
        description: 'Modernize outdated systems with modern technologies and improved user experiences.',
        icon: '🔄',
      },
    ],
    benefits: [
      'Streamline operations and drive efficiency with custom software solutions.',
      'Improve productivity with software tailored to your specific workflows.',
      'Gain competitive advantage with unique software capabilities.',
      'Reduce costs by automating manual processes and improving efficiency.',
      'Scale your business with software that grows with your needs.',
    ],
    process: [
      {
        step: '01',
        title: 'Requirements Analysis',
        description: 'We analyze your business needs, workflows, and requirements to define the software solution.',
      },
      {
        step: '02',
        title: 'Design & Planning',
        description: 'We design the software architecture, user interface, and create a detailed development plan.',
      },
      {
        step: '03',
        title: 'Development & Testing',
        description: 'We develop the software using agile methodologies and conduct thorough testing.',
      },
      {
        step: '04',
        title: 'Deployment & Support',
        description: 'We deploy your software and provide ongoing maintenance, updates, and support.',
      },
    ],
    faqs: [
      {
        question: 'What technologies do you use for software development?',
        answer: 'We use a wide range of technologies including React, Node.js, Python, .NET, and cloud platforms like AWS and Azure. We select technologies based on your specific needs.',
      },
      {
        question: 'How long does software development take?',
        answer: 'Timeline varies significantly based on complexity. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months or more.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes! We offer maintenance and support packages to keep your software updated, secure, and running smoothly.',
      },
      {
        question: 'Can you integrate with existing systems?',
        answer: 'Absolutely! We specialize in integrating new software with existing systems, databases, and third-party services.',
      },
    ],
  },
  {
    id: 12,
    title: 'API Integration',
    slug: 'api-integration',
    seo: {
      title: 'API Integration Services | System Integration',
      description: 'Enable seamless communication between applications through robust API integrations that improve functionality.',
      keywords: 'API integration, API development, system integration, API services',
    },
    hero: {
      headline: 'API Integration',
      subtext: 'Seamless communication between applications through robust API integrations.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `API integration is essential for modern businesses that use multiple software systems. Our API integration services help you connect your applications, automate workflows, and create seamless data flow between systems. Whether you need to integrate with third-party services or build custom APIs, we have the expertise to make it happen.

We work with RESTful APIs, GraphQL, webhooks, and other integration technologies to connect your systems efficiently. Our integrations are built with security, reliability, and scalability in mind, ensuring they perform well as your business grows.

From payment gateway integrations to CRM connections and marketing automation, we handle complex integrations that improve your operational efficiency. We also provide comprehensive documentation and support to ensure your team can work effectively with integrated systems.`,
    features: [
      {
        title: 'Third-Party Integration',
        description: 'Integrate your systems with popular third-party services like payment gateways, CRM, and marketing tools.',
        icon: '🔗',
      },
      {
        title: 'Custom APIs',
        description: 'Develop custom APIs that allow your systems to communicate and share data efficiently.',
        icon: '⚙️',
      },
      {
        title: 'Data Synchronization',
        description: 'Ensure data consistency across multiple systems with automated synchronization.',
        icon: '🔄',
      },
      {
        title: 'System Connectivity',
        description: 'Connect disparate systems to create unified workflows and improve efficiency.',
        icon: '🌐',
      },
      {
        title: 'API Documentation',
        description: 'Create comprehensive API documentation for developers and integration partners.',
        icon: '📚',
      },
      {
        title: 'Security & Authentication',
        description: 'Implement secure authentication and authorization for API access.',
        icon: '🔒',
      },
    ],
    benefits: [
      'Connect your systems seamlessly and automate workflows for better efficiency.',
      'Improve data accuracy by eliminating manual data entry and synchronization issues.',
      'Enhance functionality by integrating best-in-class third-party services.',
      'Reduce operational costs through automation and streamlined processes.',
      'Enable scalability by connecting systems that can grow with your business.',
    ],
    process: [
      {
        step: '01',
        title: 'Integration Planning',
        description: 'We analyze your systems, identify integration points, and develop a comprehensive integration strategy.',
      },
      {
        step: '02',
        title: 'API Development',
        description: 'We develop custom APIs or configure third-party integrations based on your requirements.',
      },
      {
        step: '03',
        title: 'Testing & Validation',
        description: 'We thoroughly test integrations to ensure data accuracy, security, and reliability.',
      },
      {
        step: '04',
        title: 'Deployment & Documentation',
        description: 'We deploy integrations and provide comprehensive documentation and support.',
      },
    ],
    faqs: [
      {
        question: 'What systems can you integrate?',
        answer: 'We can integrate virtually any system with an API, including CRMs, payment gateways, marketing tools, databases, and custom applications.',
      },
      {
        question: 'How long does API integration take?',
        answer: 'Integration timelines vary based on complexity. Simple integrations may take 1-2 weeks, while complex multi-system integrations can take 4-8 weeks.',
      },
      {
        question: 'Do you provide API documentation?',
        answer: 'Yes! We create comprehensive API documentation that helps developers understand and work with integrated systems.',
      },
      {
        question: 'What security measures do you implement?',
        answer: 'We implement industry-standard security measures including authentication, encryption, rate limiting, and access controls.',
      },
    ],
  },
  {
    id: 13,
    title: 'Email Marketing',
    slug: 'email-marketing',
    seo: {
      title: 'Email Marketing Services | Email Campaigns',
      description: 'Personalized email campaigns that drive engagement, nurture leads, and increase conversions with measurable results.',
      keywords: 'email marketing, email campaigns, email automation, email marketing services',
    },
    hero: {
      headline: 'Email Marketing',
      subtext: 'Personalized email campaigns that drive engagement, nurture leads, and increase conversions.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Email marketing remains one of the most effective digital marketing channels, offering exceptional ROI and the ability to reach customers directly in their inboxes. Our email marketing services help you create campaigns that engage, nurture, and convert your audience.

We design visually appealing, mobile-responsive email templates that reflect your brand and drive action. We set up automated email sequences that nurture leads, recover abandoned carts, and keep customers engaged. We also segment your audience to ensure the right message reaches the right people at the right time.

Our email marketing approach combines creative design with data-driven optimization. We test subject lines, content, and send times to continuously improve performance. We provide detailed analytics so you can see exactly how your email campaigns are driving business results.`,
    features: [
      {
        title: 'Campaign Design',
        description: 'Design visually appealing, mobile-responsive email templates that align with your brand.',
        icon: '🎨',
      },
      {
        title: 'Automation Setup',
        description: 'Set up automated email sequences for welcome series, abandoned carts, and lead nurturing.',
        icon: '🤖',
      },
      {
        title: 'List Management',
        description: 'Manage email lists, segment audiences, and maintain list health and deliverability.',
        icon: '📋',
      },
      {
        title: 'A/B Testing',
        description: 'Test subject lines, content, and send times to optimize campaign performance.',
        icon: '🧪',
      },
      {
        title: 'Personalization',
        description: 'Create personalized email content that resonates with individual recipients.',
        icon: '👤',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Track open rates, click-through rates, conversions, and ROI to measure campaign success.',
        icon: '📊',
      },
    ],
    benefits: [
      'Nurture leads and drive conversions through targeted email marketing campaigns.',
      'Build stronger customer relationships with personalized, relevant email content.',
      'Achieve high ROI with cost-effective email marketing that delivers measurable results.',
      'Automate marketing workflows to save time while maintaining personalization.',
      'Increase customer lifetime value through effective email nurturing and retention campaigns.',
    ],
    process: [
      {
        step: '01',
        title: 'Strategy Development',
        description: 'We develop an email marketing strategy based on your goals, audience, and content.',
      },
      {
        step: '02',
        title: 'Template Design',
        description: 'We design mobile-responsive email templates that align with your brand and drive engagement.',
      },
      {
        step: '03',
        title: 'Campaign Creation',
        description: 'We create and schedule email campaigns, set up automation, and segment your audience.',
      },
      {
        step: '04',
        title: 'Optimization & Analysis',
        description: 'We continuously optimize campaigns based on performance data and provide detailed reporting.',
      },
    ],
    faqs: [
      {
        question: 'What email marketing platform do you use?',
        answer: 'We work with leading platforms like Mailchimp, Constant Contact, SendGrid, and others. We can also recommend the best platform for your needs.',
      },
      {
        question: 'How often should I send emails?',
        answer: 'Frequency depends on your audience and goals. We help determine optimal sending frequency based on engagement data and best practices.',
      },
      {
        question: 'Can you help with email list building?',
        answer: 'Yes! We help you grow your email list through website signup forms, lead magnets, and other list-building strategies.',
      },
      {
        question: 'What metrics do you track?',
        answer: 'We track open rates, click-through rates, conversion rates, unsubscribe rates, and ROI to measure campaign success.',
      },
    ],
  },
  {
    id: 14,
    title: 'SMS Marketing',
    slug: 'sms-marketing',
    seo: {
      title: 'SMS Marketing Services | Text Message Marketing',
      description: 'Reach your audience instantly with short, impactful SMS campaigns designed for immediate visibility and fast response.',
      keywords: 'SMS marketing, text message marketing, SMS campaigns, SMS services',
    },
    hero: {
      headline: 'SMS Marketing',
      subtext: 'Short, impactful SMS campaigns designed for immediate visibility and fast response.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `SMS marketing offers unparalleled immediacy and engagement rates. With 98% open rates and near-instant delivery, SMS is one of the most effective channels for reaching customers with time-sensitive messages and offers.

Our SMS marketing services help you create campaigns that drive immediate action. We craft concise, compelling messages that respect your audience's time while delivering value. We ensure compliance with regulations and best practices, including proper opt-in processes and clear opt-out options.

From promotional campaigns and appointment reminders to transactional messages and customer support, we help you leverage SMS to improve customer engagement and drive business results. We provide detailed analytics so you can measure the impact of your SMS marketing efforts.`,
    features: [
      {
        title: 'Campaign Creation',
        description: 'Create compelling SMS campaigns with clear calls-to-action and personalized messaging.',
        icon: '📱',
      },
      {
        title: 'List Management',
        description: 'Manage SMS subscriber lists, handle opt-ins/opt-outs, and maintain compliance.',
        icon: '📋',
      },
      {
        title: 'Scheduling',
        description: 'Schedule SMS campaigns for optimal send times to maximize engagement.',
        icon: '⏰',
      },
      {
        title: 'Analytics',
        description: 'Track delivery rates, open rates, click-through rates, and conversions.',
        icon: '📊',
      },
      {
        title: 'Automation',
        description: 'Set up automated SMS sequences for welcome messages, reminders, and follow-ups.',
        icon: '🤖',
      },
      {
        title: 'Two-Way Messaging',
        description: 'Enable two-way SMS conversations to engage with customers in real-time.',
        icon: '💬',
      },
    ],
    benefits: [
      'Achieve immediate engagement and high open rates with SMS marketing.',
      'Reach customers instantly with time-sensitive offers and important updates.',
      'Drive quick responses with direct, personal messaging that cuts through the noise.',
      'Improve customer service with real-time SMS communication and support.',
      'Increase conversions with targeted SMS campaigns that drive immediate action.',
    ],
    process: [
      {
        step: '01',
        title: 'Strategy & Compliance',
        description: 'We develop an SMS marketing strategy and ensure compliance with regulations and best practices.',
      },
      {
        step: '02',
        title: 'List Building',
        description: 'We help you build an opt-in SMS subscriber list through website forms and other channels.',
      },
      {
        step: '03',
        title: 'Campaign Creation',
        description: 'We create compelling SMS campaigns with personalized messaging and clear calls-to-action.',
      },
      {
        step: '04',
        title: 'Execution & Analysis',
        description: 'We execute campaigns, monitor performance, and provide analytics and optimization recommendations.',
      },
    ],
    faqs: [
      {
        question: 'Do I need customer consent for SMS marketing?',
        answer: 'Yes! SMS marketing requires explicit opt-in consent. We help you set up proper consent processes and maintain compliance.',
      },
      {
        question: 'What\'s the character limit for SMS?',
        answer: 'Standard SMS messages are limited to 160 characters. We craft concise, impactful messages that fit within this limit.',
      },
      {
        question: 'How much does SMS marketing cost?',
        answer: 'Costs vary based on volume and provider. We help you choose cost-effective solutions that maximize ROI.',
      },
      {
        question: 'Can SMS be automated?',
        answer: 'Yes! We set up automated SMS sequences for welcome messages, reminders, and other triggered communications.',
      },
    ],
  },
  {
    id: 15,
    title: 'WhatsApp Marketing',
    slug: 'whatsapp-marketing',
    seo: {
      title: 'WhatsApp Marketing Services | WhatsApp Business',
      description: 'Connect with customers through interactive, personalized messaging on WhatsApp to boost engagement and drive conversations.',
      keywords: 'WhatsApp marketing, WhatsApp business, messaging campaigns, WhatsApp services',
    },
    hero: {
      headline: 'WhatsApp Marketing',
      subtext: 'Interactive, personalized messaging on WhatsApp to boost engagement and drive conversations.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `WhatsApp has become the world's most popular messaging platform, with over 2 billion active users. Our WhatsApp marketing services help you leverage this powerful channel to connect with customers, provide support, and drive business results.

We set up WhatsApp Business API, create message templates, and integrate chatbots to automate customer interactions. We help you create campaigns that feel personal and conversational, rather than promotional, building stronger relationships with your audience.

From marketing broadcasts and promotional campaigns to customer support and transactional messages, we help you use WhatsApp effectively. We ensure compliance with WhatsApp's policies and best practices, and we provide analytics to measure the impact of your WhatsApp marketing efforts.`,
    features: [
      {
        title: 'Business API Setup',
        description: 'Set up WhatsApp Business API for official business messaging and automation.',
        icon: '📱',
      },
      {
        title: 'Message Templates',
        description: 'Create approved message templates for marketing, notifications, and customer support.',
        icon: '📝',
      },
      {
        title: 'Chatbot Integration',
        description: 'Integrate chatbots to provide instant responses and handle common customer inquiries.',
        icon: '🤖',
      },
      {
        title: 'Analytics',
        description: 'Track message delivery, read receipts, response rates, and engagement metrics.',
        icon: '📊',
      },
      {
        title: 'Broadcast Campaigns',
        description: 'Send targeted broadcast messages to customer segments with personalized content.',
        icon: '📢',
      },
      {
        title: 'Customer Support',
        description: 'Provide real-time customer support through WhatsApp messaging.',
        icon: '💬',
      },
    ],
    benefits: [
      'Engage customers directly through the world\'s most popular messaging platform.',
      'Achieve high open and response rates with personal, conversational messaging.',
      'Provide instant customer support and build stronger customer relationships.',
      'Drive conversions with interactive, personalized WhatsApp campaigns.',
      'Reach global audiences with WhatsApp\'s extensive user base.',
    ],
    process: [
      {
        step: '01',
        title: 'API Setup',
        description: 'We set up WhatsApp Business API and configure your business profile and messaging capabilities.',
      },
      {
        step: '02',
        title: 'Template Creation',
        description: 'We create and get approval for message templates for various use cases.',
      },
      {
        step: '03',
        title: 'Automation Setup',
        description: 'We set up chatbots and automated messaging flows for common customer interactions.',
      },
      {
        step: '04',
        title: 'Campaign Launch',
        description: 'We launch WhatsApp marketing campaigns and provide ongoing management and optimization.',
      },
    ],
    faqs: [
      {
        question: 'Do I need WhatsApp Business API?',
        answer: 'For official business use and automation, yes. We help you set up and configure the WhatsApp Business API.',
      },
      {
        question: 'What types of messages can I send?',
        answer: 'You can send template messages for marketing and notifications, and engage in conversations for customer support. All messages must comply with WhatsApp policies.',
      },
      {
        question: 'Can I automate WhatsApp messaging?',
        answer: 'Yes! We integrate chatbots and automated messaging flows to handle common inquiries and provide instant responses.',
      },
      {
        question: 'How do you measure WhatsApp marketing success?',
        answer: 'We track message delivery, read receipts, response rates, engagement metrics, and conversions to measure success.',
      },
    ],
  },
  {
    id: 16,
    title: 'Shopify Website Development',
    slug: 'shopify-website-development',
    seo: {
      title: 'Shopify Website Development | E-Commerce Store Design',
      description: 'Custom Shopify store development with powerful e-commerce functionality and stunning design for a seamless shopping experience.',
      keywords: 'Shopify development, Shopify store design, e-commerce platform, Shopify services',
    },
    hero: {
      headline: 'Shopify Website Development',
      subtext: 'Custom Shopify store development with powerful e-commerce functionality and stunning design.',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
    overview: `Shopify is one of the world's leading e-commerce platforms, powering millions of online stores. Our Shopify development services help you create a custom store that combines powerful e-commerce functionality with stunning design and exceptional user experience.

We work with Shopify's flexible platform to build stores that perfectly represent your brand and drive sales. Whether you need a custom theme, app integrations, or complete store setup, we have the expertise to bring your vision to life.

Our Shopify development process focuses on creating stores that not only look great but also convert visitors into customers. We optimize every aspect of the shopping experience, from product pages to checkout, ensuring your store drives maximum sales. We also ensure your store is optimized for search engines and mobile devices.`,
    features: [
      {
        title: 'Store Customization',
        description: 'Customize your Shopify store with unique design, branding, and functionality tailored to your business.',
        icon: '🛍️',
      },
      {
        title: 'Theme Development',
        description: 'Develop custom Shopify themes or customize existing themes to match your brand perfectly.',
        icon: '🎨',
      },
      {
        title: 'App Integration',
        description: 'Integrate Shopify apps for enhanced functionality including marketing, analytics, and operations.',
        icon: '🔌',
      },
      {
        title: 'SEO Optimization',
        description: 'Optimize your Shopify store for search engines to drive organic traffic and sales.',
        icon: '🔍',
      },
      {
        title: 'Payment Setup',
        description: 'Configure payment gateways, shipping options, and tax settings for seamless transactions.',
        icon: '💳',
      },
      {
        title: 'Product Management',
        description: 'Set up product catalogs, variants, inventory management, and product photography.',
        icon: '📦',
      },
    ],
    benefits: [
      'Launch a professional online store with powerful e-commerce capabilities.',
      'Benefit from Shopify\'s robust platform with reliable hosting and security.',
      'Scale your store easily as your business grows with Shopify\'s infrastructure.',
      'Access powerful e-commerce features and integrations through Shopify\'s app ecosystem.',
      'Optimize for conversions with a store designed to maximize sales.',
    ],
    process: [
      {
        step: '01',
        title: 'Planning & Design',
        description: 'We plan your Shopify store, design the user experience, and create visual mockups.',
      },
      {
        step: '02',
        title: 'Development',
        description: 'We develop your custom Shopify theme, configure settings, and integrate necessary apps.',
      },
      {
        step: '03',
        title: 'Content & Products',
        description: 'We set up your product catalog, configure payment and shipping, and add content.',
      },
      {
        step: '04',
        title: 'Launch & Optimization',
        description: 'We launch your store, conduct testing, and provide ongoing optimization and support.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to build a Shopify store?',
        answer: 'Timeline varies based on complexity, but typically ranges from 4-8 weeks for a fully customized store with all features.',
      },
      {
        question: 'Can you customize existing Shopify themes?',
        answer: 'Yes! We can customize existing themes or develop completely custom themes based on your needs.',
      },
      {
        question: 'Do you handle Shopify app integrations?',
        answer: 'Absolutely! We integrate Shopify apps for marketing, analytics, customer service, and operations.',
      },
      {
        question: 'Will my Shopify store be mobile-responsive?',
        answer: 'Yes! All our Shopify stores are fully responsive and optimized for mobile devices, which is essential for e-commerce success.',
      },
    ],
  },
]

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug)
}

// Helper function to get all service slugs (for static generation)
export const getAllServiceSlugs = () => {
  return servicesData.map(service => service.slug)
}

// Helper function to get related services (exclude current service)
export const getRelatedServices = (currentServiceId, limit = 3) => {
  return servicesData
    .filter(service => service.id !== currentServiceId)
    .slice(0, limit)
}
