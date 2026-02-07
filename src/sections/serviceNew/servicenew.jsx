import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: 'WEBSITE DESIGNING',
    description: 'Custom, responsive websites that convert visitors into customers. Modern design meets functionality.',
    specs: ['Responsive Design', 'UI/UX Excellence', 'Performance Optimized'],
  },
  {
    id: 2,
    title: 'SEO & DIGITAL MARKETING',
    description: 'Data-driven SEO strategies and digital marketing campaigns that drive organic growth and visibility.',
    specs: ['SEO Optimization', 'Content Marketing', 'Analytics & Reporting'],
  },
  {
    id: 3,
    title: 'SOCIAL MEDIA OPTIMIZATION & MANAGEMENT',
    description: 'Strategic social media management that builds your brand and engages your audience effectively.',
    specs: ['Content Strategy', 'Community Management', 'Social Advertising'],
  },
  {
    id: 4,
    title: 'BRANDING, ADS & E-COMMERCE',
    description: 'Complete branding solutions, targeted advertising, and robust e-commerce platforms for business growth.',
    specs: ['Brand Identity', 'Paid Advertising', 'E-commerce Solutions'],
  },
]

const ServiceNew = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const introRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const exploreButtonRef = useRef(null)
  const servicesRef = useRef([])
  const titleWordsRef = useRef([])
  const dividerRefs = useRef([])
  const specsRefs = useRef([])
  const [activeService, setActiveService] = useState(0)
  const gridRef = useRef(null)

  // Enhanced intro animations with staggered word reveal - Title appears first
  useEffect(() => {
    if (!titleRef.current) return

    // Show intro section immediately
    if (introRef.current) {
      gsap.to(introRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    // Set grid columns based on screen size
    const updateGridColumns = () => {
      if (gridRef.current) {
        if (window.innerWidth >= 1024) {
          gridRef.current.style.gridTemplateColumns = 'minmax(0, 32%) minmax(0, 68%)'
        } else {
          gridRef.current.style.gridTemplateColumns = '1fr'
        }
      }
    }

    updateGridColumns()
    window.addEventListener('resize', updateGridColumns)

    return () => {
      window.removeEventListener('resize', updateGridColumns)
    }
  }, [])

  // Enhanced scroll-triggered animations with staggered elements
  useEffect(() => {
    if (!sectionRef.current) return

    servicesRef.current.forEach((serviceEl, index) => {
      if (!serviceEl) return

      const titleEl = serviceEl.querySelector('.service-title')
      const descEl = serviceEl.querySelector('.service-description')
      const specsContainer = serviceEl.querySelector('.service-specs')
      const dividerEl = serviceEl.querySelector('.service-divider')
      const numberEl = serviceEl.querySelector('.service-number')

      ScrollTrigger.create({
        trigger: serviceEl,
        start: 'top 75%',
        end: 'bottom 25%',
        onEnter: () => {
          // Service number animation
          if (numberEl) {
            gsap.fromTo(
              numberEl,
              {
                opacity: 0,
                scale: 0,
                rotation: -180,
              },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
              }
            )
          }

          // Title animation with split text effect
          if (titleEl) {
            gsap.fromTo(
              titleEl,
              {
                opacity: 0,
                x: -50,
                clipPath: 'inset(0 100% 0 0)',
              },
              {
                opacity: 1,
                x: 0,
                clipPath: 'inset(0 0% 0 0)',
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.2,
              }
            )
          }

          // Description fade and slide
          if (descEl) {
            gsap.fromTo(
              descEl,
              {
                opacity: 0,
                y: 30,
                filter: 'blur(5px)',
              },
              {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power2.out',
                delay: 0.4,
              }
            )
          }

          // Staggered specs animation
          if (specsContainer) {
            const specs = specsContainer.querySelectorAll('.spec-item')
            gsap.fromTo(
              specs,
              {
                opacity: 0,
                x: -20,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.6,
              }
            )
          }

          // Divider line animation
          if (dividerEl) {
            gsap.fromTo(
              dividerEl,
              {
                scaleX: 0,
                opacity: 0,
              },
              {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                delay: 0.8,
                transformOrigin: 'left center',
              }
            )
          }
        },
        onLeaveBack: () => {
          gsap.to([titleEl, descEl, specsContainer, dividerEl, numberEl].filter(Boolean), {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: 'power2.in',
          })
        },
      })

      // Parallax effect for service items
      ScrollTrigger.create({
        trigger: serviceEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(serviceEl, {
            y: progress * 30,
            opacity: 1 - progress * 0.3,
            ease: 'none',
          })
        },
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

  // Button hover animations
  const buttonUnderlineRef = useRef(null)
  const exploreButtonUnderlineRef = useRef(null)
  
  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      x: 10,
      duration: 0.3,
      ease: 'power2.out',
    })
    if (buttonUnderlineRef.current) {
      gsap.to(buttonUnderlineRef.current, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleButtonLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
    if (buttonUnderlineRef.current) {
      gsap.to(buttonUnderlineRef.current, {
        width: '0%',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleExploreButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      x: 10,
      duration: 0.3,
      ease: 'power2.out',
    })
    if (exploreButtonUnderlineRef.current) {
      gsap.to(exploreButtonUnderlineRef.current, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleExploreButtonLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
    if (exploreButtonUnderlineRef.current) {
      gsap.to(exploreButtonUnderlineRef.current, {
        width: '0%',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const scrollToServices = () => {
    const servicesList = document.querySelector('.services-list')
    if (servicesList) {
      servicesList.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreClick = () => {
    // Scroll to top instantly before navigation (no animation)
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    // Navigate immediately
    navigate('/explore')
  }

  return (
    <section
      ref={sectionRef}
      id="services-new"
      className="relative w-full"
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      {/* Subtle grid background */}
      <div
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

      {/* Very light grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Services Heading - Single Row */}
      <div
        ref={introRef}
        className="relative px-6 md:px-12 lg:px-24 pb-16 md:pb-24 pt-8 md:pt-12"
        style={{
          zIndex: 1,
          opacity: 1,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight whitespace-nowrap"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              fontWeight: 200,
            }}
          >
            Services We Provide
          </h1>
        </div>
      </div>

      {/* Services List - Two Column Layout */}
      <div className="services-list relative" style={{ zIndex: 1 }}>
        <div 
          ref={gridRef}
          className="grid min-h-screen"
          style={{
            gridTemplateColumns: '1fr',
            gap: 0,
          }}
        >
          {/* LEFT COLUMN - Navigation Menu (White Background) */}
          <div
            className="relative px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:max-w-[420px]"
            style={{
              backgroundColor: '#FFFFFF',
              zIndex: 2,
              width: '100%',
            }}
          >
            {/* ABOUT Heading */}
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              SERVICES
            </h2>

            {/* Divider Line */}
            <div
              className="mb-12"
              style={{
                height: '1px',
                backgroundColor: '#000000',
                width: '100%',
              }}
            />

            {/* Service Navigation List */}
            <nav className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className="w-full text-left py-4 px-0 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: activeService === index ? 600 : 400,
                    color: '#000000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    opacity: activeService === index ? 1 : 0.7,
                  }}
                  onMouseEnter={(e) => {
                    if (activeService !== index) {
                      e.target.style.opacity = '0.9'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeService !== index) {
                      e.target.style.opacity = '0.7'
                    }
                  }}
                >
                  {String(index + 1).padStart(2, '0')} {service.title}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT COLUMN - Content Area (Black Background) */}
          <div
            className="relative px-8 md:px-12 lg:px-16 py-16 md:py-24 flex items-center"
            style={{
              backgroundColor: '#000000',
              zIndex: 1,
            }}
          >
            {services[activeService] && (
              <div className="w-full">
                {/* Main Heading */}
                <h2
                  className="mb-6 whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                  }}
                >
                  {services[activeService].title}
                </h2>

                {/* Subheading */}
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    opacity: 0.9,
                  }}
                >
                  {services[activeService].description.split('.')[0]}.
                </p>

                {/* Description Paragraphs */}
                <div className="space-y-6 max-w-2xl">
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      fontWeight: 300,
                      color: '#FFFFFF',
                      lineHeight: 1.8,
                    }}
                  >
                    {services[activeService].description}
                  </p>

                  {/* Service Specs */}
                  <div className="mt-8 space-y-4">
                    {services[activeService].specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 'clamp(0.875rem, 0.9vw, 0.9375rem)',
                          fontWeight: 300,
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.6,
                        }}
                      >
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <div className="mt-12">
                  <button
                    ref={exploreButtonRef}
                    onClick={handleExploreClick}
                    onMouseEnter={handleExploreButtonHover}
                    onMouseLeave={handleExploreButtonLeave}
                    className="group relative inline-flex items-center gap-4 px-10 py-5 border border-white/20 hover:border-white/40 transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Explore More</span>
                    <ArrowRight 
                      size={20} 
                      strokeWidth={1}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                    <span
                      ref={exploreButtonUnderlineRef}
                      className="absolute bottom-0 left-0 h-px bg-white"
                      style={{
                        width: '0%',
                      }}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceNew
