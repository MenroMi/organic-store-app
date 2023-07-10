import { IRegisterReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectRegResponse = (state: { registration: IRegisterReducer }) =>
  state.registration.response;

const memoRegSelector = createSelector(selectRegResponse, (response) => ({
  response,
}));

export default memoRegSelector;
