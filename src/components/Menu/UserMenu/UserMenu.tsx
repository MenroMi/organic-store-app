import { navHref } from "@/constants";
import useSupabaseAuth from "@/hooks/useSupabaseAuth";
import Link from "next/link";

const UserMenu = () => {
  const { onLogOut } = useSupabaseAuth();

  return (
    <div className={`flex flex-col items-center mt-5 w-full sm:text-3xl`}>
      {["Profile", "Favorite", "Settings", "Log Out"].map((link: string) => (
        <Link
          onClick={() => link === "Log Out" && onLogOut()}
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
