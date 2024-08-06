'use client'
import { Mobile } from '@/config/MediaQuery'
import { contactUs } from '@/libs/AboutData/AboutData'
import image from '@/libs/ImageData/ImageData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUsPage = () => {
    const {isMobile} = Mobile()
    return (
      <div className={`${isMobile? "px-5 mt-20" : "mt-20 md:px-8 lg:px-28"}`}>
           {/* Heading */}
        <div className={` ${isMobile && "bg-black py-20"} relative mx-auto`}>
          <Image
            src={image.BgContactUsPage}
            alt="bg-pearl-color"
            className={` ${isMobile && "hidden"} block rounded-xl`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
            <h1
              className={`font-heading text-3xl font-bold lg:text-5xl xl:text-4xl`}
              style={{ lineHeight: "130%" }}
            >
              {contactUs.heading}
            </h1>
          </div>
        </div>
        {/* content detail */}
        <div className='flex md:flex-row flex-col items-center gap-10 mt-20 lg:gap-20 xl:max-w-[90%]'>
        <div className="md:max-w-[50%]">
              <Image
                src={require(`@/assets/images/${contactUs.image}`)}
                alt="image-type"
              />
          </div>
            {/* list content */}
            <div className='text-white'>
              {/* Sales & Custom */}
              <div className='mb-10 space-y-5'>
                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>Sales & Custom</h2>
                  <div className='space-y-2 text-gray-300'>
                    {
                        contactUs.contact.map((list) => (
                            <p key={list}>{list}</p>
                        ))
                    }
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className='mb-10 space-y-5 '>
                <div className='space-y-3'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>Email</h2>
                  <p className='text-gray-300'>{contactUs.email}</p>
                </div>
              </div>
              {/* who are we */}
                <div className='mb-10 space-y-5'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>Website</h2>
                  <Link href={contactUs.website_link} className='text-gray-300'>{contactUs.website}</Link>
                </div>
              {/* who are we */}
                {/* <div className='space-y-5'>
                  <h2 className='text-2xl font-semibold capitalize font-heading'>Location</h2>
                  <p className='text-gray-300 xl:w-[40%]'>Local Arranger: <br />
                    <span className=''>Koperasi Mentari Cita Muda The 7th Office Jl. Karang Tengah Raya Kav. 9, Jakarta 12440</span>
                  </p>
                  <p className='text-gray-300 xl:w-[40%]'>Produce By: <br />
                    <span className=''>PT. Pietra Marmara Indo Menara 165 4th Floor, Jl. TB. Simatupang Kav. 1 Jakarta Selatan 12450
                    +6221 - 27653200</span>
                  </p>
                </div> */}
            </div>
        </div>
      </div>
    )
}

export default ContactUsPage