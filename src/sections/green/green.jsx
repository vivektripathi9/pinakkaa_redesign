import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Green = () => {
  const sectionRef = useRef(null)
  const linesRef = useRef([])
  const headlineRef = useRef(null)
  const ctaRef = useRef(null)

  // Handle CTA click - navigate to contact page
  const handleCTAClick = (e) => {
    e.preventDefault()
    window.location.href = '/contact'
  }

  // Setup background line animations with enhanced movement and glow
  useEffect(() => {
    if (!sectionRef.current) return

    const lines = linesRef.current.filter(Boolean)
    let isMounted = true

    // Set initial stroke-dashoffset for all lines
    lines.forEach((line, index) => {
      if (line) {
        gsap.set(line, {
          strokeDashoffset: 0,
        })
      }
    })

    // Enhanced animations with more movement
    const animations = lines.map((line, index) => {
      if (!line) return null

      // More varied animation parameters for enhanced movement
      const duration = 6 + (index * 1.2) // 6s to 18s range - faster for more movement
      const translateX = (index % 2 === 0 ? 1 : -1) * (30 + index * 8) // Increased movement
      const translateY = (index % 3 === 0 ? 1 : -1) * (25 + index * 6)
      const strokeOffset = 150 + index * 40 // More stroke movement
      const rotation = (index % 2 === 0 ? 1 : -1) * (3 + index * 0.8) // More rotation
      const scale = 1 + (index % 3) * 0.08 // More scale variation

      // Create multiple animation timelines for complex movement
      const mainTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Position, stroke, rotation, and scale animation
      mainTl.to(line, {
        x: translateX,
        y: translateY,
        strokeDashoffset: strokeOffset,
        rotation: rotation,
        scale: scale,
        duration: duration,
        ease: 'sine.inOut',
      })

      // Separate glow pulse animation with more variation
      const glowTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      glowTl.to(line, {
        opacity: 0.6, // Enhanced glow pulse
        duration: duration * 0.7,
        ease: 'sine.inOut',
      })
      
      // Additional pulsing glow animation
      const pulseTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
      
      pulseTl.to(line, {
        opacity: 0.8,
        duration: duration * 0.5,
        ease: 'power2.inOut',
      })

      // Additional floating animation
      const floatTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      floatTl.to(line, {
        y: `+=${(index % 4) * 5 + 10}`,
        duration: duration * 1.2,
        ease: 'sine.inOut',
      })

      return { main: mainTl, glow: glowTl, float: floatTl, pulse: pulseTl }
    }).filter(Boolean)

    // Fade in headline and CTA on page load
    if (headlineRef.current && ctaRef.current) {
      gsap.fromTo(
        [headlineRef.current, ctaRef.current],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      )
    }

    return () => {
      isMounted = false
      animations.forEach(anim => {
        if (anim && anim.main) anim.main.kill()
        if (anim && anim.glow) anim.glow.kill()
        if (anim && anim.float) anim.float.kill()
        if (anim && anim.pulse) anim.pulse.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="green-hero"
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        backgroundColor: '#000000', // Black background
        position: 'relative',
        fontFamily: '"Playfair Display", "Cormorant Garamond", "EB Garamond", "Bodoni Moda", serif', // Luxury serif fonts
      }}
    >
      {/* SVG Filters for Glow Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="glow-green">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong-green">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-white">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feColorMatrix in="coloredBlur" type="matrix" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 1 0" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-golden">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feColorMatrix in="coloredBlur" type="matrix" values="1 0.84 0.22 0 0  1 0.84 0.22 0 0  1 0.84 0.22 0 0  0 0 0 1 0" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated Background Lines - SVG System with Glow */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 1,
          opacity: 0.2,
        }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        {/* Line 1 - Curved path with glow */}
        <path
          ref={(el) => {
            linesRef.current[0] = el
          }}
          d="M 0,200 Q 200,150 400,200 T 800,200 T 1200,200 T 1440,200"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5,10"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 2 - Horizontal with slight curve */}
        <path
          ref={(el) => {
            linesRef.current[1] = el
          }}
          d="M 0,400 Q 360,380 720,400 T 1440,400"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8,15"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 3 - Diagonal */}
        <path
          ref={(el) => {
            linesRef.current[2] = el
          }}
          d="M 0,600 L 1440,550"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 4 - Curved vertical flow */}
        <path
          ref={(el) => {
            linesRef.current[3] = el
          }}
          d="M 200,0 Q 180,200 200,400 T 200,800 T 200,900"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="7,14"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 5 - Horizontal straight */}
        <path
          ref={(el) => {
            linesRef.current[4] = el
          }}
          d="M 0,700 L 1440,700"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="10,20"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 6 - Curved path */}
        <path
          ref={(el) => {
            linesRef.current[5] = el
          }}
          d="M 600,0 Q 620,300 600,600 T 600,900"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 7 - Diagonal curve */}
        <path
          ref={(el) => {
            linesRef.current[6] = el
          }}
          d="M 1000,0 Q 1100,200 1200,400 T 1400,800"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8,16"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Line 8 - Horizontal with multiple curves */}
        <path
          ref={(el) => {
            linesRef.current[7] = el
          }}
          d="M 0,300 Q 300,280 600,300 T 1200,300 T 1440,300"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="9,18"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Additional moving lines for more dynamism */}
        <path
          ref={(el) => {
            linesRef.current[8] = el
          }}
          d="M 400,0 Q 420,450 400,900"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="7,14"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[9] = el
          }}
          d="M 0,500 Q 720,480 1440,500"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8,16"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular paths matching footer style - connecting elements */}
        <path
          ref={(el) => {
            linesRef.current[10] = el
          }}
          d="M 50,750 L 350,750 Q 370,750 370,770 L 370,850 Q 370,870 350,870 L 50,870 Q 30,870 30,850 L 30,770 Q 30,750 50,750 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8,16"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[11] = el
          }}
          d="M 1090,780 L 1390,780 Q 1410,780 1410,800 L 1410,880 Q 1410,900 1390,900 L 1090,900 Q 1070,900 1070,880 L 1070,800 Q 1070,780 1090,780 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Connecting lines that extend to grn2 section */}
        <path
          ref={(el) => {
            linesRef.current[12] = el
          }}
          d="M 200,900 L 200,1100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="7,14"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[13] = el
          }}
          d="M 600,900 L 600,1100"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[14] = el
          }}
          d="M 50,870 L 50,1100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8,16"
          filter="url(#glow-white)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[15] = el
          }}
          d="M 1090,900 L 1090,1100"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />
      </svg>


      {/* Content Container - Centered */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24"
        style={{
          zIndex: 3,
        }}
      >
        {/* Headline with Luxury Font */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-7xl font-light text-center mb-12 max-w-4xl leading-tight"
          style={{
            opacity: 0, // Initial state for animation
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            fontFamily: '"Playfair Display", "Cormorant Garamond", "EB Garamond", "Bodoni Moda", serif',
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          The yard of the future starts today.
        </h1>

        {/* CTA Button with Luxury Typography */}
        <button
          ref={ctaRef}
          onClick={handleCTAClick}
          className="px-8 py-4 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-primary/15 hover:border-primary/30"
          style={{
            opacity: 0, // Initial state for animation
            letterSpacing: '0.15em',
            fontWeight: 300,
            fontFamily: '"Playfair Display", "Cormorant Garamond", "EB Garamond", serif',
            fontStyle: 'normal',
            color: '#FFFFFF',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Green
