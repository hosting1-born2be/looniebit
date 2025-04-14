import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Footer from "@/shared/ui/components/footer/Footer";
import Header from "@/shared/ui/components/header/Header";

import "@/shared/lib/styles/base.scss";
import "@/shared/lib/styles/mixin.scss";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LoonieBit",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
