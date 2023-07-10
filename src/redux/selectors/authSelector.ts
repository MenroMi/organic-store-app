import { IAuthReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state: { auth: IAuthReducer }) => state.auth.user;
const selectIsOpenForm = (state: { auth: IAuthReducer }) =>
  state.auth.isOpenLoginForm;
const selectIsLogin = (state: { auth: IAuthReducer }) => state.auth.isLogin;
const selectIsLoading = (state: { auth: IAuthReducer }) => state.auth.isLoading;
const selectError = (state: { auth: IAuthReducer }) => state.auth.error;

const memoAuthSelector = createSelector(
  selectUser,
  selectIsOpenForm,
  selectIsLogin,
  selectIsLoading,
  selectError,
  (user, isOpenLogInForm, isLogin, isLoading, error) => ({
    user,
    isOpenLogInForm,
    isLogin,
    isLoading,
    error,
  })
);

export default memoAuthSelector;
