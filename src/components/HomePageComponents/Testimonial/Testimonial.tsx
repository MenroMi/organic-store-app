"use client";

// basic
import Image from "next/image";
import React, { useState } from "react";

// constants
import { advantages } from "@/constants";

// hooks
import useVisible from "@/hooks/useVisible";

// components
import Rating from "@/components/Rating";
import Counter from "@/components/Counter";

const Testimonial = () => {
  const { elemRef, value } = useVisible();
  const [isOnce, setIsOnce] = useState(false);
  return (
    <section
      ref={elemRef}
      className={`testimonial custom-trans lg:pt-[130px] lg:pb-[150px] xl:bg-no-repeat xl:bg-cover opacity-0 ${
        value && "opacity-100"
      }`}
    >
      <h2
        className={`title custom-trans px-5 ${
          value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
        }`}
      >
        Testimonial
      </h2>
      <h3
        className={`subtitle custom-trans px-5 text-center max-md:leading-[1.1] max-md:mt-4 delay-500 ${
          value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
        }`}
      >
        What Our Customer Saying?
      </h3>

      <div
        className={`flex custom-trans flex-col items-center mt-14 opacity-0 ${
          value && "opacity-100"
        }`}
      >
        <div className="flex h-[115px]">
          <Image
            src="/icons/no-image.svg"
            alt="user avatar"
            width={115}
            height={115}
            priority
            className="object-cover rounded-full"
          />
        </div>
        <Rating
          classNameContainer="mt-4"
          classNameImage="w-[21.29px] h-[20.34px]"
          clickable={false}
        />

        <div className="font-['Open_Sans'] text-center px-5">
          <p className="text-grey-text text-lg mt-7">
            The quality of organic produce is extremely high, the service is
            second to none and the taste of the food <br /> takes me back to my
            childhood when we were growing our own.
          </p>
          <h3 className="font-['Roboto'] font-bold text-primary-green text-2xl mt-6">
            Sara Taylor
          </h3>
          <p className="text-sm text-grey-text">Consumer</p>
        </div>

        <div className="border-t border-b max-w-[70%] w-full mt-20 lg:max-w-[966px]"></div>

        <div className="advantages">
          {advantages.map((a) => (
            <div
              key={a.description}
              className="advantages__advantage-container"
            >
              <div className="advantages__advantage">
                {value && (
                  <Counter
                    duration="3"
                    number={a.number}
                    character={
                      !a.number.match(/\D/gi) ? "" : a.number.match(/\D/gi)![0]
                    }
                    isOnce={isOnce}
                    setIsOnce={(val) => setIsOnce(val)}
                  />
                )}
                <p className="capitalize font-bold text-lg text-primary-green">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
