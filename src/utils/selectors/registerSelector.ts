import { IRegisterReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectRegName = (state: { registration: IRegisterReducer }) =>
  state.registration.name;
const selectRegEmail = (state: { registration: IRegisterReducer }) =>
  state.registration.email;
const selectRegPassword = (state: { registration: IRegisterReducer }) =>
  state.registration.password;
const selectRegNameError = (state: { registration: IRegisterReducer }) =>
  state.registration.errorName;
const selectRegEmailError = (state: { registration: IRegisterReducer }) =>
  state.registration.errorEmail;
const selectRegPassError = (state: { registration: IRegisterReducer }) =>
  state.registration.errorPass;

const memoRegSelector = createSelector(
  selectRegName,
  selectRegEmail,
  selectRegPassword,
  selectRegNameError,
  selectRegEmailError,
  selectRegPassError,
  (name, email, password, errorName, errorEmail, errorPass) => ({
    name,
    email,
    password,
    errorName,
    errorEmail,
    errorPass,
  })
);

export default memoRegSelector;
