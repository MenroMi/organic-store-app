'use client';

import InputChanger from '@/components/InputChanger';
import Spinner from '@/components/Spinner';
import {AppDispatch} from '@/redux/provider/ReduxProvider';
import {memoUserSelector} from '@/redux/selectors';
import {setUserBgImage} from '@/redux/slices/userSlice';
import {onUpdateBGImageUserThunk} from '@/redux/thunks/update';
import {IUserOnDB} from '@/services/dbService';
import {log} from 'console';
import Image from 'next/image';
import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface IBgImage {
  name?: string;
  url?: string;
}

interface IProfileBgImage {
  user: IUserOnDB;
}

const ProfileBgImage: FC<IProfileBgImage> = ({user}) => {
  const {user: userAuth} = useSelector(memoUserSelector);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [bgImage, setBgImage] = useState<IBgImage>({});
  const dispatch = useDispatch<AppDispatch>();

  const onUpdateBGImage = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const {files} = e.target as HTMLInputElement;

    if (files) {
      if (user?.avatar?.match(files[0].name)?.length > 0) {
        return;
      }
    }

    setBgImage({name: files[0].name, url: URL.createObjectURL(files[0])});
    dispatch(setUserBgImage(URL.createObjectURL(files[0])));

    try {
      dispatch(onUpdateBGImageUserThunk({file: files[0], user: userAuth}));
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const getBgImage = (
    bgImageFromDB: string | null,
    bgImageFromState: IBgImage | null,
  ): string => {
    if (bgImageFromDB) {
      if (bgImageFromState.name) {
        if (bgImageFromDB === bgImageFromState.name) {
          return bgImageFromDB;
        } else {
          return bgImageFromState.url;
        }
      } else {
        return bgImageFromDB;
      }
    }

    if (bgImageFromState) {
      return bgImageFromState.url;
    }

    return '/register-bg.jpg';
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(bgImage.url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative object-cover w-full h-48 md:h-72 overflow-hidden group">
      <Image
        src={getBgImage(user.bg_image, bgImage)}
        width={1920}
        height={192}
        priority
        alt="background image of profile"
        className="absolute h-full object-cover"
      />
      <div className="absolute right-5 max-sm:top-5 sm:bottom-5 w-full max-w-[50px] sm:max-w-[192px] h-7">
        {isLoading ? (
          <div className="absolute left-[50%] top-[50%] z-10">
            <Spinner width="200px" height="200px" />
          </div>
        ) : (
          <InputChanger
            id="bg"
            onChange={onUpdateBGImage}
            width="w-full"
            className="bg-black/20 hover:bg-black/30 active:bg-black/40 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileBgImage;
