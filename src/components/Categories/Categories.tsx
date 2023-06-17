// basic
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// constants
import { categories } from "@/constants";

const Categories = () => {
  return (
    <section className="categories">
      {categories.map((c) => (
        <Fragment key={c.name}>
          <Link href={c.href} className="relative">
            <Image
              src={c.image}
              width={460}
              height={560}
              alt={c.alt}
              className="w-full h-[200px] object-cover lg:h-[580px]"
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
