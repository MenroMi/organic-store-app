// basic
import Image from "next/image";
import React from "react";

// components
import Rating from "@/components/Rating";

// interface
import { IProductCardProps } from "@/types";

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const { name, label, priceOld, priceDiscount, image, category } = props;

  return (
    <div className="flex justify-center mb-5">
      <div className="card lg:max-w-[447px] lg:h-[590px]">
        <div className="card__category">{category}</div>
        <Image
          src={image}
          alt={name}
          width={387}
          height={378}
          className="object-contain mb-3"
        />
        <h2 className="card__product-name">{label}</h2>
        <div className="border-y mt-5"></div>
        <div className="mt-3 flex gap-3 items-center">
          <span className="line-through text-grey-text/[0.5] text-sm lg:text-[17px]">
            $ {priceOld} USD
          </span>
          <span className="text-primary-green font-bold text-sm lg:text-lg">
            $ {priceDiscount} USD
          </span>
          <Rating classNameContainer="ml-auto" clickable={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
