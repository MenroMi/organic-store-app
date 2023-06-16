// basic
import Image from "next/image";
import React from "react";

// constants
import { advantages } from "@/constants";

// components
import Rating from "@/components/Rating";

const Testimonial = () => {
  return (
    <section className="testimonial lg:pt-[130px] lg:pb-[150px] xl:bg-no-repeat xl:bg-cover">
      <h2 className="title px-5">Testimonial</h2>
      <h3 className="subtitle px-5 text-center max-md:leading-[1.1] max-md:mt-4">
        What Our Customer Saying?
      </h3>

      <div className="flex flex-col items-center mt-14">
        <div className="flex h-[115px]">
          <Image
            src="/woman-avatar.jpg"
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

        <div className="border-t border-b max-w-[70%] w-full mt-20 sm:max-w-[966px]"></div>

        <div className="advantages">
          {advantages.map((a) => (
            <div
              key={a.description}
              className="advantages__advantage-container"
            >
              <div className="advantages__advantage">
                <p className="font-bold text-[42px] text-primary-green">
                  {a.numbers}
                </p>
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
