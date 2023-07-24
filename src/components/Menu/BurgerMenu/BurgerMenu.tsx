'use client';

// basic
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

// interface
import {IBurgerMenuProps} from '@/types';

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  children,
  isOpen,
  setIsOpen,
  scrollValue,
  classNameContainer,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScrollPosition(scrollValue);

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollValue}px`;
    }

    return () => {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, scrollPosition]);

  useEffect(() => {
    const onCloseMenuByEsc = (e: KeyboardEvent) => {
      return e?.key === 'Escape' ? setIsOpen(false) : null;
    };

    window.addEventListener('keydown', onCloseMenuByEsc);

    return () => window.removeEventListener('keydown', onCloseMenuByEsc);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNameContainer}>
      <div
        className={`fixed h-full w-[70vw] bg-white z-[14] top-0 right-0 pt-3 overflow-auto ${
          isOpen ? 'visible' : 'hidden'
        }`}
      >
        <div className="flex px-8 justify-end">
          <Image
            src="/icons/cross-for-close.svg"
            alt="cross for close burger menu"
            width={60}
            height={60}
            onClick={() => setIsOpen(false)}
          />
        </div>
        {children}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? 'visible' : 'hidden'}`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
