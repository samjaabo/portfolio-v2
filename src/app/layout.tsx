import "./globals.css";

import { Metadata } from "next";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Said Amjaabou | UI/UX Designer & Design Strategist",
  description:
    "UI/UX Designer and Design Strategist with 30 years of experience creating elegant, human-centered digital experiences.",
  keywords: ["UI/UX", "Design", "Portfolio", "Digital Experiences", "Designer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${kodeMono.variable} font-normal bg-white text-sm text-color antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
