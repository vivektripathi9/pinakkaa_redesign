import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Add luxury font styles
const luxuryFontStyle = {
  fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', serif",
  fontWeight: 400,
  letterSpacing: '-0.01em',
}

const Portfolio = () => {
  const sectionRef = useRef(null)
  const logosRef = useRef([])
  const glowingGridRef = useRef(null)

  // Brand logos - 6 logos only
  const brandLogos = [
    { id: 1, name: 'Zune', logo: '/logos/zune.svg' },
    { id: 2, name: 'HB Torshavn', logo: '/logos/hb-torshavn.svg' },
    { id: 3, name: 'Eva Pollena', logo: '/logos/eva-pollena.svg' },
    { id: 4, name: 'Eva', logo: '/logos/eva.svg' },
    { id: 5, name: 'Bekins', logo: '/logos/bekins.svg' },
    { id: 6, name: 'Ceska Kooperativa', logo: '/logos/ceska-kooperativa.svg' },
  ]

  // Smooth glowing grid animation - Optimized for performance
  useEffect(() => {
    if (!glowingGridRef.current) return

    const grid = glowingGridRef.current

    // Use CSS custom properties for smoother animations
    grid.style.setProperty('--glow-opacity', '0.85')
    grid.style.setProperty('--glow-brightness', '1.5')

    // Continuous pulsing glow animation - optimized with will-change
    const glowTimeline = gsap.timeline({ repeat: -1, yoyo: true })
    
    // Main glow pulse - Grid lines with smoother animation
    glowTimeline.to(grid, {
      opacity: 1,
      filter: 'brightness(1.8) drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))',
      duration: 3,
      ease: 'sine.inOut',
    })
    .to(grid, {
      opacity: 0.75,
      filter: 'brightness(1.3) drop-shadow(0 0 4px rgba(255, 215, 0, 0.4))',
      duration: 3,
      ease: 'sine.inOut',
    })

    return () => {
      glowTimeline.kill()
      gsap.killTweensOf(grid)
    }
  }, [])

  // Smooth fade-in animation on scroll
  useEffect(() => {
    if (!sectionRef.current) return

    const logos = logosRef.current.filter(Boolean)

    if (logos.length === 0) return

    // Set initial state
    gsap.set(logos, {
      opacity: 0,
      y: 30,
      scale: 0.95,
    })

    // Create scroll-triggered animation with proper ScrollTrigger syntax
    logos.forEach((logo, index) => {
      ScrollTrigger.create({
        trigger: logo,
        start: 'top 85%',
        end: 'top 50%',
        onEnter: () => {
          gsap.to(logo, {
            opacity: 0.65,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.08,
          })
        },
        once: true,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger && sectionRef.current?.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glowing Golden Grid Lines Only - Animated - Primary Layer with Enhanced Glow */}
      <div
        ref={glowingGridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.85,
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          filter: 'brightness(1.5) drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))',
          willChange: 'opacity, filter',
          boxShadow: 'inset 0 0 100px rgba(255, 215, 0, 0.1)',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
      />
      
      {/* Additional glow layer for extra depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.4,
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          filter: 'blur(1px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Supporting Text - Luxury Font */}
        <div className="text-center mb-6">
          <p
            className="text-sm md:text-base"
            style={{
              ...luxuryFontStyle,
              color: '#7A8CA3',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Trusted by industry leaders
          </p>
        </div>

        {/* Large Headline - Luxury Font */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              ...luxuryFontStyle,
              color: '#0A1B2E',
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Setting the standard
            <br />
            in the yard
          </h2>
        </div>

        {/* Logo Grid - 6 logos: 2 cols mobile, 3 cols tablet, 3 cols desktop - Aligned with grid boxes */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center"
          style={{
            gridAutoRows: 'minmax(180px, auto)',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 60px', // Match grid spacing to align logos with grid boxes
            position: 'relative',
          }}
        >
          {brandLogos.map((brand, index) => (
            <div
              key={brand.id}
              ref={(el) => {
                logosRef.current[index] = el
              }}
              className="logo-item flex items-center justify-center"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '180px', // Increased to accommodate larger logos
                padding: '40px',
                opacity: 0.65,
                cursor: 'default',
                filter: 'grayscale(100%) brightness(0.5)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                willChange: 'opacity, transform, filter',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  opacity: 0.9,
                  scale: 1.05,
                  filter: 'grayscale(50%) brightness(0.7)',
                  duration: 0.4,
                  ease: 'power2.out',
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  opacity: 0.65,
                  scale: 1,
                  filter: 'grayscale(100%) brightness(0.5)',
                  duration: 0.4,
                  ease: 'power2.out',
                })
              }}
            >
              {/* Logo Image - Centered in grid cell - Increased size */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '120px', // Increased from 70px to 120px
                  display: 'block',
                  margin: '0 auto',
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
