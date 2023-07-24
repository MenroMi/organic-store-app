import {IUserReducer} from '@/types/reduxTypes';
import {createSelector} from '@reduxjs/toolkit';

const selectUser = (state: {user: IUserReducer}) => state.user.user;
const selectIsLogin = (state: {user: IUserReducer}) => state.user.isLogin;
const selectIsLoading = (state: {user: IUserReducer}) => state.user.isLoading;
const selectIsError = (state: {user: IUserReducer}) => state.user.isError;
const selectError = (state: {user: IUserReducer}) => state.user.error;
const selectResponse = (state: {user: IUserReducer}) => state.user.response;
const selectIsOpenLoginForm = (state: {user: IUserReducer}) =>
  state.user.isOpenLoginForm;
const selectRepeatPassword = (state: {user: IUserReducer}) =>
  state.user.repeatPassword;

const memoUserSelector = createSelector(
  selectUser,
  selectIsLoading,
  selectIsError,
  selectError,
  selectResponse,
  selectIsOpenLoginForm,
  selectRepeatPassword,
  selectIsLogin,
  (
    user,
    isLoading,
    isError,
    error,
    response,
    isOpenLoginForm,
    repeatPassword,
    isLogin,
  ) => ({
    user,
    isLoading,
    isError,
    error,
    response,
    isOpenLoginForm,
    repeatPassword,
    isLogin,
  }),
);

export default memoUserSelector;
