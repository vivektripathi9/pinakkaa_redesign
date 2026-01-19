import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  // Footer component commented out
  return null

  // COMMENTED OUT - Using Grn2 footer instead
  // Original footer code preserved below for reference:
  /*
  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="data-overlay bottom-6 left-6">009.1</div>
      <div className="data-overlay bottom-6 right-6">96.4</div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-mono text-sm text-muted mb-4">SYSTEM STATUS</h3>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-sm text-accent">ACTIVE</span>
            </div>
            <div className="mt-4 font-mono text-xs text-muted">
              UPTIME: 99.9%
              <br />
              LATENCY: &lt;50ms
            </div>
          </div>
          <div>
            <h3 className="font-mono text-sm text-muted mb-4">NAVIGATION</h3>
            <nav className="space-y-2">
              <a href="#why-choose-us" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">Why Choose Us</a>
              <a href="#about" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">About</a>
              <a href="#process" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">Process</a>
              <a href="#portfolio" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">Portfolio</a>
              <a href="#testimonials" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">Testimonials</a>
              <a href="/contact" className="block font-sans text-sm text-text/60 hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>
          <div>
            <h3 className="font-mono text-sm text-muted mb-4">CONNECT</h3>
            <div className="flex gap-4">
              <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-text/60 hover:text-accent transition-colors">
                <Github size={20} strokeWidth={1} />
              </motion.a>
              <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-text/60 hover:text-accent transition-colors">
                <Twitter size={20} strokeWidth={1} />
              </motion.a>
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-text/60 hover:text-accent transition-colors">
                <Linkedin size={20} strokeWidth={1} />
              </motion.a>
              <motion.a href="mailto:contact@example.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-text/60 hover:text-accent transition-colors">
                <Mail size={20} strokeWidth={1} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">© 2024 PINAKKAA. ALL RIGHTS RESERVED.</p>
          <div className="font-mono text-xs text-muted">VERSION: 1.0.0 | BUILD: 2024.01.15</div>
        </div>
      </div>
    </footer>
  )
  */
}

export default Footer
