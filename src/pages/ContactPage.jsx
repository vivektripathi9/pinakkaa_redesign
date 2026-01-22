import React, { useLayoutEffect } from 'react'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import Contact from '../sections/contact/Contact'

const ContactPage = () => {
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
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
