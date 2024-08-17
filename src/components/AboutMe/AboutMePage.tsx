import React from 'react'
import { TITLE_FONT } from '@/fonts'
import Image from 'next/image'
import Avatar from '@/pictures/ethanface.png';

import '../../app/globals.css';
import Link from 'next/link';

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-row space-x-5 justify-center items-center p-32'>
            <Link href='/music'>
                <Image className="w-52 h-52 mb-3 rounded-full drop-shadow-md border-4 border-primary" src={Avatar} alt="Ethan image" width='64' height='64' unoptimized/>        
            </Link>
           <div>
                <div className={'text-6xl ' + TITLE_FONT.className}>Ethan Cantor</div>
                <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
            </div>
            <svg className="hidden absolute w-0 h-0" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />    
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>
        </div>
        
    )
}

