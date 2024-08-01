"use client";
import { Mobile } from "@/config/MediaQuery";
import { necklareLength } from "@/libs/PearlEductionData/PearlEducationData";
import Image from "next/image";
import React, { useState } from "react";

const NecklareLengthPage = () => {
  const { isMobile } = Mobile();
  const [selectLength, setSelectLength] = useState(
    necklareLength.necklareData[0],
  );

  return (
    <div className={`${isMobile ? "px-5" : "mt-40 md:px-8 lg:px-28"} `}>
      {/* Heading */}
      <div className="mx-auto space-y-2 text-center text-white">
        <h1
          className={`font-heading text-4xl font-bold lg:text-5xl xl:text-5xl`}
          style={{ lineHeight: "130%" }}
        >
          {necklareLength.heading}
        </h1>
        <p className="mx-auto text-[16px] text-gray-300 lg:max-w-3xl">
          {necklareLength.body}
        </p>
      </div>
      {/* List Length */}
      <div className="flex flex-col items-center justify-center mx-auto mt-20 md:mt-40 md:flex-row md:gap-10">
        <div className="relative">
            <div>
                <Image
                    src={require(`@/assets/images/${selectLength.image}`)}
                    alt="Pearl Necklace"
                />
            </div>
          <div className="absolute flex flex-col items-center gap-3 right-5 top-5">
            {necklareLength.necklareData.map((item, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => setSelectLength(item)}
                  className={`block text-xl md:text-lg ${selectLength.size === item.size ? "font-bold text-black" : "text-gray-500"}`}
                >
                  {item.size}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-white md:max-w-md lg:max-w-xl">
          <h2 className="text-2xl font-bold">{selectLength.name_length}</h2>
          <p>{selectLength.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NecklareLengthPage;
