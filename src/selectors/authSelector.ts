import { IAuthReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectEmail = (state: { auth: IAuthReducer }) => state.auth.email;
const selectPassword = (state: { auth: IAuthReducer }) => state.auth.password;
const selectEmailError = (state: { auth: IAuthReducer }) =>
  state.auth.errorEmail;
const selectPassError = (state: { auth: IAuthReducer }) => state.auth.errorPass;
const selectUser = (state: { auth: IAuthReducer }) => state.auth.user;

const memoAuthSelector = createSelector(
  selectEmail,
  selectPassword,
  selectEmailError,
  selectPassError,
  selectUser,
  (email, password, errorEmail, errorPass, user) => ({
    user,
    email,
    password,
    errorEmail,
    errorPass,
  })
);

export default memoAuthSelector;
