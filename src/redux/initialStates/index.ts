import { IFiltersReducer } from "@/types/reduxTypes";

export const initFilterStates: IFiltersReducer = {
  searchFilterCategory: "",
  filterPrice: {
    from: "",
    to: "",
  },
};
