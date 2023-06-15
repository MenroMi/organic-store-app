// basic
import Image from "next/image";
import React from "react";

// interface
import { ICustomButtonProps } from "@/types";

const CustomButton: React.FC<ICustomButtonProps> = ({
  classNameContainer,
  classNameText,
  title,
}) => {
  return (
    <button className={classNameContainer} type="button">
      <div className="w-full h-full flex justify-between items-center  pl-8 pr-3">
        <span className={classNameText}>{title}</span>
        <div className="rounded-full bg-primary-green p-3">
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
