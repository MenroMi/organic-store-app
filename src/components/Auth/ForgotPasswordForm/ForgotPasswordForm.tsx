"use client";

// basic
import { useEffect, useState } from "react";

// libs
import { useDispatch, useSelector } from "react-redux";

// slices
import { setEmail, setLoading } from "@/redux/slices/updatePassSlice";

// thunk
import { onUpdatePasswordThunk } from "@/redux/thunks";

// selectors
import { memoUpdatePassSelector } from "@/redux/selectors";

// constants
import { regexpEmail } from "@/constants";

// components
import Spinner from "@/components/Spinner";

// interface
import { AppDispatch } from "@/redux/provider/ReduxProvider";

const ForgotPasswordForm = () => {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const { email, loading, isError, error } = useSelector(
    memoUpdatePassSelector
  );
  const dispatch = useDispatch<AppDispatch>();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(onUpdatePasswordThunk(email));
    dispatch(setEmail(""));
    dispatch(setLoading(false));
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 5000);
  };

  useEffect(() => setShowMsg(false), []);

  return (
    <form
      onSubmit={(e) => onHandleSubmit(e)}
      className="flex flex-col gap-2 w-full mt-10"
    >
      <label className="text-primary-green text-xl">
        Email:
        <input
          onChange={(e) => dispatch(setEmail(e.target.value))}
          value={email}
          type="email"
          name="email"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Your email address"
        />
      </label>
      {isError && (
        <p className="text-red-500 text-sm">
          {error.name} {error.msg}
        </p>
      )}
      {showMsg && !isError && (
        <p className="text-green-darker">
          If this email address exists in the database, you will receive an
          email with a password reset link to your email address.
        </p>
      )}
      <button
        disabled={!regexpEmail.test(email)}
        onClick={() => dispatch(setLoading(true))}
        type="submit"
        className="w-full h-[60px] bg-primary-green mt-3 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg disabled:opacity-80"
      >
        {loading ? <Spinner /> : "Send password"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
