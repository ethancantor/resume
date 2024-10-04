'use client';

import React, { useLayoutEffect, useMemo } from 'react'
import { fishMap, fishType } from '../../../../public/fish';
import Image from 'next/image';
import Autocomplete from './FishAutocomplete';

export const GuessTheFishCard = ({ fish, listOfFish, dateStr }: { fish: string, listOfFish: string[], dateStr: string }) => {

    const { image, latinName, size, location, eat } = useMemo(() => {
        console.log(fish);
        return fishMap.get(fish) as fishType;
    }, [fish]);

    const [selectNum, setSelectNum] = React.useState(1);
    const [textGuess, setGuess] = React.useState('');
    const [guessList, setGuessList] = React.useState<string[]>([]);
    const [correctGuess, setCorrectGuess] = React.useState(false);

    useLayoutEffect(() => {
        const saved = localStorage.getItem(dateStr);
        const savedObject = saved ? JSON.parse(saved) : { guesses: [], correctGuess: false };

        setGuessList(savedObject.guesses || []);
        setCorrectGuess(savedObject.guesses.includes(fish) || false);
    }, [dateStr, fish]);

    const selectPage = (num: number) => {
        if(num <= guessList.length + 1 || reveal) setSelectNum(num);
    }

    const makeGuess = () => {
        if(!guessList.includes(textGuess) && textGuess !== '' && !reveal) {
            setGuessList(prev => [...prev, textGuess]);
            setGuess('');
            setSelectNum(guessList.length + 2);
            if(textGuess.toLowerCase() === fish.toLowerCase()){
                setCorrectGuess(true);
                localStorage.setItem(dateStr, JSON.stringify({ guesses: [...guessList, textGuess], correctGuess: true }));
            } else {
                localStorage.setItem(dateStr, JSON.stringify({ guesses: [...guessList, textGuess], correctGuess: false }));
            }
        };
    }

    const reveal = useMemo(() => { 
        return guessList.length > 4 || correctGuess;
    }, [guessList, correctGuess]);

    return (
        <div className={`bg-zinc-800 ${reveal && (correctGuess ? 'outline outline-green-400 outline-2' : 'outline outline-2 outline-red-600 ')} drop-shadow-lg rounded-lg px-10 py-3 flex flex-col items-center text-lg gap-2 w-96 mb-10`}>
            <div className={`w-fit rounded-xl h-fit bg-zinc-700 flex flex-row items-center justify-center ${reveal && (correctGuess ? 'outline outline-green-400 outline-1' : 'outline outline-red-600 outline-1')}`}>
                <Image className={`h-fit rounded-lg ${selectNum < 5 && !reveal && 'brightness-0 drop-shadow-xl'} `} src={image || ''} alt="Card image" width={250} height={250} />
            </div>
            <div className={`${selectNum > 5 || reveal ? 'opacity-100 h-fit' : 'opacity-0 h-0'} text-4xl`}>{fish}</div>
            <div className={`${(reveal && !correctGuess) ? 'opacity-100 h0-fit' : 'opacity-0 h-0'} text-red-600 text-center text-base`}>Go Fish. Better Luck Next Time</div>
            <div className='w-full flex items-center justify-between gap-4'>
                <Autocomplete suggestions={listOfFish} setGuess={setGuess} guess={textGuess} makeGuess={makeGuess}/>
                <button className='bg-primary text-white px-3 py-1 rounded-lg' onClick={makeGuess} disabled={textGuess === '' || reveal} >Guess</button>
            </div>
            <div className='flex flex-col items-center'>
                {guessList.length > 0 && <div className='text-2xl'>Guesses:</div>}
                { guessList.map(g => {
                    return <div key={g} className={`text-sm ${g.toLowerCase() === fish.toLowerCase() ? 'text-green-400' : 'text-white'}`}>{g}</div>
                })}
            </div>
            <div className='flex flex-row text-base gap-1 w-full items-center justify-center h-fit' >
                <div className={`
                    ${selectNum === 1 ? 'bg-primary' : guessList.length < 1 ? 'bg-zinc-800' : 'bg-zinc-700'} 
                    rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer`}
                    onClick={() => selectPage(1)}
                >1</div>
                <div className={`
                    ${selectNum === 2 ? 'bg-primary' : guessList.length < 2 ? 'bg-zinc-800' : 'bg-zinc-700'}
                    rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer`}
                    onClick={() => selectPage(2)}
                >2</div>
                <div className={`
                    ${selectNum === 3 ? 'bg-primary' : guessList.length < 3 ? 'bg-zinc-800' : 'bg-zinc-700'}
                    rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer`}
                    onClick={() => selectPage(3)}
                >3</div>
                <div className={`
                    ${selectNum === 4 ? 'bg-primary' : guessList.length < 4 ? 'bg-zinc-800' : 'bg-zinc-700'}
                    rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer`}
                    onClick={() => selectPage(4)}
                >4</div>
                <div className={`
                    ${selectNum === 5 ? 'bg-primary' : guessList.length < 5 ? 'bg-zinc-800' : 'bg-zinc-700'}
                    rounded-lg w-8 h-10 flex justify-center items-center cursor-pointer`}
                    onClick={() => selectPage(5)}
                >5</div>
            </div>
            <div className='text-base w-64 gap-1'>
                { selectNum === 2 && 
                    <div>
                        <div className='text-3xl'>Size:</div>
                        {reveal ? size : size.replaceAll(fish, '_____')}
                    </div> 
                }
                { selectNum === 3 && 
                    <div>
                        <div className='text-3xl'>Location:</div>
                        {reveal ? location : location.replaceAll(fish, '_____')}
                    </div> 
                }
                { selectNum === 4 && 
                    <div>
                        <div className='text-3xl'>Preparation:</div>
                        {reveal ? eat : eat.replaceAll(fish, '_____')}
                    </div>  
                }
                { selectNum === 5 && 
                    <div className=''>
                        <div className='text-3xl'>Latin Name:</div>
                        {latinName}
                    </div> 
                }
            </div>
        </div>
    )
};

