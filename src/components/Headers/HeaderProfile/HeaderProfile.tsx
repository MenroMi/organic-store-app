import {ProfileAvatar, ProfileBgImage} from '@/components/User';
import {IUserOnDB} from '@/services/dbService';
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';

const HeaderProfile = async () => {
  const supabaseServer = createServerComponentClient({cookies});
  const {
    data: {user},
  } = await supabaseServer.auth.getUser();

  const {data: users}: {data: IUserOnDB[]} = await supabaseServer
    .from('users')
    .select('*')
    .eq('id', user.id);
  return (
    <div className="flex flex-col">
      <ProfileBgImage user={users[0]} key="aaa" />

      <div className="relative z-11 px-10 lg:px-40 flex gap-5 md:justify-between justify-center">
        <ProfileAvatar user={users[0]} />
      </div>
    </div>
  );
};

export default HeaderProfile;

{
  /* <div className="before:bg-black before:w-full before:h-full mt-3">
          <div className="flex items-center gap-4">
            <h2 className="capitalize text-4xl font-bold text-primary-green">
              {user &&
                (user.user_metadata.name ?? user.user_metadata.full_name  )}
            </h2>
            <button className="px-7 py-2 bg-white shadow-md active:shadow-inner border rounded-full text-primary-green text-lg font-medium hover:bg-gray-100 active:bg-gray-200 transition">
              Edit
            </button>
          </div>

          <div className="flex text-gray-400 gap-10 mt-3 text-xl">
            <p>Your birthday: 03.08.1987</p>
            <p>How much day stay with us: 143 days</p>
            <p>Your favorite dish: Asian Cucumber Salad</p>
          </div>
        </div> */
}
