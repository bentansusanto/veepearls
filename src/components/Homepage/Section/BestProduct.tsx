import { dollar } from "@/config/Currency";
import emitter from "@/config/EmitterEvent";
import { Mobile } from "@/config/MediaQuery";
import { jewerlyType, productJewerly } from "@/libs/ProductData/ProductData";
import { ProductJewerly } from "@/types/ProductType";
import { AlertDialog } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";
// import image from "@/libs/ImageData/ImageData";
import { Carousel } from "flowbite-react";

const BestProduct = () => {
  const { isMobile } = Mobile();
  const [detailProduct, setDetailProduct] = useState<ProductJewerly | null>(
    null,
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [selectProduct, setSelectProduct] = useState({});
  const [selectType, setSelectType] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [selectInfo, setSelectInfo] = useState("Product Information");
  const detailInfo = [
    {
      name_menu: "Product Information",
    },
    {
      name_menu: "Reviewer",
    },
  ];
  // filter products
  const filteredProducts = selectType
    ? productJewerly.filter((product) => product.slug_type === selectType)
    : productJewerly;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find(
      (item: ProductJewerly) =>
        item.name_product === detailProduct?.name_product,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice += (detailProduct?.price as number) * quantity;
    } else {
      cart.push({
        ...detailProduct,
        quantity,
        totalPrice: (detailProduct?.price as number) * quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    emitter.emit("cartUpdated", cart.length);
  };

  useEffect(() => {
    if (detailProduct) {
      setQuantity(1); // Reset quantity when modal opens
    }
  }, [detailProduct]);

  const totalPrice = (detailProduct?.price as number) * quantity;

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prevQuantity) => {
      if (type === "increment") {
        return prevQuantity + 1;
      } else {
        return prevQuantity > 1 ? prevQuantity - 1 : 1;
      }
    });
  };

  const handleOpenModal = (list: ProductJewerly) => {
    setDetailProduct(list);
  };

  const handleSelectInfo = (name_menu: string) => {
    setSelectInfo(name_menu);
  };

  const openDetailInfo =
    selectInfo === "Product Information"
      ? detailProduct?.desc
      : "rating not found";

  const handleSelectProduct = (idx: number) => {
    setSelectProduct(idx);
    setOpenSelect(true);
  };
  const handleSelectType = (type: string) => {
    setSelectType(type);
  };

  return (
    <div
      className={`${isMobile ? "mt-20 px-5" : "mt-40 md:px-8 lg:px-28"}`}
      id="products"
    >
      <div className="mx-auto space-y-3 text-center text-white md:w-[50%] xl:w-[35%]">
        <h1 className="text-4xl font-semibold font-heading">
          Our Product
        </h1>
        <p className="text-gray-400">
          To admire and celebrate the incredible beauty <br /> we find in nature
        </p>
      </div>
      {/* Type Products */}
      <div className="flex flex-wrap gap-2 items-center mt-10 md:justify-center md:gap-2">
        {jewerlyType.map((list, idx) => (
          <div
            onClick={() => handleSelectType(list.type)}
            key={idx}
            className={` ${selectType === list.type ? "text-[#B2A671]" : "text-gray-400 transition-all duration-500"} cursor-pointer rounded-md px-6 py-3`}
          >
            <p className="font-heading text-[18px] font-semibold">
              {list.name_type}
            </p>
          </div>
        ))}
      </div>
      {/* products */}
      <div className="grid grid-cols-2 mt-10 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {filteredProducts.map((list, idx) => (
          <div key={idx} className="space-y-4">
            <div className="relative">
              <div
                onMouseEnter={() => handleSelectProduct(idx)}
                className="w-full py-40 overflow-hidden md:h-auto"
              >
                <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out">
                  <Carousel indicators={false}>
                    {list.image.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative flex-shrink-0 w-full h-full"
                      >
                        <Image
                          src={require(`@/assets/images/${img}`)}
                          alt={`image`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div
                className={`${openSelect && selectProduct === idx ? "w-auto opacity-50" : "hidden h-0"} absolute inset-0 bg-black transition-all duration-500`}
              />
              {openSelect && selectProduct === idx && (
                <div
                  onMouseLeave={() => setOpenSelect(false)}
                  className={`${openSelect && selectProduct !== idx && "hidden"} absolute inset-0 flex items-center justify-center space-x-5 text-white`}
                >
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <div>
                        <FiSearch
                          onClick={() => handleOpenModal(list)}
                          className="text-2xl cursor-pointer"
                        />
                      </div>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content
                      
                      maxWidth={`${isMobile? "380px" : "800px"}`}
                      size={"1"}
                    >
                      <div className="relative">
                        <div className="flex flex-col gap-10 p-3 md:flex-row">
                          <div className="relative w-full py-40 overflow-hidden md:h-auto">
                            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out">
                              <Carousel indicators={false} slide={false}>
                                {detailProduct?.image.map((img, idx) => (
                                  <div
                                    key={idx}
                                    className="w-full h-full"
                                  >
                                    <Image
                                      src={require(`@/assets/images/${img}`)}
                                      alt={`image`}
                                      className="object-cover w-full h-full"
                                    />
                                  </div>
                                ))}
                              </Carousel>
                            </div>
                          </div>
                          <div>
                            <div className="space-y-3">
                              <p className="text-sm text-gray-400">
                                {detailProduct?.name_type}
                              </p>
                              <AlertDialog.Title className="font-semibold lg:text-2xl">
                                {detailProduct?.name_product}
                              </AlertDialog.Title>
                            </div>
                            {/* increment quantity */}
                            <div className="flex items-center justify-center p-3 mt-8 space-x-10 border border-gray-300 rounded-md max-w-40">
                              <LuMinus
                                onClick={() => handleQuantityChange("decrement")}
                                className="text-xl cursor-pointer"
                              />
                              <p>{quantity}</p>
                              <LuPlus
                                onClick={() => handleQuantityChange("increment")}
                                className="text-xl cursor-pointer"
                              />
                            </div>
                            {/* price & button add to cart */}
                            <div className="flex items-center justify-between p-3 mt-3 border border-gray-300 xl:max-w-64">
                              <p className="text-lg font-bold">
                                {dollar(totalPrice)}
                              </p>
                              <AlertDialog.Action>
                                <p
                                  onClick={handleAddToCart}
                                  className="text-lg font-semibold cursor-pointer"
                                >
                                  Add To Cart
                                </p>
                              </AlertDialog.Action>
                            </div>

                            <div className="mt-5 md:max-w-lg lg:max-w-xl">
                              <div className="flex items-center py-2 space-x-5 border-b-2 border-gray-100">
                                {detailInfo.map((detail, idx) => (
                                  <p
                                    className={`${selectInfo !== detail.name_menu && "font-normal text-gray-400"} cursor-pointer font-semibold transition-all duration-300`}
                                    key={idx}
                                    onClick={() =>
                                      handleSelectInfo(detail.name_menu)
                                    }
                                  >
                                    {detail.name_menu}
                                  </p>
                                ))}
                              </div>
                              <div className="mt-5 space-y-3 w-96">
                                <p className="text-sm text-gray-500">
                                  Grade:{" "}
                                  <span className="font-semibold text-black">
                                    {detailProduct?.detail_jewerly.grading}
                                  </span>
                                </p>
                                {/* <div className="flex items-center space-x-3">
                                <p className="text-sm text-gray-500">
                                  Size:{" "}
                                </p>
                                  <span className="space-x-2 flex font-semibold text-black">
                                    {detailProduct?.detail_jewerly.size.map((list) => (
                                      <p key={list}>{list} ,</p>
                                    ))}
                                  </span>
                                </div> */}
                                <p>{detailProduct?.desc}</p>
                              </div>
                              <AlertDialog.Description></AlertDialog.Description>
                            </div>
                          </div>
                        </div>
                        <div className="absolute p-5 text-white bg-black rounded-full -right-5 -top-5">
                          <AlertDialog.Cancel>
                            <div>
                              <IoClose className="text-xl" />
                            </div>
                          </AlertDialog.Cancel>
                        </div>
                      </div>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </div>
              )}
            </div>
            <div className="space-y-3 text-gray-400">
              <h2 className="font-semibold font-lato lg:text-lg">
                {list.name_product}
              </h2>
              {/* <div className="flex space-x-2">
                <FaStar className="text-xl text-[#B2A671]" />
                <p className="text-gray-300">{list.rating}</p>
              </div> */}
              <p className="text-lg font-bold">{dollar(list.price)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-10 text-center">
        <button
          className={`rounded-md border-2 border-[#B2A671] px-5 py-2.5 text-center font-heading text-[#B2A671] transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
        >
          <Link href={"/products"}>Shop Now</Link>
        </button>
      </div> */}
    </div>
  );
};

export default BestProduct;
