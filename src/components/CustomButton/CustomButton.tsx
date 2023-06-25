"use client";

// basic
import Image from "next/image";
import React from "react";

// interface
import { ICustomButtonProps } from "@/types";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const CustomButton: React.FC<ICustomButtonProps> = ({
  classNameContainer,
  classNameText,
  classNameArrow,
  classNameContent,
  title,
  type,
  route,
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => (route ? router.push(route) : {})}
      className={classNameContainer}
      type={type || "button"}
    >
      <div
        className={twMerge(
          "w-full h-full flex justify-between items-center pl-8 pr-3",
          classNameContent
        )}
      >
        <span className={classNameText}>{title}</span>
        <div
          className={twMerge(
            "rounded-full bg-primary-green p-3",
            classNameArrow
          )}
        >
          <Image
            src="/icons/arrow-btn.svg"
            alt="arrow"
            width={15}
            height={11}
          />
        </div>
      </div>
    </button>
  );
};

export default CustomButton;
