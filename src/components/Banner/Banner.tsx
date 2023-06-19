"use client";

import React from "react";
import Image from "next/image";
import { IBannerProps } from "@/types";
import { twMerge } from "tailwind-merge";
import useVisible from "@/hooks/useVisible";

const Banner: React.FC<IBannerProps> = ({
  image,
  alt,
  title,
  description1,
  description2,
  classNameTitle,
  classNameDescr,
}) => {
  const { elemRef, value } = useVisible();

  return (
    <div
      ref={elemRef}
      className={`banner custom-trans lg:w-[665px] lg:h-[378px] ${
        value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        width={665}
        height={378}
        className="w-full h-full object-contain"
        priority
      />
      <div className="banner__description sm:left-14">
        <h3
          className={twMerge(
            "text-lg sm:text-4xl font-['Yellowtail'] text-white",
            classNameTitle
          )}
        >
          {title}
        </h3>
        <p
          className={twMerge(
            "text-base sm:text-[40px] sm:leading-[3.2rem] pt-3",
            classNameDescr
          )}
        >
          <span>{description1}</span>
          <br />
          <span>{description2}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
