'use client'
import { Mobile } from '@/config/MediaQuery'
import React from 'react'

const OurBrandDnaPage = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "px-5 mt-20" : "mt-40 md:px-8 lg:px-28"}`}>
        
    </div>
  )
}

export default OurBrandDnaPage