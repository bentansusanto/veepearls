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
            Founded with a passion for pearls, we have dedicated ourselves to
            bringing the finest pearls to our customers. Our journey began with
            a love for these precious gems and a commitment to quality. Learn
            more about our story and what drives us to deliver the best pearls
            in the market.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          {ourStory.slice(0, 2).map((list, idx) => (
            <div key={idx} className="h-full w-auto">
              <Image
                key={idx}
                src={require(`@/assets/images/${list}`)}
                alt={`${list}`}
                className={`$w-auto h-full`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          {ourStory.slice(2, 5).map((list, idx) => (
            <div key={idx} className="h-full w-auto">
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
    </div>
  );
};

export default OurStory;
