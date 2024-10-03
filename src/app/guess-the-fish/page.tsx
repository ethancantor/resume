import Image from 'next/image'
import React from 'react'
import { fishMap } from '../../../public/fish'
import { BODY_FONT } from '@/fonts';

export default function fish() {

    const allFish = fishMap.keys();
    const fishArray = Array.from(allFish);

    return (
        <div className={`${BODY_FONT.className} text-xl flex flex-col gap-2`}>
            {
                fishArray && fishArray.map((fishStr, index) => {
                    const fish = fishMap.get(fishStr);
                    return (
                        <div key={index}>
                            <Image src={fish?.image || ''} alt="fish" width={300} height={300} className='brightness-0'/>
                            <div className='text-5xl'>{fish?.latinName}</div>
                            <div>{fish?.location.replaceAll(fishStr, '________')}</div>
                            <div>{fish?.size.replaceAll(fishStr, '________')}</div>
                            <div>{fish?.eat.replaceAll(fishStr, '________')}</div>
                        </div>
                    )
                })
            }
            
        </div>
    )
};

