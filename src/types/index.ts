export interface ICustomButtonProps {
  classNameContainer: string;
  classNameText: string;
  classNameArrow?: string;
  classNameContent?: string;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  route?: string;
}

export interface IBannerProps {
  image: string;
  alt: string;
  title: string;
  description1: string;
  description2: string;
  classNameTitle: string;
  classNameDescr: string;
}

export interface IProductCardProps {
  label: string;
  name: string;
  priceDiscount: string;
  priceOld: string;
  category: string;
  image: string;
  classNameContainer?: string;
  classNameTitle?: string;
  classNameDivider?: string;
  classNameContainerPrice?: string;
  classNameOldPrice?: string;
  classNameActualPrice?: string;
  classNameRating?: string;
  classNameCategory?: string;
}

export interface IRatingProps {
  classNameContainer?: string;
  classNameImage?: string;
  clickable: boolean;
}

export interface IBurgerMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollValue: number;
  classNameContainer?: string;
}

export interface IAuthLinkProps {
  classNameParagraph?: string;
  contentParagraph?: string;
  classNameLink?: string;
  contentLink?: string;
  route: string;
}

export type IWindowSize = {
  width?: number;
  height?: number;
};

export type IOptions = {
  root: null;
  threshold: number;
  rootMargin: string;
};

export type IPrice = {
  from: string;
  to: string;
};
