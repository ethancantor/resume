import { FISH_TITLE_FONT } from "@/fonts"
import { AliveFishIcon } from "@/pictures/icons/icons.index"
import Image from "next/image"
import React from "react"

export default function FishTitle() {
    return (
        <div className={`text-6xl ${FISH_TITLE_FONT.className} text-center h-fit flex flex-row gap-5 mx-auto`}>
            <div>Guess The</div>
            <Image src={AliveFishIcon} alt="Fish" width={60} height={60} className="invert"/>
        </div>
    )
};
