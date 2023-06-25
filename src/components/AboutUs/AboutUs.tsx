"use client";

// basic
import Image from "next/image";
import React from "react";

// constants
import { aboutReasons } from "@/constants";

// components
import CustomButton from "@/components/CustomButton";
import useVisible from "@/hooks/useVisible";

const AboutUs = () => {
  const { elemRef, value } = useVisible();
  return (
    <section id="about-us" ref={elemRef} className="about-us lg:py-36">
      <div className="about-us__container">
        <Image
          src="/about-us-bg.png"
          alt="healthy and organic food"
          width={675}
          height={642}
          priority
          className={`w-full object-contain custom-trans flex-1 max-lg:hidden ${
            value ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`custom-trans flex-1 opacity-0 ${value && "opacity-100"}`}
        >
          <h2 className="title sm:text-4xl">About Us</h2>
          <p className="subtitle leading-[1.3] mt-4 sm:text-5xl">
            We Believe in Organic <br />
            Foods For Strong Health
          </p>
          <p className=" font-['Open_Sans'] mt-6 text-grey-text text-base sm:text-lg">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health, and
            care. We aim to give our customers a healthy chemical-free meal for
            perfect nutrition.
          </p>

          <div className="flex flex-col w-full gap-8 mt-14">
            {aboutReasons.map((reason) => (
              <div key={reason.name} className="flex gap-5 items-center">
                <div className="bg-white rounded-2xl h-[100px] max-w-[100px] w-full flex items-center justify-center">
                  <Image
                    src={reason.image}
                    alt={reason.alt}
                    width={53}
                    height={46}
                    className="w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary-green text-base sm:text-2xl">
                    {reason.reasonTitle}
                  </h3>
                  <p className="font-['Open_Sans'] text-grey-text text-sm sm:text-lg ">
                    {reason.reasonDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <CustomButton
            title="Shop Now"
            classNameContainer="custom-trans duration-300 border-4 border-primary-green bg-primary-green h-[82px] w-full  rounded-2xl mt-12 shadow-xl hover:bg-transparent  hover:border-primary-green group sm:w-[200px]"
            classNameText="custom-trans text-white text-[19px] group-hover:text-primary-green"
            classNameArrow="bg-[#335B6B]"
            route="/catalog"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
