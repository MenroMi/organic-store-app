"use client";

// basic
import Image from "next/image";
import React, { useEffect, useState } from "react";

// libs
import { useDispatch, useSelector } from "react-redux";

// thunk
import { getAuthUserThunk } from "@/redux/thunks/auth";

// selectors
import { memoAuthSelector } from "@/redux/selectors";

// components
import { LogInBtnInBurger } from "@/components/Buttons";
import { UserMenu } from "@/components/Menu";

// interface
import { AppDispatch } from "@/redux/provider/ReduxProvider";

const BurgerMenuAuth = () => {
  const [isOpenDropdownUserMenu, setOpenDropdownUserMenu] =
    useState<boolean>(false);
  const { user } = useSelector(memoAuthSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAuthUserThunk()); // later search another solution for checking auth user after reload app

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          src={
            user
              ? user.user_metadata?.avatar
                ? user?.user_metadata?.avatar
                : "/icons/no-image.svg"
              : "/icons/user.svg"
          }
          alt="user avatar"
          width={115}
          height={115}
          priority
          className="flex w-[100px] h-[100px] sm:w-[115px] sm:h-[115px] object-cover rounded-full"
        />
        <p className="font-bold text-lg sm:text-2xl">
          {user ? user?.user_metadata?.name : "Guest"}
        </p>
        <LogInBtnInBurger />
      </div>
      {isOpenDropdownUserMenu && user && <UserMenu />}
    </div>
  );
};

export default BurgerMenuAuth;
