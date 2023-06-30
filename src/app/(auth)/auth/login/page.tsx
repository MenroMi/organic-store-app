"use client";

// basic
import Link from "next/link";

// constants
import { navHref } from "@/constants/navigation";

// components
import {
  CustomButton,
  LoginByProviders,
  LoginFormByEmail,
  Spinner,
} from "@/components";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => () => setIsLoading(false), []);

  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[500px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Log In
        </h1>
        <LoginFormByEmail
          classNameForm="flex flex-col gap-2 w-full mt-10"
          classNameLabelEmail="text-primary-green text-xl"
          classNameInputEmail="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          classNameLabelPassword="relative text-primary-green text-xl"
          classNameInputPassword="w-full h-[60px] bg-white border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          classNameButtonConfirm="w-full h-[60px] bg-primary-green mt-3 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg disabled:opacity-80"
        />
        <p className="text-center mt-4 uppercase font-bold text-primary-green">
          or
        </p>
        <LoginByProviders />
        <p className="text-gray-500 font-thin text-lg text-center">
          You do not have an account?{" "}
          <Link
            onClick={() => setIsLoading(true)}
            href={navHref.registration}
            className="font-bold text-primary-green hover:text-green-darker cursor-pointer transition"
          >
            Register!
            {isLoading && <Spinner display="inline-block" />}
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

export default LoginPage;
