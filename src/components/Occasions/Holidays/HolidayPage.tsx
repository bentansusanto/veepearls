"use client";
import { Mobile } from "@/config/MediaQuery";
import { holidaysData } from "@/libs/Occasions/OccasionsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HolidayPage = () => {
  const { isMobile } = Mobile();

  return (
    <div className={`${isMobile ? "mt-10 px-5" : "mt-20 md:px-8 lg:px-28"}`}>
      <div className="mx-auto space-y-8 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        {/* Link */}
        <div className="flex space-x-3 text-white">
          <Link href={"/"} className="text-gray-500">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <p className="text-gray-500">Occasions</p>
          <span className="text-gray-500">/</span>
          <Link href={"/anniversaries"} className="font-semibold">
            Holidays
          </Link>
        </div>
        <div className="space-y-8 text-white">
          <Image
            src={require(`@/assets/images/${holidaysData.image}`)}
            alt={holidaysData.image}
          />
          {/* Head */}
          <div className="space-y-4 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl font-bold">{holidaysData.heading}</h1>
            <p className="text-gray-400">{holidaysData.body}</p>
          </div>
          {/* Details */}
          <div className="space-y-10 md:max-w-md lg:max-w-lg xl:max-w-2xl">
            {holidaysData.steps.map((list, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl font-bold">{list.name_steps}</h2>
                {list.image !== undefined && (
                  <Image
                    src={require(`@/assets/images/${list.image}`)}
                    alt="list-detail"
                  />
                )}
                {list.description.map((desc, idx) => (
                  <p key={idx} className="text-gray-400">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPage;
