"use client";
import { Mobile } from "@/config/MediaQuery";
import { navData } from "@/libs/NavData";
import { DropdownMenu, HoverCard } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import image from "@/libs/ImageData/ImageData";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import emitter from "@/config/EmitterEvent";
// import {Dropdown} from 'flowbite-react'
import { jewerlyType } from "@/libs/ProductData/ProductData";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isMobile } = Mobile();
  const [open, setOpen] = useState<boolean>(false);
  const [selectMenu, setSelectMenu] = useState({});
  const [cartCount, setCartCount] = useState<number>(0);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const [openSubTypes, setOpenSubTypes] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };

    updateCartCount();

    emitter.on("cartUpdated", updateCartCount);

    return () => {
      emitter.off("cartUpdated", updateCartCount);
    };
  }, []);

  const handleSelectMenu = (pages: string) => {
    setSelectMenu(pages);
    setOpenSubMenu(!openSubMenu);
  };
  const handleOpenNavMenu = () => {
    setOpen(!open);
  };

  const handleSubMenuTypes = () => {
    setOpenSubTypes(!openSubTypes)
  }
  

  const handleClick = (type: string) => {
    console.log("Success pindah page jewerly type")
    router.push(`/jewelry/${type}`);
  };


  return (
    <div className={` ${!isMobile && "py-4 md:px-8 lg:px-40"}`}>
      {isMobile ? (
        // Mobile
        <div className="relative z-40">
          <div className="flex items-center justify-between px-5 py-3">
            <Link href={"/"}>
              <Image
                src={image.LogoVeepearl}
                alt="logo-veepearl"
                className="w-16"
              />
            </Link>
            {/* search, bahasa, add to cart, wishlist, authentication */}
            <div className="flex items-center py-4 space-x-5 text-white">
              {/* search */}
              <div>
                <FiSearch className="text-xl" />
              </div>
              {/* add to cart */}
              <div className="relative">
                <Link href={"/checkout"}>
                  <IoBagOutline className="text-xl" />
                </Link>
                {cartCount > 0 && (
                  <div className="absolute top-0 right-0 w-3 h-3 text-xs bg-red-500 rounded-full" />
                )}
              </div>
              {/* add to wishlist */}
              <div>
                <FaRegHeart className="text-xl" />
              </div>
              {/* toggle menu open and close */}
              <button
                className={` ${open && "rotate-180"} transition-all duration-300`}
              >
                {open ? (
                  <IoClose onClick={() => setOpen(false)} className="text-xl" />
                ) : (
                  <HiOutlineMenu
                    onClick={handleOpenNavMenu}
                    className="text-2xl"
                  />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${open ? "top-20" : "-top-52 opacity-10"} absolute h-auto w-screen bg-[#202020] p-5 text-white shadow-md shadow-gray-800 z-40 transition-all duration-500`}
          >
            {/* Menu */}
            <div className="space-y-5">
              {navData.map((list, idx) => (
                <div key={idx}>
                  <p
                    className={`font-heading font-semibold`}
                    onClick={() => handleSelectMenu(list.pages)}
                  >
                    {list.pages}
                  </p>
                  {openSubMenu && selectMenu === list.pages && (
                    <ul className="mt-5 ml-3 space-y-5">
                      {list.subMenu.map((data, idx) => (
                        <li key={idx} className={`font-heading text-gray-300`}>
                          <Link
                            href={data.link}
                            onClick={() => {
                              return setOpen(false), setOpenSubMenu(false);
                            }}
                          >
                            {data.name_menu}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {/* jewelry type */}
              <div>
                <p onClick={handleSubMenuTypes} className="font-semibold font-heading">Jewelry Type</p>
                {
                  openSubTypes && 
                  <ul className="mt-5 ml-5 space-y-5">
                  {
                    jewerlyType.map((list, idx) => (
                      <li onClick={() => handleClick(list.name_type)} key={idx} className="text-gray-300 font-heading">
                        <p>{list.name_type}</p>
                      </li>
                    ))
                  }
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop & Tablet
        <div className="flex items-center justify-between">
         {/* logo */}
         <Link href={"/"}>
            <Image
              src={image.LogoVeepearl}
              alt="logo-veepearl"
              className="md:w-16 lg:w-20"
            />
          </Link>
          {/* dropdown menu */}
          <div className="flex items-center space-x-6 text-gray-200 lg:space-x-10">
            {navData.map((list, idx) => (
              <HoverCard.Root key={idx}>
                <HoverCard.Trigger>
                  <h1 className="font-semibold cursor-pointer">{list.pages}</h1>
                </HoverCard.Trigger>
                <HoverCard.Content size="1" className="p-5 shadow">
                  <ul className="space-y-3 text-black">
                    {list.subMenu.map((data, idx) => (
                      <li key={idx} className={`list-none font-lato`}>
                        <Link href={data.link}>{data.name_menu}</Link>
                      </li>
                    ))}
                  </ul>
                </HoverCard.Content>
              </HoverCard.Root>
            ))}
            {/* jewerly type */}
            <div>
            <HoverCard.Root>
                <HoverCard.Trigger>
                  <p className="font-semibold cursor-pointer">Jewelry Type</p>
                </HoverCard.Trigger>
                <HoverCard.Content size="1" className="p-5 shadow">
                  <ul className="space-y-3 text-black">
                    {jewerlyType.map((data, idx) => (
                      <li onClick={() => handleClick(data.type)} key={idx} className={`list-none font-lato cursor-pointer`}>
                        <p className="">{data.name_type}</p>
                      </li>
                    ))}
                  </ul>
                </HoverCard.Content>
              </HoverCard.Root>
            </div>
          </div>
          {/* search, bahasa, add to cart, wishlist, authentication */}
          <div className="flex items-center space-x-8 text-white">
            {/* search */}
            <div>
              <FiSearch className="text-xl" />
            </div>
            {/* add to cart */}
            <div className="relative">
              <Link href={"/checkout"}>
                <IoBagOutline className="text-xl" />
              </Link>
              {cartCount > 0 && (
                <div className="absolute top-0 right-0 w-3 h-3 text-xs bg-red-500 rounded-full" />
              )}
            </div>
            {/* add to wishlist */}
            <div>
              <FaRegHeart className="text-xl" />
            </div>
            {/* <div>
              <Dropdown label="" className="p-3 bg-black" inline renderTrigger={() => <span>button</span>}>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
