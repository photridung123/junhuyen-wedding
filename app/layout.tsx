import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./../public/asset/fonts/DFVN_Indulge_Script.otf",
});

export const metadata: Metadata = {
  title: "Liew Wei Jun 🤵 x  Nguyen Thi Thu Huyen👰",
  description: "Wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
