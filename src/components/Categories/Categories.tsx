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
      {categories.map((c, i) => (
        <Fragment key={c.name}>
          <Link
            href={c.href}
            className={`relative w-full h-[580px] max-lg:h-[200px] group bg-fixed bg-cover ${
              i === 0 ? "bg-juice-bg" : i === 1 ? "bg-food-bg" : "bg-cookie-bg"
            }`}
          >
            <div className="custom-trans category-bg w-[280px] shadow-xl group-hover:w-[310px]">
              <h3 className="custom-trans capitalize font-bold text-2xl text-primary-green group-hover:text-green-light">
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
