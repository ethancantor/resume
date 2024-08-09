import { Kode_Mono } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import EEC from '@/pictures/EEC_Wallpaper.png';

const FONT = Kode_Mono({subsets: ['latin'], weight: '400'});

export default function SlideShowCard() {
    return (
        <div className='bg-raisin rounded-2xl w-fit p-5 flex flex-row h-62 justify-center items-center'>
            <Image src={EEC} alt='Image' width={500} height={500} className='object-none object-left-bottom'/>
            <span className={FONT.className + ' text-4xl text-primary text-center absolute'}>Eternal Esports Club</span>
        </div>
    )
}
