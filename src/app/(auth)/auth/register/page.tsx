// constants
import {navHref} from '@/constants';

// components
import {CustomButton, RegisterForm, AuthLink} from '@/components';

const RegisterPage = async () => {
  return (
    <>
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
    </>
  );
};

export default RegisterPage;
