import { UserMetadata } from "@supabase/supabase-js";
import { IPrice } from ".";
import { IErrorAuth } from "./errorsAndLoadersTypes";

interface IResponse {
  success: boolean;
  response: string;
}

interface IUser {
  id: string;
  role: string;
  user_metadata: UserMetadata;
}

export interface IFiltersReducer {
  searchFilterCategory: string;
  filterPrice: IPrice;
}

export interface IAuthReducer extends IErrorAuth {
  user: IUser | null;
  email: string;
  password: string;
  isLogin: boolean;
  isOpenLoginForm: boolean;
}

export interface IRegisterReducer extends IErrorAuth {
  name: string;
  email: string;
  password: string;
  response: IResponse;
}
