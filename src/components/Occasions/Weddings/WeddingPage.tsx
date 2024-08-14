"use client";
import { Mobile } from "@/config/MediaQuery";
import { weddingsData } from "@/libs/Occasions/OccasionsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeddingPage = () => {
  const { isMobile } = Mobile();

  return (
    <div className={`${isMobile ? "-mt-24 py-40 px-5" : "mt-20 md:px-8 lg:px-28"} bg-wedding`}>
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
            Weddings
          </Link>
        </div>
        <div className="space-y-8 text-white">
          <Image
            src={require(`@/assets/images/${weddingsData.image}`)}
            alt="weddingsData.image"
          />
          {/* Head */}
          <div className="space-y-4 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-xl font-bold">{weddingsData.heading}</h1>
            <p className="text-gray-400">{weddingsData.body}</p>
          </div>
          {/* Details */}
          <div className="space-y-10 md:max-w-md lg:max-w-lg xl:max-w-2xl">
            {weddingsData.steps.map((list, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-[16px] font-bold">{list.name_steps}</h2>
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

export default WeddingPage;
