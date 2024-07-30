import { Mobile } from "@/config/MediaQuery";
import { aboutUsData, customerSupport, occationData, pearlEducationData, socialMedia } from "@/libs/NavData";
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";

const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear()
  return (
    <div
      className={`${isMobile ? "mt-20 flex-col-reverse" : "mt-40 flex-row"} flex`}
    >
            {/* Menu Occasion, Pearl Education, AboutUs, Customer Support */}
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
                    {/* Occasion */}
                    <div className="space-y-5">
                    <p className="text-lg font-bold">Customer Support</p>
                    <ul className="space-y-4">
                        {customerSupport.map((list, idx) => (
                        <li key={idx} className="text-gray-400">
                            <Link href={list.link}>{list.name_menu}</Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <footer className="mt-20 text-gray-400">
                    ©{date}, Veepearls | All Right Reserved
                </footer>
            </div>
      {/* Subscribe & Social Media */}
      <div className="bg-footer space-y-8 lg:p-10 xl:w-[50%] md:w-[50%] md:p-8 p-5">
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
          {/* Form Subscribe */}
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
          {/* Social Media */}
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
      </div>
    </div>
  );
};

export default Footer;
