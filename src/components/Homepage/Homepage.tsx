'use client'
import React from 'react'
import HeroSection from './Section/HeroSection'
import JewerlyType from './Section/JewerlyType'
import BestProduct from './Section/BestProduct'
import WhyChooseUs from './Section/WhyChooseUs'
import OurStory from './Section/OurStory'
import TestimoniSection from './Section/TestimoniSection'
import CTASection from './Section/CTASection'

const Homepage = () => {
  return (
    <div>
      <HeroSection/>
      <JewerlyType/>
      <BestProduct/>
      <WhyChooseUs/>
      <OurStory/>
      <TestimoniSection/>
      <CTASection/>
    </div>
  )
}

export default Homepage