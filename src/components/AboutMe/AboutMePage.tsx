import React from 'react'
import { TITLE_FONT } from '@/fonts'
import Image from 'next/image'
import Avatar from '@/pictures/ethanface.png';
import '../../app/globals.css';
import Link from 'next/link';
import { HexIcon } from '../Misc/HexIcon';
import { EmailIcon, MusicIcon, ResumeIcon } from '@/pictures/icons/icons.index';

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-col flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
            <div className='flex flex-row flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
                <Image className="relative m-auto mt-2 rounded-full border-4 border-primary drop-shadow-md max-h-56 max-w-56" src={Avatar} alt="Ethan image" unoptimized/>        
                <div className='max-w-[75%] mx-auto'>
                    <div className={`text-6xl ${TITLE_FONT.className}`}>Ethan Cantor</div>
                    <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
                    <div className='flex flex-row flex-wrap space-x-5 mt-1'>
                        <Link href={'mailto:ethan.cantor99@gmail.com'}>
                            <HexIcon icon={EmailIcon} name='Email Me'/>
                        </Link>
                        <Link href={'/files/Ethan_Cantor_Resume.pdf'}>
                            <HexIcon icon={ResumeIcon} name='Resume'/>
                        </Link>
                        <Link href='/music'>
                            <HexIcon icon={MusicIcon} name='Music' />
                        </Link>
                    </div>
                </div>
            </div>
            <svg className="hidden absolute" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                        </filter>
                    </defs>
                </svg>
        </div>
    )
}

