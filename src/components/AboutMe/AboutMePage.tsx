import React, { useRef } from 'react'
import { TITLE_FONT } from '@/fonts'
import '../../app/globals.css';
import { HexAvatar } from './HexAvatar';
import { AboutMeHeader } from './AboutMeHeader';

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-col flex-shrink-0 flex-wrap space-x-5 justify-center items-center' id='about-me-section' >
            <div className='flex flex-row flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
                <HexAvatar />
                <div className='max-w-[75%] mx-auto'>
                    <div className={`text-6xl ${TITLE_FONT.className}`}>Ethan Cantor</div>
                    <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
                    <AboutMeHeader />
                </div>
            </div>
        </div>
    )
}

