"use client";
import { Mobile } from "@/config/MediaQuery";
import { foundePage } from "@/libs/AboutData/AboutData";
import image from "@/libs/ImageData/ImageData";
import Image from "next/image";
import React from "react";

const OurFounderCeoPage = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${isMobile ? "px-5 -mt-24 py-40" : "mt-20 md:px-8 lg:px-28"} bg-contact-us`}
    >
      {/* Heading */}
      <div className="flex flex-col text-white">
        <Image
          src={require(`@/assets/images/${foundePage.image}`)}
          alt="image-type"
        />
        <div className="space-y-10 mt-10">
          <h1
            className={`font-heading text-3xl capitalize text-center font-bold lg:text-4xl`}
            style={{ lineHeight: "130%" }}
          >
            {foundePage.heading}
          </h1>

          <div className="max-w-xl space-y-4 text-white">
            <h2 className="text-lg font-semibold font-lato">
              {foundePage.content.heading}
            </h2>
            <p className="leading-relaxed text-gray-300">
              {foundePage.content.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounderCeoPage;
