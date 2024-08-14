'use client'
import { Mobile } from '@/config/MediaQuery'
import { ourKeyConsiderate } from '@/libs/AboutData/AboutData'
import Image from 'next/image'
import React from 'react'

const OurKeyConsiderationsPage = () => {
    const {isMobile} = Mobile()
    return (
      <div
      className={`${isMobile ? " px-5 -mt-24 py-40" : "mt-20 md:px-8 lg:px-28"} bg-key-considerate`}
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-white">
        <Image
          src={require(`@/assets/images/${ourKeyConsiderate.image}`)}
          alt="image-type"
        />
        <div className="space-y-10 mt-10">
          <h1
            className={`font-heading text-2xl capitalize text-center font-bold lg:text-4xl`}
            style={{ lineHeight: "130%" }}
          >
            {ourKeyConsiderate.heading}
          </h1>

          <div className="text-white">
            <div className="mb-10 space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold capitalize font-heading">
                  {ourKeyConsiderate.content1.heading}
                </h2>
                <p className="text-gray-300">{ourKeyConsiderate.content1.body}</p>
              </div>
            </div>

            <div className="mb-10 space-y-5 ">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold capitalize font-heading">
                  {ourKeyConsiderate.content2.heading}
                </h2>
                <p className="text-gray-300">{ourKeyConsiderate.content2.body}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl capitalize font-semibold font-heading">
                  {ourKeyConsiderate.content3.heading}
                </h2>
                <p className="text-gray-300">{ourKeyConsiderate.content3.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default OurKeyConsiderationsPage