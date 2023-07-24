'use client';

import Spinner from '@/components/Spinner';
import {ErrorMsgs, regexpEmail, regexpName, regexpPassword} from '@/constants';
import {setResetResponse} from '@/redux/slices/userSlice';
import onValidateForm from '@/utils/onValidateForm';
import {memoUserSelector} from '@/redux/selectors';
import Image from 'next/image';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onRegisterThunk} from '@/redux/thunks';
import {AppDispatch} from '@/redux/provider/ReduxProvider';
import useHandleInputErrors from '@/hooks/useHandleInputErrors';

const RegisterForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visiblePass, setVisiblePass] = useState<boolean>(false);

  const {response} = useSelector(memoUserSelector);
  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    errorName,
    errorEmail,
    errorPassword,
    setLoading,
    setErrorEmail,
    setErrorName,
    setErrorPassword,
  } = useHandleInputErrors();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await dispatch(onRegisterThunk({name, email, password}));

    setLoading(false);
    setName('');
    setEmail('');
    setPassword('');
    // setTimeout(() => dispatch(setResetResponse()), 5000);
  };

  return (
    <form
      onSubmit={e => onHandleSubmit(e)}
      className="flex flex-col gap-2 w-full mt-10"
    >
      <label className=" text-primary-green text-xl">
        Name:
        <input
          onChange={e => {
            setName(
              onValidateForm(
                setErrorName,
                regexpName,
                errorName,
                e.target.value,
              ),
            );
          }}
          value={name}
          type="text"
          name="name"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Alex Dolgopolov"
        />
      </label>
      {errorName && <p className="text-red-500 text-sm">{ErrorMsgs.name}</p>}
      <label className="text-primary-green text-xl">
        Email:
        <input
          onChange={e =>
            setEmail(
              onValidateForm(
                setErrorEmail,
                regexpEmail,
                errorEmail,
                e.target.value,
              ),
            )
          }
          value={email}
          type="email"
          name="email"
          required
          className="w-full h-[60px] border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="custom@gmail.com"
        />
      </label>
      {errorEmail && <p className="text-red-500 text-sm">{ErrorMsgs.email}</p>}
      <label className="relative text-primary-green text-xl">
        Password:
        <input
          onChange={e =>
            setPassword(
              onValidateForm(
                setErrorPassword,
                regexpPassword,
                errorPassword,
                e.target.value,
              ),
            )
          }
          value={password}
          type={visiblePass ? 'text' : 'password'}
          name="password"
          required
          className="w-full h-[60px] bg-white border-[1px] border-primary-green mt-2 text-primary-green font-normal px-3 rounded-lg hover:border-green-darker transition placeholder:text-lg"
          placeholder="Password"
          autoComplete="on"
        />
        <Image
          onClick={() => setVisiblePass(!visiblePass)}
          src={visiblePass ? '/icons/eye-close.svg' : '/icons/eye-open.svg'}
          alt="icon for control visibility password"
          width={visiblePass ? 32 : 30}
          height={visiblePass ? 32 : 30}
          className="absolute top-[55%] right-4"
        />
      </label>
      {errorPassword && (
        <p className="text-red-500 text-sm">{ErrorMsgs.password}</p>
      )}

      {response.response.length > 0 && response.success ? (
        <p className="text-green-darker font-semibold">{response.response}</p>
      ) : (
        <p className="text-red-500 font-semibold">{response.response}</p>
      )}
      <button
        type="submit"
        disabled={
          !name ||
          !email ||
          !password ||
          errorEmail ||
          errorName ||
          errorPassword
        }
        className="w-full h-[60px] bg-primary-green mt-5 font-bold text-lg px-3 text-white hover:bg-primary-green-darker transition tracking-widest rounded-lg disabled:opacity-80"
      >
        {loading ? <Spinner /> : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;
