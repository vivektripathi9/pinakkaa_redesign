import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

/**
 * Premium Curved Section Divider with Scroll Animation
 * 
 * Features:
 * - Video background in dark section
 * - SVG curve morphs to straight line on scroll
 * - Sharp, hard edges (no blur, no gradients)
 * - Proper structure and spacing
 * 
 * @param {string} position - 'top' or 'bottom' (default: 'bottom')
 * @param {string} direction - 'dark-to-light' or 'light-to-dark' (default: 'dark-to-light')
 * @param {boolean} withGrid - Show grid pattern on dark side (default: true)
 * @param {boolean} withIndicator - Show accent indicator (default: true)
 * @param {string} videoSrc - Video source path (optional)
 */
const SectionDivider = ({ 
  position = 'bottom', 
  direction = 'dark-to-light',
  withGrid = true,
  withIndicator = true
}) => {
  const dividerRef = useRef(null)
  const pathRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [])

  // Determine colors based on direction - exact color match
  const isDarkToLight = direction === 'dark-to-light'
  const darkColor = '#0A1B2E' // Primary - Midnight Navy
  const lightColor = '#FFFFFF' // Pure white
  
  // Fill color matches the NEXT section (the one below/after the divider)
  const fillColor = isDarkToLight ? lightColor : darkColor
  
  // Invert curve for top placement
  const invertCurve = position === 'top'

  // Define curved and straight paths
  // Curved path: subtle organic curve matching reference image
  // Left: concave curve, Center: straight, Right: convex/rounded
  const curvedPath = invertCurve 
    ? `M 0,200 
       C 180,190 280,170 420,150
       L 1020,150
       C 1160,170 1260,190 1320,195
       Q 1380,198 1440,200
       L 1440,0
       L 0,0
       Z`
    : `M 0,0 
       C 180,10 280,30 420,50
       L 1020,50
       C 1160,30 1260,10 1320,5
       Q 1380,2 1440,0
       L 1440,200
       L 0,200
       Z`

  // Straight path: horizontal line
  const straightPath = invertCurve
    ? `M 0,200 
       L 1440,200
       L 1440,0
       L 0,0
       Z`
    : `M 0,0 
       L 1440,0
       L 1440,200
       L 0,200
       Z`

  // SVG Path Morphing Animation with ScrollTrigger
  useEffect(() => {
    if (!pathRef.current || isMobile || prefersReducedMotion) return

    // Create a timeline for path morphing
    const morphAnimation = gsap.timeline({
      paused: true,
    })

    // Use GSAP's built-in path morphing
    // We'll manually interpolate between the two paths
    const pathElement = pathRef.current
    
    ScrollTrigger.create({
      trigger: dividerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress
        
        // Interpolate between curved and straight path
        // At progress 0: curved path
        // At progress 1: straight path
        const interpolatedPath = interpolatePath(curvedPath, straightPath, progress)
        pathElement.setAttribute('d', interpolatedPath)
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === dividerRef.current) {
          trigger.kill()
        }
      })
    }
  }, [isMobile, prefersReducedMotion, invertCurve])

  // Path interpolation function - smooth morphing between curved and straight
  const interpolatePath = (path1, path2, t) => {
    // Clamp t between 0 and 1
    t = Math.max(0, Math.min(1, t))
    
    // Ease function for smoother animation (ease-in-out)
    const easeT = t < 0.5 
      ? 2 * t * t  // Ease in
      : 1 - Math.pow(-2 * t + 2, 2) / 2  // Ease out
    
    if (invertCurve) {
      // Inverted curve: morph from curved to straight (Y: 200)
      const leftY1 = 190 + (200 - 190) * easeT
      const leftY2 = 170 + (200 - 170) * easeT
      const leftY3 = 150 + (200 - 150) * easeT
      const rightY1 = 170 + (200 - 170) * easeT
      const rightY2 = 190 + (200 - 190) * easeT
      const rightY3 = 195 + (200 - 195) * easeT
      const rightQuadY = 198 + (200 - 198) * easeT
      
      return `M 0,200 
              C 180,${leftY1} 280,${leftY2} 420,${leftY3}
              L 1020,${leftY3}
              C 1160,${rightY1} 1260,${rightY2} 1320,${rightY3}
              Q 1380,${rightQuadY} 1440,200
              L 1440,0
              L 0,0
              Z`
    } else {
      // Normal curve: morph from curved to straight (Y: 0)
      const leftY1 = 10 - (10 - 0) * easeT
      const leftY2 = 30 - (30 - 0) * easeT
      const leftY3 = 50 - (50 - 0) * easeT
      const rightY1 = 30 - (30 - 0) * easeT
      const rightY2 = 10 - (10 - 0) * easeT
      const rightY3 = 5 - (5 - 0) * easeT
      const rightQuadY = 2 - (2 - 0) * easeT
      
      return `M 0,0 
              C 180,${leftY1} 280,${leftY2} 420,${leftY3}
              L 1020,${leftY3}
              C 1160,${rightY1} 1260,${rightY2} 1320,${rightY3}
              Q 1380,${rightQuadY} 1440,0
              L 1440,200
              L 0,200
              Z`
    }
  }

  return (
    <div 
      ref={dividerRef}
      className="relative w-full overflow-hidden"
      style={{ 
        backgroundColor: fillColor, // Match next section background to prevent gaps
        zIndex: 3, // Above video, below content
        height: 'clamp(80px, 12vw, 160px)', // Responsive height: smaller on mobile
        minHeight: '80px',
        marginTop: 0, // Remove any default margin
        marginBottom: 0, // Remove any default margin
        // Smooth rendering properties
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)', // Force GPU acceleration for smooth rendering
      }}
    >
      {/* 
        NOTE: Video is NOT rendered here
        The video from Hero section extends behind this divider
        This divider acts as a visual mask/edge only
        Container is transparent to reveal video behind
      */}

      {/* Grid Pattern Overlay removed to prevent blue space */}

      {/* Dark Overlay removed to prevent blue space between sections */}

      {/* 
        Sharp Curved SVG Divider - Hard Edge, No Gradient
        This SVG acts as a visual mask/edge that reveals the video behind it
        The video from Hero section extends continuously behind this divider
        Fill color exactly matches Services section for seamless transition
      */}
      <svg
        className="relative w-full section-divider-svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ 
          height: '100%',
          display: 'block',
          zIndex: 2, // Above overlays, reveals video behind
          shapeRendering: 'geometricPrecision', // Smooth rendering
        }}
      >
        {/* 
          SVG Path that morphs from curved to straight on scroll
          - Curved: Shallow bezier curve (5-8% depth)
          - Straight: Horizontal line
          - Hard edge - no gradients, no blur
          - Animation controlled by GSAP ScrollTrigger
          - Fill color: Pure white (#FFFFFF) matching Services section exactly
        */}
        <path
          ref={pathRef}
          d={curvedPath}
          fill={fillColor}
          className="section-divider-path"
          style={{
            fill: fillColor, // Explicit fill - pure white (#FFFFFF) for smooth transition
            shapeRendering: 'geometricPrecision', // Anti-aliasing for smooth edges
          }}
        />
      </svg>

      {/* Accent Indicator (small vertical line) */}
      {withIndicator && (
        <div 
          className={`absolute ${position === 'top' ? 'top-1/2' : 'bottom-1/2'} right-1/3 w-0.5 h-16 md:h-20 bg-accent`}
          style={{
            zIndex: 3,
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </div>
  )
}

export default SectionDivider
