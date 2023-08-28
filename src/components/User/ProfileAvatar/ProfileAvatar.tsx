'use client';

import InputChanger from '@/components/InputChanger';
import Spinner from '@/components/Spinner';
import {AppDispatch} from '@/redux/provider/ReduxProvider';
import {memoUserSelector} from '@/redux/selectors';
import {setUserAvatar} from '@/redux/slices/userSlice';
import {onUpdateAvatarUserThunk} from '@/redux/thunks/update';
import {IUserOnDB} from '@/services/dbService';
import Image from 'next/image';
import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface IAvatar {
  name?: string;
  url?: string;
}

interface IProfileAvatar {
  user: IUserOnDB;
}

const ProfileAvatar: FC<IProfileAvatar> = ({user}) => {
  const {user: userAuth, isLoading} = useSelector(memoUserSelector);
  const [avatar, setAvatar] = useState<IAvatar>({});
  const dispatch = useDispatch<AppDispatch>();

  const onUpdateProfileImage = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const {files} = e.target as HTMLInputElement;

    if (files) {
      if (user?.avatar?.match(files[0].name)?.length > 0) {
        return;
      }
    }

    setAvatar({name: files[0].name, url: URL.createObjectURL(files[0])});
    dispatch(setUserAvatar(URL.createObjectURL(files[0])));

    try {
      dispatch(onUpdateAvatarUserThunk({file: files[0], user: userAuth}));
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  };

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

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar.url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={` relative w-[200px] h-[200px] shadow-md md:w-[250px] md:h-[250px] group before:bg-black/40 mt-[-100px] before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[50%] before:z-9 before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-0 before:hover:opacity-100 before:transition border-[10px] border-white rounded-full ${
        isLoading &&
        'before:bg-black/70 mt-[-100px] before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[50%] before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-100 before:transition border-[10px] border-white rounded-full before:shadow-inner before:z-9'
      }`}
    >
      {user && user?.id && (
        <Image
          src={getAvatar(user.avatar, avatar)}
          alt="user avatar"
          width={250}
          height={250}
          className="rounded-full w-full h-full object-cover bg-white"
        />
      )}

      {isLoading ? (
        <div className="absolute left-0 top-0 z-10">
          <Spinner width="200px" height="200px" />
        </div>
      ) : (
        <InputChanger
          id="avatar"
          onChange={onUpdateProfileImage}
          width="w-[70%]"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default ProfileAvatar;
