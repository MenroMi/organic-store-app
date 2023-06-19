"use client";

import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { articles } from "@/constants";
import useVisible from "@/hooks/useVisible";

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
          classNameContainer="md:max-w-[210px] w-full h-[82px] border border-primary-green rounded-2xl lg:self-end"
          classNameText="text-primary-green text-[20px]"
        />
      </div>

      <div className="news__container">
        {articles.map((a) => (
          <div key={a.title} className="new">
            <Image
              src={a.bgImage}
              alt={a.alt}
              width={670}
              height={515}
              className="new__bg-image"
            />
            <article className="new__article">
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/user.svg"
                  alt=""
                  width={18}
                  height={20}
                  className="object-contain"
                />
                <p className="text-[17px] text-primary-green">{a.user}</p>
              </div>
              <h3 className="new__article-title">{a.title}</h3>
              <p className="new__article-descr">{a.description}</p>
              <CustomButton
                title="View More"
                classNameContainer="w-full h-[50px] mt-auto"
                classNameContent="flex pl-0 pr-0 justify-start gap-3"
                classNameText="text-lg text-primary-green"
                classNameArrow="p-2"
              />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
