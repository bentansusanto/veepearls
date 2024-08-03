'use client'
import { Mobile } from '@/config/MediaQuery'
import { foundePage } from '@/libs/AboutData/AboutData'
import image from '@/libs/ImageData/ImageData'
import { pearlColor } from '@/libs/PearlEductionData/PearlEducationData'
import Image from 'next/image'
import React from 'react'

const OurFounderCeoPage = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "px-5 mt-20" : "mt-10 md:px-8 lg:px-28"}`}>
         {/* Heading */}
      <div className={` ${isMobile && "bg-black py-20"} relative mx-auto`}>
        <Image
          src={image.BgFounderCeoPage}
          alt="bg-pearl-color"
          className={` ${isMobile && "hidden"} block rounded-xl`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
          <h1
            className={`font-heading text-4xl font-bold lg:text-5xl xl:text-6xl`}
            style={{ lineHeight: "130%" }}
          >
            {foundePage.heading}
          </h1>
        </div>
      </div>
      {/* content founder & ceo */}
      <div className='flex lg:flex-row flex-col items-center gap-10 mt-20 lg:gap-20 xl:max-w-[70%] mx-auto'>
        <div className=''>
          <Image src={require(`@/assets/images/${foundePage.image}`)} alt='bg-founder'/>
        </div>
        <div className='max-w-xl space-y-4 text-white'>
          <h2 className='text-3xl font-semibold font-heading'>{foundePage.content.heading}</h2>
          <p className='leading-relaxed text-gray-300'>{foundePage.content.body}</p>
        </div>
      </div>
    </div>
  )
}

export default OurFounderCeoPage