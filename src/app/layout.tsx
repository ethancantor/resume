import type { Metadata } from "next";
import { Inter, Josefin_Sans, Mukta } from "next/font/google";
import "./globals.css";
import AboutMeCard from "@/components/AboutMeCard";

const inter = Josefin_Sans({ subsets: ["latin"], weight: '500', display: 'swap' });

export const metadata: Metadata = {
  title: "Resume Ethan Cantor",
  description: "Ethan Cantor's very cool resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AboutMeCard />
        <div className="ms-56 overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
