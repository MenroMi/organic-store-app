"use client";

// basic
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// constants
import { navLinks } from "@/constants";

// components
import BurgerMenu from "@/components/BurgerMenu";

const Navbar = () => {
  const [smaller, setSmaller] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const {
        documentElement: { scrollTop },
      } = e.target as any;

      if (scrollTop >= 100) {
        return setSmaller(true);
      } else {
        setSmaller(false);
      }

      return null;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`general-header transition-all max-sm:h-[100px] lg:fixed lg:top-0 lg:z-[12] lg:backdrop-blur-sm ${
        smaller ? "h-[90px]" : "h-[150px]"
      } `}
    >
      <nav className="general-header__navbar max-lg:gap-4 lg:gap-2">
        <div className="flex justify-between max-w-[865px] w-full gap-2">
          <Link
            href="/"
            className="flex items-center max-sm:w-[120px] transition"
          >
            <Image
              src="/logo.png"
              alt="organic store logo"
              width={200}
              height={56}
              priority
              className="object-contain"
            />
          </Link>
          <div className="max-lg:hidden flex justify-center items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href="/" className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>
          <BurgerMenu />
        </div>
        <div className="cart max-sm:min-w-[40px] max-lg:min-w-[80px] lg:min-w-[159px]">
          <Link
            href="/"
            className="flex border rounded-full items-center gap-3 max-sm:p-1 max-lg:p-2 lg:py-2 lg:pl-3 lg:pr-6 "
          >
            <div className="max-sm:p-2 p-4 rounded-full bg-primary-green">
              <Image
                src="/icons/cart.svg"
                alt="cart logo"
                width={26}
                height={24}
                priority
                className="object-contain"
              />
            </div>

            <p className="lg:visible max-lg:hidden">Cart 0</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
