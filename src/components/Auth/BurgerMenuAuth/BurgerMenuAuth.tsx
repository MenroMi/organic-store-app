"use client";

// basic
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// libs
import { useDispatch, useSelector } from "react-redux";

// constants
import { navHref } from "@/constants/navigation";

// slice
import { setOpenLoginForm } from "@/redux/slices/authSlice";

// interface
import { IAuthReducer } from "@/types/reduxTypes";

const BurgerMenuAuth = () => {
  const [isOpenDropdownUserMenu, setOpenDropdownUserMenu] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: { auth: IAuthReducer }) => state.auth.isLogin
  );

  return (
    <div
      onClick={(e: React.SyntheticEvent<HTMLDivElement>) => {
        const { tagName } = e.target as HTMLDivElement;

        if (tagName === "BUTTON") {
          return;
        }

        setOpenDropdownUserMenu(!isOpenDropdownUserMenu);
      }}
      className="border-t border-b"
    >
      <div className="hover:bg-slate-100 flex flex-col sm:flex-row items-center px-10 py-2 gap-5 w-full transition">
        <Image
          src={isLogin ? "/woman-avatar.jpg" : "/icons/user.svg"}
          alt="user avatar"
          width={115}
          height={115}
          priority
          className="flex w-[100px] h-[100px] sm:w-[115px] sm:h-[115px] object-cover rounded-full"
        />
        <p className="font-bold text-lg sm:text-2xl">
          {isLogin ? "Alexander Polgov" : "Unauthorized"}
        </p>
        <button
          onClick={() =>
            !isLogin
              ? dispatch(setOpenLoginForm())
              : setOpenDropdownUserMenu(!isOpenDropdownUserMenu)
          }
          className="sm:ml-auto rounded-full border-2 px-6 py-2 bg-white hover:bg-gray-200 hover:text-white transition"
        >
          {isLogin ? "Log out" : "Log in"}
        </button>
      </div>
      {isOpenDropdownUserMenu && isLogin && (
        <div className={`flex flex-col items-center mt-5 w-full sm:text-3xl`}>
          {["Profile", "Favorite", "Settings"].map((link: string) => (
            <Link
              key={link}
              href={navHref.home}
              className="px-10 py-8 w-full text-center font-bold hover:bg-slate-100 "
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenuAuth;
