"use client";

import Spinner from "@/components/Spinner";
import { regexpEmail, regexpName, regexpPassword } from "@/constants";
import {
  setRegEmail,
  setRegName,
  setRegPass,
  setRegEmailError,
  setRegNameError,
  setRegPassError,
} from "@/redux/slices/registerSlice";
import { onRegister } from "@/services/onRegister";
import onValidateForm from "@/utils/onValidateForm";
import { memoRegSelector } from "@/utils/selectors";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<{
    success: boolean;
    response: string;
  }>({ success: false, response: "" });
  const [isOpenPass, setOpenPass] = useState<boolean>(false);
  const { name, email, password, errorEmail, errorName, errorPass } =
    useSelector(memoRegSelector);
  const dispatch = useDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    onRegister(name, email, password)
      .then(({ success, response }) => {
        setResponse({ success, response });
        setIsLoading(false);
        dispatch(setRegName(""));
        dispatch(setRegEmail(""));
        dispatch(setRegPass(""));
      })
      .finally(() => {
        setTimeout(() => setResponse({ success: false, response: "" }), 5000);
      });
  };

  return (
    <form
      onSubmit={(e) => onHandleSubmit(e)}
      className="flex flex-col gap-2 w-full mt-10"
    >
      <label className=" text-primary-green text-xl">
        Name:
        <input
          onChange={(e) => {
            onValidateForm(
              dispatch,
              setRegName,
              setRegNameError,
              regexpName,
              errorName,
              e.target.value
            );
          }}
          value={name}
          type="text"
          name="name"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Alex Dolgopolov"
        />
      </label>
      {errorName && (
        <p className="text-red-500 text-sm">
          Your name have forbidden characters. Please check it!
        </p>
      )}
      <label className="text-primary-green text-xl">
        Email:
        <input
          onChange={(e) =>
            onValidateForm(
              dispatch,
              setRegEmail,
              setRegEmailError,
              regexpEmail,
              errorEmail,
              e.target.value
            )
          }
          value={email}
          type="email"
          name="email"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="custom@gmail.com"
        />
      </label>
      {errorEmail && (
        <p className="text-red-500 text-sm">
          Your email does not match requirements. Please write your email!
        </p>
      )}
      <label className="relative text-primary-green text-xl">
        Password:
        <input
          onChange={(e) =>
            onValidateForm(
              dispatch,
              setRegPass,
              setRegPassError,
              regexpPassword,
              errorPass,
              e.target.value
            )
          }
          value={password}
          type={isOpenPass ? "text" : "password"}
          name="password"
          required
          className="w-full h-[60px] bg-white border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Password"
          autoComplete="on"
        />
        <Image
          onClick={() => setOpenPass(!isOpenPass)}
          src={isOpenPass ? "/icons/eye-close.svg" : "/icons/eye-open.svg"}
          alt="icon for control visibility password"
          width={isOpenPass ? 32 : 30}
          height={isOpenPass ? 32 : 30}
          className="absolute top-[55%] right-4"
        />
      </label>
      {errorPass && (
        <p className="text-red-500 text-sm">
          Password should have: min 8 char., 1 lowercase letter, 1 uppercase
          letter, 1 special symbol and 1 number.
        </p>
      )}

      {response.response.length > 0 && (
        <p className="text-green-darker font-semibold">{response.response}</p>
      )}
      <button
        type="submit"
        disabled={
          !name || !email || !password || errorEmail || errorName || errorPass
        }
        className="w-full h-[60px] bg-primary-green mt-5 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg disabled:opacity-80"
      >
        {isLoading ? <Spinner /> : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
