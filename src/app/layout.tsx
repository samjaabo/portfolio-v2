import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
