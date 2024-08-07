import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";

const HeroSection = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${isMobile ? "-mt-24" : "-mt-40"} relative h-[100vh]`}
    >

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
      <div className="absolute inset-0 flex h-screen items-center justify-center">
        <div className="mx-auto mt-5 lg:w-[50%] xl:w-[40%]">
          <div className="space-y-3 text-center text-white">
            <h1
              className={`font-heading text-5xl text-[#B2A671] font-bold lg:text-5xl xl:text-6xl`}
              style={{ lineHeight: "130%" }}
            >
              Enchanted Jewel
            </h1>
            <p className="mx-auto text-gray-400 text-lg max-w-sm">
              To admire and celebrate the incredible beauty we find in nature
            </p>
          </div>
          {/* <div className="mx-auto my-8 h-[3px] w-20 bg-white" /> */}
          <div className="mt-10 text-center">
            <button
              className={`rounded-md border-2 border-[#B2A671] uppercase px-5 py-2.5 text-center font-lato font-semibold text-[#B2A671] transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
            >
              <Link href={'/jewelry'}>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black opacity-70 absolute top-0 w-screen h-screen" style={{zIndex: "-1"}}/>
      {/* <Image src={image.BgHeroSection} alt="bg-herosection" className="lg:w-[40%] md:w-[45%]" /> */}
    </div>
  );
};

export default HeroSection;
