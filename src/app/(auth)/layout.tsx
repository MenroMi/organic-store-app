export const metadata = {
  title: "Authentication to store",
  description: "Authentication to organick store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative h-[100vh]">
      <section className="flex flex-col items-center justify-center bg-forgot-pass-bg bg-no-repeat bg-cover w-full h-full bg-blend-multiply bg-[#333]/[0.5] px-10">
        {children}
      </section>
    </main>
  );
}
