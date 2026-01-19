import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  // Ensure video plays when loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
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
    </section>
  )
}

export default Hero
