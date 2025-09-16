import { Metadata } from "next";
import { Kode_Mono, Nova_Square } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
      className={clsx(
        `${kodeMono.variable}`,
        "font-normal bg-white text-sm text-color border-line-color-soft antialiased",
        "scroll-smooth selection:bg-bg/85 selection:text-soft box-border"
      )}
    >
      <body>{children}</body>
    </html>
  );
}
