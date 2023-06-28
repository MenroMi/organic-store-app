import { IAuthReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectEmail = (state: { auth: IAuthReducer }) => state.auth.email;
const selectPassword = (state: { auth: IAuthReducer }) => state.auth.password;

const memoAuthSelector = createSelector(
  selectEmail,
  selectPassword,
  (email, password) => ({ email, password })
);

export default memoAuthSelector;
