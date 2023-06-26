"use client";

// basic
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// constants
import { navLinks } from "@/constants";

// components
import BurgerMenu from "@/components/BurgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [smaller, setSmaller] = useState<boolean>(false);
  const scrollRef = useRef<number>(0);

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
        <div className="flex justify-between items-center max-w-[865px] w-full gap-2">
          <Link
            href="/"
            className="flex items-center max-lg:w-[120px] transition"
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
          <svg
            onClick={() => {
              scrollRef.current = document.documentElement.scrollTop;
              setIsOpen(!isOpen);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#274C5B"
            className={`transition-all max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px] lg:hidden ${
              isOpen ? "hidden" : "visible"
            }`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <div className="max-lg:hidden h-full flex justify-center items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>

          <BurgerMenu
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            scrollValue={scrollRef.current}
            classNameContainer={`self-center cursor-pointer ${
              !isOpen && "hidden"
            }`}
          >
            <div className="flex flex-col h-full w-full justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="burger-nav__item max-md:text-2xl md:text-4xl"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </BurgerMenu>
        </div>
        <div className="flex gap-3">
          <div className="cart max-sm:min-w-[40px] max-lg:min-w-[80px] lg:min-w-[165px]">
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
          <div className="cart max-sm:min-w-[40px] max-xl:min-w-[80px]">
            <Link
              href="/"
              className="border rounded-full items-center gap-3 max-sm:p-1 max-lg:p-2 lg:p-2 active:scale-90 transition"
            >
              <div className="max-sm:p-2 p-4 rounded-full bg-primary-green">
                <Image
                  src="/icons/user.svg"
                  alt="user logo"
                  width={23}
                  height={23}
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
