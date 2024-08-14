import type { Metadata } from "next";
import "./globals.css";
import SidebarCard from "@/components/Sidebar";
import { BODY_FONT } from "@/fonts";

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
      <body className={BODY_FONT.className + ' flex flex-row'}>
        <SidebarCard />
        <div className="ms-52 w-[calc(100vw-13rem)] overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
