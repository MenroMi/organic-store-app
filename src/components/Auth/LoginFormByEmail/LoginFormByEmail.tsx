"use client";

// basic
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// libs
import { useDispatch, useSelector } from "react-redux";

// thunk
import { onSignInThunk } from "@/redux/thunks/auth";

// selector
import memoAuthSelector from "@/redux/selectors/authSelector";

// constants
import { regexpEmail, navHref, regexpPassword } from "@/constants";

// hooks
import { useLoading } from "@/hooks/useLoading";

// utils
import { onValidateForm } from "@/utils";

// slice
import {
  setEmail,
  setEmailError,
  setPassError,
  setPassword,
} from "@/redux/slices/authSlice";

// components
import Spinner from "@/components/Spinner";

// interface/types
import { AppDispatch } from "@/redux/provider/ReduxProvider";

interface ILoginFormByEmailProps {
  classNameForm?: string;
  classNameLabelEmail?: string;
  classNameInputEmail?: string;
  classNameLabelPassword?: string;
  classNameInputPassword?: string;
  classNameButtonConfirm?: string;
}

const LoginFormByEmail: React.FC<ILoginFormByEmailProps> = ({
  classNameForm,
  classNameLabelEmail,
  classNameInputEmail,
  classNameLabelPassword,
  classNameInputPassword,
  classNameButtonConfirm,
}) => {
  const router = useRouter();
  const { loading, setLoading } = useLoading();
  const [isOpenPass, setOpenPass] = useState<boolean>(false);
  const { email, password, error, isLoading, errorEmail, isLogin, errorPass } =
    useSelector(memoAuthSelector);
  const dispatch = useDispatch<AppDispatch>();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(onSignInThunk({ email, password }));
    dispatch(setEmail(""));
    dispatch(setPassword(""));
  };

  useEffect(() => {
    if (isLogin) {
      router.push("/home");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  useEffect(() => setLoading(false), []);

  return (
    <form onSubmit={(e) => onHandleSubmit(e)} className={classNameForm}>
      <label className={classNameLabelEmail}>
        Email:
        <input
          onChange={(e) =>
            onValidateForm(
              dispatch,
              setEmail,
              setEmailError,
              regexpEmail,
              errorEmail,
              e.target.value
            )
          }
          value={email}
          type="email"
          name="email"
          required
          className={classNameInputEmail}
          placeholder="Your email address..."
        />
      </label>
      {errorEmail && (
        <p className="text-red-500 text-sm">
          Your email does not match requirements. Please write your email!
        </p>
      )}
      <label className={classNameLabelPassword}>
        Password:
        <input
          onChange={(e) =>
            onValidateForm(
              dispatch,
              setPassword,
              setPassError,
              regexpPassword,
              errorPass,
              e.target.value
            )
          }
          value={password}
          type={isOpenPass ? "text" : "password"}
          name="password"
          required
          className={classNameInputPassword}
          placeholder="Your password..."
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
      <Link
        onClick={() => setLoading(true)}
        href={navHref.forgotPass}
        className="text-gray-400 text-lg text-right hover:text-primary-green transition"
      >
        Forgot Password?
      </Link>
      {error.name && (
        <p className="text-red-500">
          {error.name}: {error.msg}. Please try again!
        </p>
      )}
      <button
        disabled={!email || !password || errorEmail}
        type="submit"
        className={classNameButtonConfirm}
      >
        {isLoading || loading ? <Spinner /> : "Log In"}
      </button>
    </form>
  );
};

export default LoginFormByEmail;
