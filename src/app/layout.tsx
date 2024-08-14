import type { Metadata } from "next";
import "./globals.css";
import SidebarCard from "@/components/Sidebar";
import { BODY_FONT } from "@/fonts";
import { isMobileDevice } from "@/utils/isMobile";
import { MobileNavbar } from "@/components/MobileNavbar";

export const metadata: Metadata = {
  title: "Resume Ethan Cantor",
  description: "Ethan Cantor's very cool resume",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isMobile = await isMobileDevice();

  return (
    <html lang="en">
      <body className={BODY_FONT.className + ' flex flex-row'}>
        {isMobile
        ? 
          <>
            <MobileNavbar />
            <div className="overflow-x-clip">
              {children}
            </div>
          </>
        :
          <>            
            <SidebarCard />
            <div className="ms-52 w-[calc(100vw-13rem)] overflow-x-clip">
              {children}
            </div>
          </>
        }
      </body>
    </html>
  );
}
