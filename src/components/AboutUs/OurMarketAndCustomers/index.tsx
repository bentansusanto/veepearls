'use client'
import { Mobile } from '@/config/MediaQuery'
import { ourMarketCustomer } from '@/libs/AboutData/AboutData'
import image from '@/libs/ImageData/ImageData'
import Image from 'next/image'
import React from 'react'

const OurMarketConsumers = () => {
    const {isMobile} = Mobile()
    return (
      <div className={`${isMobile? "px-5 mt-20" : "mt-20 md:px-8 lg:px-28"}`}>
           {/* Heading */}
        <div className={` ${isMobile && "bg-black py-20"} relative mx-auto`}>
          <Image
            src={image.BgOurKeyConsiderationPage}
            alt="bg-pearl-color"
            className={` ${isMobile && "hidden"} block rounded-xl`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
            <h1
              className={`font-heading text-4xl font-bold lg:text-5xl xl:text-6xl`}
              style={{ lineHeight: "130%" }}
            >
              {ourMarketCustomer.heading}
            </h1>
          </div>
        </div>
        {/* content detail */}
        <div className='flex flex-col gap-10 mt-20 md:flex-row lg:gap-20'>
        <div className="block">
            <div className="top-0 md:sticky">
              <Image
                src={require(`@/assets/images/${ourMarketCustomer.image}`)}
                alt="image-type"
              />
            </div>
          </div>
            {/* list content brand dna */}
            <div className='text-white'>
              {/* who are we */}
              <div className='mb-10 space-y-5'>
                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>{ourMarketCustomer.content1.heading}</h2>
                  <p className='text-gray-300'>{ourMarketCustomer.content1.body}</p>
                </div>
                <Image src={require(`@/assets/images/${ourMarketCustomer.content1.image}`)} alt='bg-content1'/>
              </div>
              {/* what we do */}
              <div className='mb-10 space-y-5 '>
                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>{ourMarketCustomer.content2.heading}</h2>
                  <p className='text-gray-300'>{ourMarketCustomer.content2.body}</p>
                </div>
                <Image src={require(`@/assets/images/${ourMarketCustomer.content2.image}`)} alt='bg-content1'/>
              </div>
              {/* who are we */}
              <div className='space-y-5'>
                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>{ourMarketCustomer.content3.heading}</h2>
                  <p className='text-gray-300'>{ourMarketCustomer.content3.body}</p>
                  <p className='text-gray-300'>{ourMarketCustomer.content3.body}</p>
                </div>
                <Image src={require(`@/assets/images/${ourMarketCustomer.content3.image}`)} alt='bg-content1'/>
              </div>
            </div>
        </div>
      </div>
    )
}

export default OurMarketConsumers