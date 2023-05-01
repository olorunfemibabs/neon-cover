import React from 'react'
import Navbar from './landing_page/Navbar'
import Hero from './landing_page/Hero'
import Stats from './landing_page/Stats'
import Business from './landing_page/Business'
import DealOffer from './landing_page/DealOffer'
import Footer from './landing_page/Footer'
import Testimonials from './landing_page/Testimonial'
import CTA from './landing_page/CTA'

const LandingPage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='flex justify-center items-center sm:px-16 px-6'>
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className="flex bg-primary sm:px-16 px-6 justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <DealOffer />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
