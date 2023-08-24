'use client';

import Spinner from '@/components/Spinner';
import {AppDispatch} from '@/redux/provider/ReduxProvider';
import {memoUserSelector} from '@/redux/selectors';
import {setUserMetadata} from '@/redux/slices/userSlice';
import {onUpdateAvatarUserThunk} from '@/redux/thunks';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface IAvatar {
  name?: string;
  url?: string;
}

const HeaderProfile = () => {
  const {user, isLoading} = useSelector(memoUserSelector);
  const dispatch = useDispatch<AppDispatch>();
  const [avatar, setAvatar] = useState<IAvatar>({});

  const onUpdateProfileImage = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const {files} = e.target as HTMLInputElement;

    if (files) {
      if (user?.user_metadata?.avatar?.match(files[0].name)?.length > 0) {
        return;
      }
    }

    setAvatar({name: files[0].name, url: URL.createObjectURL(files[0])});
    dispatch(setUserMetadata(URL.createObjectURL(files[0])));

    try {
      // remove later logic for repeat images
      dispatch(onUpdateAvatarUserThunk({file: files[0], user}));
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar.url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAvatar = (
    avatarFromDB: string | null,
    avatarFromState: IAvatar | null,
  ): string => {
    if (avatarFromDB) {
      if (avatarFromState.name) {
        if (avatarFromDB === avatarFromState.name) {
          return avatarFromDB;
        } else {
          return avatarFromState.url;
        }
      } else {
        return avatarFromDB;
      }
    }

    if (avatarFromState) {
      return avatarFromState.url;
    }

    return '/public/icons/user.svg';
  };

  return (
    <div className="flex flex-col">
      <Image
        src="/login-bg.jpg"
        width={1920}
        height={1024}
        priority
        alt="background image of profile"
        className="object-cover w-full h-48 md:h-72"
      />
      <div className="px-10 lg:px-40 flex gap-5 md:justify-between justify-center">
        <div
          className={`relative w-[200px] h-[200px] shadow-md md:w-[250px] md:h-[250px] group before:bg-black/40 mt-[-100px] before:shadow-xl before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[50%] before:z-9 before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-0 before:hover:opacity-100 before:transition border-[10px] border-white rounded-full before:hover:shadow-inner ${
            isLoading &&
            'before:bg-black/70 mt-[-100px]  before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[50%] before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-100 before:transition border-[10px] border-white rounded-full before:shadow-inner before:z-9'
          }`}
        >
          {user && user?.id && (
            <Image
              src={getAvatar(user.user_metadata.avatar, avatar)}
              alt="user avatar"
              width={250}
              height={250}
              className="rounded-full w-full h-full object-cover"
              // className="rounded-full w-full h-full object-cover border-[10px] border-white drop-shadow-lg bg-white"
            />
          )}

          {isLoading ? (
            <div className="absolute left-0 top-0 z-10">
              <Spinner width="200" height="200" />
            </div>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={onUpdateProfileImage}
                id="file"
                className="hidden"
              />
              <label
                htmlFor="file"
                className="opacity-0 group-hover:opacity-100 flex absolute z-[21] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/50 px-3 py-2 text-white backdrop-blur-md rounded-lg w-[70%] items-center justify-center gap-2 transition hover:bg-white/60 active:bg-white/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 318 512"
                  fill="#F9F8F8"
                  className="w-6 h-6"
                >
                  <path d="M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z" />
                </svg>
                Change Image
              </label>
            </>
          )}
        </div>
        {/* <div className="before:bg-black before:w-full before:h-full mt-3">
          <div className="flex items-center gap-4">
            <h2 className="capitalize text-4xl font-bold text-primary-green">
              {user && user.user_metadata.name}
            </h2>
            <button className="px-7 py-2 bg-white shadow-md active:shadow-inner border rounded-full text-primary-green text-lg font-medium hover:bg-gray-100 active:bg-gray-200 transition">
              Edit
            </button>
          </div>

          <div className="flex text-gray-400 gap-10 mt-3 text-xl">
            <p>Your birthday: 03.08.1987</p>
            <p>How much day stay with us: 143 days</p>
            <p>Your favorite dish: Asian Cucumber Salad</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderProfile;
