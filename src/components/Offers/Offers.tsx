"use client";

// basic
import React from "react";

// constants
import { products } from "@/constants";

// components
import CustomButton from "@/components/CustomButton";
import ProductCard from "@/components/ProductCard";
import useVisible from "@/hooks/useVisible";

const Offers = () => {
  const { elemRef, value } = useVisible();

  return (
    <section
      ref={elemRef}
      className={`offer-products custom-trans opacity-0 ${
        value && "opacity-100"
      }`}
    >
      <div className="offer-products__information">
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="title">Offer Products</h2>
          <h3 className="text-white capitalize font-['Roboto'] font-bold text-[45px] mt-2">
            We Offer Organic for You
          </h3>
        </div>
        <CustomButton
          title="View All products"
          classNameContainer="custom-trans bg-secondary-yellow w-full border-4 border-secondary-yellow max-w-[267px] h-[82px] rounded-2xl shadow-xl max-lg:mt-5 group hover:bg-transparent"
          classNameText="custom-trans text-xl text-primary-green group-hover:text-secondary-yellow"
          classNameArrow="custom-trans group-hover:bg-secondary-yellow"
        />
      </div>

      <div className="offer-products__cards">
        {products.map((prod, i) => {
          if (i + 1 > 3) {
            return null;
          }

          return (
            <ProductCard
              category={prod?.category}
              image={prod?.image}
              label={prod?.label}
              name={prod?.name}
              priceDiscount={prod?.priceDiscount}
              priceOld={prod?.priceOld}
              key={prod?.name}
              classNameContainer="lg:max-w-[447px] lg:h-[590px]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
