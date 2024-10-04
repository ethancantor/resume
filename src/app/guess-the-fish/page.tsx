import React from 'react'
import Link from 'next/link';
import FishTitle from './components/FishTitle';
import { fishMap } from '@/utils/fishMap';
import FishFooter from './components/FishFooter';

/**
 * A page that displays a random fish and a GuessTheFishCard to guess it.
 * The fish is randomly selected from the fishMap, which is a map of fish names to their properties.
 * The page also displays attribution to the inspired games and the source of the fish facts.
 */
export default function FishPage() {

    const dateStr = new Date(Date.now()).toLocaleDateString().replace(/\//g, '.');

    return (
        <div className={`text-xl flex flex-col gap-5 mt-5 items-center justify-center`}>
            <FishTitle />
            <div className='flex flex-row gap-3'>
                <Link href={`./guess-the-fish/daily/${dateStr}`} className='bg-primary text-white rounded-lg px-4 py-2 text-2xl font-bold'>Daily</Link>
                <Link href='./guess-the-fish/history' className='bg-primary text-white rounded-lg px-4 py-2 text-2xl font-bold'>History</Link>
            </div>
            <FishFooter />
        </div>
    )
};

