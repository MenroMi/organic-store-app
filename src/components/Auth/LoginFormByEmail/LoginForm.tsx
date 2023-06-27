"use client";

// basic
import Link from "next/link";

// libs
import { useDispatch, useSelector } from "react-redux";

// constants
import { navHref } from "@/constants/navigation";

// utils
import memoSelector from "@/utils/authSelector";

// slice
import { setEmail, setPassword } from "@/redux/slices/authSlice";

const LoginFormByEmail = () => {
  const { email, password } = useSelector(memoSelector);
  const dispatch = useDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setEmail(""));
    dispatch(setPassword(""));
  };

  return (
    <form
      onSubmit={(e) => onHandleSubmit(e)}
      className="flex flex-col gap-2 px-5"
    >
      <label className="font-bold text-primary-green text-xl">
        Email:
        <input
          onChange={(e) => dispatch(setEmail(e.target.value))}
          value={email}
          type="email"
          name="email"
          required
          className="w-full h-[60px] border-[3px] border-primary-green mt-2 text-primary-green font-normal px-3 hover:border-green-darker transition"
          placeholder="Your email address..."
        />
      </label>
      <label className="font-bold text-primary-green text-xl">
        Password:
        <input
          onChange={(e) => dispatch(setPassword(e.target.value))}
          value={password}
          type="password"
          name="password"
          required
          className="w-full h-[60px] border-[3px] border-primary-green mt-2 text-primary-green font-normal px-3 hover:border-green-darker transition"
          placeholder="Your password address..."
          autoComplete="on"
        />
      </label>
      <Link
        href={navHref.home}
        className="text-gray-400 text-lg text-right hover:text-primary-green transition"
      >
        Forgot Password?
      </Link>
      <button
        type="submit"
        className="w-full h-[60px] bg-primary-green mt-2 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginFormByEmail;
