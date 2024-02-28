import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "../../providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eShop Dashboard",
  description: "Products add to cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
