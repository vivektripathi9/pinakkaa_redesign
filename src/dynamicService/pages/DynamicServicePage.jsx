import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../../layout/Navigation'
import Footer from '../../layout/Footer'
import Animation2 from '../../sections/animation2/animation2'
import Green from '../../sections/green/green'
import Grn2 from '../../sections/grn2/grn2'
import { getServiceBySlug, getRelatedServices } from '../data/servicesData'

gsap.registerPlugin(ScrollTrigger)

const DynamicServicePage = () => {
  const { serviceSlug } = useParams()
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const contentRefs = useRef([])
  const headingRefs = useRef([])

  // Get service data by slug
  const service = getServiceBySlug(serviceSlug)

  // SEO Meta Tags
  useEffect(() => {
    if (service) {
      // Update document title
      document.title = service.seo.title

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', service.seo.description)

      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', service.seo.keywords)

      // Update or create Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (!ogTitle) {
        ogTitle = document.createElement('meta')
        ogTitle.setAttribute('property', 'og:title')
        document.head.appendChild(ogTitle)
      }
      ogTitle.setAttribute('content', service.seo.title)

      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (!ogDescription) {
        ogDescription = document.createElement('meta')
        ogDescription.setAttribute('property', 'og:description')
        document.head.appendChild(ogDescription)
      }
      ogDescription.setAttribute('content', service.seo.description)

      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `${window.location.origin}/services/${service.slug}`)
    }
  }, [service])

  // Scroll to top instantly BEFORE browser paints (no visible scroll)
  useLayoutEffect(() => {
    // Set scroll position directly - happens synchronously before paint
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [serviceSlug]) // Re-run when service slug changes

  // Redirect to explore if service not found
  useEffect(() => {
    if (!service && serviceSlug) {
      // Small delay to ensure component is mounted
      const timer = setTimeout(() => {
        navigate('/explore', { replace: true })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [service, serviceSlug, navigate])

  // Gradient animation for headings
  useEffect(() => {
    if (!service) return

    const gradientColors = [
      { start: '#8B5CF6', end: '#EC4899' }, // Purple to Pink
      { start: '#EC4899', end: '#3B82F6' }, // Pink to Blue
      { start: '#3B82F6', end: '#8B5CF6' }, // Blue to Purple
    ]

    headingRefs.current.forEach((headingEl, index) => {
      if (!headingEl) return

      const colorIndex = index % gradientColors.length
      const colors = gradientColors[colorIndex]

      headingEl.style.background = `linear-gradient(90deg, ${colors.start}, ${colors.end})`
      headingEl.style.webkitBackgroundClip = 'text'
      headingEl.style.webkitTextFillColor = 'transparent'
      headingEl.style.backgroundClip = 'text'
      headingEl.style.backgroundSize = '200% 100%'
      headingEl.style.backgroundPosition = '0% 50%'
      headingEl.style.willChange = 'background-position'

      gsap.to(headingEl, {
        backgroundPosition: '100% 50%',
        duration: 4 + (index * 0.5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })
  }, [service])

  // Hero animation
  useEffect(() => {
    if (heroRef.current && service) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      )
    }
  }, [service])

  // Content animations
  useEffect(() => {
    if (!sectionRef.current || !service) return

    contentRefs.current.forEach((el, index) => {
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
        onEnter: () => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: index * 0.1 }
          )
        },
        onEnterBack: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.5 })
        },
        once: false,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && sectionRef.current?.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [service])

  // Show loading state or redirect message while checking service
  if (!service) {
    return (
      <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="text-white text-center">
          <p className="text-xl mb-4">Service not found</p>
          <p className="text-white/60 mb-8">Redirecting...</p>
        </div>
      </div>
    )
  }

  // Get related services
  const relatedServices = getRelatedServices(service.id, 3)

  return (
    <div className="min-h-screen relative">
        <div className="grid-bg noise-grain scanline fixed inset-0 -z-10" />
        <Navigation />

        <section
          ref={sectionRef}
          className="relative w-full overflow-hidden"
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            paddingTop: 'clamp(120px, 15vw, 180px)',
            paddingBottom: 'clamp(80px, 10vw, 120px)',
          }}
        >
          {/* Animated Background */}
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

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20" style={{ zIndex: 1 }}>
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li>
                  <Link to="/explore" className="text-white/60 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-white/90" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            {/* Hero Section */}
            <div ref={heroRef} className="mb-20 md:mb-28" style={{ opacity: 0 }}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-white/50"></div>
                <span
                  className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Service Details
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/30 to-white/50"></div>
              </div>

              <h1
                ref={(el) => {
                  headingRefs.current[0] = el
                }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] mb-6 md:mb-8"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}
              >
                {service.hero.headline}
              </h1>

              <p
                className="text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {service.hero.subtext}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={service.hero.ctaLink}
                  className="group relative px-8 md:px-10 py-4 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-500 overflow-hidden"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
                      scale: 1.05,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                      scale: 1,
                      duration: 0.3,
                      ease: 'power2.out',
                    })
                  }}
                >
                  <span className="relative z-10">{service.hero.ctaText}</span>
                </Link>
                <Link
                  to="/explore"
                  className="px-8 md:px-10 py-4 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* Overview Section */}
            {service.overview && (
              <div
                ref={(el) => {
                  contentRefs.current[0] = el
                }}
                className="mb-20 md:mb-28"
                style={{ opacity: 0 }}
              >
                <h2
                  ref={(el) => {
                    headingRefs.current[1] = el
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Overview
                </h2>
                <div
                  className="prose prose-invert max-w-none text-lg md:text-xl leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {service.overview.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Features Section */}
            {service.features && service.features.length > 0 && (
              <div
                ref={(el) => {
                  contentRefs.current[1] = el
                }}
                className="mb-20 md:mb-28"
                style={{ opacity: 0 }}
              >
                <h2
                  ref={(el) => {
                    headingRefs.current[2] = el
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      }}
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                          y: -4,
                          scale: 1.02,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                          y: 0,
                          scale: 1,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <div className="flex-1">
                          <h3
                            className="text-xl md:text-2xl font-light mb-2"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              color: '#FFFFFF',
                              fontWeight: 500,
                            }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="text-base text-white/70 leading-relaxed"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 300,
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
              <div
                ref={(el) => {
                  contentRefs.current[2] = el
                }}
                className="mb-20 md:mb-28"
                style={{ opacity: 0 }}
              >
                <h2
                  ref={(el) => {
                    headingRefs.current[3] = el
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Key Benefits
                </h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-white/20">
                          <span className="text-white text-lg font-bold">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-lg md:text-xl text-white/90 leading-relaxed"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              lineHeight: 1.7,
                            }}
                          >
                            {benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Section */}
            {service.process && service.process.length > 0 && (
              <div
                ref={(el) => {
                  contentRefs.current[3] = el
                }}
                className="mb-20 md:mb-28"
                style={{ opacity: 0 }}
              >
                <h2
                  ref={(el) => {
                    headingRefs.current[4] = el
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Our Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      }}
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                          y: -6,
                          scale: 1.02,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                          y: 0,
                          scale: 1,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <span
                          className="text-3xl font-light text-white/80"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 200,
                          }}
                        >
                          {step.step}
                        </span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-light mb-3"
                        style={{
                          fontFamily: "'Playfair Display', 'Georgia', serif",
                          color: '#FFFFFF',
                          fontWeight: 400,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-base text-white/70 leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
              <div
                ref={(el) => {
                  contentRefs.current[4] = el
                }}
                className="mb-20 md:mb-28"
                style={{ opacity: 0 }}
              >
                <h2
                  ref={(el) => {
                    headingRefs.current[5] = el
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      }}
                    >
                      <h3
                        className="text-xl md:text-2xl font-light mb-3"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: '#FFFFFF',
                          fontWeight: 500,
                        }}
                      >
                        {faq.question}
                      </h3>
                      <p
                        className="text-base md:text-lg text-white/70 leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div
              ref={(el) => {
                contentRefs.current[5] = el
              }}
              className="rounded-3xl p-12 md:p-16 lg:p-20 border border-white/10 shadow-lg backdrop-blur-xl text-center"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                opacity: 0,
              }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Let's discuss how {service.title} can help transform your business and drive measurable results.
              </p>
              <Link
                to="/contact"
                className="inline-block group relative px-10 md:px-12 py-4 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-500 overflow-hidden"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)',
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
              >
                <span className="relative z-10">Contact Us Today</span>
              </Link>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div
                ref={(el) => {
                  contentRefs.current[6] = el
                }}
                className="mt-20 md:mt-28"
                style={{ opacity: 0 }}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                  }}
                >
                  Related Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {relatedServices.map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      to={`/services/${relatedService.slug}`}
                      className="group block rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                          y: -6,
                          scale: 1.02,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                          y: 0,
                          scale: 1,
                          duration: 0.3,
                          ease: 'power2.out',
                        })
                      }}
                    >
                      <h3
                        className="text-xl md:text-2xl font-light mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                        style={{
                          fontFamily: "'Playfair Display', 'Georgia', serif",
                          color: '#FFFFFF',
                          fontWeight: 400,
                        }}
                      >
                        {relatedService.title}
                      </h3>
                      <p
                        className="text-base text-white/70 leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                          lineHeight: 1.6,
                        }}
                      >
                        {relatedService.hero.subtext}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Animation2 Section */}
        <Animation2 />

        {/* Green Section */}
        <Green />

        {/* Grn2 Section */}
        <Grn2 />

        <Footer />
      </div>
  )
}

export default DynamicServicePage
