import Image from "next/image";
import React from "react";

const HeaderProfile = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/login-bg.jpg"
        width={1920}
        height={1024}
        alt="background image of profile"
        className="object-cover w-full h-72"
      />
      <div className="px-40 flex gap-5">
        <div className="relative group before:bg-black/50 before:w-[230px] before:h-[230px] before:absolute before:top-[50%] before:left-[50%] before:z-20  before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:mt-[-75px] before:opacity-0 before:hover:opacity-100 before:transition">
          <Image
            src="/icons/no-image.svg"
            alt="user avatar"
            width={250}
            height={250}
            className="rounded-full w-[250px] h-[250px] object-cover border-[10px] mt-[-150px] border-white drop-shadow-lg bg-white"
          />
          <button className="opacity-0 group-hover:opacity-100 flex absolute z-[21] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[-75px] bg-white/50 px-3 py-2 text-white backdrop-blur-md rounded-lg w-[70%] justify-center gap-2 transition hover:bg-white/60 active:bg-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="#F9F8F8"
              className="w-[20px] h-[20px]"
            >
              <path d="M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z" />
            </svg>
            Change Image
          </button>
        </div>
        <div className="before:bg-black before:w-full before:h-full mt-3">
          <div className="flex items-center gap-4">
            <h2 className="capitalize text-4xl font-bold text-primary-green">
              Sarah Connor
            </h2>
            <button className="px-7 py-2 bg-white shadow-md border rounded-full text-primary-green text-lg font-medium active:bg-gray-100  transition">
              Edit
            </button>
          </div>

          <div className="flex text-gray-400 gap-10 mt-3 text-xl">
            <p>Your birthday: 03.08.1987</p>
            <p>How much day stay with us: 143 days</p>
            <p>Your favorite dish: Asian Cucumber Salad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
