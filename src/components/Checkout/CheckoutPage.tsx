"use client";
import { dollar } from "@/config/Currency";
import emitter from "@/config/EmitterEvent";
import { greetingMessage } from "@/config/GreetingMessage";
import { Mobile } from "@/config/MediaQuery";
import { ProductJewerly } from "@/types/ProductType";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const initialValue = {
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  city: "",
  country: "",
};

const CheckoutPage = () => {
  const { isMobile } = Mobile();
  const [cart, setCart] = useState<ProductJewerly[]>([]);
  const [form, setForm] = useState(initialValue || "");
  const shipping:number = 10
  const tax:number = 10
  const waLink = "https://wa.me";
  const numberWA = "+905365829313";
  const greetingData = greetingMessage();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const calculateSubtotal = () => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      return storedCart.reduce(
        (acc: number, item: ProductJewerly) => acc + item.totalPrice,
        0,
      );
    }
  };
  const subTotal = calculateSubtotal();
  const total = subTotal + shipping + tax;

  const handleSendMessage = (
    e: React.FormEvent<HTMLInputElement | HTMLParagraphElement>,
  ) => {
    e.preventDefault();
    const message = `
${greetingData} veepearls, i want to buy pearls jewerly.
*Order Details:*
Name: ${form.name}
Phone Number: ${form.phoneNumber}
Email: ${form.email}
Address: ${form.address}
City: ${form.city}
Country: ${form.country}

*Order Summary:*
${cart.map((item) => `Product: ${item.name_product}, Quantity: ${item.quantity}, SubTotal Price: ${dollar(item.totalPrice)}`).join("\n")}

Shipping: ${dollar(shipping)}
Tax: ${dollar(tax)}

Total: ${dollar(total.toFixed(2))}
`;

    const whatsappLink = `${waLink}/${numberWA}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappLink, "_blank");
    setForm(initialValue);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);

      const updateCart = () => {
        const newCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(newCart);
      };

      emitter.on("cartUpdated", updateCart);

      return () => {
        emitter.off("cartUpdated", updateCart);
      };
    }
  }, []);

  const handleRemoveFromCart = (name_product: string) => {
    const newCart = cart.filter((item) => item.name_product !== name_product);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    emitter.emit("cartUpdated");
  };

  return (
    <div className={`${isMobile ? "px-5" : "mt-20 md:px-8 lg:px-28"}`}>
      <div className="mx-auto xl:max-w-7xl">
        <h1 className="font-heading text-2xl text-white">Shopping Cart</h1>
        <div className="mt-5 flex flex-col gap-10 md:flex-row md:space-x-5 lg:space-x-10 xl:space-x-20">
          {/* Cart */}
          <div className={`w-full space-y-5 text-white`}>
            {cart.length === 0 && (
              <p className="text-gray-500">your cart is empty</p>
            )}
            <div
              className={`space-y-5 ${isMobile && "h-[70vh] overflow-y-scroll"}`}
            >
              {cart.map((list, idx) => (
                <div
                  key={idx}
                  className="flex w-full items-center gap-5 rounded-md bg-[#252525] p-5 text-white"
                >
                  <div className="max-w-[50%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[30%]">
                    <Image
                      src={require(`@/assets/images/${list.image}`)}
                      alt="list-image-product-cart"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold md:text-[16px] xl:text-xl">
                      {list.name_product}
                    </p>
                    <p className="text-gray-400">
                      Qty:{" "}
                      <span className="font-semibold text-white">
                        {list.quantity}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Total Price:{" "}
                      <span className="font-semibold text-white md:text-[15px] lg:text-lg">
                        {dollar(list.totalPrice as number)}
                      </span>
                    </p>
                    <button
                      onClick={() => handleRemoveFromCart(list.name_product)}
                      className="rounded-md border border-red-500 px-5 py-2.5 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form Checkout */}
          <div className="h-[100%] w-[100%] bg-[#08080880] p-5 text-white">
            <h1 className="font-heading text-2xl">Form Checkout</h1>
            {/* Form Checkout */}
            <div className="mt-8">
              <form className="">
                {/* name */}
                <div className="mb-3 bg-[#252525]">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                  />
                </div>
                {/* phone number & email */}
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="mb-3 w-full bg-[#252525]">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="mb-3 w-full bg-[#252525]">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                {/* address */}
                <div className="mb-3 bg-[#252525]">
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                  />
                </div>
                {/* city & country */}
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="mb-3 w-full bg-[#252525]">
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="mb-3 w-full bg-[#252525]">
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      className="w-full bg-transparent px-3 py-4 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                {/* detail price */}
                <div className="mb-3 mt-6">
                  <h2 className="font-heading font-semibold">Detail Price</h2>
                  <div className="mt-5 space-y-3">
                    {/* subtotal price */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Subtotal</p>
                      <p className="text-gray-300">{dollar(subTotal)}</p>
                    </div>
                    {/* shipping price */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Shipping</p>
                      <p className="text-gray-300">{dollar(shipping)}</p>
                    </div>
                    {/* shipping price */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Tax</p>
                      <p className="text-gray-300">{dollar(tax)}</p>
                    </div>
                    <div className="my-3 h-[1px] w-full bg-gray-500" />
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-lg font-semibold text-white">
                        {dollar(total)}
                      </p>
                    </div>
                  </div>
                </div>
                {/* button cta */}
                <button
                  className={`w-full rounded-md border-2 border-[#B2A671] bg-[#B2A671] px-5 py-2.5 text-center font-semibold text-white transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
                >
                  <p onClick={handleSendMessage}>Checkout Now</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
