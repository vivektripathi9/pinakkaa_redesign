import React from 'react'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import Explore from '../sections/explore/Explore'
import Testimonials from '../sections/testimonials/Testimonials'
import Green from '../sections/green/green'
import Grn2 from '../sections/grn2/grn2'

const ExplorePage = () => {
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
