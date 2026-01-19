import React from 'react'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import Explore from '../sections/explore/Explore'

const ExplorePage = () => {
  return (
    <div className="min-h-screen relative">
      <div className="grid-bg noise-grain scanline fixed inset-0 -z-10" />
      <Navigation />
      <Explore />
      <Footer />
    </div>
  )
}

export default ExplorePage
