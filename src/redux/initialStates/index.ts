import {
  IAuthReducer,
  IFiltersReducer,
  IRegisterReducer,
} from "@/types/reduxTypes";

export const initFilterStates: IFiltersReducer = {
  searchFilterCategory: "",
  filterPrice: {
    from: "",
    to: "",
  },
};

export const initAuthStates: IAuthReducer = {
  user: null,
  email: "",
  password: "",
  error: {
    name: "",
    msg: "",
    status: "",
  },
  errorEmail: false,
  errorPass: false,
  isError: false,
  isLoading: false,
  isLogin: false,
  isOpenLoginForm: false,
};

export const initRegisterStates: IRegisterReducer = {
  name: "",
  email: "",
  password: "",
  response: {
    success: false,
    response: "",
  },
  error: {
    name: "",
    msg: "",
    status: "",
  },
  errorName: false,
  errorEmail: false,
  errorPass: false,
  isError: false,
  isLoading: false,
};
