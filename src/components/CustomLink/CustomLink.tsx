"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ICustomLinkProps {
  label: string;
  href: string;
  classNameLink?: string;
  onClickFn?: (value?: SetStateAction<any>) => void;
  children?: React.ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({
  label,
  href,
  classNameLink,
  onClickFn = () => {},
  children,
}) => {
  const [active, setActive] = useState<boolean>(false);
  let pathname = usePathname();
  pathname = pathname.slice(1);

  useEffect(() => {
    const onSetActive = () => {
      if (pathname && pathname === "catalog" && label === "Shop") {
        setActive(true);
        return;
      }

      if (pathname && pathname === "home" && label === "Home") {
        setActive(true);
        return;
      }

      return;
    };

    onSetActive();
    return () => setActive(false);
  }, [pathname, label]);

  return (
    <Link
      onClick={() => onClickFn(label)}
      href={href}
      className={twMerge(classNameLink, active && "text-green-darker")}
    >
      {label}
      {children}
    </Link>
  );
};

export default CustomLink;
