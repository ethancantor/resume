import { FISH_BODY_FONT } from "@/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guess the Fish!",
    description: "Guess the Fish by Ethan Cantor",
};

export default async function GuessTheFishLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {

    return (
        <div className={`bg-zinc-900 ${FISH_BODY_FONT.className} w-screen h-screen items-center justify-center flex overflow-y-auto`}>
            {children}
        </div>
    );
}
