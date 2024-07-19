import { Mobile } from "@/config/MediaQuery";
import { testimoniData } from "@/libs/HomeData/HomeData";
import image from "@/libs/ImageData/ImageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TestimoniSection = () => {
  const { isMobile } = Mobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimoniData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isMobile ? "mt-32 flex-col" : "my-40 flex-row"} flex`}>
      <div className="md:w-[100%] lg:w-[70%] xl:w-[65%]">
        <Image
          src={image.BgTestimoniVeepearl}
          alt="bg-testimoni"
          className="h-full"
        />
      </div>
      {/* Testimoni, Heading */}
      <div className="relative space-y-5 bg-black p-5 text-white md:w-[90%] md:p-5 lg:w-[100%] lg:p-5 xl:w-[80%] xl:px-20 xl:py-10">
        <div className="lg:max-w-lg">
          <h1
            className={`font-heading text-3xl font-bold lg:text-3xl xl:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Customers who believe in our products
          </h1>
        </div>
        {/* Testimoni */}
        <div className="relative w-full overflow-hidden lg:max-w-md xl:max-w-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimoniData.map((list, index) => (
              <div key={index} className="relative w-full flex-shrink-0 pt-5">
                <div className="space-y-6 rounded-lg">
                  <p className="mt-4 font-heading text-xl">{list.message}</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">{list.name}</p>
                    <p className="text-sm text-gray-500">{list.status}</p>
                  </div>
                </div>
                <div className="absolute top-0 -z-10 opacity-70">
                  <Image src={image.QuotesTestimoni} alt="quotes-veepearl" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-2 mb-4 flex space-x-2">
            {testimoniData.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-[#B2A671]" : "bg-gray-500"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="absolute top-5 right-5 z-0 lg:block hidden">
            <Image src={image.IconPearl} alt="icon-pearl"/>
        </div>
      </div>
    </div>
  );
};

export default TestimoniSection;
