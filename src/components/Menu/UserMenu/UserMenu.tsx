"use client";

// libs
import { useDispatch } from "react-redux";

// thunk
import { onLogOutThunk } from "@/redux/thunks/auth";

// constants
import { userMenuLinks } from "@/constants";

// interface/types
import { AppDispatch } from "@/redux/provider/ReduxProvider";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { useLoading } from "@/hooks/useLoading";
import CustomLink from "@/components/CustomLink/CustomLink";
import { useEffect } from "react";

const UserMenu = () => {
  const { loading, setLoading } = useLoading();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();

  const setClickEvent = (link: string) => {
    setLoading(true);

    switch (link.toLowerCase()) {
      case "profile":
        router.push("/profile");
        break;
      case "favorite":
        router.push("/");
        break;
      case "settings":
        router.push("/");
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

  useEffect(() => {
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className={` flex flex-col items-center mt-5 w-full sm:text-3xl`}>
      {userMenuLinks.map(({ label, href }: { label: string; href: string }) => (
        <CustomLink
          key={label}
          label={label}
          href={href}
          classNameLink="relative px-10 py-8 w-full text-center font-bold hover:bg-slate-100 text-primary-green"
          onClickFn={setClickEvent}
        />
      ))}
      <div
        className={`absolute top-0 left-[50%] translate-x-[-50%]  w-full h-full bg-black/5 items-center ${
          loading ? "flex" : "hidden"
        }`}
      >
        <Spinner width="200px" height="200px" />
      </div>
    </div>
  );
};

export default UserMenu;
