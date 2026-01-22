import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Alphabets = () => {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const particlesRef = useRef([])
  const gradientBlobsRef = useRef([])
  const lightWavesRef = useRef([])
  const animatedGridRef = useRef(null)
  const gradientOrbsRef = useRef([])
  const noiseCanvasRef = useRef(null)

  // Text reveal animation
  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current) return

    // Staggered reveal - line 1 first, then line 2
    gsap.fromTo(
      line1Ref.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3,
      }
    )

    gsap.fromTo(
      line2Ref.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.6,
      }
    )
  }, [])

  // Ambient Background Motion - Floating Particles
  useEffect(() => {
    if (!sectionRef.current) return

    const particles = []
    const particleCount = 15

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 200 + 100 // 100-300px
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      
      particle.style.position = 'absolute'
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.borderRadius = '50%'
      particle.style.left = `${startX}%`
      particle.style.top = `${startY}%`
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '0'
      particle.style.opacity = '0.03'
      
      // Gradient colors matching the text gradient
      const colors = ['#C084FC', '#A78BFA', '#818CF8', '#60A5FA', '#3B82F6']
      const color = colors[Math.floor(Math.random() * colors.length)]
      
      particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`
      particle.style.filter = 'blur(40px)'
      
      sectionRef.current.appendChild(particle)
      particles.push(particle)
      particlesRef.current.push(particle)

      // Slow floating animation
      const duration = 20 + Math.random() * 20 // 20-40 seconds
      const moveX = (Math.random() - 0.5) * 200
      const moveY = (Math.random() - 0.5) * 200

      gsap.to(particle, {
        x: `+=${moveX}`,
        y: `+=${moveY}`,
        duration: duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 5,
      })
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          gsap.killTweensOf(particle)
          particle.parentNode.removeChild(particle)
        }
      })
      particlesRef.current = []
    }
  }, [])

  // Ambient Background Motion - Gradient Blobs
  useEffect(() => {
    if (!sectionRef.current) return

    const blobs = []
    const blobCount = 4

    for (let i = 0; i < blobCount; i++) {
      const blob = document.createElement('div')
      const size = Math.random() * 400 + 300 // 300-700px
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      
      blob.style.position = 'absolute'
      blob.style.width = `${size}px`
      blob.style.height = `${size}px`
      blob.style.borderRadius = '50%'
      blob.style.left = `${startX}%`
      blob.style.top = `${startY}%`
      blob.style.pointerEvents = 'none'
      blob.style.zIndex = '0'
      blob.style.opacity = '0.05'
      blob.style.transform = 'translate(-50%, -50%)'
      
      // Gradient blob colors
      const gradients = [
        'radial-gradient(circle, rgba(192, 132, 252, 0.15) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, transparent 70%)',
      ]
      
      blob.style.background = gradients[i % gradients.length]
      blob.style.filter = 'blur(60px)'
      
      sectionRef.current.appendChild(blob)
      blobs.push(blob)
      gradientBlobsRef.current.push(blob)

      // Ultra-slow movement
      const duration = 30 + Math.random() * 30 // 30-60 seconds
      const moveX = (Math.random() - 0.5) * 300
      const moveY = (Math.random() - 0.5) * 300

      gsap.to(blob, {
        x: `+=${moveX}`,
        y: `+=${moveY}`,
        scale: 1 + Math.random() * 0.5,
        duration: duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 10,
      })
    }

    return () => {
      blobs.forEach(blob => {
        if (blob.parentNode) {
          gsap.killTweensOf(blob)
          blob.parentNode.removeChild(blob)
        }
      })
      gradientBlobsRef.current = []
    }
  }, [])

  // Ambient Background Motion - Light Waves
  useEffect(() => {
    if (!sectionRef.current) return

    const waves = []
    const waveCount = 3

    for (let i = 0; i < waveCount; i++) {
      const wave = document.createElement('div')
      wave.style.position = 'absolute'
      wave.style.inset = '0'
      wave.style.pointerEvents = 'none'
      wave.style.zIndex = '0'
      wave.style.opacity = '0.08'
      
      const angle = i * 60 // Different angles
      const gradient = `linear-gradient(${angle}deg, 
        transparent 0%, 
        rgba(192, 132, 252, 0.1) 30%, 
        rgba(96, 165, 250, 0.1) 50%, 
        rgba(192, 132, 252, 0.1) 70%, 
        transparent 100%
      )`
      wave.style.background = gradient
      wave.style.backgroundSize = '200% 200%'
      
      sectionRef.current.appendChild(wave)
      waves.push(wave)
      lightWavesRef.current.push(wave)

      // Slow wave movement
      const duration = 25 + i * 5 // 25-35 seconds
      gsap.to(wave, {
        backgroundPosition: '200% 200%',
        duration: duration,
        ease: 'linear',
        repeat: -1,
        delay: i * 2,
      })
    }

    return () => {
      waves.forEach(wave => {
        if (wave.parentNode) {
          gsap.killTweensOf(wave)
          wave.parentNode.removeChild(wave)
        }
      })
      lightWavesRef.current = []
    }
  }, [])

  // Animated Grid Background
  useEffect(() => {
    if (!sectionRef.current) return

    const grid = document.createElement('div')
    grid.style.position = 'absolute'
    grid.style.inset = '0'
    grid.style.pointerEvents = 'none'
    grid.style.zIndex = '0'
    grid.style.opacity = '0.1'
    grid.style.backgroundImage = `
      linear-gradient(rgba(192, 132, 252, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(192, 132, 252, 0.1) 1px, transparent 1px)
    `
    grid.style.backgroundSize = '80px 80px'
    grid.style.filter = 'blur(0.5px)'
    
    sectionRef.current.appendChild(grid)
    animatedGridRef.current = grid

    // Animate grid position
    gsap.to(grid, {
      backgroundPosition: '80px 80px',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    })

    return () => {
      if (grid.parentNode) {
        gsap.killTweensOf(grid)
        grid.parentNode.removeChild(grid)
      }
    }
  }, [])

  // Flowing Gradient Orbs
  useEffect(() => {
    if (!sectionRef.current) return

    const orbs = []
    const orbCount = 6

    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement('div')
      const size = Math.random() * 150 + 100 // 100-250px
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      
      orb.style.position = 'absolute'
      orb.style.width = `${size}px`
      orb.style.height = `${size}px`
      orb.style.borderRadius = '50%'
      orb.style.left = `${startX}%`
      orb.style.top = `${startY}%`
      orb.style.pointerEvents = 'none'
      orb.style.zIndex = '0'
      orb.style.opacity = '0.12'
      orb.style.transform = 'translate(-50%, -50%)'
      
      // Flowing gradient colors
      const gradients = [
        'radial-gradient(circle, rgba(192, 132, 252, 0.2) 0%, rgba(167, 139, 250, 0.1) 50%, transparent 100%)',
        'radial-gradient(circle, rgba(129, 140, 248, 0.18) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 100%)',
        'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
      ]
      
      orb.style.background = gradients[i % gradients.length]
      orb.style.filter = 'blur(50px)'
      
      sectionRef.current.appendChild(orb)
      orbs.push(orb)
      gradientOrbsRef.current.push(orb)

      // Flowing circular motion
      const radius = 150 + Math.random() * 100
      const duration = 15 + Math.random() * 10 // 15-25 seconds
      const angle = (i / orbCount) * Math.PI * 2

      gsap.to(orb, {
        motionPath: {
          path: `M 0,0 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`,
          autoRotate: false,
        },
        duration: duration,
        ease: 'linear',
        repeat: -1,
        delay: i * 0.5,
      })

      // Alternative: Simple floating motion if motionPath not available
      const moveX = (Math.random() - 0.5) * 400
      const moveY = (Math.random() - 0.5) * 400
      
      gsap.to(orb, {
        x: `+=${moveX}`,
        y: `+=${moveY}`,
        scale: 0.8 + Math.random() * 0.4,
        rotation: 360,
        duration: duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.5,
      })
    }

    return () => {
      orbs.forEach(orb => {
        if (orb.parentNode) {
          gsap.killTweensOf(orb)
          orb.parentNode.removeChild(orb)
        }
      })
      gradientOrbsRef.current = []
    }
  }, [])

  // Animated Noise/Grain Texture
  useEffect(() => {
    if (!sectionRef.current) return

    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '0'
    canvas.style.opacity = '0.15'
    canvas.style.mixBlendMode = 'overlay'
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    sectionRef.current.appendChild(canvas)
    noiseCanvasRef.current = canvas

    // Generate animated noise
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value     // R
        data[i + 1] = value // G
        data[i + 2] = value // B
        data[i + 3] = 20    // A (low opacity)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    generateNoise()

    // Animate noise every frame
    let animationFrame
    const animate = () => {
      generateNoise()
      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateNoise()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  // Subtle parallax on scroll
  useEffect(() => {
    if (!sectionRef.current || !headlineRef.current) return

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to(headlineRef.current, {
          y: progress * 20,
          opacity: 1 - progress * 0.2,
          ease: 'none',
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="alphabets"
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100vh',
        backgroundColor: '#000000', // Solid black background
        position: 'relative',
      }}
    >
      {/* Content Container */}
      <div
        ref={headlineRef}
        className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24"
        style={{
          zIndex: 1,
        }}
      >
        {/* Line 1: "GIVE YOUR BRAND" - Solid Light Grey */}
        <div
          ref={line1Ref}
          className="text-center mb-4 md:mb-6"
          style={{
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 'clamp(36px, 6vw, 96px)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              color: '#D0D0D0', // Light grey
              textTransform: 'uppercase',
            }}
          >
            GIVE YOUR BRAND
          </span>
        </div>

        {/* Line 2: "A CREATIVE TOUCH" - Gradient from Purple/Pink to Blue */}
        <div
          ref={line2Ref}
          className="text-center"
          style={{
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 'clamp(36px, 6vw, 96px)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #C084FC 0%, #A78BFA 25%, #818CF8 50%, #60A5FA 75%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            A CREATIVE TOUCH
          </span>
        </div>
      </div>
    </section>
  )
}

export default Alphabets
