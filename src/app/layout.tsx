// components
import { Footer, Navbar } from "@/components";

// styles
import "./globals.css";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
