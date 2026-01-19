import React from 'react'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer'
import Contact from '../sections/contact/Contact'

const ContactPage = () => {
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
