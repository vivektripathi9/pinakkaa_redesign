import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNoise3D } from 'simplex-noise'
import TypewriterEffectSmooth from '../../components/ui/TypewriterEffectSmooth'

const Wave = ({
  className = undefined,
  containerClassName = undefined,
  colors = undefined,
  waveWidth = undefined,
  backgroundFill = undefined,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
}) => {
  const words = [
    {
      text: 'Build',
    },
    {
      text: 'awesome',
    },
    {
      text: 'apps',
    },
    {
      text: 'with',
    },
    {
      text: 'PINAKKAA',
      className: 'text-black',
    },
  ]
  const canvasRef = useRef(null)
  const animationIdRef = useRef(null)
  const navigate = useNavigate()

  const handleJoinNow = () => {
    navigate('/contact')
  }

  const handleSignup = () => {
    navigate('/contact')
  }

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001
      case 'fast':
        return 0.002
      default:
        return 0.001
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const noise = createNoise3D()
    let w = ctx.canvas.width = window.innerWidth
    let h = ctx.canvas.height = window.innerHeight
    ctx.filter = `blur(${blur}px)`
    let nt = 0

    const handleResize = () => {
      w = ctx.canvas.width = window.innerWidth
      h = ctx.canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener('resize', handleResize)

    const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']

    const drawWave = (n) => {
      nt += getSpeed()
      for (let i = 0; i < n; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth || 50
        ctx.strokeStyle = waveColors[i % waveColors.length]
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100
          ctx.lineTo(x, y + h * 0.5) // adjust for height, currently at 50% of the container
        }
        ctx.stroke()
        ctx.closePath()
      }
    }

    const render = () => {
      ctx.fillStyle = backgroundFill || 'black'
      ctx.globalAlpha = waveOpacity || 0.5
      ctx.fillRect(0, 0, w, h)
      drawWave(5)
      animationIdRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [blur, speed, waveOpacity, waveWidth, backgroundFill, colors])

  return (
    <section
      id="backgroundwave"
      className={`flex h-screen flex-col items-center justify-center relative ${
        containerClassName || ''
      }`}
      style={{
        backgroundColor: backgroundFill || '#000000',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        id="canvas"
      />
      <div className={`relative z-10 flex flex-col items-center justify-center ${className || ''}`}>
        <div className="flex h-[40rem] flex-col items-center justify-center">
          <p className="text-xs text-neutral-300 sm:text-base mb-8">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-8">
            <button
              onClick={handleJoinNow}
              className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              Join now
            </button>
            <button
              onClick={handleSignup}
              className="h-10 w-40 rounded-xl border border-black bg-white text-sm text-black hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wave
