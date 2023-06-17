// basic
import React, { Fragment } from "react";

// constants
import { advantagesEcoProducts } from "@/constants";

const EcoFriendly = () => {
  return (
    <section className="eco-friendly">
      <div className="eco-friendly__bg "></div>
      <div className="eco-information">
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
