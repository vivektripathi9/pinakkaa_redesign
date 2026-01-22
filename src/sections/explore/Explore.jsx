import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { servicesData } from '../../dynamicService/data/servicesData'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Map services from centralized data source
const services = servicesData.map(service => ({
  id: service.id,
  title: service.title,
  description: service.hero.subtext || service.overview?.substring(0, 150) + '...',
  features: service.features?.map(f => f.title) || [],
  benefits: service.benefits?.[0] || '',
  keywords: service.seo.keywords,
  slug: service.slug,
}))

const oldServices = [
  {
    id: 1,
    title: 'Website Designing',
    description: 'We create responsive, intuitive, and visually stunning websites that authentically represent your brand and deliver seamless user experiences across all devices.',
    features: ['Responsive Design', 'UI/UX Optimization', 'Custom Development', 'Performance Optimization'],
    benefits: 'Increase conversions and user engagement with a website that reflects your brand excellence.',
    keywords: 'website design, responsive web design, custom website development',
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    description: 'Enhance your organic search presence with proven SEO strategies that improve visibility, drive quality traffic, and boost your rankings on search engines.',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy'],
    benefits: 'Achieve higher search rankings and attract qualified leads organically.',
    keywords: 'SEO services, search engine optimization, organic search marketing',
  },
  {
    id: 3,
    title: 'Social Media Optimization (SMO)',
    description: 'Optimize your social media presence for increased engagement, reach, and brand consistency across platforms like Facebook, Instagram, LinkedIn, and more.',
    features: ['Profile Optimization', 'Content Strategy', 'Community Management', 'Analytics & Reporting'],
    benefits: 'Build a strong social media presence that drives brand awareness and customer loyalty.',
    keywords: 'social media optimization, SMO services, social media management',
  },
  {
    id: 4,
    title: 'Online Reputation Management (ORM)',
    description: 'Strengthen your digital credibility by proactively managing reviews, mentions, and feedback to build and maintain a positive online reputation.',
    features: ['Review Management', 'Crisis Management', 'Brand Monitoring', 'Reputation Recovery'],
    benefits: 'Protect and enhance your brand reputation across all digital channels.',
    keywords: 'reputation management, online reputation, ORM services',
  },
  {
    id: 5,
    title: 'Search Engine Marketing (SEM)',
    description: 'Maximize your reach and conversions through highly targeted, performance-driven paid campaigns on Google and other major search engines.',
    features: ['Google Ads Management', 'Campaign Optimization', 'A/B Testing', 'ROI Tracking'],
    benefits: 'Get immediate visibility and drive qualified traffic with strategic paid advertising.',
    keywords: 'SEM services, search engine marketing, Google Ads management',
  },
  {
    id: 6,
    title: 'Social Media Marketing (SMM)',
    description: 'Amplify your brand through strategic paid advertising on platforms like Facebook, Instagram, and LinkedIn to drive engagement and generate leads.',
    features: ['Ad Campaign Creation', 'Audience Targeting', 'Creative Development', 'Performance Analytics'],
    benefits: 'Reach your target audience effectively and generate quality leads through social platforms.',
    keywords: 'social media marketing, SMM services, Facebook ads, Instagram ads',
  },
  {
    id: 7,
    title: 'Branding & Rebranding',
    description: 'Develop or refresh your brand identity with compelling visuals, messaging, and positioning that resonate with your audience and set you apart.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
    benefits: 'Create a memorable brand that stands out and connects with your audience.',
    keywords: 'branding services, rebranding, brand identity design',
  },
  {
    id: 8,
    title: 'Display Advertising',
    description: 'Design and execute impactful display ad campaigns using compelling visuals and messaging to attract, engage, and convert potential customers.',
    features: ['Banner Design', 'Ad Placement', 'Retargeting Campaigns', 'Performance Tracking'],
    benefits: 'Increase brand visibility and drive conversions through strategic display advertising.',
    keywords: 'display advertising, banner ads, display ad campaigns',
  },
  {
    id: 9,
    title: 'E-Commerce Solutions',
    description: 'From design to launch, we provide comprehensive e-commerce solutions that streamline your online store and enhance the customer shopping experience.',
    features: ['Store Setup', 'Payment Integration', 'Inventory Management', 'Mobile Optimization'],
    benefits: 'Launch and scale your online store with a seamless shopping experience.',
    keywords: 'e-commerce development, online store design, e-commerce solutions',
  },
  {
    id: 10,
    title: 'PR & Marketing Services',
    description: 'Build brand credibility and visibility through targeted PR campaigns, media outreach, and press coverage that tell your brand story effectively.',
    features: ['Press Releases', 'Media Relations', 'Event Management', 'Crisis Communication'],
    benefits: 'Build trust and credibility through strategic public relations and media coverage.',
    keywords: 'PR services, public relations, marketing services',
  },
  {
    id: 11,
    title: 'Software Development',
    description: 'Delivering scalable and customized software applications tailored to meet your business needs, enhance productivity, and support digital growth.',
    features: ['Custom Development', 'API Integration', 'Cloud Solutions', 'Maintenance & Support'],
    benefits: 'Streamline operations and drive efficiency with custom software solutions.',
    keywords: 'software development, custom software, application development',
  },
  {
    id: 12,
    title: 'API Integration',
    description: 'Enable seamless communication between applications through robust API integrations that improve functionality and operational efficiency.',
    features: ['Third-Party Integration', 'Custom APIs', 'Data Synchronization', 'System Connectivity'],
    benefits: 'Connect your systems seamlessly and automate workflows for better efficiency.',
    keywords: 'API integration, API development, system integration',
  },
  {
    id: 13,
    title: 'Email Marketing',
    description: 'Craft and manage personalized email campaigns that drive engagement, nurture leads, and increase conversions with measurable results.',
    features: ['Campaign Design', 'Automation Setup', 'List Management', 'A/B Testing'],
    benefits: 'Nurture leads and drive conversions through targeted email marketing campaigns.',
    keywords: 'email marketing, email campaigns, email automation',
  },
  {
    id: 14,
    title: 'SMS Marketing',
    description: 'Reach your audience instantly with short, impactful SMS campaigns designed for immediate visibility and fast response.',
    features: ['Campaign Creation', 'List Management', 'Scheduling', 'Analytics'],
    benefits: 'Achieve immediate engagement and high open rates with SMS marketing.',
    keywords: 'SMS marketing, text message marketing, SMS campaigns',
  },
  {
    id: 15,
    title: 'WhatsApp Marketing',
    description: 'Connect with customers through interactive, personalized messaging on WhatsApp—boosting engagement and driving real-time conversations.',
    features: ['Business API Setup', 'Message Templates', 'Chatbot Integration', 'Analytics'],
    benefits: 'Engage customers directly through the world\'s most popular messaging platform.',
    keywords: 'WhatsApp marketing, WhatsApp business, messaging campaigns',
  },
  {
    id: 16,
    title: 'Shopify Website Development',
    description: 'Custom Shopify store development that combines powerful e-commerce functionality with stunning design to create a seamless shopping experience.',
    features: ['Store Customization', 'Theme Development', 'App Integration', 'SEO Optimization'],
    benefits: 'Launch a professional online store with powerful e-commerce capabilities.',
    keywords: 'Shopify development, Shopify store design, e-commerce platform',
  },
]

const stats = [
  {
    value: '100',
    unit: '%',
    title: 'Creative Approach',
    description: 'Our innovative creative strategies combine cutting-edge design with strategic messaging to create memorable brand experiences that resonate with your audience.',
    icon: '✨',
  },
  {
    value: '100',
    unit: '%',
    title: 'Guaranteed Success',
    description: 'We deliver measurable results through proven methodologies, continuous optimization, and transparent reporting that ensures your marketing investment drives real business growth.',
    icon: '🎯',
  },
  {
    value: '100',
    unit: '%',
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that position your business for long-term success, building strong brand recognition and customer loyalty in competitive markets.',
    icon: '🚀',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Make An Appointment',
    description: 'Schedule a consultation to discuss your business goals and marketing needs.',
    details: 'Book a free consultation with our experts to understand your requirements.',
  },
  {
    number: '02',
    title: 'Meet Our Team',
    description: 'Connect with our expert team who will understand your vision and requirements.',
    details: 'Work with experienced professionals dedicated to your success.',
  },
  {
    number: '03',
    title: 'Get Consultation',
    description: 'Receive strategic insights and customized recommendations for your business.',
    details: 'Get a tailored strategy designed specifically for your business objectives.',
  },
  {
    number: '04',
    title: 'Start Project',
    description: 'Begin your journey to digital success with our proven methodologies.',
    details: 'Launch your project with confidence and track progress every step of the way.',
  },
]

const Explore = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const servicesRef = useRef([])
  const statsRef = useRef([])
  const processRef = useRef([])
  const gridRef = useRef(null)
  const backgroundRef = useRef(null)
  const particlesRef = useRef([])
  const windRefs = useRef([])
  const headingRefs = useRef([])
  const ctaSectionRef = useRef(null)
  const smokyTextureRef = useRef(null)
  const lightRaysRef = useRef([])

  // Create animated background particles
  useEffect(() => {
    if (!backgroundRef.current) return

    const particles = []
    const particleCount = 50

    // Create particles - White/light particles for dark background
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'absolute'
      particle.style.width = `${Math.random() * 4 + 2}px`
      particle.style.height = particle.style.width
      particle.style.borderRadius = '50%'
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.pointerEvents = 'none'
      backgroundRef.current.appendChild(particle)
      particles.push(particle)
      particlesRef.current.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${(Math.random() - 0.5) * 200}`,
        y: `+=${(Math.random() - 0.5) * 200}`,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1,
      })
    })

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
      particlesRef.current = []
    }
  }, [])

  // Wind-like fade effect - Multiple layers sweeping across
  useEffect(() => {
    if (!backgroundRef.current) return

    const windLayers = []
    const windCount = 3 // Number of wind streams

    // Create multiple wind layers
    for (let i = 0; i < windCount; i++) {
      const windLayer = document.createElement('div')
      windLayer.style.position = 'absolute'
      windLayer.style.inset = '0'
      windLayer.style.width = '150%'
      windLayer.style.height = '100%'
      windLayer.style.pointerEvents = 'none'
      windLayer.style.zIndex = '1'
      windLayer.style.opacity = '0'
      
      // Create gradient that looks like wind sweeping
      const angle = i * 15 // Different angles for each layer
      windLayer.style.background = `linear-gradient(${angle}deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.03) 20%, 
        rgba(255, 255, 255, 0.08) 40%, 
        rgba(255, 255, 255, 0.03) 60%, 
        transparent 80%
      )`
      
      backgroundRef.current.appendChild(windLayer)
      windLayers.push(windLayer)
      windRefs.current.push(windLayer)
    }

    // Animate each wind layer independently
    windLayers.forEach((layer, index) => {
      const delay = index * 2 // Stagger the animations
      const duration = 8 + index * 2 // Varying speeds
      
      // Create timeline for each wind layer
      const timeline = gsap.timeline({ repeat: -1, delay })
      
      // Wind comes in from left
      timeline
        .to(layer, {
          x: '-50%',
          opacity: 0,
          duration: 0,
        })
        .to(layer, {
          x: '0%',
          opacity: 0.6,
          duration: duration * 0.3,
          ease: 'power2.out',
        })
        .to(layer, {
          x: '50%',
          opacity: 0.8,
          duration: duration * 0.4,
          ease: 'power1.inOut',
        })
        .to(layer, {
          x: '100%',
          opacity: 0,
          duration: duration * 0.3,
          ease: 'power2.in',
        })
        .to(layer, {
          x: '-50%',
          opacity: 0,
          duration: 2, // Pause before next cycle
        })
    })

    return () => {
      windLayers.forEach(layer => {
        if (layer.parentNode) {
          gsap.killTweensOf(layer)
          layer.parentNode.removeChild(layer)
        }
      })
      windRefs.current = []
    }
  }, [])

  // Gradient animation for headings (like animation2)
  useEffect(() => {
    const gradientColors = [
      { start: '#8B5CF6', end: '#EC4899' }, // Purple to Pink
      { start: '#EC4899', end: '#3B82F6' }, // Pink to Blue
      { start: '#3B82F6', end: '#8B5CF6' }, // Blue to Purple
    ]

    headingRefs.current.forEach((headingEl, index) => {
      if (!headingEl) return

      const colorIndex = index % gradientColors.length
      const colors = gradientColors[colorIndex]

      headingEl.style.background = `linear-gradient(90deg, ${colors.start}, ${colors.end})`
      headingEl.style.webkitBackgroundClip = 'text'
      headingEl.style.webkitTextFillColor = 'transparent'
      headingEl.style.backgroundClip = 'text'
      headingEl.style.backgroundSize = '200% 100%'
      headingEl.style.backgroundPosition = '0% 50%'
      headingEl.style.willChange = 'background-position'

      // Gradient flow animation
      gsap.to(headingEl, {
        backgroundPosition: '100% 50%',
        duration: 4 + (index * 0.5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })
  }, [])

  // Smooth scroll parallax effects
  useEffect(() => {
    if (!sectionRef.current) return

    // Parallax effect for grid background
    if (gridRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const yPos = progress * 100
          gsap.set(gridRef.current, {
            backgroundPosition: `${yPos}px ${yPos}px`,
          })
        },
      })
    }

    // Parallax effect for background particles
    if (backgroundRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress
          const yPos = progress * 50
          gsap.set(backgroundRef.current, {
            y: yPos,
          })
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && sectionRef.current?.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  // Animated background grid - subtle continuous animation
  useEffect(() => {
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '200px 200px',
        duration: 20,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }
  }, [])

  // Smoky texture and light rays for CTA section
  useEffect(() => {
    if (!ctaSectionRef.current) return

    const section = ctaSectionRef.current
    const container = section.querySelector('.cta-background-container')
    if (!container) return

    // Create smoky texture canvas
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.opacity = '0.3'
    canvas.style.zIndex = '0'
    container.appendChild(canvas)
    smokyTextureRef.current = canvas

    const ctx = canvas.getContext('2d')
    let animationId = null

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create smoky texture animation
    const animateSmoke = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const time = Date.now() * 0.0005
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.5 + Math.cos(time) * 50,
        0,
        canvas.width * 0.3,
        canvas.height * 0.5,
        canvas.width * 0.8
      )
      
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      animationId = requestAnimationFrame(animateSmoke)
    }
    animateSmoke()

    // Create light rays
    const rays = []
    for (let i = 0; i < 3; i++) {
      const ray = document.createElement('div')
      ray.style.position = 'absolute'
      ray.style.width = '1px'
      ray.style.height = '100%'
      ray.style.background = `linear-gradient(180deg, 
        transparent 0%, 
        rgba(59, 130, 246, 0.1) 30%, 
        rgba(59, 130, 246, 0.15) 50%, 
        rgba(59, 130, 246, 0.1) 70%, 
        transparent 100%
      )`
      ray.style.left = `${20 + i * 30}%`
      ray.style.top = '0'
      ray.style.pointerEvents = 'none'
      ray.style.zIndex = '1'
      ray.style.opacity = '0'
      ray.style.filter = 'blur(1px)'
      container.appendChild(ray)
      rays.push(ray)
      lightRaysRef.current.push(ray)

      // Animate ray
      gsap.to(ray, {
        opacity: 0.6,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 1.5,
      })
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      rays.forEach(ray => {
        if (ray.parentNode) {
          gsap.killTweensOf(ray)
          ray.parentNode.removeChild(ray)
        }
      })
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
      lightRaysRef.current = []
    }
  }, [])

  // Title animation
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.4,
        }
      )
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'sine.inOut',
          delay: 0.8,
        }
      )
    }
  }, [])

  // Services animation
  useEffect(() => {
    if (!sectionRef.current) return

    servicesRef.current.forEach((serviceEl, index) => {
      if (!serviceEl) return

      ScrollTrigger.create({
        trigger: serviceEl,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
        onEnter: () => {
          gsap.fromTo(
            serviceEl,
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              delay: index * 0.05,
            }
          )

          const titleEl = serviceEl.querySelector('.service-title')
          const descEl = serviceEl.querySelector('.service-description')
          const featuresEl = serviceEl.querySelector('.service-features')
          const benefitsEl = serviceEl.querySelector('.service-benefits')

          if (titleEl) {
            gsap.fromTo(
              titleEl,
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: index * 0.04 + 0.1 }
            )
          }

          if (descEl) {
            gsap.fromTo(
              descEl,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: index * 0.04 + 0.2 }
            )
          }

          if (featuresEl) {
            gsap.fromTo(
              featuresEl,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: index * 0.04 + 0.3 }
            )
          }

          if (benefitsEl) {
            gsap.fromTo(
              benefitsEl,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: index * 0.04 + 0.4 }
            )
          }
        },
        onEnterBack: () => {
          gsap.to(serviceEl, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          })
        },
        once: false,
      })
    })

    // Stats animation
    statsRef.current.forEach((statEl, index) => {
      if (!statEl) return

      ScrollTrigger.create({
        trigger: statEl,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
        onEnter: () => {
          const valueEl = statEl.querySelector('.stat-value')
          const titleEl = statEl.querySelector('.stat-title')
          const descEl = statEl.querySelector('.stat-description')

          if (valueEl) {
            gsap.fromTo(
              valueEl,
              { opacity: 0, scale: 0.8, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.7)', delay: index * 0.1 }
            )
          }

          if (titleEl) {
            gsap.fromTo(
              titleEl,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.1 + 0.2 }
            )
          }

          if (descEl) {
            gsap.fromTo(
              descEl,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.1 + 0.3 }
            )
          }
        },
        onEnterBack: () => {
          const valueEl = statEl.querySelector('.stat-value')
          const titleEl = statEl.querySelector('.stat-title')
          const descEl = statEl.querySelector('.stat-description')

          if (valueEl) gsap.to(valueEl, { opacity: 1, scale: 1, y: 0, duration: 0.5 })
          if (titleEl) gsap.to(titleEl, { opacity: 1, y: 0, duration: 0.5 })
          if (descEl) gsap.to(descEl, { opacity: 1, y: 0, duration: 0.5 })
        },
        once: false,
      })
    })

    // Process steps animation
    processRef.current.forEach((processEl, index) => {
      if (!processEl) return

      ScrollTrigger.create({
        trigger: processEl,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
        onEnter: () => {
          gsap.fromTo(
            processEl,
            { opacity: 0, y: 40, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: index * 0.1 }
          )
        },
        onEnterBack: () => {
          gsap.to(processEl, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          })
        },
        once: false,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && sectionRef.current?.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="explore-services"
      itemScope
      itemType="https://schema.org/Service"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        paddingTop: 'clamp(100px, 12vw, 160px)',
        paddingBottom: 'clamp(120px, 15vw, 240px)',
        scrollBehavior: 'smooth',
      }}
    >
      {/* Animated Background Container */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          overflow: 'hidden',
        }}
      />

      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20" style={{ zIndex: 1 }}>
        {/* Hero Section - Premium Layout */}
        <header className="mb-24 md:mb-32 lg:mb-40 text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-white/50"></div>
            <span
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Our Services
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/30 to-white/50"></div>
          </div>
          <h1
            ref={(el) => {
              titleRef.current = el
              headingRefs.current[0] = el
            }}
            itemProp="name"
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] mb-8 md:mb-10"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              letterSpacing: '-0.02em',
              fontWeight: 300,
              opacity: 0,
            }}
          >
            Comprehensive Digital Marketing Services
          </h1>
          <p
            ref={subtitleRef}
            itemProp="description"
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 300,
              lineHeight: 1.8,
              opacity: 0,
            }}
          >
            From search engine optimization and social media marketing to website design and e-commerce solutions, we provide end-to-end digital marketing services that drive measurable results and accelerate your business growth.
          </p>
        </header>

        {/* Services Grid - Premium Detailed Cards - 2 Columns */}
        <div className="mb-32 md:mb-40 lg:mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="block"
                style={{ textDecoration: 'none' }}
              >
                <article
                  ref={(el) => {
                    servicesRef.current[index] = el
                  }}
                  itemScope
                  itemType="https://schema.org/Service"
                  className="group relative rounded-3xl p-8 md:p-10 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer"
                  style={{
                    opacity: 0,
                    willChange: 'transform, opacity, box-shadow',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    aspectRatio: '1 / 1',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -8,
                      scale: 1.02,
                      boxShadow: '0 25px 50px rgba(139, 92, 246, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      duration: 0.5,
                      ease: 'power2.out',
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      scale: 1,
                      boxShadow: '0 0 0 rgba(0,0,0,0)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      duration: 0.5,
                      ease: 'power2.out',
                    })
                  }}
                >
                {/* Premium Background Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                {/* Content Wrapper - Flex Column */}
                <div className="flex flex-col h-full">
                  {/* Service Header Section */}
                  <div className="flex items-start justify-between mb-4 gap-3 flex-shrink-0">
                    <div className="flex-1 min-w-0 pr-2">
                      {/* Service Title */}
                      <h2
                        itemProp="name"
                        className="service-title text-xl md:text-2xl lg:text-3xl font-light leading-tight"
                        style={{
                          fontFamily: "'Playfair Display', 'Georgia', serif",
                          color: '#FFFFFF',
                          letterSpacing: '-0.02em',
                          fontWeight: 400,
                          opacity: 0,
                          lineHeight: 1.2,
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                        }}
                      >
                        {service.title}
                      </h2>
                    </div>
                    
                    {/* Service Number Badge - Premium Style */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                        <span
                          className="text-lg md:text-xl font-light text-white/80"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            lineHeight: 1,
                          }}
                        >
                          {String(service.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Description - Enhanced */}
                  <p
                    itemProp="description"
                    className="service-description text-base md:text-lg leading-relaxed mb-4 flex-shrink-0"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      opacity: 0,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Detailed Features Section */}
                  <div className="service-features mb-4 flex-shrink-0" style={{ opacity: 0 }}>
                    <h3
                      className="text-xs md:text-sm uppercase tracking-wider mb-2 text-white/50"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-0"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-white/20">
                            <span className="text-xs text-white">✓</span>
                          </div>
                          <span
                            className="text-xs md:text-sm text-white/80 truncate"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                            }}
                            title={feature}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits Section - Enhanced - Takes remaining space */}
                  <div className="service-benefits mt-auto pt-4 border-t border-white/10 flex-shrink-0" style={{ opacity: 0 }}>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg">
                          <span className="text-xs text-white font-bold">✓</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xs uppercase tracking-wider mb-1.5 text-white/60"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 600,
                              letterSpacing: '0.15em',
                            }}
                          >
                            Why This Matters
                          </h3>
                          <p
                            className="text-xs md:text-sm text-white/85 leading-relaxed"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              lineHeight: 1.5,
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {service.benefits}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats & Value Proposition Section - Premium Layout - Center Aligned */}
        <div className="mb-32 md:mb-40 lg:mb-48">
          <div className="rounded-3xl p-12 md:p-16 lg:p-20 border border-white/10 shadow-lg backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
            <div className="max-w-4xl mx-auto text-center">
              {/* Label */}
              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-white/50"></div>
                <span
                  className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-white/60"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Why Choose Us
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/30 to-white/50"></div>
              </div>

              {/* Heading */}
              <h2
                ref={(el) => {
                  headingRefs.current[1] = el
                }}
                className="why-choose-heading font-light mb-8 md:mb-10 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                }}
              >
                Why Choose Our Digital Marketing Services
              </h2>

              {/* Description */}
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 md:mb-16 max-w-3xl mx-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                We combine strategic thinking with creative excellence to deliver digital marketing solutions that drive real business results. Our data-driven approach ensures every campaign is optimized for maximum ROI.
              </p>

              {/* Detailed Key Points - Center Aligned */}
              <div className="space-y-8 md:space-y-10 max-w-3xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border-2 border-white/20">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}>
                      Proven Track Record
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      With over 10 years of experience, we've successfully delivered results for hundreds of clients across various industries, from startups to Fortune 500 companies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border-2 border-white/20">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}>
                      Customized Strategies
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      Every business is unique. We develop tailored marketing strategies that align with your specific goals, target audience, and industry requirements for maximum effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center border-2 border-white/20">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}>
                      Transparent Reporting
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      Stay informed with comprehensive, easy-to-understand reports that show exactly how your marketing investment is driving growth and delivering measurable ROI.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border-2 border-white/20">
                    <span className="text-white text-lg font-bold">4</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", color: '#FFFFFF' }}>
                      Expert Team
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      Our team consists of certified professionals with expertise in SEO, SEM, social media, web design, and analytics, ensuring you receive the highest quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section - Below the main content */}
            <div className="mt-20 md:mt-24 lg:mt-28">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      statsRef.current[index] = el
                    }}
                    itemScope
                    itemType="https://schema.org/QuantitativeValue"
                    className="text-center"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="text-4xl md:text-5xl">{stat.icon}</div>
                    </div>
                    <div className="mb-4">
                      <span
                        itemProp="value"
                        className="stat-value text-6xl md:text-7xl lg:text-8xl font-light"
                        style={{
                          fontFamily: "'Playfair Display', 'Georgia', serif",
                          color: '#FFFFFF',
                          fontWeight: 300,
                          opacity: 0,
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="text-3xl md:text-4xl font-light ml-2 text-white/50"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {stat.unit}
                      </span>
                    </div>
                    <h3
                      itemProp="name"
                      className="stat-title text-xl md:text-2xl lg:text-3xl font-light mb-4"
                      style={{
                        fontFamily: "'Playfair Display', 'Georgia', serif",
                        color: '#FFFFFF',
                        fontWeight: 400,
                        opacity: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.title}
                    </h3>
                    <p
                      itemProp="description"
                      className="stat-description text-base md:text-lg leading-relaxed"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        opacity: 0,
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Section - Premium Layout */}
        <div>
          <div className="mb-16 md:mb-20 text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-white/50"></div>
              <span
                className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] text-white/60"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Our Process
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/30 to-white/50"></div>
            </div>
            <h2
              ref={(el) => {
                headingRefs.current[2] = el
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 leading-tight"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: '-0.02em',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              How We Deliver Exceptional Results
            </h2>
            <p
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Our proven methodology ensures every project is executed with precision, transparency, and a focus on delivering measurable business outcomes.
            </p>
          </div>

          {/* Process Steps - Premium Detailed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  processRef.current[index] = el
                }}
                itemScope
                itemType="https://schema.org/Step"
                className="group relative rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl backdrop-blur-xl"
                style={{
                  opacity: 0,
                  willChange: 'transform, opacity, box-shadow',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -6,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    duration: 0.4,
                    ease: 'power2.out',
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    duration: 0.4,
                    ease: 'power2.out',
                  })
                }}
              >
                {/* Premium Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span
                      itemProp="position"
                      className="text-4xl md:text-5xl font-light text-white/80"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 200,
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  itemProp="name"
                  className="text-xl md:text-2xl lg:text-3xl font-light mb-4"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    color: '#FFFFFF',
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  itemProp="description"
                  className="text-base leading-relaxed text-white/70 mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>

                {/* Step Details */}
                <p
                  className="text-sm leading-relaxed text-white/60"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {step.details}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Let's Work Together CTA Section - Luxury Dark Cinematic */}
        <div
          ref={ctaSectionRef}
          className="relative w-full mt-32 md:mt-40 lg:mt-48 overflow-hidden"
          style={{
            minHeight: '600px',
          }}
        >
          {/* Background Container with Effects */}
          <div className="cta-background-container absolute inset-0" style={{ zIndex: 0 }}>
            {/* Base gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 1) 100%)',
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-start">
              {/* Left Side - Heading & CTA */}
              <div className="flex flex-col justify-center">
                <h2
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 md:mb-10 leading-tight"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#FFFFFF',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                >
                  Let's Work Together.
                </h2>
                <p
                  className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Ready to transform your digital presence? Let's create something extraordinary together.
                </p>
                <button
                  className="group relative px-10 md:px-12 py-4 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-500 overflow-hidden"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
                      scale: 1.05,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                      scale: 1,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }}
                >
                  <span className="relative z-10">Get Started</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.3) 100%)',
                    }}
                  />
                </button>
              </div>

              {/* Right Side - Form & Info Grid */}
              <div className="space-y-8">
                {/* Contact Form */}
                <div
                  className="rounded-2xl p-8 md:p-10 border border-white/10 backdrop-blur-xl"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <h3
                    className="text-2xl md:text-3xl font-semibold mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: '#FFFFFF',
                      fontWeight: 600,
                    }}
                  >
                    Start a Project
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project"
                        rows="4"
                        className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Categories Grid */}
                <div
                  className="rounded-2xl p-8 md:p-10 border border-white/10 backdrop-blur-xl"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <h3
                    className="text-2xl md:text-3xl font-semibold mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: '#FFFFFF',
                      fontWeight: 600,
                    }}
                  >
                    Our Services
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '🎨', label: 'Design' },
                      { icon: '💻', label: 'Development' },
                      { icon: '📱', label: 'Marketing' },
                      { icon: '🚀', label: 'Strategy' },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                        style={{
                          backdropFilter: 'blur(10px)',
                        }}
                        onMouseEnter={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1.02,
                            duration: 0.3,
                            ease: 'power2.out',
                          })
                        }}
                        onMouseLeave={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out',
                          })
                        }}
                      >
                        <span className="text-2xl">{service.icon}</span>
                        <span
                          className="text-base font-medium"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            color: '#FFFFFF',
                            fontWeight: 500,
                          }}
                        >
                          {service.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row gap-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-white/60">📧</span>
                    </div>
                    <div>
                      <p
                        className="text-sm text-white/50 mb-1"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Email
                      </p>
                      <p
                        className="text-base text-white/80"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        hello@pinakkaa.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-white/60">📞</span>
                    </div>
                    <div>
                      <p
                        className="text-sm text-white/50 mb-1"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Phone
                      </p>
                      <p
                        className="text-base text-white/80"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles & Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        #explore-services {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        .why-choose-heading {
          white-space: nowrap;
        }
        
        /* Smooth scroll animations */
        @media (prefers-reduced-motion: no-preference) {
          #explore-services * {
            scroll-behavior: smooth;
          }
        }
        
        @media (max-width: 768px) {
          .why-choose-heading {
            white-space: normal;
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
          .service-title {
            font-size: clamp(1.25rem, 4vw, 1.75rem) !important;
            line-height: 1.3 !important;
          }
        }
        @media (max-width: 1024px) {
          .why-choose-heading {
            white-space: normal;
          }
        }
      `}</style>
    </section>
  )
}

export default Explore
