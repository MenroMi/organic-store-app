'use client';

// basic
import Image from 'next/image';

// libs
import {useDispatch, useSelector} from 'react-redux';

// selector
import {memoUserSelector} from '@/redux/selectors';

// slice
import {setOpenLoginForm} from '@/redux/slices/userSlice';
import {AppDispatch} from '@/redux/provider/ReduxProvider';
import {useEffect} from 'react';
import {getAuthUserThunk} from '@/redux/thunks';
import Spinner from '@/components/Spinner';

// interface
interface INavbarUser {
  width: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarUser: React.FC<INavbarUser> = ({width, setIsOpen, isOpen}) => {
  const {user} = useSelector(memoUserSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAuthUserThunk()); // later search another solution for checking auth user after reload app

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cart hidden lg:flex">
      <button
        type="button"
        className="border rounded-full items-center gap-3 max-sm:p-1 max-lg:p-2 lg:p-2 active:scale-90 transition"
        onClick={() => {
          return width! < 1024
            ? setIsOpen(!isOpen)
            : dispatch(setOpenLoginForm());
        }}
      >
        <div
          className={`relative max-sm:p-2 p-4 w-14 h-14 lg:w-16 lg:h-16 rounded-full ${
            user && user?.user_metadata && user?.user_metadata?.avatar
              ? 'bg-transparent'
              : 'bg-primary-green'
          }`}
        >
          {user?.user_metadata && user?.user_metadata?.avatar ? (
            <Image
              src={user?.user_metadata?.avatar ?? '/icons/user.svg'}
              alt="user logo"
              width={40}
              height={40}
              priority
              className={`absolute object-cover top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full ${
                user && 'w-full h-full'
              }`}
            />
          ) : (
            <Image
              src={'/icons/user.svg'}
              alt="user logo"
              width={40}
              height={40}
              priority
              className={`absolute object-cover top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full`}
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default NavbarUser;
