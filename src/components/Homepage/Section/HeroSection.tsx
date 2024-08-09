import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";
import image from "@/libs/ImageData/ImageData";
import Image from "next/image";

const HeroSection = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? "-mt-24" : "-mt-40"}`}>
      <div className="relative">
        {isMobile ? (
          <Image
            src={image.BgHeroSectionMobile}
            alt="bg-herosection"
            className=" w-screen object-cover h-[70vh]"
          />
        ) : (
          <Image
            src={image.BgHeroSection}
            alt="bg-herosection"
            className=" w-screen object-center h-[100vh]"
          />
        )}
        <div className=" absolute bottom-10 w-screen flex justify-center items-center">
          <div className="mx-auto lg:w-[50%] xl:w-[40%]">
            <div className="space-y-3 text-center text-white">
              <h1
                className={`font-heading text-4xl text-white font-bold lg:text-5xl xl:text-6xl`}
                style={{ lineHeight: "130%" }}
              >
                Enchanted Jewel
              </h1>
              <p className="mx-auto text-gray-400 text-[15px] max-w-[70%]">
                To admire and celebrate the incredible beauty we find in nature
              </p>
            </div>

            <div className="mt-8 text-center">
              <button
                className={`border-2 border-white capitalize px-5 py-2.5 text-center font-lato font-medium text-black transition-all duration-300 bg-[#FDFDFF]`}
              >
                <Link href={"/jewelry"}>Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


