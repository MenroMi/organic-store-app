import { IUpdatePassReducer } from "@/types/reduxTypes";
import { createSelector } from "@reduxjs/toolkit";

const selectNewPassword = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.newPassword;
const selectRepeatPassword = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.repeatPassword;
const selectError = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.error;
const selectIsError = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.isError;
const selectIsLoading = (state: { updatePass: IUpdatePassReducer }) =>
  state.updatePass.isLoading;

const memoUpdatePassSelector = createSelector(
  selectNewPassword,
  selectRepeatPassword,
  selectError,
  selectIsError,
  selectIsLoading,
  (newPass, repeatPass, error, isError, loading) => ({
    newPass,
    repeatPass,
    error,
    isError,
    loading,
  })
);

export default memoUpdatePassSelector;
