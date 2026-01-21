import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Linkedin, Twitter } from 'lucide-react'

const Grn2 = () => {
  const sectionRef = useRef(null)
  const linesRef = useRef([])

  // Setup background line animations with enhanced movement
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
      const duration = 10 + (index * 1.5) // 10s to 25s range
      const translateX = (index % 2 === 0 ? 1 : -1) * (15 + index * 4) // Increased movement
      const translateY = (index % 3 === 0 ? 1 : -1) * (10 + index * 3)
      const strokeOffset = 60 + index * 25 // More stroke movement
      const rotation = (index % 2 === 0 ? 1 : -1) * (1.5 + index * 0.4) // Subtle rotation
      const scale = 1 + (index % 3) * 0.04 // Subtle scale variation
      const opacityVariation = 0.1 + (index % 3) * 0.03 // More opacity pulse

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

      // Separate glow pulse animation
      const glowTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      glowTl.to(line, {
        opacity: 0.6 + opacityVariation, // Enhanced glow pulse
        duration: duration * 0.8,
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
        y: `+=${(index % 4) * 4 + 8}`,
        duration: duration * 1.3,
        ease: 'sine.inOut',
      })

      return { main: mainTl, glow: glowTl, float: floatTl, pulse: pulseTl }
    }).filter(Boolean)

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
    <footer
      ref={sectionRef}
      id="footer"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#000000', // Black background
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative',
      }}
    >
      {/* SVG Filters for Glow Effect - matching green section */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="glow-footer">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong-footer">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-white-footer">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feColorMatrix in="coloredBlur" type="matrix" values="1 1 1 0 0  1 1 1 0 0  1 1 1 0 0  0 0 0 1 0" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-golden-footer">
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

      {/* Animated Background Lines - Rounded Schematic Shapes with matching style */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.2, // Matching green section opacity
        }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        {/* Connecting lines from green section - continue from y=900 */}
        <path
          ref={(el) => {
            linesRef.current[0] = el
          }}
          d="M 200,0 L 200,100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="7,14"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[1] = el
          }}
          d="M 600,0 L 600,100"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[2] = el
          }}
          d="M 50,0 L 50,100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8,16"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[3] = el
          }}
          d="M 1090,0 L 1090,100"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular path 1 - Top left - continues from green section */}
        <path
          ref={(el) => {
            linesRef.current[4] = el
          }}
          d="M 50,50 L 350,50 Q 370,50 370,70 L 370,200 Q 370,220 350,220 L 50,220 Q 30,220 30,200 L 30,70 Q 30,50 50,50 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8,16"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular path 2 - Top right */}
        <path
          ref={(el) => {
            linesRef.current[5] = el
          }}
          d="M 1090,80 L 1390,80 Q 1410,80 1410,100 L 1410,180 Q 1410,200 1390,200 L 1090,200 Q 1070,200 1070,180 L 1070,100 Q 1070,80 1090,80 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular path 3 - Middle left */}
        <path
          ref={(el) => {
            linesRef.current[6] = el
          }}
          d="M 80,280 L 380,280 Q 400,280 400,300 L 400,420 Q 400,440 380,440 L 80,440 Q 60,440 60,420 L 60,300 Q 60,280 80,280 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="7,14"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular path 4 - Middle center */}
        <path
          ref={(el) => {
            linesRef.current[7] = el
          }}
          d="M 600,250 L 900,250 Q 920,250 920,270 L 920,380 Q 920,400 900,400 L 600,400 Q 580,400 580,380 L 580,270 Q 580,250 600,250 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="9,18"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Rounded rectangular path 5 - Bottom right */}
        <path
          ref={(el) => {
            linesRef.current[8] = el
          }}
          d="M 1120,350 L 1420,350 Q 1440,350 1440,370 L 1440,520 Q 1440,540 1420,540 L 1120,540 Q 1100,540 1100,520 L 1100,370 Q 1100,350 1120,350 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10,20"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Curved connecting line 1 */}
        <path
          ref={(el) => {
            linesRef.current[9] = el
          }}
          d="M 400,140 Q 500,160 600,140 T 800,140"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="5,10"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Curved connecting line 2 */}
        <path
          ref={(el) => {
            linesRef.current[10] = el
          }}
          d="M 920,325 Q 1000,340 1080,325"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Horizontal line 1 */}
        <path
          ref={(el) => {
            linesRef.current[11] = el
          }}
          d="M 450,500 L 1000,500"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="8,16"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        {/* Additional curved lines matching green section style */}
        <path
          ref={(el) => {
            linesRef.current[12] = el
          }}
          d="M 0,100 Q 360,80 720,100 T 1440,100"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8,15"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[13] = el
          }}
          d="M 200,0 Q 180,150 200,300 T 200,600"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="7,14"
          filter="url(#glow-white-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />

        <path
          ref={(el) => {
            linesRef.current[14] = el
          }}
          d="M 600,0 Q 620,200 600,400 T 600,600"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6,12"
          filter="url(#glow-golden-footer)"
          style={{
            willChange: 'transform, stroke-dashoffset, opacity',
          }}
        />
      </svg>

      {/* Content Container */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
        style={{
          zIndex: 2,
        }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
          {/* LEFT COLUMN - Brand & Gartner */}
          <div className="flex flex-col flex-1">
            {/* Brand Logo */}
            <div className="mb-6">
              <div
                className="text-2xl font-mono font-bold"
                style={{
                  color: '#D4AF37', // Golden accent for logo
                  letterSpacing: '0.1em',
                }}
              >
                PINAKKAA
              </div>
            </div>

            {/* Gartner Heading */}
            <h3
              className="font-sans text-xl font-semibold mb-4"
              style={{
                color: '#FFFFFF',
                letterSpacing: '0.05em',
              }}
            >
              Gartner
            </h3>

            {/* Supporting Text */}
            <div className="space-y-2">
              <p
                className="font-sans text-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                }}
              >
                2025 Market Guide
              </p>
              <p
                className="font-sans text-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                }}
              >
                Yard Management
              </p>
              <p
                className="font-sans text-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                }}
              >
                Featured Vendor
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN - Technology & Company */}
          <div className="flex flex-row gap-12 md:gap-16 lg:gap-12 flex-1">
            {/* GROUP 1 - TECHNOLOGY */}
            <div className="flex flex-col">
              <h4
                className="font-sans text-xs uppercase mb-6"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                }}
              >
                TECHNOLOGY
              </h4>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  Homepage
                </a>
                <a
                  href="#"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  Yard Operating System
                </a>
                <a
                  href="#"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  The Agentic AI Yard
                </a>
              </nav>
            </div>

            {/* GROUP 2 - COMPANY */}
            <div className="flex flex-col">
              <h4
                className="font-sans text-xs uppercase mb-6"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                }}
              >
                COMPANY
              </h4>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  About
                </a>
                <a
                  href="#"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  Resources
                </a>
                <a
                  href="/contact"
                  className="font-sans text-sm transition-opacity duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1'
                  }}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN - Reach Us */}
          <div className="flex flex-col flex-1">
            <h4
              className="font-sans text-xs uppercase mb-6"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                letterSpacing: '0.15em',
                fontWeight: 500,
              }}
            >
              REACH US
            </h4>

            {/* Headline */}
            <h3
              className="font-sans text-xl font-light mb-3"
              style={{
                color: '#FFFFFF',
                lineHeight: 1.3,
                marginBottom: '12px',
              }}
            >
              Ready for your yard of the future?
            </h3>

            {/* Supporting Line */}
            <p
              className="font-sans text-sm mb-8"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Connect with our experts today.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300"
                style={{
                  color: '#FFFFFF',
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8'
                }}
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300"
                style={{
                  color: '#FFFFFF',
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8'
                }}
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright / Divider */}
        <div
          className="mt-16 pt-8 border-t"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '64px',
            paddingTop: '32px',
          }}
        >
          <p
            className="font-sans text-xs text-center"
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '0.05em',
            }}
          >
            © 2025 Pinakkaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Grn2
