import { FISH_TITLE_FONT } from "@/fonts"
import { AliveFishIcon } from "@/pictures/icons/icons.index"
import Image from "next/image"
import React from "react"

export default function FishTitle() {
    return (
        <div className={`text-6xl ${FISH_TITLE_FONT.className} text-center flex flex-row flex-wrap space-x-5 mx-auto items-center justify-center`}>
            Guess The
            <Image src={AliveFishIcon} alt="Fish" width={60} height={60} className="invert" priority />
        </div>
    )
};
