import React from 'react'
import Link from 'next/link';
import { FISH_TITLE_FONT } from '@/fonts';

/**
 * A page that displays a random fish and a GuessTheFishCard to guess it.
 * The fish is randomly selected from the fishMap, which is a map of fish names to their properties.
 * The page also displays attribution to the inspired games and the source of the fish facts.
 */
export default function FishPage() {

    const dateStr = new Date(Date.now()).toLocaleDateString().replace(/\//g, '.');

    return (
        <div className={`text-xl flex flex-col gap-5 mt-5 items-center justify-center`}>
            <div className={`text-6xl ${FISH_TITLE_FONT.className} text-center w-full h-fit`}>Guess The Fish</div>
            <div className='flex flex-row gap-3'>
                <Link href={`./guess-the-fish/daily/${dateStr}`} className='bg-primary text-white rounded-lg px-4 py-2 text-2xl font-bold'>Daily</Link>
                <Link href='./guess-the-fish/history' className='bg-primary text-white rounded-lg px-4 py-2 text-2xl font-bold'>History</Link>
            </div>
            <div className='text-sm flex flex-col text-center'>
                <p>Inspired by <Link href='https://guessthe.game/' className='underline text-primary'>Guess the Game</Link> and <Link href="https://tacklevillage.com/fishdle-game/" className='underline text-primary'>Fishdle</Link></p>
                <p>Fish facts from <Link href='https://fishingbooker.com/fish' className='underline text-primary'>Fishing Booker</Link></p>
                <p>Created by <Link href='https://github.com/ethancantor' className='underline text-primary'>Ethan Cantor</Link></p>
            </div>
        </div>
    )
};

