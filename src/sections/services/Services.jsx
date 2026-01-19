import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, Search, Share2, ShoppingCart } from 'lucide-react'

const capabilities = [
  {
    id: 1,
    title: 'WEBSITE DESIGNING',
    description: 'Custom, responsive websites that convert visitors into customers. Modern design meets functionality.',
    icon: Globe,
    specs: ['Responsive Design', 'UI/UX Excellence', 'Performance Optimized'],
  },
  {
    id: 2,
    title: 'SEO & DIGITAL MARKETING',
    description: 'Data-driven SEO strategies and digital marketing campaigns that drive organic growth and visibility.',
    icon: Search,
    specs: ['SEO Optimization', 'Content Marketing', 'Analytics & Reporting'],
  },
  {
    id: 3,
    title: 'SOCIAL MEDIA OPTIMIZATION & MANAGEMENT',
    description: 'Strategic social media management that builds your brand and engages your audience effectively.',
    icon: Share2,
    specs: ['Content Strategy', 'Community Management', 'Social Advertising'],
  },
  {
    id: 4,
    title: 'BRANDING, ADS & E-COMMERCE',
    description: 'Complete branding solutions, targeted advertising, and robust e-commerce platforms for business growth.',
    icon: ShoppingCart,
    specs: ['Brand Identity', 'Paid Advertising', 'E-commerce Solutions'],
  },
]

const Services = () => {
  const videoRef = useRef(null)

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      })
    }
  }, [])

  return (
    <section 
      id="services" 
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden" 
      style={{ 
        zIndex: 0,
        backgroundColor: '#FFFFFF', // Pure white - matches divider fill exactly
        position: 'relative',
      }}
    >
      {/* Full-Screen Background Video */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      >
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
            width: '100%',
            height: '100%',
            opacity: 0.3, // Subtle background video
          }}
          src="/videos/0_People_Animation_1920x1080.mp4"
        />
        
        {/* White overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)', // White overlay for readability
            zIndex: 1,
          }}
        />
      </div>

      {/* Content Container - Above video */}
      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        {/* Data Overlay */}
        <div className="data-overlay top-8 left-6" style={{ color: 'rgba(10, 27, 46, 0.2)' }}>002.1</div>
        <div className="data-overlay top-8 right-6" style={{ color: 'rgba(10, 27, 46, 0.2)' }}>89.3</div>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-4 text-primary">
            WHAT WE DO
          </h2>
          <p className="font-sans text-muted max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.id}
                className="glass-light p-8 border border-primary/20 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mb-6">
                  <Icon size={32} strokeWidth={1} className="text-accent mb-4" />
                </div>
                <h3 className="font-sans text-xl font-medium mb-3 text-accent">
                  {capability.title}
                </h3>
                <p className="font-sans text-sm text-muted mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.specs.map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className="font-sans text-xs text-muted border-l-2 border-accent/30 pl-3"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
