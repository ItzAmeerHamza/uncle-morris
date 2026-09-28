import type { Metadata } from "next";
import { Anton, Bangers, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bubble",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Call Uncle Morris",
  description:
    "Call Uncle Morris — mortgage services by American RE Group. I find a way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${bangers.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
