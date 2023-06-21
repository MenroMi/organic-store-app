"use client";

import React, { useState } from "react";

const SearchPanel = () => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted!", value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative custom-trans flex h-[50px] md:h-full border-4 border-primary-green md:rounded-tl-xl md:rounded-bl-xl pl-3 w-full flex-2 group"
    >
      <svg
        className="w-4 h-4  md:w-8 md:h-8 mr-3 self-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#274C5B"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="placeholder:text-primary-green/[0.5] h-full w-[65%] md:w-[85%]"
        type="text"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="absolute right-[10px] top-[50%] translate-y-[-50%] custom-trans duration-0 bg-primary-green/[1] h-[50%] text-white px-2 rounded-lg active:bg-green-light"
      >
        Enter
      </button>
    </form>
  );
};

export default SearchPanel;
