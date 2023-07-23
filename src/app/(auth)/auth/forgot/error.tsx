'use client';

import Image from 'next/image';

const ErrorForgotPage = ({error, reset}: {error: Error; reset: () => void}) => {
  return (
    <>
      <Image
        src="/icons/error.svg"
        alt="error image"
        width={200}
        height={200}
        className="opacity-80"
      />

      <div className="mt-6 flex flex-col items-center">
        <h1 className="font-bold uppercase">Unknown error</h1>
        <button
          onClick={reset}
          className="border-2 p-4 rounded-md border-primary-green mt-4  hover:text-white hover:bg-primary-green transition"
        >
          You can click here for try again.
        </button>
      </div>
    </>
  );
};

export default ErrorForgotPage;
