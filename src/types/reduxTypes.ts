import {UserMetadata} from '@supabase/supabase-js';
import {IPrice} from '.';
import {IErrors, ILoader} from './errorsAndLoadersTypes';

interface IResponse {
  success: boolean;
  response: string;
}

interface IUserMetadata extends UserMetadata {
  email: string;
  full_name: string;
  avatar: string | null;
}

export interface IUser {
  id: string;
  role: string;
  user_metadata: IUserMetadata;
}

export interface IFiltersReducer {
  searchFilterCategory: string;
  filterPrice: IPrice;
}

export interface IUserReducer extends IErrors, ILoader {
  user: IUser | null;
  isLogin: boolean;
  repeatPassword: string;
  response: IResponse;
  isOpenLoginForm: boolean;
}
