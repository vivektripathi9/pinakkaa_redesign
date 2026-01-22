import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const GiveYour = () => {
  const sectionRef = useRef(null)
  const heroBgTextRef = useRef(null)
  const bgTextWordRef = useRef(null)
  const heroHeadRef = useRef(null)
  const mainHeadRef = useRef(null)
  const typoTextRef = useRef(null)
  const creativeWarpCanvasRef = useRef(null)
  const particlesRef = useRef([])

  // Initial page animations
  useEffect(() => {
    if (!heroHeadRef.current || !mainHeadRef.current) return

    // Kill any existing animations first
    gsap.killTweensOf([heroHeadRef.current, mainHeadRef.current])

    // Set initial states
    gsap.set(heroHeadRef.current, { 
      opacity: 0, 
      y: '30vw',
      clearProps: 'all'
    })
    
    gsap.set(mainHeadRef.current, { 
      opacity: 0, 
      y: '30vw',
      clearProps: 'all'
    })

    // Create timeline with proper sequencing
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Hero head animation
    tl.to(heroHeadRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    })

    // Main head animation (starts slightly before hero head finishes)
    tl.to(
      mainHeadRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      '-=0.6'
    )

    return () => {
      gsap.killTweensOf([heroHeadRef.current, mainHeadRef.current])
    }
  }, [])

  // Background text particle animation
  useEffect(() => {
    if (!heroBgTextRef.current || !bgTextWordRef.current) return

    // const words = ['Pinakkaa', 'Precision', 'Power', 'Performance']
    // let currentWordIndex = 0
    // let particles = []
    return

    /* COMMENTED OUT - Background text particle animation
    // Hide the original word element
    if (bgTextWordRef.current) {
      bgTextWordRef.current.style.opacity = '0'
    }

    const createParticles = (word) => {
      // Clear existing particles
      particles.forEach((p) => {
        if (p.element && p.element.parentNode) {
          p.element.parentNode.removeChild(p.element)
        }
      })
      particles = []

      // Update hidden word to measure
      if (bgTextWordRef.current) {
        bgTextWordRef.current.textContent = word
      }
      const chars = word.split('')

      // Get the center position of the container
      const containerRect = heroBgTextRef.current.getBoundingClientRect()
      const centerX = containerRect.width / 2
      const centerY = 100

      // Create a temporary element to measure character positions
      const tempWord = document.createElement('span')
      tempWord.style.cssText = `
        font-size: 8vw;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        position: absolute;
        visibility: hidden;
        white-space: nowrap;
      `
      tempWord.textContent = word
      heroBgTextRef.current.appendChild(tempWord)
      const wordWidth = tempWord.offsetWidth
      heroBgTextRef.current.removeChild(tempWord)

      // Calculate starting X position to center the word
      const startX = centerX - wordWidth / 2

      // Create particle for each character
      chars.forEach((char, index) => {
        const particle = document.createElement('span')
        particle.textContent = char
        particle.className = 'bg-particle'
        particle.style.cssText = `
          position: absolute;
          font-size: 8vw;
          font-weight: 900;
          text-transform: uppercase;
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: blur(2px);
          opacity: 0;
          pointer-events: none;
          letter-spacing: 0.1em;
          will-change: transform, opacity;
        `

        // Calculate character position
        const tempChar = document.createElement('span')
        tempChar.style.cssText = `
          font-size: 8vw;
          font-weight: 900;
          letter-spacing: 0.1em;
          position: absolute;
          visibility: hidden;
        `
        tempChar.textContent = word.substring(0, index)
        heroBgTextRef.current.appendChild(tempChar)
        const charOffset = tempChar.offsetWidth
        heroBgTextRef.current.removeChild(tempChar)

        const targetX = startX + charOffset
        const targetY = centerY

        heroBgTextRef.current.appendChild(particle)

        particles.push({
          element: particle,
          targetX: targetX,
          targetY: targetY,
          char: char,
        })
      })

      return particles
    }

    const breakIntoParticles = () => {
      const tl = gsap.timeline()

      particles.forEach((particle, index) => {
        const randomX = particle.targetX + (Math.random() - 0.5) * 600
        const randomY = particle.targetY + (Math.random() - 0.5) * 600
        const randomRotation = (Math.random() - 0.5) * 360

        tl.to(
          particle.element,
          {
            x: randomX,
            y: randomY,
            rotation: randomRotation,
            scale: 0.3,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          },
          index * 0.02
        )
      })

      return tl
    }

    const formWord = (word) => {
      const newParticles = createParticles(word)
      const tl = gsap.timeline()

      newParticles.forEach((particle, index) => {
        const randomX = particle.targetX + (Math.random() - 0.5) * 600
        const randomY = particle.targetY + (Math.random() - 0.5) * 600
        const randomRotation = (Math.random() - 0.5) * 360

        gsap.set(particle.element, {
          x: randomX,
          y: randomY,
          rotation: randomRotation,
          scale: 0.3,
          opacity: 0,
        })
      })

      newParticles.forEach((particle, index) => {
        tl.to(
          particle.element,
          {
            x: particle.targetX,
            y: particle.targetY,
            rotation: 0,
            scale: 1,
            opacity: 0.4,
            duration: 1.2,
            ease: 'back.out(1.7)',
          },
          index * 0.04
        )
      })

      particles = newParticles
      return tl
    }

    const animateCycle = () => {
      const timeline = gsap.timeline({
        onComplete: () => {
          currentWordIndex = (currentWordIndex + 1) % words.length
          setTimeout(animateCycle, 300)
        },
      })

      if (particles.length > 0) {
        timeline.add(breakIntoParticles())
      }

      timeline.to({}, { duration: 0.4 })
      timeline.add(formWord(words[currentWordIndex]))
      timeline.to({}, { duration: 2.5 })
    }

    // Start with first word
    setTimeout(() => {
      formWord(words[0])
      setTimeout(animateCycle, 2000)
    }, 500)

    particlesRef.current = particles

    return () => {
      particles.forEach((p) => {
        if (p.element && p.element.parentNode) {
          gsap.killTweensOf(p.element)
          p.element.parentNode.removeChild(p.element)
        }
      })
      particlesRef.current = []
    }
    */
  }, [])

  // Typography animation - character by character for "a creative touch"
  useEffect(() => {
    if (!typoTextRef.current) return

    // Kill any existing animations first
    gsap.killTweensOf(typoTextRef.current.querySelectorAll('.char'))

    const text = 'a creative touch'
    //'Pinakkaa Precision Power Performance'
    typoTextRef.current.innerHTML = ''

    const chars = text.split('').map((char) => {
      const span = document.createElement('span')
      if (char === ' ') {
        span.className = 'space'
        span.innerHTML = '&nbsp;'
      } else {
        span.className = 'char'
        span.textContent = char
      }
      typoTextRef.current.appendChild(span)
      return span
    })

    const charSpans = typoTextRef.current.querySelectorAll('.char')

    // Set all characters to be visible immediately with proper initial state
    charSpans.forEach((char) => {
      gsap.set(char, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        rotationY: 0,
        rotationZ: 0,
        filter: 'blur(0px)',
        clearProps: 'all'
      })
    })

    // Wait for main head animation to complete before starting typography animation
    const tl = gsap.timeline({ delay: 1.2 })

    charSpans.forEach((char, index) => {
      const animType = index % 4

      switch (animType) {
        case 0:
          // Already visible, just add subtle entrance animation
          tl.to(
            char,
            {
              y: -5,
              duration: 0.4,
              ease: 'power2.out',
            },
            index * 0.03
          )
          tl.to(
            char,
            {
              y: 0,
              duration: 0.4,
              ease: 'power2.inOut',
            },
            '-=0.2'
          )
          break

        case 1:
          // Already visible, add subtle entrance animation
          tl.to(
            char,
            {
              x: -10,
              duration: 0.3,
              ease: 'power2.out',
            },
            index * 0.03
          )
          tl.to(
            char,
            {
              x: 0,
              duration: 0.3,
              ease: 'power2.inOut',
            },
            '-=0.15'
          )
          break

        case 2:
          // Already visible, add subtle scale animation
          tl.to(
            char,
            {
              scale: 1.1,
              duration: 0.3,
              ease: 'power2.out',
            },
            index * 0.03
          )
          tl.to(
            char,
            {
              scale: 1,
              duration: 0.3,
              ease: 'power2.inOut',
            },
            '-=0.15'
          )
          break

        case 3:
          // Already visible, add subtle rotation animation
          tl.to(
            char,
            {
              rotation: 5,
              duration: 0.3,
              ease: 'power2.out',
            },
            index * 0.03
          )
          tl.to(
            char,
            {
              rotation: 0,
              duration: 0.3,
              ease: 'power2.inOut',
            },
            '-=0.15'
          )
          break
      }
    })

    // Wave effect after all characters are in
    tl.add(() => {
      charSpans.forEach((char, index) => {
        gsap.to(char, {
          y: -20,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.03,
        })
      })
    }, '+=0.2')

    // Gradient animation effect
    tl.add(() => {
      charSpans.forEach((char, index) => {
        gsap.to(char, {
          backgroundPosition: '200% 50%',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.05,
        })
      })
    }, '+=0.3')

    // Continuous subtle animations
    tl.add(() => {
      charSpans.forEach((char, index) => {
        gsap.to(char, {
          y: Math.random() * 10 - 5,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1,
        })

        gsap.to(char, {
          rotation: (Math.random() - 0.5) * 5,
          duration: 3 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.15,
        })
      })
    })

    // Hover effect
    const handleMouseEnter = () => {
      charSpans.forEach((char, index) => {
        gsap.to(char, {
          backgroundPosition: '400% 50%',
          duration: 0.15,
          ease: 'power2.inOut',
          delay: index * 0.01,
          repeat: 3,
          yoyo: true,
        })
      })
    }

    const handleMouseLeave = () => {
      charSpans.forEach((char, index) => {
        gsap.to(char, {
          backgroundPosition: '0% 50%',
          duration: 0.3,
          ease: 'power2.out',
          delay: index * 0.01,
        })
      })
    }

    typoTextRef.current.addEventListener('mouseenter', handleMouseEnter)
    typoTextRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      // Cleanup animations
      gsap.killTweensOf(charSpans)
      if (typoTextRef.current) {
        typoTextRef.current.removeEventListener('mouseenter', handleMouseEnter)
        typoTextRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Creative warp speed canvas animation
  useEffect(() => {
    if (!creativeWarpCanvasRef.current || !typoTextRef.current) return

    const canvas = creativeWarpCanvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let beams = []
    let animationId = null
    let isAnimating = false

    const resizeCanvas = () => {
      const rect = typoTextRef.current.getBoundingClientRect()
      canvas.width = rect.width + 100
      canvas.height = rect.height + 50
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Beam {
      constructor() {
        this.reset()
      }

      reset() {
        const rect = typoTextRef.current.getBoundingClientRect()
        this.x = -100
        this.y = Math.random() * canvas.height
        this.width = Math.random() * 2 + 0.5
        this.length = Math.random() * 100 + 50
        this.speed = Math.random() * 15 + 20
        this.opacity = Math.random() * 0.4 + 0.3
      }

      update() {
        this.x += this.speed
        if (this.x > canvas.width + 100) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y)
        gradient.addColorStop(0, 'rgba(96, 165, 250, 0)')
        gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.8)')
        gradient.addColorStop(1, 'rgba(244, 114, 182, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(this.x, this.y - this.width / 2, this.length, this.width)

        ctx.restore()
      }
    }

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 3
        this.speedY = (Math.random() - 0.5) * 3
        this.life = Math.random() * 100 + 50
        this.maxLife = this.life
        this.opacity = Math.random() * 0.5 + 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life--
        this.opacity = (this.life / this.maxLife) * 0.8

        if (this.life <= 0) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        )
        gradient.addColorStop(0, 'rgba(96, 165, 250, 1)')
        gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.8)')
        gradient.addColorStop(1, 'rgba(244, 114, 182, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    const initParticles = () => {
      particles = []
      beams = []

      const particleCount = 60
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      const beamCount = 25
      for (let i = 0; i < beamCount; i++) {
        beams.push(new Beam())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        beam.update()
        beam.draw()
      })

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      if (isAnimating) {
        animationId = requestAnimationFrame(animate)
      }
    }

    const handleMouseEnter = () => {
      if (!isAnimating) {
        isAnimating = true
        resizeCanvas()
        initParticles()
        canvas.style.opacity = '1'
        animate()
      }
    }

    const handleMouseLeave = () => {
      isAnimating = false
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
      canvas.style.opacity = '0'
      setTimeout(() => {
        if (!isAnimating) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          particles = []
          beams = []
        }
      }, 300)
    }

    typoTextRef.current.addEventListener('mouseenter', handleMouseEnter)
    typoTextRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      // Cleanup
      isAnimating = false
      window.removeEventListener('resize', resizeCanvas)
      if (typoTextRef.current) {
        typoTextRef.current.removeEventListener('mouseenter', handleMouseEnter)
        typoTextRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles = []
      beams = []
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="page-1"
      style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: '#000',
        paddingTop: 'clamp(60px, 8vw, 120px)',
      }}
    >
      <div
        id="hero-handle"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          position: 'relative',
        }}
      >
        {/* Background Text */}
        <div
          ref={heroBgTextRef}
          id="hero-bg-text"
          style={{
            position: 'absolute',
            width: '100%',
            height: 'clamp(180px, 30vw, 320px)',
            top: 0,
            left: 0,
            transform: 'translateY(80px)',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'visible',
          }}
        >
          <span
            ref={bgTextWordRef}
            id="bg-text-word"
            style={{
              fontSize: '8vw',
              fontWeight: 900,
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(2px)',
              opacity: 0,
              display: 'inline-block',
              position: 'absolute',
              letterSpacing: '0.1em',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Pinakkaa
          </span>
        </div>

        {/* Hero Head */}
        <div
          ref={heroHeadRef}
          id="hero-head"
          style={{
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            opacity: 0,
          }}
        >
          <h1
            style={{
              textTransform: 'uppercase',
              fontSize: 'clamp(3rem, 10vw, 12rem)',
              lineHeight: 0.92,
              color: '#a3a3a3',
              paddingLeft: '30px',
              marginTop: '30px',
              marginBottom: '0',
              position: 'relative',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              width: '100%',
            }}
          >
            give your brand
          </h1>
        </div>

        {/* Main Head */}
        <div
          ref={mainHeadRef}
          id="main-head"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '20px',
            // gap: '0',
            textAlign: 'start',
            overflow: 'visible',
            marginTop: 'clamp(20px, 4vw, 60px)',
            opacity: 0,
          }}
        >
          <canvas
            ref={creativeWarpCanvasRef}
            id="creative-warp-canvas"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 5,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              overflow: 'hidden',
              maxWidth: '100%',
            }}
          />
          <h1
            ref={typoTextRef}
            id="typo-text"
            style={{
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              opacity: 1,
              textTransform: 'uppercase',
              fontSize: 'clamp(3rem, 10vw, 12rem)',
              lineHeight: 1,
              paddingTop: '0.1em',
              color: '#a3a3a3',
              paddingLeft: '30px',
              marginTop: '0',
              marginBottom: '0',
              width: '100%',
              position: 'relative',
            }}
            onMouseEnter={() => {
              if (typoTextRef.current) {
                typoTextRef.current.style.background =
                  'linear-gradient(135deg, #ff6b9d, #4ecdc4, #45b7d1)'
                typoTextRef.current.style.WebkitBackgroundClip = 'text'
                typoTextRef.current.style.WebkitTextFillColor = 'transparent'
                typoTextRef.current.style.backgroundClip = 'text'
              }
            }}
            onMouseLeave={() => {
              if (typoTextRef.current) {
                typoTextRef.current.style.background = ''
                typoTextRef.current.style.WebkitBackgroundClip = ''
                typoTextRef.current.style.WebkitTextFillColor = ''
                typoTextRef.current.style.backgroundClip = ''
                typoTextRef.current.style.color = '#a3a3a3'
              }
            }}
          >
            a creative touch
          </h1>
        </div>
      </div>

      {/* Character styles */}
      <style>{`
        #typo-text {
          position: relative;
          z-index: 20;
        }
        #typo-text .char {
          display: inline-block;
          opacity: 1;
          transform: translateY(0) scale(1) rotateZ(0deg);
          filter: blur(0px);
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6, #fb923c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
        }
        #typo-text .space {
          display: inline-block;
          width: 0.15em;
        }
        @media (max-width: 768px) {
          #hero-head h1,
          #typo-text {
            font-size: clamp(2.5rem, 12vw, 4rem) !important;
            line-height: 1 !important;
            white-space: normal !important;
          }
          #hero-bg-text {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default GiveYour
