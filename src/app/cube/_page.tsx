import { readFileSync } from 'fs';
import Image from 'next/image';
import React, { Suspense } from 'react'
import { Card } from './Card';

export default async function CubePage(){

    const names = readFileSync('./public/cube/card_names.txt', 'utf-8');
    const card_names = names.toString().split('\n');

    return (
        <div className='grid grid-cols-7 gap-2'>
            { card_names.slice(0, 1).map((card: string, index: number) => {
                return <Suspense key={index} fallback={<div>Loading...</div>}>
                    <Card key={index} name={card} />
                </Suspense>
            })}
        </div>
    )
};


// async function Card({ name }: { name: string}) {
//     const fetched_card = await fetch('https://api.scryfall.com/cards/named?exact=' + name)
//     const { image_uris } = await fetched_card.json()

//     if(!image_uris) return <></>
//     return <Image src={image_uris?.border_crop} alt="Card" width={300} height={300} className="m-auto"/>
// }