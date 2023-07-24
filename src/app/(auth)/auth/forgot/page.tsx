// constants
import {navHref} from '@/constants';

// components
import {AuthLink, ForgotPasswordForm} from '@/components';

const ForgotPasswordPage = () => {
  return (
    <>
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
    </>
  );
};

export default ForgotPasswordPage;
