import React from 'react'
import { motion } from 'framer-motion'

// Placeholder client names - replace with actual logos
const clients = [
  'CLIENT A',
  'CLIENT B',
  'CLIENT C',
  'CLIENT D',
  'CLIENT E',
  'CLIENT F',
  'CLIENT G',
  'CLIENT H',
]

const ClientMarquee = () => {
  return (
    <section className="relative py-20 overflow-hidden border-y border-white/10">
      {/* Data Overlay */}
      <div className="data-overlay top-6 left-6">004.1</div>
      <div className="data-overlay top-6 right-6">91.3</div>

      <div className="container mx-auto">
        <motion.h2
          className="font-mono text-2xl md:text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TRUSTED BY INDUSTRY LEADERS
        </motion.h2>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 overflow-hidden">
            {/* First Set */}
            <motion.div
              className="flex gap-16 flex-shrink-0"
              animate={{
                x: [0, -100 * 8],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="font-mono text-2xl md:text-4xl font-bold text-gray-600 hover:text-terminal-green transition-colors duration-300 whitespace-nowrap grayscale hover:grayscale-0"
                >
                  {client}
                </div>
              ))}
            </motion.div>

            {/* Second Set (for seamless loop) */}
            <motion.div
              className="flex gap-16 flex-shrink-0"
              animate={{
                x: [0, -100 * 8],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="font-mono text-2xl md:text-4xl font-bold text-gray-600 hover:text-terminal-green transition-colors duration-300 whitespace-nowrap grayscale hover:grayscale-0"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientMarquee
