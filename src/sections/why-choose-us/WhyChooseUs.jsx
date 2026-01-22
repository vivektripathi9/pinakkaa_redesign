import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const WhyChooseUs = () => {
  const containerRef = useRef(null)
  const backgroundRef = useRef(null)
  const particlesRef = useRef([])
  const windRefs = useRef([])
  const sectionRefs = useRef([])
  const whoWeAreHeadingRef = useRef(null)
  const standsOutHeadingRef = useRef(null)

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

  // Gradient animation for "Who we are" heading
  useEffect(() => {
    if (!whoWeAreHeadingRef.current) return

    const heading = whoWeAreHeadingRef.current
    const gradientColors = [
      { start: '#8B5CF6', end: '#EC4899' }, // Purple to Pink
      { start: '#EC4899', end: '#3B82F6' }, // Pink to Blue
      { start: '#3B82F6', end: '#8B5CF6' }, // Blue to Purple
    ]

    // Apply gradient styles
    heading.style.background = `linear-gradient(90deg, ${gradientColors[0].start}, ${gradientColors[0].end})`
    heading.style.webkitBackgroundClip = 'text'
    heading.style.webkitTextFillColor = 'transparent'
    heading.style.backgroundClip = 'text'
    heading.style.backgroundSize = '200% 100%'
    heading.style.backgroundPosition = '0% 50%'
    heading.style.willChange = 'background-position'

    // Gradient flow animation
    const gradientFlow = gsap.to(heading, {
      backgroundPosition: '100% 50%',
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Subtle scale pulse
    const scalePulse = gsap.to(heading, {
      scale: 1.02,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    return () => {
      if (gradientFlow) gradientFlow.kill()
      if (scalePulse) scalePulse.kill()
      gsap.killTweensOf(heading)
    }
  }, [])

  // Gradient animation for "Why PINAKKAA Stands Out" heading
  useEffect(() => {
    if (!standsOutHeadingRef.current) return

    const heading = standsOutHeadingRef.current
    const gradientColors = [
      { start: '#8B5CF6', end: '#EC4899' }, // Purple to Pink
      { start: '#EC4899', end: '#3B82F6' }, // Pink to Blue
      { start: '#3B82F6', end: '#8B5CF6' }, // Blue to Purple
    ]

    // Apply gradient styles - using Pink to Blue gradient
    heading.style.background = `linear-gradient(90deg, ${gradientColors[1].start}, ${gradientColors[1].end})`
    heading.style.webkitBackgroundClip = 'text'
    heading.style.webkitTextFillColor = 'transparent'
    heading.style.backgroundClip = 'text'
    heading.style.backgroundSize = '200% 100%'
    heading.style.backgroundPosition = '0% 50%'
    heading.style.willChange = 'background-position'

    // Gradient flow animation
    const gradientFlow = gsap.to(heading, {
      backgroundPosition: '100% 50%',
      duration: 4.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Subtle scale pulse
    const scalePulse = gsap.to(heading, {
      scale: 1.02,
      duration: 3.3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 0.2
    })

    return () => {
      if (gradientFlow) gradientFlow.kill()
      if (scalePulse) scalePulse.kill()
      gsap.killTweensOf(heading)
    }
  }, [])

  // Scroll animations for sections
  useEffect(() => {
    if (!containerRef.current) return

    const sections = sectionRefs.current.filter(Boolean)
    
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              delay: index * 0.1,
            }
          )
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (sections.includes(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  const features = [
    {
      title: 'CUSTOMIZED SOLUTIONS',
      description: 'No two businesses are alike. That\'s why we craft tailored digital marketing strategies that align perfectly with your unique business goals, target audience, and market position - ensuring maximum impact and ROI.',
    },
    {
      title: 'ROI-DRIVEN APPROACH',
      description: 'We don\'t just create campaigns - we deliver results. Our data-driven methodologies focus on measurable outcomes, maximizing your return on investment through strategic optimization and continuous performance tracking.',
    },
    {
      title: 'CREATIVE EXCELLENCE',
      description: 'Stand out from the competition with campaigns that blend innovative creative concepts and strategic thinking. We develop compelling content that captures attention and drives meaningful engagement with your audience.',
    },
    {
      title: 'EXPERT TEAM',
      description: 'Work with seasoned professionals who bring together diverse expertise in digital marketing, design, analytics, and strategy. Our team stays ahead of industry trends to deliver cutting-edge solutions for your business.',
    },
  ]

  const expertise = [
    {
      percentage: '100',
      title: 'Client Satisfaction',
      description: 'We measure our success by yours. Our commitment to excellence and client satisfaction drives everything we do, ensuring you receive the highest quality service and results.',
    },
    {
      percentage: '100',
      title: 'Results Delivered',
      description: 'Every campaign is backed by data, strategy, and proven methodologies. We deliver measurable results that drive real business growth and maximize your marketing investment.',
    },
    {
      percentage: '100',
      title: 'Innovation Focus',
      description: 'Stay ahead of the curve with cutting-edge strategies and technologies. We continuously evolve our approach to ensure your brand remains competitive and relevant in the digital landscape.',
    },
  ]

  const processSteps = [
    { number: '01', title: 'Proven Expertise' },
    { number: '02', title: 'Transparent Communication' },
    { number: '03', title: 'Data-Driven Results' },
    { number: '04', title: 'Long-Term Partnership' },
  ]

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: '#000000',
      }}
    >
      {/* Animated Background Container */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
        }}
      />

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Why Choose Us Hero Section */}
        <div
          ref={el => sectionRefs.current[0] = el}
          className="relative mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 via-pink-500/20 via-blue-500/20 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center">
            {/* Label with decorative elements */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
              <h6 
                className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500"
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 500,
                  letterSpacing: '0.4em'
                }}
              >
                WHY CHOOSE US
              </h6>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
            </motion.div>

            {/* Main Heading with unique styling */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 md:mb-12 leading-[1.1] px-4"
              style={{ 
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontWeight: 300,
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Precision, Power, and Performance</span>
              <span 
                className="block mt-4 text-lg md:text-xl lg:text-2xl font-light text-gray-400 tracking-wider"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: '0.1em'
                }}
              >
                in Digital Marketing
              </span>
            </motion.h1>

            {/* Description with enhanced styling */}
            <motion.div
              className="max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Decorative quote marks */}
                <div 
                  className="absolute -left-6 -top-4 text-6xl md:text-7xl text-purple-500/10 font-serif leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </div>
                <p 
                  className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed relative z-10"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    lineHeight: '1.8',
                    letterSpacing: '0.01em'
                  }}
                >
                  Choose PINAKKAA for unmatched expertise, proven results, and a partnership that transforms your digital presence. We don't just deliver campaigns—we deliver growth, innovation, and measurable success that sets you apart from the competition.
                </p>
                <div 
                  className="absolute -right-6 -bottom-4 text-6xl md:text-7xl text-blue-500/10 font-serif leading-none rotate-180"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </div>
              </div>
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              className="mt-12 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-500/30 to-blue-500/50"></div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us - Core Values Section */}
        <div
          ref={el => sectionRefs.current[1] = el}
          className="mb-32 md:mb-40"
          style={{ opacity: 0 }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              ref={whoWeAreHeadingRef}
              className="mb-8 inline-block"
              style={{ 
                fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 'clamp(48px, 8vw, 120px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                cursor: 'default'
              }}
            >
              Why Choose Us
            </h2>
          </motion.div>

          {/* Core Differentiators - Split Layout */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>
              <div 
                className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                PROVEN TRACK RECORD
              </div>
              <p 
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  lineHeight: '1.8'
                }}
              >
                With over 10 years of experience and a portfolio of successful campaigns, we've helped countless brands achieve their digital marketing goals. Our track record speaks for itself—consistent results, satisfied clients, and measurable growth.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>
              <div 
                className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                CLIENT-CENTRIC APPROACH
              </div>
              <p 
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  lineHeight: '1.8'
                }}
              >
                Your success is our success. We take the time to understand your business, goals, and challenges. Every strategy is customized to your unique needs, ensuring that every marketing dollar works harder and delivers better results for your brand.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Grid - Modern Card Style */}
        <div
          ref={el => sectionRefs.current[2] = el}
          className="grid md:grid-cols-2 gap-8 md:gap-10 mb-32 md:mb-40"
          style={{ opacity: 0 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-8 md:p-10 border border-gray-800 hover:border-gray-700 transition-all duration-500 bg-gradient-to-br from-transparent to-gray-900/20 hover:to-gray-900/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Number Badge */}
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-gray-800 flex items-center justify-center text-white text-xl font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Title */}
              <h4 
                className="text-2xl md:text-3xl font-light text-white mb-6 mt-4"
                style={{ 
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}
              >
                {feature.title}
              </h4>
              
              {/* Description */}
              <p 
                className="text-gray-400 leading-relaxed text-base md:text-lg"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  lineHeight: '1.7'
                }}
              >
                {feature.description}
              </p>
              
              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <div
          ref={el => sectionRefs.current[3] = el}
          className="text-center mb-32 md:mb-40"
          style={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Experience
            </div>
            <div className="flex items-baseline justify-center gap-3 mb-12">
              <span 
                className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white leading-none"
                style={{ 
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  fontWeight: 300,
                  letterSpacing: '-0.05em'
                }}
              >
                10
              </span>
              <span 
                className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-500"
                style={{ 
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  fontWeight: 300
                }}
              >
                +
              </span>
            </div>
            <p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.01em'
              }}
            >
              years of experience
            </p>
          </motion.div>
        </div>

        {/* Our Commitment */}
        <div
          ref={el => sectionRefs.current[4] = el}
          className="mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          <motion.h6
            className="text-sm uppercase tracking-widest text-gray-400 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Commitment
          </motion.h6>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {item.percentage}%
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div
          ref={el => sectionRefs.current[5] = el}
          className="mb-24 md:mb-32 relative"
          style={{ opacity: 0 }}
        >
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-blue-900/5 rounded-3xl pointer-events-none"></div>
          
          <div className="relative z-10 px-6 md:px-12 py-16 md:py-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6 
                className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                WHAT SETS US APART
              </h6>
              <h2
                ref={standsOutHeadingRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 inline-block"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'normal',
                  cursor: 'default',
                  lineHeight: '1.1'
                }}
              >
                Why PINAKKAA Stands Out
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div 
                      className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                      Why Choose Us
                    </div>
                    <div 
                      className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1'
                      }}
                    >
                      {step.number}
                    </div>
                    <h4 
                      className="text-xl md:text-2xl font-semibold text-white"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600
                      }}
                    >
                      {step.title}
                    </h4>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
