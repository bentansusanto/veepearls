import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";

const CTASection = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? "mt-20 px-5" : "mt-40 md:px-8 lg:px-28"}`}>
      <div className="px-5 py-10 mx-auto space-y-8 rounded-lg bg-cta md:max-w-xl md:p-10 lg:max-w-2xl xl:max-w-4xl">
        <div className="mx-auto space-y-3 text-center text-white lg:max-w-md xl:max-w-lg">
          <h1
            className={`font-heading text-3xl font-semibold lg:text-4xl xl:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Get Our Pearl Jewellery Now. Limited Products
          </h1>
          <p className="text-gray-300 text-[16px]">
            Shop now and embrace the timeless elegance that only pearls can
            offer.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/jewelry"}>
            <button
              className={`border-2 border-white capitalize px-5 py-2.5 text-center font-lato font-medium text-black transition-all duration-300 bg-[#FDFDFF]`}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
