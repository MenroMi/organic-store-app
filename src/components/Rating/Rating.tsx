"use client";

// basic
import Image from "next/image";
import React, { useState } from "react";

// interface
import { IRatingProps } from "@/types";

const Rating: React.FC<IRatingProps> = ({
  classNameContainer,
  classNameImage,
  clickable,
}) => {
  const [rating, setRating] = useState(5);
  return (
    <div className={`flex gap-[2px] ${classNameContainer}`}>
      {[...new Array(5)].map((_, i) => (
        <Image
          key={i}
          src={
            (i += 1) <= rating
              ? "/icons/star-fill.svg"
              : "/icons/star-empty.svg"
          }
          alt="rating star"
          width={13.32}
          height={12.77}
          className={`object-contain ${classNameImage} ${
            clickable && "cursor-pointer"
          }`}
          onClick={() => clickable && setRating(i)}
        />
      ))}
    </div>
  );
};

export default Rating;
