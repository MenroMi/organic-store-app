import { products } from "@/constants";
import React from "react";
import ProductCard from "../ProductCard";

const ProductsList = () => {
  return (
    <div className="flex flex-wrap w-full lg:gap-10 max-md:justify-between max-lg:justify-evenly lg:justify-center xl:justify-left">
      {products.map((prod) => {
        return (
          <ProductCard
            category={prod?.category}
            image={prod?.image}
            label={prod?.label}
            name={prod?.name}
            priceDiscount={prod?.priceDiscount}
            priceOld={prod?.priceOld}
            key={prod?.name}
            classNameContainer="max-sm:p-[0.75rem] max-sm:max-w-[160px] max-sm:h-[320px] max-md:max-w-[200px] max-md:h-[380px]"
            classNameCategory="max-md:max-w-full max-md:h-[20px]"
            classNameTitle="max-md:text-base"
            classNameContainerPrice="max-md:flex-col"
            classNameActualPrice="max-md:text-lg"
            classNameRating="max-md:ml-0"
            classNameDivider="max-sm:mt-[0.5rem]"
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
