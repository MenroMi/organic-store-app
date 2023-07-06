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
    label: "Shop",
    href: navHref.shop,
  },
  {
    label: "Profile",
    href: navHref.profile,
  },
  {
    label: "Contact Us",
    href: navHref.contact,
  },
];

export const userMenuLinks = [
  { label: "Profile", href: navHref.profile },
  // { label: "Favorite", href: navHref.home },
  // { label: "Settings", href: navHref.home },
  { label: "Log Out", href: navHref.home },
];
