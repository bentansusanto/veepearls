"use client";
import { Mobile } from "@/config/MediaQuery";
import { navData } from "@/libs/NavData";
import { DropdownMenu, HoverCard } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";
import "../../app/globals.css";
import Image from "next/image";
import image from "@/libs/ImageData/ImageData";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { heading } from "@/config/FontFamily";

const Navbar = () => {
  const { isMobile } = Mobile();
  const [open, setOpen] = useState<boolean>(false);
  const [selectMenu, setSelectMenu] = useState({});
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const handleSelectMenu = (pages: string) => {
    setSelectMenu(pages);
    setOpenSubMenu(!openSubMenu);
  };
  const handleOpenNavMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={` ${!isMobile && "py-4 md:px-8 lg:px-28"}`}>
      {isMobile ? (
        // Mobile
        <div className="relative">
          <div className="flex items-center justify-between px-5 py-3">
            <Image
              src={image.LogoVeepearl}
              alt="logo-veepearl"
              className="w-16"
            />
            {/* search, bahasa, add to cart, wishlist, authentication */}
            <div className="flex items-center space-x-5 py-4">
              {/* search */}
              <div>
                <FiSearch className="text-xl" />
              </div>
              {/* add to cart */}
              <div>
                <IoBagOutline className="text-xl" />
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
            className={`${open ? "top-20" : "-top-52 opacity-10"} absolute h-auto w-screen bg-gray-50 p-5 shadow-md shadow-gray-100 transition-all duration-500`}
          >
            {/* Menu */}
            <div className="space-y-5">
              {navData.map((list, idx) => (
                <div key={idx}>
                  <p
                    className={`font-semibold ${heading.className}`}
                    onClick={() => handleSelectMenu(list.pages)}
                  >
                    {list.pages}
                  </p>
                  {openSubMenu && selectMenu === list.pages && (
                    <ul className="ml-3 mt-5 space-y-5">
                      {list.subMenu.map((data, idx) => (
                        <li
                          key={idx}
                          className={`${heading.className} text-gray-500`}
                        >
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
            </div>
          </div>
        </div>
      ) : (
        // Desktop & Mobile
        <div className="flex items-center justify-between">
          {/* dropdown menu */}
          <div className="flex items-center space-x-6 lg:space-x-10">
            {navData.map((list, idx) => (
              <HoverCard.Root key={idx}>
                <HoverCard.Trigger>
                  <h1 className="cursor-pointer">{list.pages}</h1>
                </HoverCard.Trigger>
                <HoverCard.Content size="1" className="p-3 shadow">
                  <ul className="space-y-3">
                    {list.subMenu.map((data, idx) => (
                      <li key={idx} className="list-none">
                        <Link href={data.link}>{data.name_menu}</Link>
                      </li>
                    ))}
                  </ul>
                </HoverCard.Content>
              </HoverCard.Root>
            ))}
          </div>
          {/* logo */}
          <Image
            src={image.LogoVeepearl}
            alt="logo-veepearl"
            className="md:w-16 lg:w-auto"
          />
          {/* search, bahasa, add to cart, wishlist, authentication */}
          <div className="flex items-center space-x-8">
            {/* search */}
            <div>
              <FiSearch className="text-xl" />
            </div>
            {/* add to cart */}
            <div>
              <IoBagOutline className="text-xl" />
            </div>
            {/* add to wishlist */}
            <div>
              <FaRegHeart className="text-xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
