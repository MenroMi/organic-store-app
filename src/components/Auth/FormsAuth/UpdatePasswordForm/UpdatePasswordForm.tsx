'use client';

// basic
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

// libs
import {useDispatch, useSelector} from 'react-redux';

// slice
import {setRepeatPassword} from '@/redux/slices/userSlice';

// selectors
import {memoUserSelector} from '@/redux/selectors';

// constants
import {regexpPassword} from '@/constants';

// utils
import {onValidateForm} from '@/utils';

// components
import Spinner from '@/components/Spinner';
import useHandleInputErrors from '@/hooks/useHandleInputErrors';
import userService from '@/services/userService';

const UpdatePasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {errorPassword, setErrorPassword, loading, setLoading} =
    useHandleInputErrors();
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const [newPass, setNewPass] = useState<string>('');
  const {repeatPassword, error, isError} = useSelector(memoUserSelector);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {error} = await userService.onUpdateUser('password', newPass);

      if (error) {
        throw new Error(JSON.stringify(error));
      }
    } catch (error) {
      if ('status' in JSON.parse(error)) {
        error = JSON.parse(error);
        return {
          name: error?.name,
          message: error?.message,
        };
      } else {
        return {
          name: error?.name,
          message: error?.message,
        };
      }
    }

    setLoading(false);
    router.push('/home');
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className="mt-5
    "
    >
      <label className="relative text-primary-green text-xl">
        New password:
        <input
          onChange={e =>
            setNewPass(
              onValidateForm(
                setErrorPassword,
                regexpPassword,
                errorPassword,
                e.target.value,
              ),
            )
          }
          value={newPass}
          type={visiblePass ? 'text' : 'password'}
          name="password"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Write a new password"
        />
        <Image
          onClick={() => setVisiblePass(!visiblePass)}
          src={visiblePass ? '/icons/eye-close.svg' : '/icons/eye-open.svg'}
          alt="icon for control visibility password"
          width={visiblePass ? 32 : 30}
          height={visiblePass ? 32 : 30}
          className="absolute top-[65%] right-4"
        />
      </label>
      {errorPassword && (
        <p className="text-red-500 text-sm">
          Password should have: min 8 char., 1 lowercase letter, 1 uppercase
          letter, 1 special symbol and 1 number.
        </p>
      )}
      <label className="text-primary-green text-xl">
        Repeat password:
        <input
          disabled={errorPassword}
          onChange={e => {
            if (newPass !== e.target.value) {
              return dispatch(
                setRepeatPassword({
                  value: e.target.value,
                  error: true,
                  name: 'Passwords are different!',
                  msg: 'Please make passwords are similar',
                }),
              );
            }

            return dispatch(
              setRepeatPassword({
                value: e.target.value,
                error: false,
                name: '',
                msg: '',
              }),
            );
          }}
          value={repeatPassword}
          type="password"
          name="password"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Repeat your password"
        />
      </label>
      {isError && repeatPassword && (
        <p className="text-red-500 text-sm">
          {error.name} {error.msg}
        </p>
      )}
      <button
        disabled={isError || errorPassword || !newPass || !repeatPassword}
        type="submit"
        className="w-full h-[60px] bg-primary-green mt-3 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg disabled:opacity-80"
      >
        {loading ? <Spinner /> : 'Confirm'}
      </button>
    </form>
  );
};

export default UpdatePasswordForm;
