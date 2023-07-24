'use client';

import Spinner from '@/components/Spinner';
import {memoAuthSelector} from '@/redux/selectors';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import {useSelector} from 'react-redux';

const supabase = createClientComponentClient();

const HeaderProfile = () => {
  const {user} = useSelector(memoAuthSelector);

  const onSelectFile = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const {files} = e.target as HTMLInputElement;

      const isRepeatImages = (
        await supabase.storage.from('images').list('users')
      ).data.filter(image => image.name === files[0].name);

      if (isRepeatImages.length > 0) {
        await supabase.storage
          .from('images')
          .remove([`users/${isRepeatImages[0].name}`]);
      }

      if (user?.user_metadata?.avatar) {
        await supabase.from('users').update({avatar: null}).eq('id', user.id);
      }

      const uploadedImage = (
        await supabase.storage
          .from('images')
          .upload(`users/${files[0].name}`, files[0])
      ).data.path;

      const avatar = supabase.storage.from('images').getPublicUrl(uploadedImage)
        .data.publicUrl;
      await supabase.from('users').update({avatar}).eq('id', user.id);
    } catch (error) {
      console.log(error);
    }
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
        <div className="relative w-[200px] h-[200px] shadow-md md:w-[250px] md:h-[250px] group before:bg-black/40 mt-[-100px] before:shadow-xl before:w-[100%] before:h-[100%] before:absolute before:top-[50%] before:left-[50%] before:z-20 before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:opacity-0 before:hover:opacity-100 before:transition border-[10px] border-white rounded-full before:hover:shadow-inner">
          {user && user?.id ? (
            <Image
              src={user?.user_metadata?.avatar ?? '/icons/user.svg'}
              alt="user avatar"
              width={250}
              height={250}
              className="rounded-full w-full h-full object-cover"
              // className="rounded-full w-full h-full object-cover border-[10px] border-white drop-shadow-lg bg-white"
            />
          ) : (
            <Spinner width="200px" height="200px" />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={onSelectFile}
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
