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
      description: 'We craft tailored digital marketing strategies that align with your unique business goals and target audience, ensuring maximum impact and ROI for your brand.',
    },
    {
      title: 'ROI-DRIVEN APPROACH',
      description: 'Our data-driven methodologies focus on delivering measurable results and maximizing your return on investment through strategic campaign optimization and performance tracking.',
    },
    {
      title: 'CREATIVE SOLUTION',
      description: 'We blend innovative creative concepts with strategic thinking to develop compelling campaigns that capture attention and drive meaningful engagement with your audience.',
    },
    {
      title: 'EXPERT TEAM',
      description: 'Our seasoned professionals bring together diverse expertise in digital marketing, design, analytics, and strategy to deliver exceptional results for your business.',
    },
  ]

  const expertise = [
    {
      percentage: '100',
      title: 'Creative Approach',
      description: 'Our innovative creative strategies combine cutting-edge design with strategic messaging to create memorable brand experiences that resonate with your audience.',
    },
    {
      percentage: '100',
      title: 'Guaranteed Success',
      description: 'We deliver measurable results through proven methodologies, continuous optimization, and transparent reporting that ensures your marketing investment drives real business growth.',
    },
    {
      percentage: '100',
      title: 'Brand Strategy',
      description: 'We develop comprehensive brand strategies that position your business for long-term success, building strong brand recognition and customer loyalty in competitive markets.',
    },
  ]

  const processSteps = [
    { number: '01', title: 'Make An Appointment' },
    { number: '02', title: 'Meet Our Team' },
    { number: '03', title: 'Get Consultation' },
    { number: '04', title: 'Start Project' },
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
        {/* About Us Hero Section */}
        <div
          ref={el => sectionRefs.current[0] = el}
          className="text-center mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          <motion.h6
            className="text-sm md:text-base uppercase tracking-widest text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ABOUT US
          </motion.h6>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Precision, Power, and Performance in Digital Marketing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At PINAKKAA, we view every brand as a unique opportunity to create real impact. Our mission is not just to market your business—but to elevate it. We help build strong digital identities that resonate with your audience and support long-term success.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div
          ref={el => sectionRefs.current[1] = el}
          className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Who we are</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">MISSION</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses through innovative, data-driven, and results-focused digital marketing solutions that fuel measurable growth, strengthen brand presence, and foster meaningful customer engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">VISION</h3>
            <p className="text-gray-300 leading-relaxed">
              To be a globally trusted leader in digital marketing—celebrated for our strategic precision, creative innovation, and performance excellence—empowering brands to thrive in the digital era through impactful strategies and enduring partnerships.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div
          ref={el => sectionRefs.current[2] = el}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border-t border-gray-800 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <div
          ref={el => sectionRefs.current[3] = el}
          className="text-center mb-24 md:mb-32"
          style={{ opacity: 0 }}
        >
          <motion.h6
            className="text-sm uppercase tracking-widest text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h6>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Grow Your Online Presence.
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What sets us apart is our results-driven approach. We don't believe in one-size-fits-all solutions. Instead, we craft customized, data-driven strategies tailored to meet the unique needs and goals of each client.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">10</span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">+</span>
            <div className="text-left ml-4">
              <p className="text-xl md:text-2xl font-semibold text-white">years of experience</p>
            </div>
          </motion.div>
        </div>

        {/* Our Expertise */}
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
            Our Expertise
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

        {/* How We Work */}
        <div
          ref={el => sectionRefs.current[5] = el}
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
            HOW WE WORK
          </motion.h6>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Process For Delivering Results
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="border-t border-gray-800 pt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                  Project in steps
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {step.number}.
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-white">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
