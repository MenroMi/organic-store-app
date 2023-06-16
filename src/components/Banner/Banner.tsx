import React from "react";
import Image from "next/image";
import { IBannerProps } from "@/types";
import { twMerge } from "tailwind-merge";

const Banner: React.FC<IBannerProps> = ({
  image,
  alt,
  title,
  description1,
  description2,
  classNameTitle,
  classNameDescr,
}) => {
  return (
    <div className="banner lg:w-[665px] lg:h-[378px]">
      <Image
        src={image}
        alt={alt}
        width={665}
        height={378}
        className="w-full h-full object-contain"
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
