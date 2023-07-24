'use client';

// basic
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';

// libs
import {useDispatch, useSelector} from 'react-redux';
import {setOpenLoginForm} from '@/redux/slices/userSlice';

// selectors
import {memoUserSelector} from '@/redux/selectors';

// constants
import {navLinks, navHref} from '@/constants';

// hooks
import useWindowSize from '@/hooks/useWindowSize';

// components
import BurgerMenu from '@/components/Menu/BurgerMenu';
import {BurgerMenuAuth, DropdownAuth} from '@/components/Auth';
import CustomLink from '@/components/CustomLink';
import NavbarUser from '@/components/User/NavbarUser';

const Navbar = () => {
  const {
    windowSize: {width},
  } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [smaller, setSmaller] = useState<boolean>(false);
  const scrollRef = useRef<number>(0);
  const {isOpenLoginForm, user, isLogin} = useSelector(memoUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const {
        documentElement: {scrollTop},
      } = e.target as any;

      if (scrollTop >= 50) {
        return setSmaller(true);
      } else {
        setSmaller(false);
      }

      return null;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      dispatch(setOpenLoginForm());
      window.addEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogInForm = () => {
    if (isOpenLoginForm) {
      return width! < 1024 && !user && <DropdownAuth />;
    }
    return null;
  };

  const onAllowSecureRoutes = (
    label: string,
    href: string,
    classNameLink: string,
  ) => {
    if (isLogin) {
      return (
        <CustomLink
          key={label}
          label={label}
          href={href}
          classNameLink={classNameLink}
        />
      );
    }

    if (label.toLowerCase() === 'profile') {
      return;
    }

    return (
      <CustomLink
        key={label}
        label={label}
        href={href}
        classNameLink={classNameLink}
      />
    );
  };

  return (
    <>
      <nav
        className={`general-header__navbar max-lg:gap-4 lg:gap-2 ${
          smaller ? 'min-h-[90px]' : 'min-h-[150px]'
        }`}
      >
        <div className="flex justify-between lg:justify-start items-center max-w-[865px] w-full lg:gap-28">
          <a
            href={navHref.home}
            className="flex items-center max-lg:w-[120px] transition"
          >
            <Image
              src="/logo.png"
              alt="organic store logo"
              width={200}
              height={56}
              priority
              className="object-contain"
            />
          </a>
          <Image
            src="/icons/burger-menu.svg"
            alt="button open menu"
            onClick={() => {
              scrollRef.current = document.documentElement.scrollTop;
              setIsOpen(!isOpen);
            }}
            className={`cursor-pointer transition-all max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px] lg:hidden ${
              isOpen ? 'hidden' : 'visible'
            }`}
            width={60}
            height={60}
          />

          <div className="max-lg:hidden h-full flex justify-center items-center">
            {navLinks.map(({label, href}) => {
              return onAllowSecureRoutes(label, href, 'nav-item');
            })}
          </div>

          <BurgerMenu
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            scrollValue={scrollRef.current}
            classNameContainer={`relative cursor-pointer ${
              (!isOpen || width! >= 1024) && 'hidden'
            }`}
          >
            <BurgerMenuAuth />
            {onLogInForm()}
            <div className="flex flex-col h-full w-full justify-start">
              {navLinks.map(({label, href}) => {
                return onAllowSecureRoutes(
                  label,
                  href,
                  'burger-nav__item max-md:text-2xl md:text-4xl',
                );
              })}
            </div>
          </BurgerMenu>
        </div>
        <div className="flex gap-3 items-center">
          <div className="cart max-sm:min-w-[40px] max-sm:max-h-[30px] max-lg:min-w-[80px] lg:min-w-[165px]">
            <Link
              href={navHref.home}
              className="flex border rounded-full items-center gap-3 max-sm:p-1 max-lg:p-2 lg:py-2 lg:pl-3 lg:pr-6 "
            >
              <div className="max-sm:p-2 p-4 rounded-full bg-primary-green">
                <Image
                  src="/icons/cart.svg"
                  alt="cart logo"
                  width={30}
                  height={30}
                  priority
                  className="object-contain"
                />
              </div>

              <p className="lg:visible max-lg:hidden">Cart 0</p>
            </Link>
          </div>
          {width >= 640 && (
            <NavbarUser
              width={width}
              setIsOpen={setIsOpen}
              dispatch={dispatch}
              isOpen={isOpen}
            />
          )}
        </div>
      </nav>
      {isOpenLoginForm && width! >= 1024 && <DropdownAuth />}
    </>
  );
};

export default Navbar;
