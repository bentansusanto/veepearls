import { dollar } from "@/config/Currency";
import emitter from "@/config/EmitterEvent";
import { Mobile } from "@/config/MediaQuery";
import { jewerlyType, productJewerly } from "@/libs/ProductData/ProductData";
import { ProductJewerly } from "@/types/ProductType";
import { AlertDialog } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";


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
    ? productJewerly.filter((product) => product.name_type === selectType)
    : productJewerly;

    const handleAddToCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find((item: ProductJewerly) => item.name_product === detailProduct?.name_product);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += detailProduct?.price as number * quantity;
      } else {
        cart.push({...detailProduct, quantity, totalPrice: detailProduct?.price as number * quantity });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      emitter.emit('cartUpdated', cart.length);

    }; 

    useEffect(() => {
      if (detailProduct) {
        setQuantity(1); // Reset quantity when modal opens
      }
    }, [detailProduct]);
  

    const totalPrice = detailProduct?.price as number * quantity;

    const handleQuantityChange = (type: 'increment' | 'decrement') => {
      setQuantity((prevQuantity) => {
        if (type === 'increment') {
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

  const openDetailInfo = selectInfo === "Product Information" ? detailProduct?.desc : "rating"
  

  const handleSelectProduct = (idx: number) => {
    setSelectProduct(idx);
    setOpenSelect(true);
  };
  const handleSelectType = (name_type: string) => {
    setSelectType(name_type);
  };

  return (
    <div
      className={`${isMobile ? "mt-20 px-5" : "mt-40 md:px-8 lg:px-28"}`}
      id="products"
    >
      <div className="mx-auto space-y-3 text-center text-white md:w-[50%] xl:w-[35%]">
        <h1 className="text-4xl font-semibold font-heading">
          Our Best Products
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod
          nesciunt vero voluptas provident cum animi!
        </p>
      </div>
      {/* Type Products */}
      <div className="flex flex-wrap gap-3 mt-10 md:justify-center md:gap-2">
        {jewerlyType.map((list, idx) => (
          <div
            onClick={() => handleSelectType(list.name_type)}
            key={idx}
            className={` ${selectType === list.name_type ? "text-[#B2A671]" : "text-gray-400 transition-all duration-500"} cursor-pointer rounded-md px-6 py-3`}
          >
            <p className="font-heading text-[16px] font-semibold">
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
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <div>
                        <FiSearch
                          onClick={() => handleOpenModal(list)}
                          className="text-2xl cursor-pointer"
                        />
                      </div>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="700px" size={'1'} className="relative">
                      <div className="flex flex-col gap-10 p-3 md:flex-row">
                        <div className="xl:max-w-lg">
                          {detailProduct?.image !== undefined && (
                            <Image
                              src={require(
                                `@/assets/images/${detailProduct?.image}`,
                              )}
                              alt="detail_products"
                              className="w-full"
                            />
                          )}
                        </div>
                        <div>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-400">{detailProduct?.name_type}</p>
                            <AlertDialog.Title className="font-semibold font-heading lg:text-2xl">
                                {detailProduct?.name_product}
                            </AlertDialog.Title>
                            <div className="flex items-center mt-3 space-x-2">
                              <FaStar className="text-xl text-[#B2A671]" />
                              <p className="text-[15px]">
                                {detailProduct?.rating}{" "}
                                <span className="text-gray-400">
                                  (20 reviews)
                                </span>
                              </p>
                            </div>
                          </div>
                          {/* increment & decrement product quantity */}
                          <div className="flex items-center justify-center p-3 mt-8 space-x-10 border border-gray-300 rounded-md max-w-40">
                            <LuMinus onClick={() => handleQuantityChange('decrement')} className="text-xl" />
                            <p>{quantity}</p>
                            <LuPlus onClick={() => handleQuantityChange('increment')} className="text-xl" />
                          </div>
                          {/* price & button add to cart */}
                          <div className="flex items-center justify-between p-3 mt-3 border border-gray-300 xl:max-w-64">
                            <p className="text-lg font-bold">
                              {dollar(totalPrice)}
                            </p>
                            <AlertDialog.Action>
                               <p onClick={handleAddToCart} className="text-lg font-semibold cursor-pointer">Add To Cart</p>
                            </AlertDialog.Action>
                          </div>

                          {/* Information Products */}
                          <div className="mt-5 lg:max-w-md md:max-w-lg">
                            <div className="flex items-center py-2 space-x-5 border-b-2 border-gray-100">
                              {detailInfo.map((detail, idx) => (
                                <p
                                  className={`${selectInfo !== detail.name_menu &&  "text-gray-400 font-normal"} cursor-pointer transition-all font-semibold duration-300`}
                                  key={idx}
                                  onClick={() => handleSelectInfo(detail.name_menu)}
                                >
                                  {detail.name_menu}
                                </p>
                              ))}
                            </div>
                            <AlertDialog.Description className="mt-5 text-gray-400">
                              {openDetailInfo}
                            </AlertDialog.Description>
                          </div>
                        </div>
                      </div>
                      <div className="absolute p-5 text-white bg-black rounded-full -right-3 -top-3">
                        <AlertDialog.Cancel>
                          <div>
                            <IoClose className="text-xl" />
                          </div>
                        </AlertDialog.Cancel>
                      </div>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  {/* <IoBagOutline cl assName="text-2xl" /> */}
                </div>
              )}
            </div>
            <div className="space-y-3 text-white">
              <h2 className="font-semibold font-heading lg:text-lg">
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
