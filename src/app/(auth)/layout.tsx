import {CustomButton} from '@/components';
import {navHref} from '@/constants';
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export const metadata = {
  title: 'Authentication to store',
  description: 'Authentication to organick store.',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({cookies});

  const {
    data: {session},
    error,
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className="relative h-[100vh]">
      <section className="flex flex-col items-center justify-center bg-forgot-pass-bg bg-no-repeat bg-cover w-full h-full bg-blend-multiply bg-[#333]/[0.5] px-10">
        <div className="flex items-center flex-col justify-center max-w-[500px] w-full min-h-[500px] bg-white/80 rounded-lg shadow-xl backdrop-blur-sm px-5 py-5">
          {children}
        </div>
        <CustomButton
          title="Back to home"
          classNameContainer="bg-white/80 backdrop-blur-sm w-full max-w-[500px] rounded-lg h-14 mt-4 shadow-xl"
          classNameText="text-primary-green"
          route={navHref.home}
        />
      </section>
    </main>
  );
}
