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
        prevIndex === jewerlyType.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isMobile ? "mt-20" : "mt-40"} `}>
      {/* content jewerly */}
      <div className="w-[100%] px-5 py-10 text-white md:px-8 lg:p-32">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold font-heading lg:text-4xl">
            Veepearls Jewelry
          </h1>
        </div>
      </div>
      {/* type jewerly */}
      {isMobile ? (
        <div className="relative w-full py-40 overflow-hidden md:h-auto">
          {/* <div
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
                </div>
              </div>
            ))}
          </div> */}

          <video
            src={require("@/assets/images/bg-veepearls-video.mp4")}
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: "0",
              zIndex: "-1",
              width: "100vw",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          ></video>
        </div>
      ) : (
        // Desktop & Tablet device
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-20">
          {jewerlyTypeHome.map((list, idx) => (
            <div key={idx}>
              <Image src={require(`@/assets/images/${list.image}`)} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JewerlyType;
