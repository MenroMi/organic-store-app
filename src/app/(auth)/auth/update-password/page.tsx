// constants
import { navHref } from "@/constants";

// components
import { CustomButton, UpdatePasswordForm } from "@/components";

const UpdatePassword = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[200px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
        <h1 className="capitalize text-4xl font-medium text-primary-green/90">
          Update your password
        </h1>
        <UpdatePasswordForm />
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

export default UpdatePassword;
