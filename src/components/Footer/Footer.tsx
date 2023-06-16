// basic
import Image from "next/image";
import Link from "next/link";
import React from "react";

// constants
import {
  footerContactData,
  footerSocialMedia,
  footerUtilityPages,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="general-footer lg:pt-0">
      <div className="general-footer__nav-container lg:pb-0 lg:flex-nowrap lg:justify-center lg:gap-5">
        <div className="nav-contact max-lg:order-2 max-lg:w-full max-lg:flex-1 max-lg:text-center max-lg:border-r lg:gap-8">
          <h2 className="text-lg font-bold sm:text-[42px] sm:leading-[1]">
            Contact Us
          </h2>
          <ul className="flex flex-col h-full w-full gap-5 lg:gap-10 font-['Open_Sans']">
            {footerContactData.map((contact) => (
              <li key={contact?.label}>
                <h3 className="text-2xl font-bold max-sm:text-sm">
                  {contact.label}
                </h3>
                <p className="text-lg text-grey-text max-sm:text-xs">
                  {contact.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-social max-lg:order-1 max-lg:mb-10 lg:max-w-[630px] lg:border-l lg:border-r lg:pr-0">
          <Link href="/" className="flex items-center transition">
            <Image
              src="/logo.png"
              alt="organic store logo"
              width={200}
              height={56}
              className="object-contain"
            />
          </Link>
          <p className="text-xl text-center text-grey-text lg:text-lg lg:px-[52px]">
            We are a popular and farming company aspiring to be a leader in the
            Organic food industry.
          </p>
          <div className="flex flex-col gap-5 max-lg:w-full lg:flex-row  transition-all">
            {footerSocialMedia.map((media) => (
              <Link
                key={media.label}
                href={media.href}
                className="rounded-full p-5 bg-green-light/[0.1]  flex justify-center items-center gap-2 lg:block hover:bg-green-light/[0.3] transition"
              >
                <Image
                  src={media.icon}
                  alt={media.alt}
                  width={21}
                  height={17}
                  className="object-contain"
                />
                <h2 className="lg:hidden font-bold text-xl text-primary-green">
                  {media.label}
                </h2>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 text-primary-green max-lg:order-3 max-lg:flex-1 max-lg:text-center">
          <h2 className="text-lg font-bold sm:text-[42px] sm:leading-[1]">
            Utility Pages
          </h2>
          <div className="flex flex-col">
            {footerUtilityPages.map((page) => (
              <Link
                href={page.href}
                key={page.label}
                className="text-lg text-grey-text py-2 hover:underline max-sm:text-sm lg:py-3"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[81px] border-t lg:mt-auto">
        <p className="flex justify-center w-full h-full items-center text-grey-text/[0.5]  text-center max-sm:text-xs">
          Copyright &copy; Organick | Designed by VictorFlow - Powered By
          Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
