import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Header = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  return (
    <header
      className={`general-header max-sm:h-[100px] lg:fixed lg:top-0 lg:z-[12] lg:backdrop-blur-sm min-h-[50px] `}
    >
      <Navbar />
    </header>
  );
};

export default Header;
