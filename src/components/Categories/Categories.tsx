"use client";

// basic
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// constants
import { categories } from "@/constants";
import useVisible from "@/hooks/useVisible";

const Categories = () => {
  const { elemRef, value } = useVisible();
  return (
    <section
      ref={elemRef}
      className={`categories custom-trans opacity-0 ${value && "opacity-100"}`}
    >
      {categories.map((c) => (
        <Fragment key={c.name}>
          <Link href={c.href} className="relative">
            <Image
              src={c.image}
              width={460}
              height={560}
              alt={c.alt}
              priority
              className="w-full h-auto object-cover max-lg:h-[200px]"
            />
            <div className="category-bg">
              <h3 className="capitalize font-bold text-2xl text-primary-green">
                {c.name}
              </h3>
            </div>
          </Link>
        </Fragment>
      ))}
    </section>
  );
};

export default Categories;
