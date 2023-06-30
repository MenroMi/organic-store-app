"use client";

// basic
import React, { Fragment } from "react";

// constants
import { advantagesEcoProducts } from "@/constants";
import useVisible from "@/hooks/useVisible";

const EcoFriendly = () => {
  const { elemRef, value } = useVisible();

  return (
    <section
      ref={elemRef}
      className={`eco-friendly custom-trans opacity-0 ${
        value && "opacity-100"
      }`}
    >
      <div
        className={`eco-friendly__bg custom-trans  opacity-0 ${
          value && "opacity-100"
        }`}
      ></div>
      <div
        className={`eco-information custom-trans delay-500 opacity-0 ${
          value && "opacity-100"
        }`}
      >
        <h2 className="title max-md:text-2xl">Eco Friendly</h2>
        <h3 className="subtitle max-md:text-3xl">
          From our Farm <br />
          to your Home.
        </h3>

        <div className="mt-7">
          {advantagesEcoProducts.map((a) => (
            <Fragment key={a.title}>
              <h4 className="capitalize font-bold text-[23px] text-primary-green mt-3">
                {a.title}
              </h4>
              <p className="font-['Open_Sans'] text-lg text-grey-text">
                {a.description}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;
