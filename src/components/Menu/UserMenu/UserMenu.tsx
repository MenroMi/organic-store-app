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

  return (
    <div className={`flex flex-col items-center mt-5 w-full sm:text-3xl`}>
      {["Profile", "Favorite", "Settings", "Log Out"].map((link: string) => (
        <Link
          onClick={() => {
            if (link === "Log Out") {
              dispatch(onLogOutThunk());
              router.push("/");
            }
          }}
          key={link}
          href={navHref.home}
          className="px-10 py-8 w-full text-center font-bold hover:bg-slate-100 "
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
