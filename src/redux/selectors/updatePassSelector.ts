import { IUpdatePassReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectNewPassword = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.newPassword;
const selectRepeatPassword = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.repeatPassword;
const selectPassError = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.errorPass;
const selectError = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.error;
const selectIsError = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.isError;
const selectEmail = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.email;
const selectIsLoading = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.isLoading;

const memoUpdatePassSelector = createSelector(
  selectNewPassword,
  selectRepeatPassword,
  selectPassError,
  selectError,
  selectIsError,
  selectEmail,
  selectIsLoading,
  (newPass, repeatPass, errorPass, error, isError, email, loading) => ({
    newPass,
    repeatPass,
    errorPass,
    error,
    isError,
    email,
    loading,
  })
);

export default memoUpdatePassSelector;
