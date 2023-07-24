import { useState } from "react";

const useHandleInputErrors = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  return {
    loading,
    errorEmail,
    errorName,
    errorPassword,
    setLoading,
    setErrorEmail,
    setErrorName,
    setErrorPassword,
  };
};

export default useHandleInputErrors;
