import { FISH_TITLE_FONT } from "@/fonts"
import Link from "next/link"
import React from "react"
import GuessHistory from "../components/GuessHistory"
import ClearHistoryButton from "../components/ClearHistoryButton"
import Image from "next/image"
import { AliveFishIcon } from "@/pictures/icons/icons.index"
import FishTitle from "../components/FishTitle"

export default function HistoryPage() {
    return (
    <div className={`text-xl gap-2 py-10 flex flex-col items-center justify-center h-screen w-screen`}>
        <FishTitle />
        <div className="flex flex-row gap-2">
            <Link href="./" className='bg-primary text-white rounded-lg px-4 py-2 text-xl font-bold'>Home</Link>
            <ClearHistoryButton />
        </div>
        <div className=' w-full h-[50vh] flex items-center justify-center relative '>
            <div className='absolute w-fit h-fit top-0'>
                <GuessHistory />
            </div>
        </div>
    </div>
    )
};
