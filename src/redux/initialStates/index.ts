import {
  IAuthReducer,
  IFiltersReducer,
  IRegisterReducer,
  IUpdatePassReducer,
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
  accessToken: "",
  error: {
    name: "",
    msg: "",
    status: "",
  },
  isError: false,
  isLoading: false,
  isLogin: false,
  isOpenLoginForm: false,
};

export const initRegisterStates: IRegisterReducer = {
  response: {
    success: false,
    response: "",
  },
  error: {
    name: "",
    msg: "",
    status: "",
  },
  isError: false,
  isLoading: false,
};

export const initUpdatePassStates: IUpdatePassReducer = {
  newPassword: "",
  repeatPassword: "",
  isError: false,
  isLoading: false,
  error: {
    msg: "",
    name: "",
    status: "",
  },
};
