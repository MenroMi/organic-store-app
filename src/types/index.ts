export interface ICustomButtonProps {
  classNameContainer: string;
  classNameText: string;
  classNameArrow?: string;
  classNameContent?: string;
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
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
}

export interface IRatingProps {
  classNameContainer?: string;
  classNameImage?: string;
  clickable: boolean;
}
