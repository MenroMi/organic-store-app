import { HeaderProfile } from "@/components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <section className=" w-full h-[100vh] flex flex-col mt-[150px] gap-10">
      <div className="sidebar w-full bg-white drop-shadow-md pb-5">
        <HeaderProfile />
      </div>
      <div className="px-10 border w-full h-full text-4xl flex items-center justify-center font-bold">
        Make something in the future
      </div>
    </section>
  );
};

export default ProfilePage;
