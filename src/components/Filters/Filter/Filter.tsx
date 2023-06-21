"use client";

import React, { useState } from "react";

interface IFilterProps {
  label: string;
  data: string[];
}

const Filter: React.FC<IFilterProps> = ({ label, data }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted!", category);
  };

  const handleSearchingCategory = () => {
    if (category.length <= 0) {
      return data;
    }
    return data.filter((d) => d.startsWith(category.toLowerCase()));
  };

  return (
    <div
      className={`flex flex-col relative w-full h-[10%] ${
        showDropdownMenu && "h-[70%]"
      }`}
    >
      <button
        type="button"
        onClick={() => {
          setShowDropdownMenu(!showDropdownMenu);
        }}
        className={`transition ease-in-out duration-300 border-y-4 border-primary-green text-primary-green h-full ${
          showDropdownMenu && "h-[14.5%]"
        } w-full font-bold hover:bg-primary-green hover:text-white ${
          showDropdownMenu && "bg-primary-green text-white "
        }`}
      >
        Categories
      </button>
      <form
        onSubmit={handleSubmit}
        className={`group flex flex-col w-full z-10 mt-3 p-3 max-w-[500px] bg-primary-green/[1] backdrop-blur-sm
          shadow-xl 
        ${showDropdownMenu ? "" : "hidden"}`}
      >
        <div className="flex items-center h-10">
          <input
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            value={category}
            type="search"
            placeholder="Search..."
            className="box-border bg-[length:5%] bg-[5%_center] bg-search-icon bg-no-repeat pl-14 h-full w-full"
          />
        </div>
        <div className="border my-5 opacity-50"></div>
        <button
          onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
            const input = e.target as HTMLElement;

            return setCategory(input?.textContent!);
          }}
          type="button"
          className={`h-[40px] border-2 border-white rounded-md text-white capitalize font-bold hover:bg-white hover:text-primary-green`}
        >
          all
        </button>
        {handleSearchingCategory().map((d, i) => (
          <button
            onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
              const input = e.target as HTMLElement;

              return setCategory(input?.textContent!);
            }}
            key={d}
            type="button"
            className={`h-[40px] border-2 border-white rounded-md text-white capitalize font-bold hover:bg-white hover:text-primary-green mt-2`}
          >
            {d}
          </button>
        ))}
        <button
          disabled={!category && true}
          type="submit"
          className={`transition-all ease-in-out duration-200 h-[60px] bg-green-light mt-2 text-white rounded-md font-bold hover:bg-primary-green/[0.8] disabled:opacity-50 disabled:hover:bg-green-light`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Filter;
