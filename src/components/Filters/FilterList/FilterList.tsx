"use client";

//basic
import React, { useRef, useState } from "react";

// constants
import { filtersData } from "@/constants";

// components
import Filter from "@/components/Filters/Filter";
import FilterPrice from "@/components/Filters/FilterPrice";
import SearchPanel from "@/components/SearchPanel";
import BurgerMenu from "@/components/BurgerMenu";

const FilterList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollRef = useRef<number>(0);

  return (
    <div className="flex w-full flex-col h-full md:h-16 items-center justify-center md:flex-row">
      <SearchPanel />
      <div className="flex h-[40px] md:h-full max-md:w-full">
      <button
        onClick={() => {
          scrollRef.current = document.documentElement.scrollTop;
          setIsOpen(!isOpen);
        }}
        className="max-md:rounded-bl-sm transition-all duration-200 bg-primary-green text-white font-bold md:p-4 border-4 md:border-y-4 border-primary-green w-full md:w-[150px] h-full hover:bg-white hover:text-primary-green"
      >
        Filters
      </button>
        <BurgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollValue={scrollRef.current}
          classNameContainer={`absolute self-center cursor-pointer h-full w-full md:w-[200px]  ${!isOpen && "hidden"}`}
        >

          <div className="h-full w-full gap-10 mt-10">
            {filtersData.map((f) => {
              switch (f.label) {
                case "price":
                  return <FilterPrice key={f.label} />;
                case "categories":
                  return (
                    <Filter key={f.label} label={f.label} data={f.data!} />
                  );
                default:
                  return (
                    <Filter
                      key={f.label}
                      label={f.label}
                      data={f.data ?? ["empty"]}
                    />
                  );
              }
            })}
          </div>
        </BurgerMenu>
        <button
          type="button"
          className="transition-all duration-200 w-full md:w-[150px] rounded-br-xl rounded-tr-xl border-4 md:p-4 border-primary-green bg-primary-green border-l-0 text-white font-bold hover:bg-white hover:text-primary-green max-md:rounded-tr-none max-md:rounded-br-sm"
        >
          Discounts
        </button>
      </div>
    </div>
  );
};

export default FilterList;
