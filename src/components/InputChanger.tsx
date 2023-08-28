'use client';

import useWindowSize from '@/hooks/useWindowSize';
import React, {FC} from 'react';
import {twMerge as tm} from 'tailwind-merge';

type ErrorObject = {
  name: string;
  message: string;
};

interface IInputChanger extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (
    e: React.FormEvent<HTMLInputElement>,
  ) => void | Promise<ErrorObject>;
  width?: string;
  height?: string;
}

const InputChanger: FC<IInputChanger> = ({
  onChange,
  width,
  height,
  className,
  id,
}) => {
  const {
    windowSize: {width: viewWidth},
  } = useWindowSize();

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        id={id}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={tm(
          'opacity-0 group-hover:opacity-100 flex absolute z-[21] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/50 px-3 py-2 text-white backdrop-blur-md sm:rounded-lg  items-center justify-center gap-2 transition hover:bg-white/60 active:bg-white/70 rounded-full',
          `${width ?? ''} ${height ?? ''} ${className ?? ''}`,
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 318 512"
          fill="#F9F8F8"
          className="w-6 h-6"
        >
          <path d="M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z" />
        </svg>
        {viewWidth < 640 ? '' : 'Change Image'}
      </label>
    </>
  );
};

export default InputChanger;
