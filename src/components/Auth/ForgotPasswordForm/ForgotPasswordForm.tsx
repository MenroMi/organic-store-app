"use client";

const ForgotPasswordForm = () => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => onHandleSubmit(e)}
      className="flex flex-col gap-2 w-full mt-10"
    >
      <label className="text-primary-green text-xl">
        Email:
        <input
          onChange={(e) => {}}
          //   value={email}
          type="email"
          name="email"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Your email address"
        />
      </label>
      <button
        type="submit"
        className="w-full h-[60px] bg-primary-green mt-3 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg"
      >
        Send password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
