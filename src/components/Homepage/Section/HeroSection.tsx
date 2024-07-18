import { heading } from "@/config/FontFamily";
import { Mobile } from "@/config/MediaQuery";
import image from "@/libs/ImageData/ImageData";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${isMobile ? "flex-col-reverse px-5" : "mt-10 flex-row lg:justify-between space-x-10 md:px-8 lg:px-28"} flex items-center`}
    >
      <div className="mt-5 xl:w-[40%] lg:w-[50%]">
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-bold">Let’s Shop</h2>
          <h1 className={`${heading.className} font-bold xl:text-6xl lg:text-5xl text-4xl`} style={{lineHeight: '130%'}}>
            Be Your Own Kind Of Beautiful
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </p>
        </div>
        <div className="bg-black w-20 h-[2px] my-5 mx-auto"/>
        <div className="text-center">
            <button className="border border-[#B2A671] text-[#B2A671] rounded-md py-2.5 px-5 text-center">Shop Now</button>
        </div>
      </div>
      <Image src={image.BgHeroSection} alt="bg-herosection" className="lg:w-[40%] md:w-[45%]" />
    </div>
  );
};

export default HeroSection;
