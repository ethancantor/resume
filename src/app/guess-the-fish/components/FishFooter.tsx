import { fishMap } from "@/utils/fishMap"
import Link from "next/link"
import React from "react"

export default function FishFooter() {
    return (
        <div className='text-sm flex flex-col text-center'>
            <p>There are current {fishMap.size} fish to guess from.</p>
            <p>Ethan is adding more soon!</p>
            <p>Inspired by <Link href='https://guessthe.game/' className='underline text-primary'>Guess the Game</Link> and <Link href="https://tacklevillage.com/fishdle-game/" className='underline text-primary'>Fishdle</Link></p>
            <p>Fish facts from <Link href='https://fishingbooker.com/fish' className='underline text-primary'>Fishing Booker</Link></p>
            <p>Created by <Link href='https://github.com/ethancantor' className='underline text-primary'>Ethan Cantor</Link></p>
        </div>
    )
};
