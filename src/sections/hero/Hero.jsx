import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logoImage from '../../components/Asset5.webp'

const Hero = () => {
  const videoRef = useRef(null)
  const logoRef = useRef(null)

  // Ensure video plays when loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [])

  // Simple logo animation - matching video aesthetic
  useEffect(() => {
    if (!logoRef.current) return

    const logo = logoRef.current

    // Simple fade-in entrance
    gsap.fromTo(logo, 
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5,
      }
    )

    // Very subtle floating - gentle vertical movement
    const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true })
    floatTimeline.to(logo, {
      y: -10,
      duration: 5,
      ease: 'sine.inOut',
    })

    // Subtle glow pulse - matching video's lighting
    const glowTimeline = gsap.timeline({ repeat: -1, yoyo: true })
    glowTimeline.to(logo, {
      filter: 'drop-shadow(0 0 50px rgba(255, 255, 255, 0.6)) brightness(1.2)',
      duration: 3,
      ease: 'sine.inOut',
    })

    return () => {
      floatTimeline.kill()
      glowTimeline.kill()
      gsap.killTweensOf(logo)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Logo Overlay - Centered */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{
          zIndex: 10,
        }}
      >
        <img
          ref={logoRef}
          src={logoImage}
          alt="PINAKKAA Logo"
          className="max-w-full h-auto"
          style={{
            maxWidth: '320px',
            width: '50%',
            height: 'auto',
            opacity: 0,
            filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.5)) brightness(1.15)',
            willChange: 'transform, opacity, filter',
            transformOrigin: 'center center',
          }}
        />
      </div>
    </section>
  )
}

export default Hero
