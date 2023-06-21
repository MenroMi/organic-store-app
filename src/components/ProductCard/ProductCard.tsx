// basic
import Image from "next/image";
import React from "react";

// components
import Rating from "@/components/Rating";

// interface
import { IProductCardProps } from "@/types";
import { twMerge } from "tailwind-merge";

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const {
    name,
    label,
    priceOld,
    priceDiscount,
    image,
    category,
    classNameContainer,
    classNameTitle,
    classNameDivider,
    classNameContainerPrice,
    classNameOldPrice,
    classNameActualPrice,
    classNameRating,
    classNameCategory,
  } = props;

  return (
    <div className="flex justify-center mb-5">
      <div className={twMerge("card cursor-pointer", classNameContainer)}>
        {/*relative after:content-[''] after:rounded-[30px] after:absolute after:top-0 after:left-0 after:w-full after:h-full hover:after:bg-black/[0.2] */}
        <div className={twMerge("card__category", classNameCategory)}>
          {category}
        </div>
        <Image
          src={image}
          alt={name}
          width={387}
          height={378}
          className="object-contain mb-3"
        />
        <h2
          className={twMerge("card__product-name text-[22px]", classNameTitle)}
        >
          {label}
        </h2>
        <div className={twMerge("border-y mt-5", classNameDivider)}></div>
        <div
          className={twMerge(
            "mt-3 flex gap-3 items-center",
            classNameContainerPrice
          )}
        >
          <span
            className={twMerge(
              "line-through text-grey-text/[0.5] text-sm lg:text-[17px]",
              classNameOldPrice
            )}
          >
            $ {priceOld} USD
          </span>
          <span
            className={twMerge(
              "text-primary-green font-bold text-sm lg:text-lg",
              classNameActualPrice
            )}
          >
            $ {priceDiscount} USD
          </span>
          <Rating
            classNameContainer={twMerge("ml-auto", classNameRating)}
            clickable={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
