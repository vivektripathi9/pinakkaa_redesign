import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const trustBadgesRef = useRef([])
  const floatingElementsRef = useRef([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const formFields = formRef.current?.querySelectorAll('.form-field')
    const contactItems = contactInfoRef.current?.querySelectorAll('.contact-item')
    const badges = trustBadgesRef.current.filter(Boolean)

    // Staggered form field animations
    if (formFields && formFields.length > 0) {
      gsap.fromTo(
        formFields,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formFields[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Contact info items animation
    if (contactItems && contactItems.length > 0) {
      gsap.fromTo(
        contactItems,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactItems[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Trust badges counter animation
    badges.forEach((badge, index) => {
      const numberEl = badge.querySelector('.badge-number')
      if (numberEl) {
        const finalValue = numberEl.textContent
        const isPercentage = finalValue.includes('%')
        const isPlus = finalValue.includes('+')
        const numericValue = parseInt(finalValue.replace(/[^0-9]/g, '')) || 0

        gsap.fromTo(
          numberEl,
          {
            textContent: 0,
          },
          {
            textContent: numericValue,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: badge,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const current = Math.ceil(this.targets()[0].textContent)
              numberEl.textContent = current + (isPercentage ? '%' : isPlus ? '+' : '')
            },
          }
        )
      }
    })

    // Floating background elements
    const floatingElements = floatingElementsRef.current.filter(Boolean)
    floatingElements.forEach((el, index) => {
      if (!el) return
      const randomY = Math.random() * 40 - 20 // -20 to 20
      const randomX = Math.random() * 30 - 15 // -15 to 15
      const randomRot = Math.random() * 10 - 5 // -5 to 5
      const randomDur = Math.random() * 2 + 3 // 3 to 5
      
      gsap.to(el, {
        y: randomY,
        x: randomX,
        rotation: randomRot,
        duration: randomDur,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger && section?.contains(trigger.vars.trigger)) {
          trigger.kill()
        }
      })
      gsap.killTweensOf(floatingElements)
    }
  }, [])

  // Animated label on focus
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
    const field = document.querySelector(`[name="${fieldName}"]`)
    if (field) {
      gsap.to(field, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleBlur = (fieldName) => {
    setFocusedField(null)
    const field = document.querySelector(`[name="${fieldName}"]`)
    if (field) {
      gsap.to(field, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        {[
          { width: 60, height: 60, left: '10%', top: '15%' },
          { width: 45, height: 45, left: '85%', top: '25%' },
          { width: 70, height: 70, left: '20%', top: '70%' },
          { width: 50, height: 50, left: '75%', top: '60%' },
          { width: 55, height: 55, left: '5%', top: '50%' },
          { width: 65, height: 65, left: '90%', top: '80%' },
        ].map((shape, i) => (
          <div
            key={i}
            ref={(el) => {
              floatingElementsRef.current[i] = el
            }}
            className="absolute"
            style={{
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              left: shape.left,
              top: shape.top,
              border: `1px solid rgba(47, 128, 237, 0.1)`,
              borderRadius: '4px',
              opacity: 0.3,
              zIndex: 0,
            }}
          />
        ))}

        {/* Subtle animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(47, 128, 237, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47, 128, 237, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.5,
            zIndex: 0,
          }}
        />
      </div>

      {/* Data Overlay */}
      <div className="data-overlay top-8 left-6">008.1</div>
      <div className="data-overlay top-8 right-6">95.2</div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'power3.out' }}
        >
          <motion.h2
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            style={{ color: '#0A1B2E', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="font-sans text-lg max-w-2xl mx-auto"
            style={{ color: '#7A8CA3' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to elevate your digital presence? Let's start a conversation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form - Enhanced */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="form-field relative">
                <motion.label
                  htmlFor="name"
                  className="block font-mono text-xs mb-3 uppercase tracking-wider"
                  style={{ color: '#2F80ED' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: focusedField === 'name' ? 1 : 0.8 }}
                >
                  NAME
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 focus:outline-none font-sans transition-all duration-300 relative z-10"
                  style={{
                    borderColor: focusedField === 'name' ? '#2F80ED' : 'rgba(10, 27, 46, 0.15)',
                    color: '#0A1B2E',
                    borderRadius: '4px',
                  }}
                  whileFocus={{
                    boxShadow: '0 0 0 3px rgba(47, 128, 237, 0.1)',
                  }}
                  placeholder="Your Name"
                />
                {focusedField === 'name' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: '#2F80ED' }}
                  />
                )}
              </div>

              {/* Email Field */}
              <div className="form-field relative">
                <motion.label
                  htmlFor="email"
                  className="block font-mono text-xs mb-3 uppercase tracking-wider"
                  style={{ color: '#2F80ED' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: focusedField === 'email' ? 1 : 0.8 }}
                >
                  EMAIL
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  required
                  className="w-full px-5 py-4 bg-transparent border-2 focus:outline-none font-sans transition-all duration-300 relative z-10"
                  style={{
                    borderColor: focusedField === 'email' ? '#2F80ED' : 'rgba(10, 27, 46, 0.15)',
                    color: '#0A1B2E',
                    borderRadius: '4px',
                  }}
                  whileFocus={{
                    boxShadow: '0 0 0 3px rgba(47, 128, 237, 0.1)',
                  }}
                  placeholder="your.email@example.com"
                />
                {focusedField === 'email' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: '#2F80ED' }}
                  />
                )}
              </div>

              {/* Phone Field */}
              <div className="form-field relative">
                <motion.label
                  htmlFor="phone"
                  className="block font-mono text-xs mb-3 uppercase tracking-wider"
                  style={{ color: '#2F80ED' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: focusedField === 'phone' ? 1 : 0.8 }}
                >
                  PHONE
                </motion.label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  className="w-full px-5 py-4 bg-transparent border-2 focus:outline-none font-sans transition-all duration-300 relative z-10"
                  style={{
                    borderColor: focusedField === 'phone' ? '#2F80ED' : 'rgba(10, 27, 46, 0.15)',
                    color: '#0A1B2E',
                    borderRadius: '4px',
                  }}
                  whileFocus={{
                    boxShadow: '0 0 0 3px rgba(47, 128, 237, 0.1)',
                  }}
                  placeholder="+91 1234567890"
                />
                {focusedField === 'phone' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: '#2F80ED' }}
                  />
                )}
              </div>

              {/* Message Field */}
              <div className="form-field relative">
                <motion.label
                  htmlFor="message"
                  className="block font-mono text-xs mb-3 uppercase tracking-wider"
                  style={{ color: '#2F80ED' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: focusedField === 'message' ? 1 : 0.8 }}
                >
                  MESSAGE
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-transparent border-2 focus:outline-none font-sans transition-all duration-300 resize-none relative z-10"
                  style={{
                    borderColor: focusedField === 'message' ? '#2F80ED' : 'rgba(10, 27, 46, 0.15)',
                    color: '#0A1B2E',
                    borderRadius: '4px',
                  }}
                  whileFocus={{
                    boxShadow: '0 0 0 3px rgba(47, 128, 237, 0.1)',
                  }}
                  placeholder="Tell us about your project..."
                />
                {focusedField === 'message' && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: '#2F80ED' }}
                  />
                )}
              </div>

              {/* Submit Button - Enhanced */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-5 font-mono text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 overflow-hidden"
                style={{
                  backgroundColor: '#2F80ED',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 40px rgba(47, 128, 237, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#1a5bb8' }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    'SENDING...'
                  ) : (
                    <>
                      SEND MESSAGE
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Send size={18} strokeWidth={1.5} />
                      </motion.div>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            ref={contactInfoRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information Card */}
            <motion.div
              className="glass-light p-10 border relative overflow-hidden"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(10, 27, 46, 0.1)',
                borderRadius: '8px',
              }}
              whileHover={{
                boxShadow: '0 20px 60px rgba(47, 128, 237, 0.1)',
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated accent line */}
              <motion.div
                className="absolute top-0 left-0 h-1"
                style={{ backgroundColor: '#2F80ED', width: '100%' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              <h3
                className="font-mono text-xl font-semibold mb-8"
                style={{ color: '#2F80ED' }}
              >
                CONTACT INFORMATION
              </h3>
              <div className="space-y-8">
                <motion.div
                  className="contact-item flex items-start gap-5 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(47, 128, 237, 0.1)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail size={22} strokeWidth={1.5} style={{ color: '#2F80ED' }} />
                  </motion.div>
                  <div>
                    <p className="font-mono text-xs mb-2 uppercase tracking-wider" style={{ color: '#7A8CA3' }}>
                      EMAIL
                    </p>
                    <a
                      href="mailto:contact@pinakkaa.com"
                      className="font-sans text-lg transition-colors"
                      style={{ color: '#0A1B2E' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#2F80ED'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#0A1B2E'
                      }}
                    >
                      contact@pinakkaa.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-item flex items-start gap-5 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(47, 128, 237, 0.1)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone size={22} strokeWidth={1.5} style={{ color: '#2F80ED' }} />
                  </motion.div>
                  <div>
                    <p className="font-mono text-xs mb-2 uppercase tracking-wider" style={{ color: '#7A8CA3' }}>
                      PHONE
                    </p>
                    <a
                      href="tel:+911234567890"
                      className="font-sans text-lg transition-colors"
                      style={{ color: '#0A1B2E' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#2F80ED'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#0A1B2E'
                      }}
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-item flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(47, 128, 237, 0.1)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin size={22} strokeWidth={1.5} style={{ color: '#2F80ED' }} />
                  </motion.div>
                  <div>
                    <p className="font-mono text-xs mb-2 uppercase tracking-wider" style={{ color: '#7A8CA3' }}>
                      LOCATION
                    </p>
                    <p className="font-sans text-lg" style={{ color: '#0A1B2E' }}>
                      Chandigarh, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Badges - Enhanced */}
            <motion.div
              className="glass-light p-10 border relative overflow-hidden"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(10, 27, 46, 0.1)',
                borderRadius: '8px',
              }}
              whileHover={{
                boxShadow: '0 20px 60px rgba(47, 128, 237, 0.1)',
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated accent line */}
              <motion.div
                className="absolute top-0 left-0 h-1"
                style={{ backgroundColor: '#2F80ED', width: '100%' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <h3 className="font-mono text-sm mb-6 uppercase tracking-wider" style={{ color: '#7A8CA3' }}>
                TRUSTED BY
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      trustBadgesRef.current[index] = el
                    }}
                    className="text-center p-6 border relative group"
                    style={{
                      borderColor: 'rgba(10, 27, 46, 0.1)',
                      borderRadius: '6px',
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: '#2F80ED',
                      boxShadow: '0 10px 30px rgba(47, 128, 237, 0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="badge-number font-mono text-3xl font-bold mb-2"
                      style={{ color: '#2F80ED' }}
                    >
                      {badge.value}
                    </p>
                    <p className="font-sans text-xs" style={{ color: '#7A8CA3' }}>
                      {badge.label}
                    </p>
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: 'rgba(47, 128, 237, 0.05)' }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
