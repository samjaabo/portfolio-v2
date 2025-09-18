import { Metadata } from "next";
import { Kode_Mono, Notable } from "next/font/google";
import "./styles/cabinet-grotesk.css";
import "./globals.css";
import clsx from "clsx";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
  weight: ["400", "700"],
});
const notable = Notable({
  subsets: ["latin"],
  variable: "--font-notable",
  weight: ["400"],
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
        `${kodeMono.variable} ${notable.variable}`,
        "font-y224 bg-white text-md text-color border-line-color-soft ",
        "scroll-smooth selection:bg-bg/85 selection:text-soft box-border"
      )}
    >
      <body>{children}</body>
    </html>
  );
}
