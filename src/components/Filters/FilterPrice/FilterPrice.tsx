"use client";

import { IPrice } from "@/types";
import React, { useState } from "react";

const FilterPrice = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  const [price, setPrice] = useState<IPrice>({
    from: "",
    to: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      from: "",
      to: "",
    };

    if (parseInt(price.from) > parseInt(price.to)) {
      data.from = price.to;
      data.to = price.from;
    } else {
      data.from = price.from;
      data.to = price.to;
    }

    setPrice({ from: "", to: "" });
    return;
  };

  return (
    <div className={`relative w-full h-[10%]`}>
      <button
        type="button"
        onClick={() => {
          setShowDropdownMenu(!showDropdownMenu);
          setPrice({ from: "", to: "" });
        }}
        className={`transition ease-in-out duration-300 border-y-4 border-primary-green text-primary-green min-h-full w-full font-bold hover:bg-primary-green hover:text-white ${
          showDropdownMenu && "bg-primary-green text-white "
        }`}
      >
        Price
      </button>
      <form
        onSubmit={handleSubmit}
        className={`group flex flex-col w-full max-w-[500px] z-10 p-3 mt-3 bg-primary-green/[0.8] backdrop-blur-sm
          shadow-xl 
        ${showDropdownMenu ? "" : "hidden"}`}
      >
        <div className="flex items-center justify-around h-10 gap-5 ">
          {Object.keys(price).map((k) => {
            let key = k as keyof IPrice;

            return (
              <input
                key={k}
                type="text"
                name={key}
                value={price[key]}
                onBlur={() =>
                  setPrice((prev) => ({
                    ...prev,
                    [key]: /\$/gi.test(price[key])
                      ? price[key].replace(/\$/gi, "$")
                      : price[key]
                      ? price[key] + "$"
                      : "",
                  }))
                }
                onChange={(e) => {
                  setPrice((prev) => ({
                    ...prev,
                    [key]: e.target.value.replace(/[^0-9.$]/gi, ""),
                  }));
                }}
                className={`w-full max-w-[50%] h-10 px-3 ${
                  key === "from"
                    ? " rounded-tl-md rounded-bl-md"
                    : " rounded-tr-md rounded-br-md"
                }`}
                placeholder={`${key}...`}
              />
            );
          })}
        </div>

        <div className="flex gap-2">
          {["confirm", "reset"].map((label) => (
            <button
              key={label}
              type={label === "confirm" ? "submit" : "button"}
              className={`
                capitalize 
                transition-all 
                ease-in-out 
                duration-200 
                h-[60px] 
                mt-2 
                text-white 
                rounded-md 
                font-bold 
             
                disabled:opacity-50 
                disabled:hover:bg-green-light
                ${
                  label === "confirm"
                    ? "w-[70%] bg-green-light hover:bg-primary-green/[0.8] disabled:hover:bg-green-light"
                    : "w-[30%] bg-red-light hover:bg-primary-red/[0.8] disabled:hover:bg-red-light"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FilterPrice;
