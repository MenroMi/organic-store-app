// components
import { Footer, Navbar } from "@/components";

// styles
import "@/app/globals.css";

export const metadata = {
  title: "Organick Store",
  description: "E-shop with organic food delicious.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
