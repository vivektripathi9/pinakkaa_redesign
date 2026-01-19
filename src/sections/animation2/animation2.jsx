import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Animation2 = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const textElementsRef = useRef([])
  const animationsRef = useRef([])

  // Text lines to display
  const textLines = [
    'GIVE YOUR BRAND',
    'A CREATIVE TOUCH',
    'PRECISION'
  ]

  // Gradient colors - purple, pink, blue
  const gradientColors = [
    { start: '#8B5CF6', end: '#EC4899' }, // Purple to Pink
    { start: '#EC4899', end: '#3B82F6' }, // Pink to Blue
    { start: '#3B82F6', end: '#8B5CF6' }, // Blue to Purple
  ]

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return

    const section = sectionRef.current
    const container = containerRef.current

    // Clear container
    container.innerHTML = ''

    // Create text elements for each line
    textLines.forEach((line, lineIndex) => {
      const lineElement = document.createElement('div')
      lineElement.className = 'text-line'
      lineElement.style.position = 'relative'
      lineElement.style.display = 'block'
      lineElement.style.marginBottom = lineIndex < textLines.length - 1 ? '60px' : '0'
      lineElement.style.textAlign = 'center'
      lineElement.style.width = '100%'
      lineElement.style.opacity = '0'

      // Create the main text element
      const textElement = document.createElement('div')
      textElement.className = 'main-text'
      textElement.textContent = line
      textElement.style.fontFamily = 'system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
      textElement.style.fontSize = 'clamp(48px, 8vw, 120px)'
      textElement.style.fontWeight = '700'
      textElement.style.letterSpacing = '0.08em'
      textElement.style.whiteSpace = 'nowrap'
      textElement.style.textTransform = 'uppercase'
      textElement.style.background = `linear-gradient(90deg, ${gradientColors[lineIndex % gradientColors.length].start}, ${gradientColors[lineIndex % gradientColors.length].end})`
      textElement.style.webkitBackgroundClip = 'text'
      textElement.style.webkitTextFillColor = 'transparent'
      textElement.style.backgroundClip = 'text'
      textElement.style.backgroundSize = '200% 100%'
      textElement.style.backgroundPosition = '0% 50%'
      textElement.style.willChange = 'background-position, opacity, transform'

      lineElement.appendChild(textElement)
      container.appendChild(lineElement)

      textElementsRef.current.push({
        lineElement,
        textElement,
        lineIndex
      })
    })

    // Animate each line with gradient flow and fade
    textElementsRef.current.forEach((textData, index) => {
      const { lineElement, textElement, lineIndex } = textData

      // Initial fade in animation
      gsap.fromTo(
        lineElement,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: index * 0.3
        }
      )

      // Gradient flow animation - smooth left to right
      const gradientFlow = gsap.to(textElement, {
        backgroundPosition: '100% 50%',
        duration: 4 + (lineIndex * 0.5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
      animationsRef.current.push(gradientFlow)

      // Subtle scale pulse
      const scalePulse = gsap.to(textElement, {
        scale: 1.02,
        duration: 3 + (lineIndex * 0.3),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      })
      animationsRef.current.push(scalePulse)

      // Opacity breathing effect
      const opacityBreath = gsap.to(textElement, {
        opacity: 0.95,
        duration: 2.5 + (lineIndex * 0.2),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.15
      })
      animationsRef.current.push(opacityBreath)
    })

    // Hover interaction - intensify gradient and scale
    const handleMouseEnter = (e) => {
      const target = e.target.closest('.text-line')
      if (!target) return

      const textElement = target.querySelector('.main-text')
      if (textElement) {
        gsap.to(textElement, {
          scale: 1.08,
          opacity: 1,
          backgroundPosition: '150% 50%',
          duration: 0.5,
          ease: 'power2.out'
        })
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target.closest('.text-line')
      if (!target) return

      const textElement = target.querySelector('.main-text')
      if (textElement) {
        gsap.to(textElement, {
          scale: 1,
          opacity: 0.95,
          duration: 0.6,
          ease: 'power2.out'
        })
      }
    }

    // Add event listeners to each line
    textElementsRef.current.forEach((textData) => {
      textData.lineElement.addEventListener('mouseenter', handleMouseEnter)
      textData.lineElement.addEventListener('mouseleave', handleMouseLeave)
      textData.lineElement.style.cursor = 'default'
    })

    return () => {
      // Cleanup event listeners
      textElementsRef.current.forEach((textData) => {
        if (textData.lineElement) {
          textData.lineElement.removeEventListener('mouseenter', handleMouseEnter)
          textData.lineElement.removeEventListener('mouseleave', handleMouseLeave)
        }
      })

      // Cleanup animations
      animationsRef.current.forEach(anim => {
        if (anim && anim.kill) anim.kill()
      })

      textElementsRef.current.forEach((textData) => {
        if (textData.textElement) {
          gsap.killTweensOf(textData.textElement)
        }
        if (textData.lineElement) {
          gsap.killTweensOf(textData.lineElement)
        }
      })

      textElementsRef.current = []
      animationsRef.current = []
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="animation2"
      className="relative w-full flex items-center justify-center"
      style={{
        height: '100vh',
        backgroundColor: '#000000',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
        cursor: 'default',
      }}
    >
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center"
        style={{
          width: '100%',
          height: '100%',
          padding: '0 40px',
        }}
      >
        {/* Text elements will be dynamically created */}
      </div>
    </section>
  )
}

export default Animation2
