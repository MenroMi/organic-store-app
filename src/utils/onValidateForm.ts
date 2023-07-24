import { SetStateAction } from "react";
import { AnyAction, Dispatch } from "redux";

const onValidateForm = (
  setError: React.Dispatch<SetStateAction<boolean>>,
  regexp: RegExp,
  error: boolean,
  txt: string
) => {
  const validate = (
    value: string,
    regexp: RegExp,
    setError: React.Dispatch<SetStateAction<boolean>>,
    error: boolean
  ) => {
    if (value.length >= 1 && !regexp.test(value)) {
      if (!error) {
        setError(true);
      }
      return value;
    }

    if (error) {
      setError(false);
    }

    return value;
  };

  return validate(txt, regexp, setError, error);
};

export default onValidateForm;
