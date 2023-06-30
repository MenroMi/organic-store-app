import { IAuthReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectEmail = (state: { auth: IAuthReducer }) => state.auth.email;
const selectPassword = (state: { auth: IAuthReducer }) => state.auth.password;
const selectEmailError = (state: { auth: IAuthReducer }) =>
  state.auth.errorEmail;
const selectPassError = (state: { auth: IAuthReducer }) => state.auth.errorPass;
const selectUser = (state: { auth: IAuthReducer }) => state.auth.user;
const selectIsOpenForm = (state: { auth: IAuthReducer }) =>
  state.auth.isOpenLoginForm;
const selectIsLogin = (state: { auth: IAuthReducer }) => state.auth.isLogin;
const selectIsLoading = (state: { auth: IAuthReducer }) => state.auth.isLoading;
const selectError = (state: { auth: IAuthReducer }) => state.auth.error;

const memoAuthSelector = createSelector(
  selectEmail,
  selectPassword,
  selectEmailError,
  selectPassError,
  selectUser,
  selectIsOpenForm,
  selectIsLogin,
  selectIsLoading,
  selectError,
  (
    email,
    password,
    errorEmail,
    errorPass,
    user,
    isOpenLogInForm,
    isLogin,
    isLoading,
    error
  ) => ({
    user,
    email,
    password,
    errorEmail,
    errorPass,
    isOpenLogInForm,
    isLogin,
    isLoading,
    error,
  })
);

export default memoAuthSelector;
