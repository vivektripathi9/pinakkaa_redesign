import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: 'Website Designing',
    description: 'We create responsive, intuitive, and visually stunning websites that authentically represent your brand and deliver seamless user experiences across all devices.',
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    description: 'Enhance your organic search presence with proven SEO strategies that improve visibility, drive quality traffic, and boost your rankings on search engines.',
  },
  {
    id: 3,
    title: 'Social Media Optimization (SMO)',
    description: 'Optimize your social media presence for increased engagement, reach, and brand consistency across platforms like Facebook, Instagram, LinkedIn, and more.',
  },
  {
    id: 4,
    title: 'Online Reputation Management (ORM)',
    description: 'Strengthen your digital credibility by proactively managing reviews, mentions, and feedback to build and maintain a positive online reputation.',
  },
  {
    id: 5,
    title: 'Search Engine Marketing (SEM)',
    description: 'Maximize your reach and conversions through highly targeted, performance-driven paid campaigns on Google and other major search engines.',
  },
  {
    id: 6,
    title: 'Social Media Marketing (SMM)',
    description: 'Amplify your brand through strategic paid advertising on platforms like Facebook, Instagram, and LinkedIn to drive engagement and generate leads.',
  },
  {
    id: 7,
    title: 'Branding & Rebranding',
    description: 'Develop or refresh your brand identity with compelling visuals, messaging, and positioning that resonate with your audience and set you apart.',
  },
  {
    id: 8,
    title: 'Display Advertising',
    description: 'Design and execute impactful display ad campaigns using compelling visuals and messaging to attract, engage, and convert potential customers.',
  },
  {
    id: 9,
    title: 'E-Commerce Solutions',
    description: 'From design to launch, we provide comprehensive e-commerce solutions that streamline your online store and enhance the customer shopping experience.',
  },
  {
    id: 10,
    title: 'PR & Marketing Services',
    description: 'Build brand credibility and visibility through targeted PR campaigns, media outreach, and press coverage that tell your brand story effectively.',
  },
  {
    id: 11,
    title: 'Software Development',
    description: 'Delivering scalable and customized software applications tailored to meet your business needs, enhance productivity, and support digital growth.',
  },
  {
    id: 12,
    title: 'API Integration',
    description: 'Enable seamless communication between applications through robust API integrations that improve functionality and operational efficiency.',
  },
  {
    id: 13,
    title: 'Email Marketing',
    description: 'Craft and manage personalized email campaigns that drive engagement, nurture leads, and increase conversions with measurable results.',
  },
  {
    id: 14,
    title: 'SMS Marketing',
    description: 'Reach your audience instantly with short, impactful SMS campaigns designed for immediate visibility and fast response.',
  },
  {
    id: 15,
    title: 'WhatsApp Marketing',
    description: 'Connect with customers through interactive, personalized messaging on WhatsApp—boosting engagement and driving real-time conversations.',
  },
  {
    id: 16,
    title: 'Shopify Website Development',
    description: 'Custom Shopify store development that combines powerful e-commerce functionality with stunning design to create a seamless shopping experience.',
  },
]

const stats = [
  {
    value: '100',
    unit: '%',
    title: 'Creative Approach',
    description: 'Our innovative creative strategies combine cutting-edge design with strategic messaging to create memorable brand experiences that resonate with your audience.',
  },
  {
    value: '100',
    unit: '%',
    title: 'Guaranteed Success',
    description: 'We deliver measurable results through proven methodologies, continuous optimization, and transparent reporting that ensures your marketing investment drives real business growth.',
  },
  {
    value: '100',
    unit: '%',
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that position your business for long-term success, building strong brand recognition and customer loyalty in competitive markets.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Make An Appointment',
  },
  {
    number: '02',
    title: 'Meet Our Team',
  },
  {
    number: '03',
    title: 'Get Consultation',
  },
  {
    number: '04',
    title: 'Start Project',
  },
]

const Explore = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const servicesRef = useRef([])
  const statsRef = useRef([])
  const processRef = useRef([])
  const gridRef = useRef(null)

  // Animated background grid
  useEffect(() => {
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '200px 200px',
        duration: 20,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }
  }, [])

  // Title animation - slow and smooth
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.4,
        }
      )
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'sine.inOut',
          delay: 0.8,
        }
      )
    }
  }, [])

  // Services animation - gentle fade and slight upward movement
  useEffect(() => {
    if (!sectionRef.current) return

    servicesRef.current.forEach((serviceEl, index) => {
      if (!serviceEl) return

      ScrollTrigger.create({
        trigger: serviceEl,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            serviceEl,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power2.out',
              delay: index * 0.06,
            }
          )

          const titleEl = serviceEl.querySelector('.service-title')
          const descEl = serviceEl.querySelector('.service-description')
          const numberEl = serviceEl.querySelector('.service-number')

          if (titleEl) {
            gsap.fromTo(
              titleEl,
              {
                opacity: 0,
                x: -20,
              },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'sine.inOut',
                delay: index * 0.06 + 0.2,
              }
            )
          }

          if (descEl) {
            gsap.fromTo(
              descEl,
              {
                opacity: 0,
                y: 8,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'sine.inOut',
                delay: index * 0.06 + 0.3,
              }
            )
          }

          if (numberEl) {
            gsap.fromTo(
              numberEl,
              {
                opacity: 0,
                scale: 0.8,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power2.out',
                delay: index * 0.06 + 0.1,
              }
            )
          }
        },
        onLeaveBack: () => {
          gsap.to(serviceEl, {
            opacity: 0,
            y: 5,
            duration: 0.8,
            ease: 'power2.in',
          })
        },
      })
    })

    // Stats animation - slow and calm
    statsRef.current.forEach((statEl, index) => {
      if (!statEl) return

      ScrollTrigger.create({
        trigger: statEl,
        start: 'top 85%',
        onEnter: () => {
          const valueEl = statEl.querySelector('.stat-value')
          const titleEl = statEl.querySelector('.stat-title')
          const descEl = statEl.querySelector('.stat-description')

          if (valueEl) {
            gsap.fromTo(
              valueEl,
              {
                opacity: 0,
                scale: 0.95,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'power2.out',
                delay: index * 0.15,
              }
            )
          }

          if (titleEl) {
            gsap.fromTo(
              titleEl,
              {
                opacity: 0,
                y: 10,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'sine.inOut',
                delay: index * 0.15 + 0.3,
              }
            )
          }

          if (descEl) {
            gsap.fromTo(
              descEl,
              {
                opacity: 0,
                y: 10,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'sine.inOut',
                delay: index * 0.15 + 0.4,
              }
            )
          }
        },
      })
    })

    // Process steps animation
    processRef.current.forEach((processEl, index) => {
      if (!processEl) return

      ScrollTrigger.create({
        trigger: processEl,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            processEl,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power2.out',
              delay: index * 0.12,
            }
          )
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

  return (
    <section
      ref={sectionRef}
      id="explore-services"
      className="relative w-full"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        paddingTop: '120px',
        paddingBottom: '180px',
      }}
    >
      {/* Animated grid background - subtle gray */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative px-6 md:px-12 lg:px-20 xl:px-32" style={{ zIndex: 1 }}>
        {/* Section Title - Centered */}
        <div className="mb-32 md:mb-40 lg:mb-48 text-center">
          <h2
            ref={titleRef}
            className="font-sans text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight mb-8 md:mb-12"
            style={{
              color: '#000000',
              letterSpacing: '-0.03em',
              fontWeight: 300,
              opacity: 0,
              lineHeight: '0.95',
            }}
          >
            Services We Offer
          </h2>
          <p
            ref={subtitleRef}
            className="font-sans text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              color: 'rgba(0, 0, 0, 0.6)',
              fontWeight: 300,
              lineHeight: 1.7,
              opacity: 0,
            }}
          >
            From SEO and content marketing to social media management and paid advertising, we provide comprehensive digital marketing solutions that drive growth and success.
          </p>
        </div>

        {/* Services - Asymmetric Grid Layout */}
        <div className="mb-40 md:mb-56 lg:mb-64">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  servicesRef.current[index] = el
                }}
                className="relative group"
                style={{
                  opacity: 0,
                  padding: '32px 24px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    y: -4,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    backgroundColor: 'transparent',
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                  })
                }}
              >
                {/* Service Number - Top right */}
                <div
                  className="service-number absolute top-4 right-4 font-mono text-3xl md:text-4xl"
                  style={{
                    color: 'rgba(0, 0, 0, 0.1)',
                    fontWeight: 300,
                    fontFamily: 'monospace',
                    lineHeight: 1,
                    opacity: 0,
                  }}
                >
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Service Title */}
                <h3
                  className="service-title font-sans text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 leading-tight pr-16"
                  style={{
                    color: '#000000',
                    letterSpacing: '-0.02em',
                    fontWeight: 300,
                    opacity: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className="service-description font-sans text-base md:text-lg leading-relaxed"
                  style={{
                    color: 'rgba(0, 0, 0, 0.65)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    opacity: 0,
                  }}
                >
                  {service.description}
                </p>

                {/* Bottom border accent */}
                <div
                  className="absolute bottom-0 left-0 h-px bg-black/10 group-hover:bg-black/20 transition-colors duration-300"
                  style={{
                    width: '60px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section - Split Layout */}
        <div className="mb-40 md:mb-56 lg:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-start">
            {/* Left Column */}
            <div>
              <h3
                className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 md:mb-12 leading-tight"
                style={{
                  color: '#000000',
                  letterSpacing: '-0.03em',
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Grow Your Online Presence
              </h3>
            </div>

            {/* Right Column */}
            <div>
              <p
                className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 md:mb-20"
                style={{
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                What sets us apart is our results-driven approach. We don't believe in one-size-fits-all solutions. Instead, we craft customized, data-driven strategies tailored to meet the unique needs and goals of each client.
              </p>

              {/* Stats - Vertical Stack */}
              <div className="space-y-16 md:space-y-20">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      statsRef.current[index] = el
                    }}
                    className="relative"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <div className="mb-4">
                      <span
                        className="stat-value font-sans text-6xl md:text-7xl lg:text-8xl font-light"
                        style={{
                          color: '#000000',
                          fontWeight: 300,
                          opacity: 0,
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="font-sans text-3xl md:text-4xl font-light ml-2"
                        style={{
                          color: 'rgba(0, 0, 0, 0.4)',
                          fontWeight: 300,
                        }}
                      >
                        {stat.unit}
                      </span>
                    </div>
                    <h4
                      className="stat-title font-sans text-xl md:text-2xl lg:text-3xl font-light mb-3"
                      style={{
                        color: '#000000',
                        fontWeight: 300,
                        opacity: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.title}
                    </h4>
                    <p
                      className="stat-description font-sans text-base md:text-lg leading-relaxed"
                      style={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontWeight: 300,
                        lineHeight: 1.7,
                        opacity: 0,
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section - Horizontal Layout */}
        <div>
          <div className="mb-12 md:mb-16">
            <h3
              className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 leading-tight"
              style={{
                color: '#000000',
                letterSpacing: '-0.03em',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Our Process For Delivering Results
            </h3>
            <p
              className="font-sans text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed"
              style={{
                color: 'rgba(0, 0, 0, 0.7)',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              We follow a structured approach to ensure every project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          {/* Process Steps - Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  processRef.current[index] = el
                }}
                className="relative"
                style={{
                  opacity: 0,
                  paddingTop: '24px',
                  borderTop: '2px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  className="font-sans text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8"
                  style={{
                    color: 'rgba(0, 0, 0, 0.15)',
                    fontWeight: 300,
                    fontFamily: 'monospace',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <h4
                  className="font-sans text-xl md:text-2xl lg:text-3xl font-light"
                  style={{
                    color: '#000000',
                    fontWeight: 300,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore
