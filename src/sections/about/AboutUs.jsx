import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const stepsRef = useRef([])
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Content steps - Minimalist luxury text
  const steps = [
    {
      id: 1,
      title: 'Strategy & Vision',
      description: 'We craft data-driven strategies that align with your long-term vision. Every decision is backed by comprehensive research and market insights.',
    },
    {
      id: 2,
      title: 'System Design',
      description: 'Our team designs scalable systems and architectures that grow with your business. We build robust foundations that support innovation.',
    },
    {
      id: 3,
      title: 'Automation & Intelligence',
      description: 'We implement intelligent automation solutions that streamline operations. AI-powered tools enhance efficiency and accuracy.',
    },
    {
      id: 4,
      title: 'Execution & Optimization',
      description: 'With precision execution, we deploy solutions and continuously optimize performance. Real-time monitoring ensures peak efficiency.',
    },
    {
      id: 5,
      title: 'Scale & Performance',
      description: 'We ensure your systems scale seamlessly as your business grows. Performance optimization guarantees consistent results.',
    },
  ]

  // Video sources for each step - using the three new videos
  const videoSources = [
    '/videos/a-1.mp4',  // Step 1: Strategy & Vision
    '/videos/a-2.mp4',  // Step 2: System Design
    '/videos/a-3.mp4',  // Step 3: Automation & Intelligence
    '/videos/a-1.mp4',  // Step 4: Execution & Optimization
    '/videos/a-2.mp4',  // Step 5: Scale & Performance
  ]

  // ScrollTrigger setup for step activation with smooth animations
  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return

    const section = sectionRef.current
    const steps = stepsRef.current

    // Create ScrollTriggers for each step with smooth transitions
    steps.forEach((stepElement, index) => {
      if (!stepElement) return

      ScrollTrigger.create({
        trigger: stepElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setActiveStep(index)
          updateVideoForStep(index)
        },
        onEnterBack: () => {
          setActiveStep(index)
          updateVideoForStep(index)
        },
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && section.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  // Update video for active step - smooth video transition
  const updateVideoForStep = (stepIndex) => {
    if (!videoRef.current) return

    const video = videoRef.current
    const newVideoSrc = videoSources[stepIndex]
    const currentSrc = video.getAttribute('src') || video.src
    
    // Get the relative path from current source
    const currentPath = currentSrc.includes(window.location.origin) 
      ? currentSrc.replace(window.location.origin, '')
      : currentSrc
    
    // Only change video if it's different
    if (currentPath !== newVideoSrc) {
      // Smooth fade out
      gsap.to(video, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          // Change video source
          video.src = newVideoSrc
          video.load()
          
          // Play and fade in
          video.play().catch(() => {
            // Autoplay might be blocked
          })
          
          gsap.to(video, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          })
        },
      })
    } else {
      // Same video, just ensure it's playing
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay might be blocked
        })
      }
    }
  }

  // Amazing smooth animations for text on step activation
  useEffect(() => {
    stepsRef.current.forEach((stepElement, index) => {
      if (!stepElement) return

      const isActive = index === activeStep

      // Smooth fade and slide animation for entire step
      gsap.to(stepElement, {
        opacity: isActive ? 1 : 0.25,
        y: isActive ? 0 : 20,
        duration: 1.2,
        ease: 'power3.out',
      })

      // Smooth title animation with scale
      const title = stepElement.querySelector('.step-title')
      if (title) {
        gsap.to(title, {
          opacity: isActive ? 1 : 0.4,
          y: isActive ? 0 : 15,
          scale: isActive ? 1 : 0.98,
          duration: 1,
          ease: 'power3.out',
        })
      }

      // Smooth description animation
      const description = stepElement.querySelector('.step-description')
      if (description) {
        gsap.to(description, {
          opacity: isActive ? 0.9 : 0.3,
          y: isActive ? 0 : 10,
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.1,
        })
      }
    })
  }, [activeStep])

  // Initial reveal animation on mount
  useEffect(() => {
    if (!sectionRef.current) return

    const steps = stepsRef.current

    steps.forEach((stepElement, index) => {
      if (!stepElement) return

      // Staggered initial reveal
      gsap.fromTo(
        stepElement,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: index === 0 ? 1 : 0.25,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.15,
        }
      )
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full"
      style={{
        minHeight: '500vh',
        backgroundColor: '#FFFFFF',
        paddingTop: '120px', // Increased to account for navbar and provide spacing
        paddingBottom: '10vh',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT COLUMN: Scrollable Text Steps - Minimalist Luxury */}
          <div className="relative lg:py-20">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepsRef.current[index] = el)}
                className="step-content mb-32 lg:mb-40"
                style={{
                  opacity: index === 0 ? 1 : 0.25,
                  minHeight: '60vh',
                }}
              >
                {/* Step Title - Luxury Typography */}
                <h2
                  className="step-title font-sans text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
                  style={{
                    color: '#0A1B2E',
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  {step.title}
                </h2>

                {/* Step Description - Pleasant, Readable Text */}
                <p
                  className="step-description font-sans text-lg md:text-xl lg:text-2xl leading-relaxed"
                  style={{
                    color: '#7A8CA3',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Premium Sticky Video Container with Custom Mask */}
          <div
            className="relative lg:sticky lg:h-[70vh] h-[50vh]"
            style={{
              position: isMobile ? 'relative' : 'sticky',
              top: isMobile ? 'auto' : '120px', // Increased to account for navbar height
              height: isMobile ? '50vh' : '70vh',
              zIndex: 1, // Ensure it stays below navbar (z-50)
            }}
          >
            {/* SVG Definitions for Custom Mask Shape */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <clipPath id="videoMaskDesktop" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0.05 0 
                       C 0.05 0, 0.05 0.02, 0.08 0.02
                       L 0.85 0.02
                       C 0.88 0.02, 0.90 0.04, 0.92 0.06
                       C 0.94 0.08, 0.96 0.10, 0.97 0.12
                       C 0.98 0.14, 0.99 0.16, 0.99 0.18
                       L 0.99 0.75
                       C 0.99 0.77, 0.98 0.79, 0.97 0.81
                       C 0.96 0.83, 0.94 0.85, 0.92 0.87
                       C 0.90 0.89, 0.88 0.91, 0.85 0.92
                       C 0.82 0.93, 0.80 0.94, 0.78 0.95
                       C 0.76 0.96, 0.74 0.97, 0.72 0.98
                       C 0.70 0.99, 0.68 0.99, 0.66 1
                       L 0.05 1
                       C 0.03 1, 0.02 0.99, 0.01 0.98
                       C 0 0.97, 0 0.95, 0 0.94
                       L 0 0.06
                       C 0 0.04, 0.01 0.02, 0.02 0.01
                       C 0.03 0, 0.04 0, 0.05 0
                       Z"
                  />
                </clipPath>

                <clipPath id="videoMaskMobile" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0.04 0 
                       C 0.04 0, 0.04 0.02, 0.07 0.02
                       L 0.88 0.02
                       C 0.91 0.02, 0.93 0.04, 0.95 0.07
                       C 0.97 0.10, 0.98 0.13, 0.99 0.16
                       L 0.99 0.80
                       C 0.99 0.83, 0.98 0.86, 0.96 0.89
                       C 0.94 0.92, 0.91 0.94, 0.88 0.95
                       C 0.85 0.96, 0.82 0.97, 0.79 0.98
                       C 0.76 0.99, 0.73 0.99, 0.70 1
                       L 0.04 1
                       C 0.02 1, 0.01 0.99, 0.005 0.98
                       C 0 0.97, 0 0.95, 0 0.94
                       L 0 0.06
                       C 0 0.04, 0.01 0.02, 0.02 0.01
                       C 0.03 0, 0.04 0, 0.04 0
                       Z"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* Premium Video Container with Custom Mask */}
            <div
              className="relative w-full h-full"
              style={{
                clipPath: isMobile 
                  ? 'url(#videoMaskMobile)' 
                  : 'url(#videoMaskDesktop)',
                WebkitClipPath: isMobile 
                  ? 'url(#videoMaskMobile)' 
                  : 'url(#videoMaskDesktop)',
                willChange: 'transform, opacity',
              }}
            >
              {/* Video Element - Updates based on active step */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  willChange: 'transform, opacity',
                  filter: 'contrast(1.05) brightness(1.01)',
                  WebkitFilter: 'contrast(1.05) brightness(1.01)',
                  opacity: 1,
                }}
                src={videoSources[0]} // Initial video
              />

              {/* Subtle grain overlay */}
              {!isMobile && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                    opacity: 0.15,
                    zIndex: 1,
                  }}
                />
              )}

              {/* Thin outline stroke */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: '1px solid rgba(10, 27, 46, 0.08)',
                  borderRadius: '0',
                  zIndex: 2,
                  clipPath: isMobile 
                    ? 'url(#videoMaskMobile)' 
                    : 'url(#videoMaskDesktop)',
                  WebkitClipPath: isMobile 
                    ? 'url(#videoMaskMobile)' 
                    : 'url(#videoMaskDesktop)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
