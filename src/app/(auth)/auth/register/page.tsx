// basic
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// libs
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// constants
import { navHref } from "@/constants/navigation";

// components
import { CustomButton, RegisterForm, AuthLink } from "@/components";

const RegisterPage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[500px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Registration
        </h1>
        <RegisterForm />
        <AuthLink
          route={navHref.logIn}
          classNameParagraph="text-gray-500 font-thin text-lg text-center mt-4"
          classNameLink="text-primary-green font-bold cursor-pointer hover:text-green-darker transition"
          contentParagraph="Back to"
          contentLink="log in"
        />
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
