import Image from 'next/image'
import React from 'react'
import { fishMap } from '../../../public/fish'
import { BODY_FONT } from '@/fonts';
import { GuessTheFishCard } from './components/GuessTheFishCard';
import Link from 'next/link';

export default function fish() {

    const allFish = fishMap.keys();
    const fishArray = Array.from(allFish);

    return (
        <div className={`${BODY_FONT.className} text-xl flex flex-col gap-2 py-10 items-center w-screen h-screen overflow-auto`}>
            <div className='text-6xl'>Guess The Fish</div>
            <GuessTheFishCard fish={fishArray[2]} listOfFish={fishArray} />
            <div className='text-sm flex flex-col text-center'>
                <p>Inspired by <Link href='https://guessthe.game/' className='underline text-primary'>Guess the Game</Link> and <Link href="https://tacklevillage.com/fishdle-game/" className='underline text-primary'>Fishdle</Link></p>
                <p>Fish facts from <Link href='https://fishingbooker.com/fish' className='underline text-primary'>Fishing Booker</Link></p>
                <p>Created by <Link href='https://github.com/ethancantor' className='underline text-primary'>Ethan Cantor</Link></p>
            </div>
        </div>
    )
};

