import React, { useLayoutEffect } from 'react'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import Explore from '../sections/explore/Explore'
import Testimonials from '../sections/testimonials/Testimonials'
import Green from '../sections/green/green'
import Grn2 from '../sections/grn2/grn2'

const ExplorePage = () => {
  // Scroll to top instantly BEFORE browser paints (no visible scroll)
  useLayoutEffect(() => {
    // Set scroll position directly - happens synchronously before paint
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="min-h-screen relative">
      <div className="grid-bg noise-grain scanline fixed inset-0 -z-10" />
      <Navigation />
      <Explore />
      <Testimonials />
      <Green />
      <Grn2 />
      <Footer />
    </div>
  )
}

export default ExplorePage
