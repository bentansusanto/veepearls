import { Mobile } from "@/config/MediaQuery";
import {
  aboutUsData,
  customerSupport,
  navData,
  occationData,
  pearlEducationData,
  socialMedia,
} from "@/libs/NavData";
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";
import { jewerlyType } from "@/libs/ProductData/ProductData";
import image from "@/libs/ImageData/ImageData";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear();
  const [selectMenu, setSelectMenu] = useState({});
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const handleSelectMenu = (pages: string) => {
    setSelectMenu(pages);
    setOpenMenu(!openMenu)
  };
  const handleClick = (type: string) => {
    console.log("Success pindah page jewerly type")
    router.push(`/jewelry/${type}`);
  };

  return (
    <div
      className={`${isMobile ? "mt-10 px-5 flex-col" : "mt-40 flex-row"} flex`}
    >
      {/* Menu Occasion, Pearl Education, AboutUs, Customer Support */}
      {isMobile ? (
        // Mobile  device
        <div className="space-y-5">
          <Image
            src={image.LogoVeepearl}
            alt="logo-veepearl"
            className="w-20 pb-10"
          />
          {navData.map((list, idx) => (
            <div
              key={idx}
              className="hs-accordion-treeview-root"
              role="tree"
              aria-orientation="vertical"
            >
              <div
                className="hs-accordion-group"
                role="group"
                data-hs-accordion-always-open=""
              >
                <div
                  className="hs-accordion active"
                  role="treeitem"
                  aria-expanded="true"
                  id="hs-basic-tree-heading-one"
                >
                  <div className="hs-accordion-heading py-0.5 flex flex-row-reverse items-center gap-x-0.5 w-full">
                    <button
                    onClick={() => handleSelectMenu(list.pages)}
                      className="hs-accordion-toggle size-6 flex justify-center items-center  rounded-md focus:outline-none  disabled:opacity-50 disabled:pointer-events-none "
                      aria-expanded="true"
                      aria-controls="hs-basic-tree-collapse-one"
                    >
                      <svg
                        className="size-8 text-white dark:text-neutral-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path
                          className={` ${openMenu&&selectMenu === list.pages ? "hs-accordion-active:hidden" : " block"}`}
                          d="M12 5v14"
                        ></path>
                      </svg>
                    </button>

                    <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <div className="grow">
                          <span className="font-heading text-lg capitalize text-white dark:text-neutral-200">
                            {list.pages}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                    <div
                      id="hs-basic-tree-collapse-one"
                      className={`${openMenu && selectMenu === list.pages ? " hs-accordion-content" : "h-0"} w-full mt-3 overflow-hidden transition-[height] duration-300`}
                      role="group"
                      aria-labelledby="hs-basic-tree-heading-one"
                    >
                      
                      <div
                        className="hs-accordion-group ps-7"
                        role="group"
                        data-hs-accordion-always-open=""
                      >             
                        <div
                          className="hs-accordion active space-y-4 mt-4"
                          role="treeitem"
                          aria-expanded="true"
                          id="hs-basic-tree-sub-heading-one"
                        > 
                          {list.subMenu.map((menu, idx) => (
                            <div
                              key={idx}
                              className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full"
                            >
                              <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                                <div className="flex items-center gap-x-3">
                                  <div className="grow">
                                    <Link href={menu.link} className="text-lg font-heading hover:text-white text-gray-400">
                                      {menu.name_menu}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
          {/* Veepearl Jewelry */}
          <div
            className="hs-accordion-treeview-root"
            role="tree"
            aria-orientation="vertical"
          >
            <div
              className="hs-accordion-group"
              role="group"
              data-hs-accordion-always-open=""
            >
              <div
                className="hs-accordion active"
                role="treeitem"
                aria-expanded="true"
                id="hs-basic-tree-heading-one"
              >
                <div className="hs-accordion-heading py-0.5 flex flex-row-reverse items-center gap-x-0.5 w-full">
                  <button
                    className="hs-accordion-toggle size-6 flex justify-center items-center  rounded-md focus:outline-none  disabled:opacity-50 disabled:pointer-events-none "
                    aria-expanded="true"
                    aria-controls="hs-basic-tree-collapse-one"
                  >
                    <svg
                      className="size-8 text-white dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path
                        className="hs-accordion-active:hidden block"
                        d="M12 5v14"
                      ></path>
                    </svg>
                  </button>

                  <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                    <div className="flex items-center gap-x-3">
                      <div className="grow">
                        <Link href={'/jewelry'} className="font-heading text-lg capitalize text-white dark:text-neutral-200">
                          Veepearl Jewellery
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="hs-basic-tree-collapse-one"
                  className="hs-accordion-content w-full mt-3 overflow-hidden transition-[height] duration-300"
                  role="group"
                  aria-labelledby="hs-basic-tree-heading-one"
                >
                  <div
                    className="hs-accordion-group ps-7"
                    role="group"
                    data-hs-accordion-always-open=""
                  >
                    <div
                      className="hs-accordion active space-y-4 mt-4"
                      role="treeitem"
                      aria-expanded="true"
                      id="hs-basic-tree-sub-heading-one"
                    >
                      {jewerlyType.map((list, idx) => (
                        <div
                          key={idx}
                          className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full"
                        >
                          <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span onClick={() => handleClick(list.type)} className="text-lg font-heading hover:text-white text-gray-400">
                                  {list.name_type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            {socialMedia.map((list, idx) => (
              <Link key={idx} href={list.link}>
                <Image
                  src={require(`@/assets/images/${list.icon}`)}
                  alt={list.icon}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        // Desktop & Tablet
        <div className=" text-white md:p-8 p-5 bg-black xl:pl-28 lg:pl-10 md:w-[100%]">
          <div className="flex flex-wrap gap-10 xl:gap-20 lg:gap-14 md:gap-10">
            {/* Occasion */}
            <div className="space-y-5">
              <p className="text-lg font-bold">Occasions</p>
              <ul className="space-y-4">
                {occationData.map((list, idx) => (
                  <li key={idx} className="text-gray-400">
                    <Link href={list.link}>{list.name_menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Occasion */}
            <div className="space-y-5">
              <p className="text-lg font-bold">Pearl Education</p>
              <ul className="space-y-4">
                {pearlEducationData.map((list, idx) => (
                  <li key={idx} className="text-gray-400">
                    <Link href={list.link}>{list.name_menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Occasion */}
            <div className="space-y-5">
              <p className="text-lg font-bold">About Us</p>
              <ul className="space-y-4">
                {aboutUsData.map((list, idx) => (
                  <li key={idx} className="text-gray-400">
                    <Link href={list.link}>{list.name_menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Subscribe & Social Media */}
      <footer className="mt-20 mb-5 mx-auto text-gray-400">
        ©{date}, Veepearls | All Right Reserved
      </footer>
    </div>
  );
};

export default Footer;

{
  /* <div className="bg-footer space-y-8 lg:p-10 xl:w-[50%] md:w-[50%] md:p-8 p-5">
  <div className="text-white lg:max-w-lg">
    <h1
      className={`font-heading text-2xl font-semibold md:text-3xl xl:text-3xl`}
      style={{ lineHeight: "150%" }}
    >
      Join Veepearl for free and discover exclusive access to our biggest
      drops, promotions, and more.
    </h1>
  </div>
  <div className="space-y-5">
    
    <div className="flex items-center justify-between rounded-md bg-[#2626265e] text-white backdrop-blur-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="border-[#454545] placeholder:text-gray-300 bg-transparent px-3 outline-none"
      />
      <button
        className={`rounded-md border-2 border-[#B2A671] bg-[#B2A671] px-5 py-3.5 text-center font-lato font-semibold text-white transition-all duration-300 hover:bg-[#B2A671] hover:text-white`}
      >
        Subscibe
      </button>
    </div>
    <div className="flex items-center space-x-5">
      {socialMedia.map((list, idx) => (
        <Link key={idx} href={list.link}>
          <Image
            src={require(`@/assets/images/${list.icon}`)}
            alt={list.icon}
          />
        </Link>
      ))}
    </div>
  </div>
</div> */
}
