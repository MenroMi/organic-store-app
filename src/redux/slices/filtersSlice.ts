// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// initial state
import { initFilterStates } from "../initialStates";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initFilterStates,
  reducers: {
    onSearchFilterCategory: (state, action) => ({
      ...state,
      searchFilterCategory: action.payload ?? "",
    }),
    onSetPriceFilter: (state, action) => ({
      ...state,
      filterPrice: action?.payload ?? { from: "", to: "" },
    }),
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { onSearchFilterCategory, onSetPriceFilter } = actions;
