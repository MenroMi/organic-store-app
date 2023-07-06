import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AnyAction, Dispatch } from "redux";

const onValidateForm = (
  dispatch: Dispatch<AnyAction>,
  action: ActionCreatorWithPayload<any, any>,
  actionError: ActionCreatorWithPayload<any, any>,
  regexp: RegExp,
  error: boolean,
  txt: string
) => {
  const validate = (
    value: string,
    regexp: RegExp,
    actionError: ActionCreatorWithPayload<any, any>,
    error: boolean
  ) => {
    if (value.length >= 1 && !regexp.test(value)) {
      if (!error) {
        dispatch(actionError(true));
      }
      return value;
    }

    if (error) {
      dispatch(actionError(false));
    }

    return value;
  };

  return dispatch(action(validate(txt, regexp, actionError, error)));
};

export default onValidateForm;
