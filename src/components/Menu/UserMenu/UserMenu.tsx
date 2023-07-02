"use client";

// basic
import Link from "next/link";

// libs
import { useDispatch } from "react-redux";

// thunk
import { onLogOutThunk } from "@/redux/thunks/auth";

// constants
import { navHref } from "@/constants";

// interface/types
import { AppDispatch } from "@/redux/provider/ReduxProvider";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const setClickEvent = (link: string) => {
    switch (link.toLowerCase()) {
      case "profile":
        router.push("/profile");
        break;
      case "favorite":
        console.log(link);
        break;
      case "settings":
        console.log(link);
        break;
      case "log out":
        dispatch(onLogOutThunk());
        router.push("/");
        break;
      default:
        router.push("/");
        break;
    }
  };

  return (
    <div className={`flex flex-col items-center mt-5 w-full sm:text-3xl`}>
      {[
        { label: "Profile", href: navHref.profile },
        { label: "Favorite", href: navHref.home },
        { label: "Settings", href: navHref.home },
        { label: "Log Out", href: navHref.home },
      ].map(({ label, href }: { label: string; href: string }) => (
        <Link
          onClick={() => setClickEvent(label)}
          key={label}
          href={href}
          className="px-10 py-8 w-full text-center font-bold hover:bg-slate-100 "
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
