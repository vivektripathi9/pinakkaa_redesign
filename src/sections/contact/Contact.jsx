import React, { useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

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


  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        paddingTop: 'clamp(120px, 15vw, 180px)',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
      }}
    >
      {/* Static Grid Background */}
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20" style={{ zIndex: 1 }}>
        {/* Header Section */}
        <div className="mb-20 md:mb-28 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-white/50"></div>
            <span
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Get In Touch
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/30 to-white/50"></div>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] mb-6 md:mb-8"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              letterSpacing: '-0.02em',
              fontWeight: 300,
              background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's Start a Conversation
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Ready to elevate your digital presence? We're here to help transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Contact Form */}
          <div
            className="rounded-3xl p-8 md:p-10 lg:p-12 border border-white/10 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-light mb-8"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: '-0.02em',
                fontWeight: 300,
                background: 'linear-gradient(90deg, #EC4899, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: 'blur(10px)',
                    borderColor: focusedField === 'name' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: 'blur(10px)',
                    borderColor: focusedField === 'email' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div className="form-field">
                <label
                  htmlFor="phone"
                  className="block text-xs md:text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: 'blur(10px)',
                    borderColor: focusedField === 'phone' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  placeholder="+91 97409 53484"
                />
              </div>

              {/* Message Field */}
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: 'blur(10px)',
                    borderColor: focusedField === 'message' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-10 md:px-12 py-4 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} strokeWidth={2} />
                    </>
                  )}
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.3) 100%)',
                  }}
                />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div
              className="rounded-3xl p-8 md:p-10 lg:p-12 border border-white/10 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              }}
            >
              <h2
                className="text-3xl md:text-4xl font-light mb-8"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                  background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div
                  className="contact-item group flex items-start gap-5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <Mail size={20} strokeWidth={1.5} className="text-white/80" />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@pinakkaa.com"
                      className="text-lg md:text-xl transition-colors"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: '#FFFFFF',
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'rgba(139, 92, 246, 1)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#FFFFFF'
                      }}
                    >
                      info@pinakkaa.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="contact-item group flex items-start gap-5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <Phone size={20} strokeWidth={1.5} className="text-white/80" />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      Phone
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+919740953484"
                        className="text-lg md:text-xl transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: '#FFFFFF',
                          fontWeight: 400,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'rgba(139, 92, 246, 1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#FFFFFF'
                        }}
                      >
                        +91 97409 53484
                      </a>
                      <a
                        href="tel:+919066734738"
                        className="text-lg md:text-xl transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: '#FFFFFF',
                          fontWeight: 400,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'rgba(139, 92, 246, 1)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#FFFFFF'
                        }}
                      >
                        +91 90667 34738
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="contact-item group flex items-start gap-5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <MapPin size={20} strokeWidth={1.5} className="text-white/80" />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      Location
                    </p>
                    <p
                      className="text-lg md:text-xl"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: '#FFFFFF',
                        fontWeight: 400,
                      }}
                    >
                      17th Main Road, Sector 3,<br />
                      HSR Layout, Bangalore - 560102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div
              className="rounded-3xl p-8 md:p-10 lg:p-12 border border-white/10 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              }}
            >
              <h3
                className="text-xs md:text-sm uppercase tracking-wider mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                }}
              >
                Trusted By
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    }}
                  >
                    <p
                      className="text-4xl md:text-5xl font-light mb-2"
                      style={{
                        fontFamily: "'Playfair Display', 'Georgia', serif",
                        color: '#FFFFFF',
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      {badge.value}
                    </p>
                    <p
                      className="text-xs md:text-sm"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontWeight: 400,
                      }}
                    >
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
