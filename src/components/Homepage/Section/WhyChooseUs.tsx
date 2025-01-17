import { Mobile } from '@/config/MediaQuery'
import { ourServices } from '@/libs/HomeData/HomeData'
import image from '@/libs/ImageData/ImageData'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "px-5 mt-20 flex-col" : "lg:px-28 md:px-8 mt-40 flex-row justify-between"} flex items-center`}>
        <div className='md:mt-0 space-y-10 mt-10 xl:w-[40%] lg:w-[50%] md:w-[50%]'>
        <h1
            className={`font-heading text-2xl font-semibold text-white lg:text-4xl xl:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Why should you buy pearl jewellery at Veepearls?
          </h1>
          {/* list veepearl's services */}
          <div className='grid grid-cols-2 md:grid-cols-2 gap-8'>
            {
                ourServices.map((list, idx) => (
                    <div key={idx} className='space-y-4'>
                        <Image src={require(`@/assets/icon/${list.icon}`)} alt={list.icon}/>
                        <div className='space-y-2 text-white'>
                            <h2 className='text-[16px] font-semibold font-heading'>{list.name_service}</h2>
                            <p className='text-gray-400'>{list.desc}</p>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
        <div className='lg:w-[45%] md:w-[45%] mt-10'>
            <Image src={image.BgOurServices} alt='bg-ourservice'/>
        </div>
    </div>
  )
}

export default WhyChooseUs