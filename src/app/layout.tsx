// styles
import "./globals.css";
import ReduxProvider from "@/redux/provider";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
