"use client";

// basic
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// constants
import { products } from "@/constants";

// hooks
import useVisible from "@/hooks/useVisible";

// components
import ProductCard from "@/components/ProductCard";

import SliderCarousel from "@/components/Slider";

const Organic = () => {
  const { elemRef, value } = useVisible();
  return (
    <section
      ref={elemRef}
      className={`organic transition-all ease-in-out duration-1000 opacity-0 ${
        value && "opacity-100"
      }`}
    >
      <h2 className="title">Organic</h2>
      <h3 className="subtitle">Our Products</h3>

      <div className="flex gap-5 justify-center mt-11">
        <SliderCarousel>
          {products.map((product) => (
            <ProductCard
              key={product?.name}
              category={product?.category}
              image={product?.image}
              label={product?.label}
              name={product?.name}
              priceDiscount={product?.priceDiscount}
              priceOld={product?.priceOld}
            />
          ))}
        </SliderCarousel>
      </div>
    </section>
  );
};

export default Organic;
