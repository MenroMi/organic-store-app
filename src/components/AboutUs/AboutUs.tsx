// basic
import Image from "next/image";
import React from "react";

// constants
import { aboutReasons } from "@/constants";

// components
import CustomButton from "@/components/CustomButton";

const AboutUs = () => {
  return (
    <section className="about-us lg:py-36">
      <div className="about-us__container">
        <Image
          src="/about-us-bg.png"
          alt="healthy and organic food"
          width={675}
          height={642}
          className="object-contain flex-1 max-lg:hidden"
        />

        <div className="flex-1">
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
                    className=" object-contain"
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
            classNameContainer="bg-primary-green h-[82px] w-full sm:w-[200px] rounded-2xl mt-12 shadow-xl"
            classNameText="text-white text-[19px]"
            classNameArrow="bg-[#335B6B]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
