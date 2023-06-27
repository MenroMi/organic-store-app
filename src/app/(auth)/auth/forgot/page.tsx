"use client";

// basic
import Link from "next/link";

// constants
import { navHref } from "@/constants/navigation";

// components
import CustomButton from "@/components/CustomButton";

const ForgotPasswordPage = () => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[200px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Forgot your pass?
        </h1>
        <p className="mt-1 text-gray-400 underline">
          Write your email for reset password below
        </p>
        <form
          onSubmit={(e) => onHandleSubmit(e)}
          className="flex flex-col gap-2 w-full mt-10"
        >
          <label className="text-primary-green text-xl">
            Email:
            <input
              onChange={(e) => {}}
              //   value={email}
              type="email"
              name="email"
              required
              className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
              placeholder="Your email address"
            />
          </label>
          <button
            type="submit"
            className="w-full h-[60px] bg-primary-green mt-3 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg"
          >
            Send password
          </button>
        </form>
        <p className="text-gray-500 font-thin text-lg text-center mt-4">
          You can go to{" "}
          <Link
            href={navHref.logIn}
            className="text-primary-green font-semibold hover:text-green-darker transition uppercase"
          >
            Log In
          </Link>
        </p>
      </div>
      <CustomButton
        title="Back to home"
        classNameContainer="bg-white/80 backdrop-blur-sm w-full max-w-[500px] rounded-lg h-14 mt-4 shadow-xl"
        classNameText="text-primary-green"
        route={navHref.home}
      />
    </>
  );
};

export default ForgotPasswordPage;
