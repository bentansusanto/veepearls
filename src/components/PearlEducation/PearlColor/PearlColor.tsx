"use client";
import { Mobile } from "@/config/MediaQuery";
import image from "@/libs/ImageData/ImageData";
import {
  colorPearl,
  pearlColor,
} from "@/libs/PearlEductionData/PearlEducationData";
import Image from "next/image";
import { list } from "postcss";
import React, { useState } from "react";

const PearlColorPage = () => {
  const { isMobile } = Mobile();
  const [selectColor, setSelectColor] = useState<string>("White");
  const filterColor = selectColor
    ? pearlColor.pearl_color.filter((list) => list.color === selectColor)
    : null;
  const handleSelectColor = (name_color: string) => {
    setSelectColor(name_color);
  };
  return (
    <div className={`${isMobile ? "-mt-24 py-40 px-5" : "mt-20 md:px-8 lg:px-28"} bg-pearlcolor`}>
      {/* Heading */}
      <div className={` ${isMobile && ""} relative mx-auto`}>
        <Image
          src={image.BgPearlColorPage}
          alt="bg-pearl-color"
          className={` ${isMobile && "hidden"} block rounded-xl`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
          <h1
            className={`font-heading text-4xl font-bold lg:text-5xl xl:text-6xl`}
            style={{ lineHeight: "130%" }}
          >
            {pearlColor.heading}
          </h1>
        </div>
      </div>
      {/* List Color */}
      <div
        className={` ${isMobile && "px-5"} mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-400`}
      >
        {colorPearl.map((list, idx) => (
          <div key={idx}>
            <p
              onClick={() => handleSelectColor(list.name_color)}
              className={` ${selectColor === list.name_color && "text-[#B2A671]"} cursor-pointer text-lg font-heading`}
            >
              {list.name_color}
            </p>
          </div>
        ))}
      </div>
      <div className="px-8 mt-20">
        {filterColor?.map((list, idx) => (
          <div key={idx} className="flex flex-col items-start gap-10 lg:flex-row">
            <div className="space-y-2 text-white lg:max-w-xl">
              <h2 className="text-2xl font-semibold font-heading">
                {list.name_color}
              </h2>
              {list.description.map((desc: any) => (
                <p className="text-gray-400" key={desc}>
                  {desc}
                </p>
              ))}
            </div>
            {/* image */}
            <div className="flex flex-col items-center gap-5 md:flex-row">
              {list.image.slice(0, 1).map((image) => (
                <Image
                  key={image}
                  src={require(`@/assets/images/${image}`)}
                  alt="list-mage-pearl-color"
                />
              ))}
              <div className="flex flex-col gap-5">
                {list.image.slice(1, 3).map((image) => (
                  <Image
                    key={image}
                    src={require(`@/assets/images/${image}`)}
                    alt="list-mage-pearl-color" className="w-[500px]"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PearlColorPage;
