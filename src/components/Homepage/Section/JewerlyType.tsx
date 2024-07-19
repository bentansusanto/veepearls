
import { Mobile } from '@/config/MediaQuery'
// import image from '@/libs/ImageData/ImageData';
import { jewerlyType } from '@/libs/ProductData/ProductData';
// import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
// import { HiArrowLongRight } from "react-icons/hi2";

const JewerlyType = () => {
    const {isMobile} = Mobile()
    const images = [
      'type-necklare.jpg',
      'type-necklare.jpg',
      'type-necklare.jpg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === jewerlyType.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isMobile? "" : "flex-row flex"} `}>
        {/* content jewerly */}
        <div className="bg-[#191919] w-[100%] lg:p-32 md:px-8 py-10 px-5 text-white">
          <div className='space-y-4'>
            <h1 className='font-semibold font-heading lg:text-4xl text-2xl'>Jewerly Type Veepearl</h1>
            <p className=' text-gray-400 lg:w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quisquam nostrum soluta cupiditate? Corporis tenetur temporibus ut aliquam vel voluptates.</p>
          </div>
        </div>
        {/* type jewerly */}
        <div className="relative w-full md:h-auto py-40 overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {jewerlyType.map((list, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image src={require(`@/assets/images/${list.image}`)} alt={list.image} className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 w-full space-y-3 text-white p-2">
              <h2 className='text-3xl font-heading'>{list.name_type}</h2>
              {/* <button className='flex items-end space-x-3 text-[#B2A671]'>
                <Link href='/products' className='font-heading'>Shop now</Link>
                <HiArrowLongRight className='text-xl'/>
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 md:right-10 right-5 flex justify-end mb-4 space-x-2">
        {jewerlyType.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#B2A671]' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>

    </div>
  )
}

export default JewerlyType