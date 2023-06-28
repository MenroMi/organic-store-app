"use client";
// basic
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// lib
import { onSearchFilterCategory } from "@/redux/slices/filtersSlice";

// interface
import { IFiltersReducer } from "@/types/reduxTypes";
interface IFilterProps {
  label: string;
  data: string[];
}

const Filter: React.FC<IFilterProps> = ({ label, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const category = useSelector(
    (state: { filters: IFiltersReducer }) => state.filters.searchFilterCategory
  );
  const dispatch = useDispatch();

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
    <div className={`relative w-full min-h-[10%]`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`capitalize transition ease-in-out duration-300 border-y-4 border-primary-green text-primary-green h-[80px] w-full font-bold hover:bg-primary-green hover:text-white ${
          isOpen && "bg-primary-green text-white "
        }`}
      >
        {label}
      </button>
      <form
        onSubmit={handleSubmit}
        className={`group flex flex-col w-full z-10 mt-3 p-3 max-w-[500px] bg-primary-green/[1] backdrop-blur-sm
          shadow-xl 
        ${isOpen ? "" : "hidden"}`}
      >
        <div className="flex items-center h-10">
          <input
            onChange={(e) => dispatch(onSearchFilterCategory(e.target.value))}
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

            return dispatch(onSearchFilterCategory(input?.textContent!));
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

              return dispatch(onSearchFilterCategory(input?.textContent!));
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
          className={`transition-all ease-in-out duration-200 h-[60px] bg-green-light mt-2 text-white rounded-md font-bold hover:bg-green-darker disabled:opacity-50 disabled:hover:bg-green-light`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Filter;
