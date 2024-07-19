import { Mobile } from "@/config/MediaQuery";
import "@/app/globals.css";
import Link from "next/link";

const CTASection = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? "mt-32 px-5" : "mt-40 md:px-8 lg:px-28"}`}>
      <div className="bg-cta mx-auto space-y-8 rounded-lg p-5 md:max-w-xl md:p-10 lg:max-w-2xl xl:max-w-4xl">
        <div className="mx-auto space-y-3 text-center text-white lg:max-w-md xl:max-w-lg">
          <h1
            className={`font-heading text-4xl font-bold lg:text-4xl xl:text-4xl`}
            style={{ lineHeight: "150%" }}
          >
            Get Our Pearl Jewelry Now. Limited Products
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt aliqua.
          </p>
        </div>
        <div className="text-center">
          <button
            className={`rounded-md border-2 border-[#B2A671] bg-[#B2A671] px-5 py-2.5 text-center font-heading text-white transition-all duration-300`}
          >
            <Link href={"#products"}>Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
