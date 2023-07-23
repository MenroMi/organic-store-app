import {UserMetadata} from '@supabase/supabase-js';
import {IPrice} from '.';
import {IErrors, ILoader} from './errorsAndLoadersTypes';

interface IResponse {
  success: boolean;
  response: string;
}

interface IUserMetadata extends UserMetadata {
  full_name: string;
  avatar: string | null;
}

interface IUser {
  id: string;
  role: string;
  user_metadata: IUserMetadata;
}

export interface IFiltersReducer {
  searchFilterCategory: string;
  filterPrice: IPrice;
}

export interface IAuthReducer extends IErrors, ILoader {
  user: IUser | null;
  accessToken: string;
  isLogin: boolean;
  isOpenLoginForm: boolean;
}

export interface IRegisterReducer extends IErrors, ILoader {
  response: IResponse;
}

export interface IUpdatePassReducer extends IErrors, ILoader {
  newPassword: string;
  repeatPassword: string;
}
