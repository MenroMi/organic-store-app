'use client';

// basic
import {useRouter} from 'next/navigation';

// libs
import {useDispatch, useSelector} from 'react-redux';

// thunk
import {onLogOutThunk} from '@/redux/thunks/auth';

// selector
import {memoUserSelector} from '@/redux/selectors';

// slice
import {setOpenLoginForm} from '@/redux/slices/userSlice';

// interface/types
import {AppDispatch} from '@/redux/provider/ReduxProvider';

const LogInBtnInBurger = () => {
  const router = useRouter();
  const {user} = useSelector(memoUserSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => {
        if (!user) {
          dispatch(setOpenLoginForm());
          return;
        }

        dispatch(onLogOutThunk());
        router.push('/');
      }}
      className="sm:ml-auto rounded-full border-2 px-6 py-2 bg-white hover:bg-gray-200 hover:text-white transition"
    >
      {user ? 'Log out' : 'Log in'}
    </button>
  );
};

export default LogInBtnInBurger;
