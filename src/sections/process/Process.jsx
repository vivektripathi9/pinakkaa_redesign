import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Process = () => {
  const sectionRef = useRef(null)
  const videoContainerRef = useRef(null)
  const videoRef = useRef(null)
  const textContainerRef = useRef(null)
  const timelineRef = useRef(null)
  const videoSourcesRef = useRef([])

  // Process steps with video sources and text content (3 slides only)
  const processSteps = [
    {
      id: 1,
      label: 'Benefit 01',
      headline: 'Strategic Foundation',
      subheadline: 'Building the Core',
      description: 'We establish a comprehensive understanding of your business objectives, market position, and competitive landscape. Our strategic foundation ensures every decision is data-driven and aligned with your long-term vision.',
      video: '/videos/a-1.mp4',
    },
    {
      id: 2,
      label: 'Benefit 02',
      headline: 'System Architecture',
      subheadline: 'Engineering Excellence',
      description: 'Our technical team designs scalable, robust systems that grow with your business. We leverage cutting-edge technologies and best practices to build infrastructure that performs under any load.',
      video: '/videos/a-2.mp4',
    },
    {
      id: 3,
      label: 'Benefit 03',
      headline: 'Intelligent Automation',
      subheadline: 'Streamlined Operations',
      description: 'Automation eliminates manual processes and reduces human error. We implement intelligent workflows that adapt to your business needs, freeing your team to focus on high-value strategic work.',
      video: '/videos/a-3.mp4',
    },
  ]

  // Preload all videos
  useEffect(() => {
    const videos = []
    processSteps.forEach((step) => {
      const video = document.createElement('video')
      video.src = step.video
      video.preload = 'auto'
      video.muted = true
      video.load()
      videos.push(video)
      videoSourcesRef.current.push(video)
    })

    return () => {
      videos.forEach(video => {
        video.src = ''
        video.load()
      })
      videoSourcesRef.current = []
    }
  }, [])

  // Main animation setup
  useEffect(() => {
    if (!sectionRef.current || !videoContainerRef.current || !videoRef.current || !textContainerRef.current) {
      return
    }

    const section = sectionRef.current
    const videoContainer = videoContainerRef.current
    const video = videoRef.current
    const textContainer = textContainerRef.current
    const viewportHeight = window.innerHeight

    let isMounted = true
    const textElements = []
    let scrollTriggerInstance = null

    // Cleanup function
    const cleanup = () => {
      isMounted = false

      try {
        if (timelineRef.current) {
          timelineRef.current.kill()
          timelineRef.current = null
        }

        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill()
          scrollTriggerInstance = null
        }

        ScrollTrigger.getAll().forEach(trigger => {
          try {
            if (trigger.vars?.trigger && section?.contains(trigger.vars.trigger)) {
              trigger.kill()
            }
          } catch (e) {
            // Ignore cleanup errors
          }
        })

        // Clean up text elements
        textElements.forEach(el => {
          try {
            if (el && el.parentNode) {
              el.parentNode.removeChild(el)
            }
          } catch (e) {
            // Ignore cleanup errors
          }
        })
      } catch (error) {
        console.error('Cleanup error:', error)
      }
    }

    try {
      // Set initial video source
      video.src = processSteps[0].video
      video.load()
      video.play().catch(() => {})

      // Create text elements for each step with two-column layout
      processSteps.forEach((step, index) => {
        const textEl = document.createElement('div')
        textEl.className = 'process-text-item'
        textEl.style.position = 'absolute'
        textEl.style.width = '100%'
        textEl.style.top = '0'
        textEl.style.left = '0'
        textEl.style.opacity = index === 0 ? '1' : '0'
        textEl.style.willChange = 'opacity, transform'
        textEl.innerHTML = `
          <div class="process-text-grid">
            <div class="process-text-left">
              <div class="process-label">${step.label}</div>
              <h2 class="process-headline">${step.headline}</h2>
            </div>
            <div class="process-text-right">
              <p class="process-description">${step.description}</p>
            </div>
          </div>
        `
        textContainer.appendChild(textEl)
        textElements.push(textEl)

        // Set initial state
        if (index === 0) {
          gsap.set(textEl, {
            opacity: 1,
            y: 0,
          })
        } else {
          gsap.set(textEl, {
            opacity: 0,
            y: 10,
          })
        }
      })

      // Calculate scroll distance - 450vh total
      const scrollDistance = viewportHeight * 4.5

      // Create master timeline with pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
          markers: false,
          onEnter: () => {
            // Section entered - animations active
          },
          onLeave: () => {
            // Section left - animations stop
          },
          onEnterBack: () => {
            // Scrolled back into section
          },
          onLeaveBack: () => {
            // Scrolled back out of section
          },
        },
      })

      scrollTriggerInstance = tl.scrollTrigger
      timelineRef.current = tl

      // Calculate step duration
      const totalDuration = 1
      const stepDuration = totalDuration / processSteps.length

      // Create video and text transitions for each step
      processSteps.forEach((step, index) => {
        if (index === 0) {
          // Initial state
          gsap.set(video, {
            opacity: 1,
            scale: 1,
          })
          return
        }

        const stepStart = stepDuration * index
        const transitionDuration = stepDuration * 0.3 // 30% of step duration for transition

        // Video transition: fade out + scale down, then fade in + scale up
        tl.to(
          video,
          {
            opacity: 0.2,
            scale: 0.95,
            duration: transitionDuration * 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              if (!isMounted) return
              // Change video source at fade midpoint
              video.src = step.video
              video.load()

              const playVideo = () => {
                if (video.readyState >= 2) {
                  video.play().catch(() => {})
                  video.removeEventListener('loadeddata', playVideo)
                }
              }
              video.addEventListener('loadeddata', playVideo)
              if (video.readyState >= 2) {
                playVideo()
              }
            },
          },
          stepStart
        )
        .to(
          video,
          {
            opacity: 1,
            scale: 1,
            duration: transitionDuration * 0.5,
            ease: 'power3.inOut',
          },
          stepStart + (transitionDuration * 0.5)
        )

        // Text transition: fade out previous, fade in new
        // Fade out previous text
        if (index > 0) {
          tl.to(
            textElements[index - 1],
            {
              opacity: 0,
              y: -10,
              duration: transitionDuration * 0.5,
              ease: 'power3.inOut',
            },
            stepStart - (transitionDuration * 0.1)
          )
        }

        // Fade in new text
        tl.to(
          textElements[index],
          {
            opacity: 1,
            y: 0,
            duration: transitionDuration * 0.5,
            ease: 'power3.inOut',
          },
          stepStart
        )
      })

      // Ensure last text stays visible
      const lastTextStart = stepDuration * (processSteps.length - 1)
      tl.to(
        textElements[textElements.length - 1],
        {
          opacity: 1,
          duration: stepDuration * 0.2,
          ease: 'power3.inOut',
        },
        lastTextStart + (stepDuration * 0.8)
      )

      // Handle video loading
      const handleVideoLoad = () => {
        if (video.readyState >= 2) {
          video.play().catch(() => {})
        }
      }

      video.addEventListener('loadeddata', handleVideoLoad)

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh()

      return cleanup
    } catch (error) {
      console.error('Process section setup error:', error)
      return cleanup
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full"
      style={{
        minHeight: '450vh', // 450vh total height as specified
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.12,
          backgroundImage: `
            linear-gradient(rgba(10, 27, 46, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 27, 46, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Video Container - Pinned at top, ~70% viewport height */}
      <div
        ref={videoContainerRef}
        className="relative w-full"
        style={{
          height: '70vh',
          minHeight: '500px',
          maxHeight: '800px',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        {/* Single Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            willChange: 'transform, opacity',
            transformOrigin: 'center center',
          }}
        />

        {/* Subtle Video Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      {/* Text Container - Below video, two-column layout */}
      <div
        ref={textContainerRef}
        className="relative w-full px-6 md:px-12 lg:px-24 pt-20 md:pt-32 pb-8 md:pb-12"
        style={{
          minHeight: '30vh',
          zIndex: 3,
          backgroundColor: '#FFFFFF',
          position: 'relative',
        }}
      >
        {/* Text elements are dynamically inserted here */}
      </div>
    </section>
  )
}

export default Process
