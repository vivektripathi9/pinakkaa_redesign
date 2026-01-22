import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'
import Hero from './sections/hero/Hero'
import WhyChooseUs from './sections/why-choose-us/WhyChooseUs'
import AboutUs from './sections/about/AboutUs'
import ServiceNew from './sections/serviceNew/servicenew'
import ExplorePage from './pages/ExplorePage'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import Animation2 from './sections/animation2/animation2'
import Green from './sections/green/green'
import Grn2 from './sections/grn2/grn2'
import GiveYour from './sections/give_your/give_your'
import ContactPage from './pages/ContactPage'
import DynamicServicePage from './dynamicService/pages/DynamicServicePage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen relative">
            <div className="grid-bg noise-grain scanline fixed inset-0 -z-10" />
            <Navigation />
            <Hero />
            <WhyChooseUs />
            <GiveYour />
            <AboutUs />
            <ServiceNew />
            <Portfolio />
            <Testimonials />
            <Animation2 />
            <Green />
            <Grn2 />
            <Footer />
          </div>
        }
      />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/:serviceSlug" element={<DynamicServicePage />} />
    </Routes>
  )
}

export default App
