import Link from "next/link";
import { SetStateAction } from "react";

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
  return (
    <Link
      onClick={() => onClickFn(label)}
      href={href}
      className={classNameLink}
    >
      {label}
      {children}
    </Link>
  );
};

export default CustomLink;
