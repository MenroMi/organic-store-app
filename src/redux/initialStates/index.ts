import {IFiltersReducer, IUserReducer} from '@/types/reduxTypes';

export const initFilterStates: IFiltersReducer = {
  searchFilterCategory: '',
  filterPrice: {
    from: '',
    to: '',
  },
};

export const initUserStates: IUserReducer = {
  user: {
    id: '',
    role: '',
    user_metadata: {
      full_name: '',
      avatar: '',
      email: '',
    },
  },
  isError: false,
  error: {
    name: '',
    msg: '',
    status: '',
  },
  isLoading: false,
  isLogin: false,
  response: {
    success: false,
    response: '',
  },
  isOpenLoginForm: false,
};
