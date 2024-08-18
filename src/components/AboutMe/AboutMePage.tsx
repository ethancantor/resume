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
            <div className='flex flex-row flex-shrink-0 flex-wrap space-x-5 justify-center items-center p-32'>
                <Image className="mb-3 rounded-full drop-shadow-md border-4 border-primary object-fill aspect-square max-h-56 max-w-56" src={Avatar} alt="Ethan image" unoptimized/>        
                <div>
                    <div className={`text-6xl ${TITLE_FONT.className}`}>Ethan Cantor</div>
                    <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
                    <div className='flex flex-row flex-wrap space-x-5'>
                        <Link href='/files/Ethan_Cantor_Resume.pdf' className='text-blue-400'>Resume</Link>
                        <Link href='/music' className='text-blue-400'>Music Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

