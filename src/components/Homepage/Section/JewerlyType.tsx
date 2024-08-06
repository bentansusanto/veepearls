import { Mobile } from "@/config/MediaQuery";
// import image from '@/libs/ImageData/ImageData';
import { jewerlyType, jewerlyTypeHome } from "@/libs/ProductData/ProductData";
// import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { HiArrowLongRight } from "react-icons/hi2";

const JewerlyType = () => {
  const { isMobile } = Mobile();
  const images = [
    "type-necklare.jpg",
    "type-necklare.jpg",
    "type-necklare.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === jewerlyType.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isMobile ? "" : "flex flex-row"} `}>
      {/* content jewerly */}
      <div className="w-[100%] bg-[#191919] px-5 py-10 text-white md:px-8 lg:p-32">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold font-heading lg:text-4xl">
            Veepearls Jewelry
          </h1>
          <p className="text-gray-400 lg:max-w-lg">
            From classic pearl necklaces to contemporary earrings, our range of
            jewelry offers something for every style and occasion. Whether you
            seek the perfect piece for a special event or a timeless addition to
            your daily wear, our pearls are crafted to perfection to complement
            your elegance.
          </p>
        </div>
      </div>
      {/* type jewerly */}
      <div className="relative w-full py-40 overflow-hidden md:h-auto">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {jewerlyTypeHome.map((list, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-full">
              <Image
                src={require(`@/assets/images/${list.image}`)}
                alt={list.image}
                className="object-cover w-full h-full"
              />
              <div className="absolute w-full p-2 space-y-3 text-white bottom-5 left-5">
                <h2 className="text-3xl font-heading">{list.name_type}</h2>
                {/* <button className='flex items-end space-x-3 text-[#B2A671]'>
                <Link href='/products' className='font-heading'>Shop now</Link>
                <HiArrowLongRight className='text-xl'/>
              </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 flex justify-end mb-4 space-x-2 bottom-5 right-5 md:right-10">
          {jewerlyType.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-[#B2A671]" : "bg-gray-500"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewerlyType;
