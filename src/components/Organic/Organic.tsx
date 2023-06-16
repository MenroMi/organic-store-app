// basic
import React from "react";

// constants
import { products } from "@/constants";

// components
import ProductCard from "@/components/ProductCard";

const Organic = () => {
  return (
    <section className="organic">
      <h2 className="title">Organic</h2>
      <h3 className="subtitle">Our Products</h3>

      <div className="flex flex-wrap gap-5 justify-center mt-11">
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
      </div>
    </section>
  );
};

export default Organic;
