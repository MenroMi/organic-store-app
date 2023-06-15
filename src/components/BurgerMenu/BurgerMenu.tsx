"use client";

// basic
import React, { useEffect, useState } from "react";
import Link from "next/link";

// constants
import { navLinks } from "@/constants";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const onCloseMenuByEsc = (e: KeyboardEvent) => {
      return e?.key === "Escape" ? setIsOpen(false) : null;
    };

    window.addEventListener("keydown", onCloseMenuByEsc);

    return () => window.removeEventListener("keydown", onCloseMenuByEsc);
  }, []);

  return (
    <div className="self-center lg:hidden cursor-pointer ">
      <svg
        onClick={() => setIsOpen(true)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#274C5B"
        className={`transition-all max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px] ${
          isOpen ? "hidden" : "visible"
        }`}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>

      <div
        className={`fixed h-full w-[70vw] bg-white z-[11] top-0 right-0 py-10 ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <div className="flex px-8 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#274C5B"
            className="w-[70px] h-[70px]"
            onClick={() => setIsOpen(false)}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="flex flex-col h-full w-full justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href="/"
              className="burger-nav__item max-md:text-2xl md:text-4xl"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? "visible" : "hidden"}`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
