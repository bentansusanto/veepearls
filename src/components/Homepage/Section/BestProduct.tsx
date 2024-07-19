import { dollar } from "@/config/Currency";
import { Mobile } from "@/config/MediaQuery";
import { productJewerly } from "@/libs/ProductData/ProductData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
// import { IoBagOutline } from "react-icons/io5";

const BestProduct = () => {
  const { isMobile } = Mobile();
  const [selectProduct, setSelectProduct] = useState({});
  const [openSelect, setOpenSelect] = useState(false);
  const handleSelectProduct = (idx: number) => {
    setSelectProduct(idx);
    setOpenSelect(true);
  };
  return (
    <div className={`${isMobile ? "mt-20 px-5" : "mt-40 md:px-8 lg:px-28"}`} id="products">
      <div className="mx-auto space-y-3 text-center text-white md:w-[50%] xl:w-[35%]">
        <h1 className="font-heading text-4xl font-semibold">
          Our Best Products
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod
          nesciunt vero voluptas provident cum animi!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-5">
        {productJewerly.map((list, idx) => (
          <div key={idx} className="space-y-4">
            <div className="relative">
              <Image
                onMouseEnter={() => handleSelectProduct(idx)}
                src={require(`@/assets/images/${list.image}`)}
                alt={`${list.image}`}
                className="rounded-md"
              />
              <div
                className={`${openSelect && selectProduct === idx ? "w-auto opacity-50" : "hidden h-0"} absolute inset-0 bg-black transition-all duration-500`}
              />
              {openSelect && selectProduct === idx && (
                <div
                  onMouseLeave={() => setOpenSelect(false)}
                  className={`${openSelect && selectProduct !== idx && "hidden"} absolute inset-0 flex items-center justify-center space-x-5 text-white`}
                >
                  <FiSearch className="text-2xl" />
                  {/* <IoBagOutline className="text-2xl" /> */}
                </div>
              )}
            </div>
            <div className="space-y-3 text-white">
              <h2 className="font-heading font-semibold lg:text-lg">
                {list.name_product}
              </h2>
              <div className="flex space-x-2">
                <FaStar className="text-xl text-[#B2A671]" />
                <p className="text-gray-300">{list.rating}</p>
              </div>
              <p className="text-xl font-bold">{dollar(list.price)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        {/* <button
          className={`rounded-md border-2 border-[#B2A671] px-5 py-2.5 text-center font-heading text-[#B2A671] transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
        >
          <Link href={"/products"}>Shop Now</Link>
        </button> */}
      </div>
    </div>
  );
};

export default BestProduct;
