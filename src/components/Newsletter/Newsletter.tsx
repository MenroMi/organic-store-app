"use client";

import React, { useState } from "react";
import CustomButton from "@/components/Buttons/CustomButton";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Your email: ${email}. Now we remove it from db.`);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter">
        <p className="newsletter__descr">
          subscribe our <br /> newsletter
        </p>
        <form onSubmit={handleSubmit} className="newsletter__form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="newsletter-input"
          />
          <CustomButton
            type="submit"
            title="Subscribe"
            classNameContainer="
                    bg-primary-green 
                    h-[50px] 
                    border-4
                    border-primary-green
                    rounded-md 
                    w-full 
                    sm:w-[300px] 
                    max-lg:pl-5 
                    lg:h-[82px] 
                    lg:rounded-2xl 
                    lg:max-w-[200px]
                    custom-trans
                    group
                    hover:bg-white
                "
            classNameText="custom-trans text-white lg:font-bold lg:text-lg tracking-wider group-hover:text-primary-green"
            classNameArrow="bg-[#335B6B] max-lg:p-1"
            classNameContent="
                    flex 
                    justify-start
                    items-center
                    max-lg:pr-0 
                    max-lg:pl-0 
                    max-lg:px-1 
                    max-lg:gap-4 
                    lg:justify-around
                "
          />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
