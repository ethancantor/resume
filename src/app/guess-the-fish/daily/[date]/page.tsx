import React from 'react'
import Link from 'next/link';
import { useSeededRandom } from '@/hooks/use-seeded-random';
import { GuessTheFishCard } from '../../components/GuessTheFishCard';
import { redirect } from 'next/navigation';
import { FISH_TITLE_FONT } from '@/fonts';
import { fishMap } from '@/utils/fishMap';
import FishTitle from '../../components/FishTitle';

/**
 * A page that displays a random fish and a GuessTheFishCard to guess it.
 * The fish is randomly selected from the fishMap, which is a map of fish names to their properties.
 * The page also displays attribution to the inspired games and the source of the fish facts.
 */
export default function FishPage({ params } : { params: { date: string } }) {   

    const dateStr = params.date || new Date(Date.now()).toLocaleDateString();
    const unixDate = Math.floor(new Date(dateStr).getTime() / 1000);
    if(!unixDate || unixDate >= Math.floor(Date.now() / 1000)) redirect('/guess-the-fish');

    const allFish = fishMap.keys();
    const fishArray = Array.from(allFish);

    const random = Math.floor(useSeededRandom(unixDate) * fishArray.length);
    if(random >= fishArray.length || random < 0) redirect('/guess-the-fish');

    return (
        <div className={`text-xl gap-2 py-10 flex flex-col items-center justify-center h-screen w-screen`}>
            <FishTitle />
            <div className="flex flex-row gap-2">
                <Link href="../" className='bg-primary text-white rounded-lg px-4 py-2 text-xl font-bold'>Home</Link>
            </div>
            <div className=' w-full h-[50vh] flex items-center justify-center relative'>
                <div className='absolute w-fit h-fit top-0'>
                    <GuessTheFishCard fish={fishArray[random]} listOfFish={fishArray} dateStr={dateStr} />  
                </div>
            </div>
        </div>
    )
};

