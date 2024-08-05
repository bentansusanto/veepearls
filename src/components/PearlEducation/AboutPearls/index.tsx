'use client'
import { Mobile } from '@/config/MediaQuery'
import image from '@/libs/ImageData/ImageData'
import { aboutPearl } from '@/libs/PearlEductionData/PearlEducationData'
import Image from 'next/image'
import React from 'react'

const AboutPearlsPage = () => {
    const {isMobile} = Mobile()
    return (
      <div className={`${isMobile? "px-5 mt-20" : "mt-20 md:px-8 lg:px-28"}`}>
           {/* Heading */}
        <div className={` ${isMobile && "bg-black py-20"} relative mx-auto`}>
          <Image
            src={image.BgOurBrandDnaPage}
            alt="bg-pearl-color"
            className={` ${isMobile && "hidden"} block rounded-xl`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
            <h1
              className={`font-heading text-4xl font-bold lg:text-5xl xl:text-6xl`}
              style={{ lineHeight: "130%" }}
            >
              {aboutPearl.heading}
            </h1>
          </div>
        </div>
        {/* content detail */}
        <div className='flex md:flex-row flex-col items-center gap-10 mt-20 lg:gap-20 xl:max-w-[90%]'>
        <div className="md:max-w-[50%]">
              <Image
                src={require(`@/assets/images/${aboutPearl.content.image}`)}
                alt="image-type"
              />
          </div>
            {/* list content */}
            <div className='text-white'>
              {/* Sales & Custom */}
              <div className='mb-10 space-y-6'>
                <div className='space-y-3'>
                  <h2 className='text-4xl font-semibold capitalize font-heading'>{aboutPearl.content.heading}</h2>
                  <div className='mt-5 text-gray-300'>
                    {
                        aboutPearl.content.body.map((list) => (
                            <p key={list}>{list}</p>
                        ))
                    }
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
    )
}

export default AboutPearlsPage