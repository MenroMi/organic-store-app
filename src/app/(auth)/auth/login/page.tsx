// constants
import {navHref} from '@/constants';

// components
import {AuthLink, LoginByProviders, LoginFormByEmail} from '@/components';

const LoginPage = async () => {
  return (
    <>
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
      <AuthLink
        route={navHref.registration}
        classNameParagraph="text-gray-500 font-thin text-lg text-center"
        classNameLink="font-bold text-primary-green hover:text-green-darker cursor-pointer transition"
        contentParagraph="You do not have an account?"
        contentLink="Register!"
      />
    </>
  );
};

export default LoginPage;
