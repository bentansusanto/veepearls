import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";

const HeroSection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${isMobile ? "-mt-24 flex-col-reverse px-5 pb-32 pt-52" : "-mt-40 flex-row space-x-10 pb-52 pt-72 md:px-8 lg:justify-between lg:px-28"} bg-herosection flex items-center`}
    >
      <div className="mt-5 lg:w-[50%] xl:w-[40%]">
        <div className="space-y-3 text-center text-white">
          <h2 className="text-lg font-bold">Let’s Shop</h2>
          <h1
            className={`font-heading text-4xl font-bold lg:text-5xl xl:text-6xl`}
            style={{ lineHeight: "130%" }}
          >
            Be Your Own Kind Of Beautiful
          </h1>
          <p className="text-[15px] lg:max-w-lg mx-auto text-gray-300">
          Our meticulously curated collection of pearls promises to bring a touch of sophistication and grace to your every moment.
          </p>
        </div>
        <div className="mx-auto my-8 h-[3px] w-20 bg-white" />
        <div className="text-center">
          <button
            className={`rounded-md border-2 bg-[#B2A671] border-[#B2A671] px-5 py-2.5 text-center font-lato text-white transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
          >
            <Link href={"#products"}>Shop Now</Link>
          </button>
        </div>
      </div>
      {/* <Image src={image.BgHeroSection} alt="bg-herosection" className="lg:w-[40%] md:w-[45%]" /> */}
    </div>
  );
};

export default HeroSection;
