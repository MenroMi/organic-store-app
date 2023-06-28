"use client";
// basic
import Link from "next/link";

// constants
import { navHref } from "@/constants/navigation";

// components
import { CustomButton, Spinner } from "@/components";
import { useEffect, useState } from "react";
import RegisterForm from "@/components/Auth/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => () => setLoading(false), []);

  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[500px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Registration
        </h1>
        <RegisterForm />
        <p className="text-gray-500 font-thin text-lg text-center mt-4">
          Back to{" "}
          <Link
            onClick={() => setLoading(true)}
            href={navHref.logIn}
            className="text-primary-green font-bold cursor-pointer hover:text-green-darker transition"
          >
            log in
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

export default RegisterPage;
