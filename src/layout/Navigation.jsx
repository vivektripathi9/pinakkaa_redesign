import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoImage from '../components/Asset5.webp'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling down (after initial 100px)
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setIsVisible(true)
        setIsScrolled(true)
      } 
      // Hide navbar when scrolling up or at the top
      else if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(false)
        setIsScrolled(currentScrollY > 50)
      }
      
      lastScrollY.current = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero', isRoute: false },
    { name: 'Why Us', href: '#why-choose-us', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Services', href: '#services-new', isRoute: false },
    { name: 'Portfolio', href: '#portfolio', isRoute: false },
    { name: 'Testimonials', href: '#testimonials', isRoute: false },
    { name: 'Contact', href: '/contact', isRoute: true },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLinkClick = (link, e) => {
    e.preventDefault()
    if (link.isRoute) {
      navigate(link.href)
      setIsMobileMenuOpen(false)
    } else {
      scrollToSection(link.href)
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#000000',
        paddingTop: isScrolled ? '1.5rem' : '2rem',
        paddingBottom: isScrolled ? '1.5rem' : '2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4,
        ease: 'easeInOut'
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={logoImage} 
                alt="PINAKKAA Logo" 
                className="h-12 md:h-16 w-auto"
                style={{ maxHeight: '64px' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-sans text-base text-white/80 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className="font-sans text-base text-white/80 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-6 p-6 rounded"
            style={{
              backgroundColor: '#000000',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 font-sans text-sm text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className="block py-3 font-sans text-sm text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                >
                  {link.name}
                </a>
              )
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
