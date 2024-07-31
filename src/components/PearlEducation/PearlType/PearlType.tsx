"use client";
import { Mobile } from "@/config/MediaQuery";
import { pearlTypes } from "@/libs/PearlEductionData/PearlEducationData";
import Image from "next/image";
import { list } from "postcss";
import React from "react";

const PearlTypePage = () => {
  const { isMobile } = Mobile();
  return (
    <div>
      <div className={`${isMobile ? "px-5" : "md:px-8 lg:px-28 mt-40"}`}>
        {/* Heading */}
        <div className="mx-auto space-y-2 text-center text-white">
          <h1
            className={`font-heading text-4xl font-bold lg:text-5xl xl:text-5xl`}
            style={{ lineHeight: "130%" }}
          >
            {pearlTypes.heading}
          </h1>
          <p className="text-[16px] lg:max-w-3xl mx-auto text-gray-300">
          {pearlTypes.body}
          </p>
        </div>
        {/* List Pearl Type */}
        <div className="flex flex-wrap justify-center gap-5 mt-20 lg:grid-cols-2 lg:grid">
          {
            pearlTypes.pearl_type.map((list, idx) => (
              <div key={idx} className={`p-4 rounded-md`} style={{backgroundColor: `${list.color_bg}`}}>
                <div className="space-y-3">
                    <Image src={require(`@/assets/images/${list.image}`)} alt="list-pearl-type" className="w-32 mx-auto lg:w-52 md:w-40"/>
                    <div className="mx-auto space-y-2 text-center text-black lg:max-w-2xl">
                      <h2 className="text-2xl font-semibold font-heading">{list.name_type}</h2>
                      <p>{list.description}</p>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PearlTypePage;
