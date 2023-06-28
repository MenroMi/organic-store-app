import { IAuthReducer, IFiltersReducer } from "@/types/reduxTypes";

export const initFilterStates: IFiltersReducer = {
  searchFilterCategory: "",
  filterPrice: {
    from: "",
    to: "",
  },
};

export const initAuthStates: IAuthReducer = {
  email: "",
  password: "",
  isLogin: false,
  isOpenLoginForm: false,
};
