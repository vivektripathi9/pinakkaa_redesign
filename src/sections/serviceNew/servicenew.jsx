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

  // Enhanced intro animations with staggered word reveal - Title appears first
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !buttonRef.current) return

    // Split title into words and animate each word - Show first
    const titleWords = titleRef.current.querySelectorAll('.title-word')
    titleWordsRef.current = Array.from(titleWords)

    // Staggered word animation for title - Appears immediately when section opens
    gsap.fromTo(
      titleWords,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2,
      }
    )

    // Subtitle blur-to-clear animation - Appears after title
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power2.out',
        delay: 1.5, // Delay after title completes
      }
    )

    // Button slide up with scale - Appears last
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 2.2, // Delay after subtitle
      }
    )

    // Show intro section immediately
    if (introRef.current) {
      gsap.to(introRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
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

      {/* Services Intro - Hero-like Section - Shows "Services We Provide" first */}
      <div
        ref={introRef}
        className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24"
        style={{
          zIndex: 1,
          opacity: 1, // Visible immediately
        }}
      >
        <div className="max-w-4xl">
          <h1
            ref={titleRef}
            className="font-sans text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-tight"
            style={{
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              fontWeight: 300,
            }}
          >
            {'Services We Provide'.split(' ').map((word, index) => (
              <span
                key={index}
                className="title-word inline-block mr-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p
            ref={subtitleRef}
            className="font-sans text-xl md:text-2xl leading-relaxed max-w-2xl mb-12"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 300,
              lineHeight: 1.6,
              opacity: 0,
            }}
          >
            Comprehensive digital solutions tailored to elevate your business
          </p>
          
          {/* Explore More Button */}
          <button
            ref={buttonRef}
            onClick={scrollToServices}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            className="group relative inline-flex items-center gap-4 px-8 py-4 border border-white/20 hover:border-white/40 transition-all duration-300"
            style={{
              opacity: 0,
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <span>Explore Services</span>
            <ArrowRight 
              size={18} 
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
            <span
              ref={buttonUnderlineRef}
              className="absolute bottom-0 left-0 h-px bg-white"
              style={{
                width: '0%',
              }}
            />
          </button>
        </div>
      </div>

      {/* Services List - Editorial Layout */}
      <div className="services-list relative px-6 md:px-12 lg:px-24 py-32" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                servicesRef.current[index] = el
              }}
              className="mb-32 md:mb-40 last:mb-0 relative"
              style={{
                opacity: 0,
              }}
            >
              {/* Service Number Badge */}
              <div
                className="service-number absolute -left-8 md:-left-12 top-0 flex items-center justify-center"
                style={{
                  width: '60px',
                  height: '60px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  color: 'rgba(255, 255, 255, 0.4)',
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  fontFamily: 'monospace',
                  opacity: 0,
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Service Title */}
              <h2
                className="service-title font-sans text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
                style={{
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                  opacity: 0,
                }}
              >
                {service.title}
              </h2>

              {/* Service Description */}
              <p
                className="service-description font-sans text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  opacity: 0,
                }}
              >
                {service.description}
              </p>

              {/* Service Specs */}
              <div className="service-specs mt-12 space-y-3">
                {service.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="spec-item font-sans text-base md:text-lg relative pl-6"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      opacity: 0,
                    }}
                  >
                    <span
                      className="absolute left-0 top-2 w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        transform: 'translateY(50%)',
                      }}
                    />
                    {spec}
                  </div>
                ))}
              </div>

              {/* Animated Divider Line */}
              {index < services.length - 1 && (
                <div
                  ref={(el) => {
                    dividerRefs.current[index] = el
                  }}
                  className="service-divider mt-20 md:mt-32 relative"
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    width: '100%',
                    opacity: 0,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-white/20"
                    style={{
                      width: '0%',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Explore Button at the end */}
        <div className="flex justify-center mt-32 md:mt-40">
          <button
            ref={exploreButtonRef}
            onClick={handleExploreClick}
            onMouseEnter={handleExploreButtonHover}
            onMouseLeave={handleExploreButtonLeave}
            className="group relative inline-flex items-center gap-4 px-10 py-5 border border-white/20 hover:border-white/40 transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
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
    </section>
  )
}

export default ServiceNew
