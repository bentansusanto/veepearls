import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";

const CTASection = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? "mt-32 px-5" : "mt-40 md:px-8 lg:px-28"}`}>
      <div className="p-5 mx-auto space-y-8 rounded-lg bg-cta md:max-w-xl md:p-10 lg:max-w-2xl xl:max-w-4xl">
        <div className="mx-auto space-y-3 text-center text-white lg:max-w-md xl:max-w-lg">
          <h1
            className={`font-heading text-4xl font-semibold lg:text-4xl xl:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Get Our Pearl Jewelry Now. Limited Products
          </h1>
          <p className="text-gray-300 text-[16px]">
          Shop now and embrace the timeless elegance that only pearls can offer. Your journey to luxury starts here.
          </p>
        </div>
        <div className="text-center">
          <button
            className={`rounded-md border-2 uppercase border-[#B2A671] hover:bg-[#B2A671] px-5 py-2.5 text-center font-lato font-semibold hover:text-white text-[#B2A671] transition-all duration-300`}
          >
            <Link href={'/jewelry'}>Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
