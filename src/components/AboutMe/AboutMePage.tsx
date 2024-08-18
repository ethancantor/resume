import React from 'react'
import { TITLE_FONT } from '@/fonts'
import Image from 'next/image'
import Avatar from '@/pictures/ethanface.png';
import '../../app/globals.css';
import Link from 'next/link';
import { BottomArrow } from '../Misc/BottomArrow';

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-col flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
            <div className='flex flex-row flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
                <Image className="mb-3 rounded-full drop-shadow-md border-4 border-primary object-fill aspect-square max-h-56 max-w-56" src={Avatar} alt="Ethan image" unoptimized/>        
                <div className='max-w-[75%] mx-auto'>
                    <div className={`text-6xl ${TITLE_FONT.className}`}>Ethan Cantor</div>
                    <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
                    <div className='flex flex-row flex-wrap space-x-5 text-blue-400 underline'>
                        <Link href='/files/Ethan_Cantor_Resume.pdf'>Resume</Link>
                        <Link href='/music'>Music Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

