'use client';

// basic
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

// lib
import {useSelector} from 'react-redux';

// constants
import {navHref} from '@/constants';

// selector
import {memoAuthSelector} from '@/redux/selectors';

// components
import LoginByProviders from '@/components/Auth/LoginByProviders';
import Spinner from '@/components/Spinner';
import {UserMenu} from '@/components/Menu';
import LoginFormByEmail from '@/components/Auth/FormsAuth/LoginFormByEmail/LoginFormByEmail';
import useHandleInputErrors from '@/hooks/useHandleInputErrors';

const DropdownAuth = () => {
  const {loading, setLoading} = useHandleInputErrors();
  const {user} = useSelector(memoAuthSelector);
  const router = useRouter();

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <div className="lg:absolute lg:top-32 lg:right-16 py-4 lg:max-w-[400px] w-full min-h-[300px] bg-white shadow-xl border z-20  ">
      {user && user.role ? (
        <UserMenu />
      ) : (
        <LoginFormByEmail
          classNameForm="flex flex-col gap-2 px-5"
          classNameLabelEmail="font-bold text-primary-green text-xl"
          classNameInputEmail="w-full h-[60px] border-[3px] border-primary-green mt-2 text-primary-green font-normal px-3 hover:border-green-darker transition"
          classNameLabelPassword="relative font-bold text-primary-green text-xl"
          classNameInputPassword="w-full h-[60px] border-[3px] border-primary-green mt-2 text-primary-green font-normal px-3 hover:border-green-darker transition"
          classNameButtonConfirm="w-full h-[60px] bg-primary-green mt-2 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition"
        />
      )}

      {!user && (
        <>
          <p className="text-center mt-4 uppercase font-bold text-primary-green">
            or
          </p>
          <LoginByProviders />
          <p className="text-gray-300 font-thin text-lg text-center">
            You do not have an account?{' '}
            <span
              onClick={() => {
                setLoading(true);
                router.replace(navHref.registration);
              }}
              className="font-bold text-primary-green hover:text-green-darker cursor-pointer transition"
            >
              Register!
              {loading && <Spinner display="inline-block" />}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default DropdownAuth;
