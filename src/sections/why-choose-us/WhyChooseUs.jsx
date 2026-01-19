import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoImage from '../../components/Asset5.webp'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const WhyChooseUs = () => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const backgroundRef = useRef(null)
  const particlesRef = useRef([])
  const windRefs = useRef([])

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

  // Logo animation on scroll
  useEffect(() => {
    if (!logoRef.current || !containerRef.current) return

    const logo = logoRef.current

    // Create scroll trigger for logo animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
            rotation: -5,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 1.2,
            ease: 'power3.out',
          }
        )

        // Add subtle pulse animation
        gsap.to(logo, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.2,
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: '#000000', // Dark navy blue background
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

      {/* Animated Grid Background - Lighter for dark background */}
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

      {/* Logo Container */}
      <div className="relative z-10 flex items-center justify-center w-full">
        <motion.img
          ref={logoRef}
          src={logoImage}
          alt="PINAKKAA Logo"
          className="max-w-full h-auto"
          style={{
            maxWidth: '600px',
            width: '90%',
            height: 'auto',
            opacity: 0,
            filter: 'drop-shadow(0 10px 40px rgba(255, 255, 255, 0.2)) brightness(1.1)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'power3.out' }}
        />
      </div>

      {/* Subtle glow effect behind logo - Enhanced for dark background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(47, 128, 237, 0.15) 0%, transparent 60%)',
          zIndex: 2,
        }}
      />
    </section>
  )
}

export default WhyChooseUs
