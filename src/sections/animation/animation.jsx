import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Animation = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const gridSecondaryRef = useRef(null)
  const glowingGridRef = useRef(null)
  const backgroundOverlayRef = useRef(null)
  const timelineRef = useRef(null)
  const lettersRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !gridRef.current || !gridSecondaryRef.current || !backgroundOverlayRef.current || !glowingGridRef.current) return

    const section = sectionRef.current
    const container = containerRef.current
    const grid = gridRef.current
    const gridSecondary = gridSecondaryRef.current
    const glowingGrid = glowingGridRef.current
    const backgroundOverlay = backgroundOverlayRef.current

    let isMounted = true
    let scrollTriggerInstance = null

    try {
      // Clear container
      container.innerHTML = ''

      // Full text
      const fullText = 'We Build Your Future'
      
      // Create letter elements - all on same baseline
      const letterElements = []
      fullText.split('').forEach((char, index) => {
        const letterEl = document.createElement('span')
        letterEl.className = 'letter'
        letterEl.textContent = char === ' ' ? '\u00A0' : char
        letterEl.style.display = 'inline-block'
        letterEl.style.willChange = 'transform, opacity, filter'
        letterEl.style.verticalAlign = 'baseline'
        letterEl.style.transformOrigin = 'center center'
        letterEl.style.transformStyle = 'preserve-3d'
        letterEl.style.color = '#0A1B2E' // Dark text for white background initially
        letterEl.style.opacity = '1' // Ensure initial opacity
        letterEl.style.visibility = 'visible' // Ensure visibility
        letterEl.style.textShadow = '0 0 0 rgba(0,0,0,0)' // Initial shadow for glow effect
        letterEl.dataset.index = index
        
        container.appendChild(letterEl)
        letterElements.push(letterEl)
      })

      // Store references
      lettersRef.current = letterElements
      
      // Force a reflow to ensure letters are rendered
      container.offsetHeight

      // Wait for layout, then calculate positions
      const initAnimation = () => {
        if (!isMounted || !sectionRef.current || !containerRef.current) return

        try {
          const containerRect = container.getBoundingClientRect()
          if (!containerRect.width || !containerRect.height) {
            requestAnimationFrame(initAnimation)
            return
          }

          const centerX = containerRect.width / 2
          const viewportHeight = window.innerHeight

          // Get initial positions once
          const letterPositions = letterElements.map((letter) => {
            const rect = letter.getBoundingClientRect()
            return {
              element: letter,
              initialX: rect.left - containerRect.left + rect.width / 2,
              char: letter.textContent.trim(),
            }
          })

          // Separate letters into groups
          const allLetters = letterElements.filter(el => el.textContent.trim() !== '')

          // Color definitions - dynamic based on background
          const colors = {
            dark: '#0A1B2E', // Dark text for white background
            light: '#EAF0F6', // Light text for black background
            accent: '#2F80ED', // Electric blue accent
            white: '#FFFFFF',
            black: '#000000',
          }

          // Initial state - All letters visible with smooth styling
          gsap.set(allLetters, {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            rotationY: 0,
            rotationX: 0,
            z: 0,
            color: colors.dark, // Dark text for white background
            filter: 'blur(0px)',
          })
          
          // Set initial background overlay (white)
          gsap.set(backgroundOverlay, {
            backgroundColor: '#FFFFFF',
            opacity: 1,
          })
          
          // Set initial section opacity
          gsap.set(section, {
            opacity: 1,
          })
          
          gsap.set(container, {
            opacity: 1,
          })
          
          // Set initial glowing grid state
          if (glowingGrid) {
            gsap.set(glowingGrid, {
              opacity: 1,
            })
          }

          // Set initial container letter spacing
          gsap.set(container, {
            letterSpacing: '0.1em',
          })

          // Create master timeline with optimized ScrollTrigger
          // Animation includes: white → black → white background transitions + smooth letter animations
          const phase1Duration = 0.75 // White to black - Reduced from 1.0
          const phase2Duration = 0.75 // Black to white - Reduced from 1.0
          const phase3Duration = 0.6 // Final fade - Reduced from 0.8
          const totalDuration = phase1Duration + phase2Duration + phase3Duration
          // Scroll distance matches the complete timeline end - Reduced
          const scrollDistance = viewportHeight * 2.8 // Reduced from 3.5
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: `+=${scrollDistance}`, // Animation ends when brown fade completes
              scrub: 0.3, // Smoother scrub value (reduced from 0.5)
              pin: true,
              anticipatePin: 1,
              pinSpacing: true,
              invalidateOnRefresh: true,
              markers: false,
              onEnter: () => {
                // Ensure animation starts
                if (tl) {
                  tl.play()
                }
              },
            },
          })

          scrollTriggerInstance = tl.scrollTrigger
          
          // Refresh ScrollTrigger to ensure it's properly initialized
          ScrollTrigger.refresh()

          // ============================================
          // PHASE 1: WHITE → BLACK BACKGROUND TRANSITION
          // ============================================
          const phase1Start = 0
          
          // Background: White to Black - Smoother transition
          tl.to(
            backgroundOverlay,
            {
              backgroundColor: '#000000',
              duration: phase1Duration,
              ease: 'power1.inOut', // Smoother easing
            },
            phase1Start
          )
          
          // Text color: Dark to Light (for visibility on black) - Smoother transition
          tl.to(
            allLetters,
            {
              color: colors.light,
              duration: phase1Duration,
              ease: 'power1.inOut', // Smoother easing
            },
            phase1Start
          )
          
          // SMOOTH LETTER ANIMATION - Wave effect
          letterPositions.forEach((pos, index) => {
            if (pos.char !== '' && pos.element && isMounted) {
              const waveOffset = (index / letterPositions.length) * Math.PI * 2
              const waveAmplitude = 20
              
              // Smooth wave motion - Faster stagger
              tl.to(
                pos.element,
                {
                  y: Math.sin(waveOffset) * waveAmplitude,
                  scale: 0.95 + Math.sin(waveOffset) * 0.05,
                  rotation: Math.sin(waveOffset) * 3,
                  duration: phase1Duration,
                  ease: 'power1.inOut', // Smoother easing
                },
                phase1Start + (index * 0.015) // Reduced stagger delay
              )
            }
          })
          
          // Container: Smooth letter spacing adjustment
          tl.to(
            container,
            {
              letterSpacing: '0.08em',
              duration: phase1Duration,
              ease: 'power1.inOut', // Smoother easing
            },
            phase1Start
          )
          
          // ============================================
          // PHASE 2: BLACK → WHITE BACKGROUND TRANSITION
          // ============================================
          const phase2Start = phase1Start + phase1Duration
          
          // Background: Black to White - Smoother transition
          tl.to(
            backgroundOverlay,
            {
              backgroundColor: '#FFFFFF',
              duration: phase2Duration,
              ease: 'power1.inOut', // Smoother easing
            },
            phase2Start
          )
          
          // Text color: Light to Dark (for visibility on white) - Smoother transition
          tl.to(
            allLetters,
            {
              color: colors.dark,
              duration: phase2Duration,
              ease: 'power1.inOut', // Smoother easing
            },
            phase2Start
          )
          
          // SMOOTH LETTER ANIMATION - Compression and expansion
          letterPositions.forEach((pos, index) => {
            if (pos.char !== '' && pos.element && isMounted) {
              const distanceToCenter = centerX - pos.initialX
              const compressionAmount = distanceToCenter * 0.3
              
              // Smooth compression toward center - Faster stagger
              tl.to(
                pos.element,
                {
                  x: compressionAmount,
                  y: 0,
                  scale: 0.9,
                  rotation: 0,
                  rotationY: 0,
                  duration: phase2Duration * 0.6,
                  ease: 'power1.inOut', // Smoother easing
                },
                phase2Start + (index * 0.01) // Reduced stagger delay
              )
              
              // Then expand back with slight overshoot - Smoother
              tl.to(
                pos.element,
                {
                  x: compressionAmount * 0.5,
                  scale: 1.05,
                  duration: phase2Duration * 0.4,
                  ease: 'power2.out', // Smoother than back.out
                },
                phase2Start + (phase2Duration * 0.6) + (index * 0.008) // Reduced stagger delay
              )
            }
          })
          
          // Container: Letter spacing compression and release - Smoother
          tl.to(
            container,
            {
              letterSpacing: '0.04em',
              duration: phase2Duration * 0.6,
              ease: 'power1.inOut', // Smoother easing
            },
            phase2Start
          )
          
          tl.to(
            container,
            {
              letterSpacing: '0.06em',
              duration: phase2Duration * 0.4,
              ease: 'power2.out', // Smoother than back.out
            },
            phase2Start + (phase2Duration * 0.6)
          )
          
          // ============================================
          // PHASE 3: FINAL SMOOTH SETTLE & FADE
          // ============================================
          const phase3Start = phase2Start + phase2Duration
          
          // Final smooth settle - all letters return to center - Faster stagger
          letterPositions.forEach((pos, index) => {
            if (pos.char !== '' && pos.element && isMounted) {
              tl.to(
                pos.element,
                {
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  rotationY: 0,
                  textShadow: '0 0 30px rgba(10, 27, 46, 0.2)',
                  duration: phase3Duration,
                  ease: 'power2.out', // Smoother easing
                },
                phase3Start + (index * 0.008) // Reduced stagger delay
              )
            }
          })
          
          // Container: Final letter spacing - Smoother
          tl.to(
            container,
            {
              letterSpacing: '0.1em',
              duration: phase3Duration,
              ease: 'power2.out', // Smoother easing
            },
            phase3Start
          )
          
          // Subtle fade effect on section - Smoother
          tl.to(
            section,
            {
              opacity: 0.98,
              duration: phase3Duration * 0.5,
              ease: 'power1.out', // Smoother easing
            },
            phase3Start + (phase3Duration * 0.5)
          )

          // GLOWING GRID ANIMATION - Always visible with pulsing glow
          if (glowingGrid) {
            // Pulsing glow effect - oscillates throughout animation - Smoother
            tl.to(
              glowingGrid,
              {
                opacity: 0.7,
                filter: 'blur(0.5px) brightness(1.1)',
                duration: totalDuration * 0.25,
                ease: 'power1.inOut', // Smoother easing
              },
              0
            )
            
            tl.to(
              glowingGrid,
              {
                opacity: 1,
                filter: 'blur(0.5px) brightness(1.3)',
                duration: totalDuration * 0.25,
                ease: 'power1.inOut', // Smoother easing
              },
              totalDuration * 0.25
            )
            
            tl.to(
              glowingGrid,
              {
                opacity: 0.7,
                filter: 'blur(0.5px) brightness(1.1)',
                duration: totalDuration * 0.25,
                ease: 'power1.inOut', // Smoother easing
              },
              totalDuration * 0.5
            )
            
            tl.to(
              glowingGrid,
              {
                opacity: 1,
                filter: 'blur(0.5px) brightness(1.3)',
                duration: totalDuration * 0.25,
                ease: 'power1.inOut', // Smoother easing
              },
              totalDuration * 0.75
            )
            
            // Subtle color shift to adapt to background
            tl.to(
              glowingGrid,
              {
                backgroundImage: `
                  linear-gradient(rgba(47, 128, 237, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(47, 128, 237, 0.4) 1px, transparent 1px)
                `,
                boxShadow: `
                  inset 0 0 200px rgba(47, 128, 237, 0.15),
                  inset 0 0 100px rgba(47, 128, 237, 0.08)
                `,
                duration: phase1Duration,
                ease: 'sine.inOut',
              },
              phase1Start
            )
            
            tl.to(
              glowingGrid,
              {
                backgroundImage: `
                  linear-gradient(rgba(47, 128, 237, 0.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(47, 128, 237, 0.25) 1px, transparent 1px)
                `,
                boxShadow: `
                  inset 0 0 200px rgba(47, 128, 237, 0.1),
                  inset 0 0 100px rgba(47, 128, 237, 0.05)
                `,
                duration: phase2Duration,
                ease: 'sine.inOut',
              },
              phase2Start
            )
          }

          // SMOOTH GRID ANIMATION - Adapts to background color
          if (grid) {
            // Primary grid - opacity and color changes with background
            // Phase 1: White to Black - grid becomes more visible - Smoother
            tl.to(
              grid,
              {
                opacity: 0.5, // More visible on black
                x: 5,
                y: 3,
                backgroundImage: `
                  linear-gradient(rgba(234, 240, 246, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(234, 240, 246, 0.15) 1px, transparent 1px)
                `,
                duration: phase1Duration,
                ease: 'power1.inOut', // Smoother easing
              },
              phase1Start
            )
            
            // Phase 2: Black to White - grid becomes subtle again - Smoother
            tl.to(
              grid,
              {
                opacity: 0.15, // Subtle on white
                backgroundImage: `
                  linear-gradient(rgba(10, 27, 46, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(10, 27, 46, 0.1) 1px, transparent 1px)
                `,
                duration: phase2Duration,
                ease: 'power1.inOut', // Smoother easing
              },
              phase2Start
            )
          }

          if (gridSecondary) {
            // Secondary grid - counter movement
            // Phase 1: White to Black - Smoother
            tl.to(
              gridSecondary,
              {
                opacity: 0.3,
                x: -4,
                y: -2,
                backgroundImage: `
                  linear-gradient(rgba(234, 240, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(234, 240, 246, 0.1) 1px, transparent 1px)
                `,
                duration: phase1Duration,
                ease: 'power1.inOut', // Smoother easing
              },
              phase1Start
            )
            
            // Phase 2: Black to White - Smoother
            tl.to(
              gridSecondary,
              {
                opacity: 0.1,
                backgroundImage: `
                  linear-gradient(rgba(10, 27, 46, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(10, 27, 46, 0.08) 1px, transparent 1px)
                `,
                duration: phase2Duration,
                ease: 'power1.inOut', // Smoother easing
              },
              phase2Start
            )
          }

          // Store timeline reference
          timelineRef.current = tl
          
          // Refresh ScrollTrigger after timeline is complete to ensure it's active
          setTimeout(() => {
            ScrollTrigger.refresh()
          }, 50)
        } catch (error) {
          console.error('Animation initialization error:', error)
        }
      }

      // Use requestAnimationFrame for better timing - ensure DOM is ready
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(initAnimation)
        })
      }, 100)
      
      // Cleanup function
      return () => {
        clearTimeout(timeoutId)
        isMounted = false
        
        try {
          if (timelineRef.current) {
            timelineRef.current.kill()
            timelineRef.current = null
          }

          if (scrollTriggerInstance) {
            scrollTriggerInstance.kill()
            scrollTriggerInstance = null
          }

          ScrollTrigger.getAll().forEach(trigger => {
            try {
              if (trigger.vars?.trigger && section?.contains(trigger.vars.trigger)) {
                trigger.kill()
              }
            } catch (e) {
              // Ignore cleanup errors
            }
          })

          lettersRef.current.forEach(letter => {
            try {
              if (letter) {
                gsap.killTweensOf(letter)
              }
            } catch (e) {
              // Ignore cleanup errors
            }
          })

          lettersRef.current = []
        } catch (error) {
          console.error('Cleanup error:', error)
        }
      }
    } catch (error) {
      console.error('Animation setup error:', error)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="animation"
      className="relative w-full flex items-center justify-center"
      style={{
        height: '100vh',
        backgroundColor: '#FFFFFF', // Base white background
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        perspective: '1000px', // Enable 3D transforms
      }}
    >
      {/* Background Color Overlay - Transitions: White → Black → White */}
      <div
        ref={backgroundOverlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundColor: '#FFFFFF',
          willChange: 'background-color',
          transition: 'background-color 0.3s ease',
        }}
      />

      {/* Primary Grid Background - Adapts to background */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(rgba(10, 27, 46, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 27, 46, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          willChange: 'transform, opacity',
        }}
      />

      {/* Secondary Grid Background - Depth Layer */}
      <div
        ref={gridSecondaryRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(rgba(10, 27, 46, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 27, 46, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          willChange: 'transform, opacity',
        }}
      />

      {/* Glowing Grid Background - Always Visible */}
      <div
        ref={glowingGridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          opacity: 1,
          backgroundImage: `
            linear-gradient(rgba(47, 128, 237, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47, 128, 237, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          filter: 'blur(0.5px)',
          boxShadow: `
            inset 0 0 200px rgba(47, 128, 237, 0.1),
            inset 0 0 100px rgba(47, 128, 237, 0.05)
          `,
          willChange: 'opacity',
        }}
      />

      {/* Container for animated text */}
      <div
        ref={containerRef}
        className="text-center"
        style={{
          fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: 'clamp(3rem, 8vw, 10rem)',
          fontWeight: 400,
          letterSpacing: '0.1em',
          color: '#0A1B2E',
          lineHeight: 1.2,
          willChange: 'transform',
          zIndex: 1,
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Letters will be dynamically inserted here */}
      </div>
    </section>
  )
}

export default Animation
