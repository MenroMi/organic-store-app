"use client";

// basic
import React, { Children, useEffect, useState } from "react";

// interface
import { IBurgerMenuProps } from "@/types";

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  children,
  isOpen,
  setIsOpen,
  scrollValue,
  classNameContainer,
}) => {
  let trigger: React.ReactElement;
  let modalContent: React.ReactElement;
  const [scrollPosition, setScrollPosition] = useState(0);

  Children.forEach(children, (elem) => {
    let el = elem as React.ReactElement;

    if (el?.type === "svg" || el?.type === "button") {
      return (trigger = el);
    }

    return (modalContent = el);
  });

  useEffect(() => {
    if (isOpen) {
      setScrollPosition(scrollValue);

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollValue}px`;
    }

    return () => {
      document.body.style.position = "";
      window.scrollTo(0, scrollPosition);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, scrollPosition]);

  useEffect(() => {
    const onCloseMenuByEsc = (e: KeyboardEvent) => {
      return e?.key === "Escape" ? setIsOpen(false) : null;
    };

    window.addEventListener("keydown", onCloseMenuByEsc);

    return () => window.removeEventListener("keydown", onCloseMenuByEsc);
  }, []);

  return (
    <div className={classNameContainer}>
      {trigger!}
      <div
        className={`fixed h-full w-[70vw] bg-white z-[14] top-0 right-0 pt-3 overflow-auto ${
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
        {modalContent!}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? "visible" : "hidden"}`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
