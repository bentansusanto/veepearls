import { Mobile } from "@/config/MediaQuery";
import { ourStory } from "@/libs/HomeData/HomeData";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? "mt-32 px-5" : "mt-40 md:px-8 lg:px-28"}`}>
      <div className="flex flex-col items-center space-x-0 space-y-3 text-white md:flex-row md:space-x-10 md:space-y-0 lg:justify-between">
        <div className="md:w-[60%] lg:w-[60%] xl:w-[45%]">
          <h1
            className={`font-heading text-4xl font-bold md:text-3xl lg:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Our Story, Vision, and Commitment to Excellence
          </h1>
        </div>
        <div className="md:w-[75%] lg:w-[60%] xl:w-[50%]">
          <p className="text-gray-300">
            At Pearl, we believe in the allure and grace that pearls bring to
            every outfit. Founded with a passion for quality and craftsmanship,
            we source the finest pearls from around the world to create stunning
            jewelry that lasts a lifetime. Our mission is to make luxury
            accessible and to celebrate the unique beauty of each pearl, just
            like the individuals who wear them.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
        {ourStory.map((list, idx) => (
          <div key={idx} className='w-auto h-full'>
            <Image
              key={idx}
              src={require(`@/assets/images/${list}`)}
              alt={`${list}`}
              className={`$w-auto h-full`}   
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
