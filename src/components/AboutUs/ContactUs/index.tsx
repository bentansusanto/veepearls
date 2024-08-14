"use client";
import { Mobile } from "@/config/MediaQuery";
import { contactUs } from "@/libs/AboutData/AboutData";
import Image from "next/image";
import Link from 'next/link'
import React from "react";

const ContactUsPage = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${isMobile ? "px-5 -mt-24 py-40" : "mt-20 md:px-8 lg:px-28"} bg-contact-us`}
    >
      {/* Heading */}
      <div className="flex flex-col text-white">
        <Image
          src={require(`@/assets/images/${contactUs.image}`)}
          alt="image-type"
        />
        <div className="space-y-10 mt-10">
          <h1
            className={`font-heading text-2xl capitalize text-center font-bold lg:text-4xl`}
            style={{ lineHeight: "130%" }}
          >
            {contactUs.heading}
          </h1>

          <div className="text-white">
            <div className="mb-10 space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold capitalize font-heading">
                  Sales & Customize
                </h2>
                <div className="space-y-2 text-gray-300">
                  {contactUs.contact.map((list) => (
                    <p key={list}>{list}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-10 space-y-5 ">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold capitalize font-heading">
                  Email
                </h2>
                <p className="text-gray-300">{contactUs.email}</p>
              </div>
            </div>

            <div className="mb-10 space-y-5">
              <h2 className="text-2xl font-semibold capitalize font-heading">
                Website
              </h2>
              <Link href={contactUs.website_link} className="text-gray-300">
                {contactUs.website}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
