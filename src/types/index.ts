export interface ICustomButtonProps {
  classNameContainer: string;
  classNameText: string;
  classNameArrow?: string;
  title: string;
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
