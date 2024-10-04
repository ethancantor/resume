import { AliveFishIcon, DeadFishIcon, RodIcon } from "@/pictures/icons/icons.index";
import Image from "next/image";
import Link from "next/link";
import React from "react"

export default function GuessHistoryRow({ date, value }: { date: string, value: string }) {
    const guesses = JSON.parse(value).guesses || [];
    const isCorrect = JSON.parse(value).correctGuess;

    const finished = guesses.length === 5; 
    
    return (
        <Link className="flex flex-row gap-1 cursor-pointer bg-zinc-800 rounded-xl px-2 py-2 items-center justify-center"
            href={`/guess-the-fish/daily/${date}`}
        >
            <div className="text-xl w-32 flex items-center justify-center">{date.replaceAll('.', '/').replace('fishtory_', '')}: </div>
            { 
                Array(5).fill(0).map((_, index) => {
                    let bg = 'bg-zinc-700'
                    if( index === guesses.length - 1 && isCorrect) bg = 'bg-green-600';
                    else if(index < guesses.length && !isCorrect && guesses.length < 5) bg = 'bg-yellow-600';
                    else if(index === guesses.length - 1 && !isCorrect && guesses.length >= 5) bg = 'bg-red-500';
                    return <div key={index} className={`rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer ${bg} text-base`}>{index + 1}</div>
                })
            }
            { isCorrect && <div className="text-xl w-10 flex items-center justify-center">
                <Image src={AliveFishIcon} alt="Alive Fish" width={30} height={30} className="invert scale-x-[-1]"/>
            </div> }
            { finished && !isCorrect && <div className="text-xl w-10 flex items-center justify-center">
                <Image src={DeadFishIcon} alt="Alive Fish" width={30} height={30} className="invert scale-x-[-1]"/>
            </div> }
            { !finished && !isCorrect && <div className="text-xl w-10 flex items-center justify-center">
                <Image src={RodIcon} alt="Alive Fish" width={30} height={30} className="invert scale-x-[-1] "/>
            </div> }
        </Link>
    )
};
