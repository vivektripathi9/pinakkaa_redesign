import React from 'react'

/**
 * Placeholder component for 3D assets (Spline, Lottie, etc.)
 * Features a CSS glow effect that can be replaced with actual 3D content
 * 
 * Usage:
 * <Placeholder3D className="w-full h-96" />
 * 
 * To replace with Spline:
 * Replace this component with: <Spline scene="your-scene.splinecode" />
 * 
 * To replace with Lottie:
 * Replace this component with: <Lottie animationData={yourAnimation} />
 */
const Placeholder3D = ({ className = 'w-full h-96' }) => {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Glow Effect */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.15) 0%, rgba(0, 217, 255, 0.1) 50%, transparent 100%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Center Indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-32 h-32 border border-terminal-green/30 flex items-center justify-center glass">
          <span className="font-mono text-xs text-terminal-green/50 text-center px-2">
            3D ASSET
            <br />
            PLACEHOLDER
          </span>
        </div>
      </div>
    </div>
  )
}

export default Placeholder3D
