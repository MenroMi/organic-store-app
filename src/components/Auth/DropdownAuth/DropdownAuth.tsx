"use client";

// basic
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// constants
import { navHref } from "@/constants/navigation";

// components
import LoginFormByEmail from "@/components/Auth/LoginFormByEmail";
import LoginByProviders from "@/components/Auth/LoginByProviders";
import Spinner from "@/components/Spinner";

const DropdownAuth = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <div className="lg:absolute top-32 lg:right-16 py-4 lg:max-w-[400px] w-full min-h-[300px] bg-white shadow-xl border z-20">
      <LoginFormByEmail />

      <p className="text-center mt-4 uppercase font-bold text-primary-green">
        or
      </p>

      <LoginByProviders />

      <p className="text-gray-300 font-thin text-lg text-center">
        You do not have an account?{" "}
        <span
          onClick={() => {
            setLoading(true);
            router.replace(navHref.registration);
          }}
          className="font-bold text-primary-green hover:text-green-darker cursor-pointer transition"
        >
          Register!
          {isLoading && <Spinner display="inline-block" />}
        </span>
      </p>
    </div>
  );
};

export default DropdownAuth;
