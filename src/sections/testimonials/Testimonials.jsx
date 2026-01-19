import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Inc.',
    role: 'CEO',
    content:
      'Pinakkaa transformed our online presence. Their SEO strategies increased our organic traffic by 300% in just 6 months. Exceptional service and results!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Fashion Forward',
    role: 'Marketing Director',
    content:
      'The team at Pinakkaa understood our brand vision perfectly. Their social media management and branding work has been outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'E-commerce Hub',
    role: 'Founder',
    content:
      'Our new e-commerce platform designed by Pinakkaa has exceeded all expectations. Sales have increased by 250% since launch. Professional and results-driven!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    company: 'StartupXYZ',
    role: 'Co-Founder',
    content:
      'Working with Pinakkaa has been a game-changer. Their data-driven approach and creative solutions helped us scale rapidly. Best investment we made!',
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      id="testimonials" 
      className="relative py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Data Overlay */}
      <div className="data-overlay top-8 left-6">007.1</div>
      <div className="data-overlay top-8 right-6">94.2</div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-mono text-3xl md:text-5xl font-bold mb-4"
            style={{ color: '#0A1B2E' }}
          >
            TESTIMONIALS
          </h2>
          <p 
            className="font-sans max-w-2xl mx-auto"
            style={{ color: '#7A8CA3' }}
          >
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-light p-12 border border-primary/10 text-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <Quote size={48} strokeWidth={1} className="text-accent/50 mx-auto mb-6" style={{ color: '#2F80ED' }} />
              <p 
                className="font-sans text-lg mb-8 leading-relaxed italic"
                style={{ color: '#0A1B2E' }}
              >
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#2F80ED' }}
                  />
                ))}
              </div>
              <h4 
                className="font-mono text-xl font-semibold mb-1"
                style={{ color: '#0A1B2E' }}
              >
                {testimonials[currentIndex].name}
              </h4>
              <p 
                className="font-sans text-sm"
                style={{ color: '#7A8CA3' }}
              >
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass-light border border-primary/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <ChevronLeft size={20} strokeWidth={1} style={{ color: '#2F80ED' }} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass-light border border-primary/10 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <ChevronRight size={20} strokeWidth={1} style={{ color: '#2F80ED' }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8'
                    : ''
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#2F80ED' : '#7A8CA3',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
