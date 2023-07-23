// constants
import {navHref} from '@/constants';

// components
import {AuthLink, CustomButton, ForgotPasswordForm} from '@/components';

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[200px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Forgot your pass?
        </h1>
        <p className="mt-1 text-gray-400 underline">
          Write your email for reset password below
        </p>
        <ForgotPasswordForm />
        <AuthLink
          route={navHref.logIn}
          classNameParagraph="text-gray-500 font-thin text-lg text-center mt-4"
          classNameLink="text-primary-green font-semibold hover:text-green-darker transition uppercase"
          contentParagraph="You can go to"
          contentLink="Log In"
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

export default ForgotPasswordPage;
