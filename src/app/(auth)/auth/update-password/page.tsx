// constants
import {navHref} from '@/constants';

// components
import {CustomButton, UpdatePasswordForm} from '@/components';

const UpdatePassword = () => {
  return (
    <>
      <h1 className="capitalize text-4xl font-medium text-primary-green/90">
        Update your password
      </h1>
      <UpdatePasswordForm />
    </>
  );
};

export default UpdatePassword;
