export enum navHref {
  home = "/home",
  aboutUs = "/home#about-us",
  contact = "#contact",
  shop = "/catalog",
  registration = "/auth/register",
  logIn = "/auth/login",
  forgotPass = "/auth/forgot",
  profile = "/profile",
}

export const navLinks = [
  {
    label: "Home",
    href: navHref.home,
  },
  {
    label: "About Us",
    href: navHref.aboutUs,
  },
  {
    label: "Shop",
    href: navHref.shop,
  },
  {
    label: "Contact Us",
    href: navHref.contact,
  },
];
