import { IPrice } from ".";

export interface IFiltersReducer {
  searchFilterCategory: string;
  filterPrice: IPrice;
}

export interface IAuthReducer {
  email: string;
  password: string;
  isLogin: boolean;
  isOpenLoginForm: boolean;
}

export interface IRegisterReducer {
  name: string;
  email: string;
  password: string;
  isConfirm: boolean;
}
