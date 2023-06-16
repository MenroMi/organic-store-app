"use client";

// basic
import Image from "next/image";
import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(5);
  return (
    <div className="ml-auto flex gap-[2px]">
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
          className="object-contain cursor-pointer"
          onClick={() => setRating(i)}
        />
      ))}
    </div>
  );
};

export default Rating;
