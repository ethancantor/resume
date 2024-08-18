import type { Metadata } from "next";
import "./globals.css";
import { BODY_FONT } from "@/fonts";
import { isMobileDevice } from "@/utils/isMobile";
import { MobileNavbar } from "@/components/Misc/MobileNavbar";
import SecondBackground from "@/components/Misc/SecondBackground";

export const metadata: Metadata = {
  title: "Resume Ethan Cantor",
  description: "Ethan Cantor's very cool resume",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={BODY_FONT.className + 'flex flex-col text-white bg-gradient-to-r from-raisin-light to-raisin-light'}>
        <div className="overflow-x-clip flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
