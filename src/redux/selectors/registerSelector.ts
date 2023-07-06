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
const selectRegResponse = (state: { registration: IRegisterReducer }) =>
  state.registration.response;

const memoRegSelector = createSelector(
  selectRegName,
  selectRegEmail,
  selectRegPassword,
  selectRegNameError,
  selectRegEmailError,
  selectRegPassError,
  selectRegResponse,
  (name, email, password, errorName, errorEmail, errorPass, response) => ({
    name,
    email,
    password,
    errorName,
    errorEmail,
    errorPass,
    response,
  })
);

export default memoRegSelector;
