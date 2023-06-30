"use client";

import React from "react";
import CustomButton from "../Buttons/CustomButton";
import { articles } from "@/constants";
import useVisible from "@/hooks/useVisible";
import New from "../New/New";

const News = () => {
  const { elemRef, value } = useVisible();

  return (
    <section
      ref={elemRef}
      className={`news custom-trans opacity-0 ${value && "opacity-100"}`}
    >
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="flex flex-col max-md:gap-3">
          <h2 className="title">News</h2>
          <h3 className="subtitle max-md:text-3xl">
            Discover The recent content about organic products
          </h3>
        </div>

        <CustomButton
          title="More News"
          classNameContainer="custom-trans md:max-w-[210px] w-full h-[82px] border border-primary-green rounded-2xl lg:self-end group hover:bg-primary-green"
          classNameText="custom-trans text-primary-green text-[20px] group-hover:text-white"
        />
      </div>

      <div className="news__container">
        {articles.map((a) => (
          <New key={a.title} article={a} />
        ))}
      </div>
    </section>
  );
};

export default News;
