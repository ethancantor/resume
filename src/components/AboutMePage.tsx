import React from 'react'
import MusicBackground from './MusicBackground'
import { TITLE_FONT } from '@/fonts'

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center p-32 space-y-10 relative'>
            <div className='absolute'>
                <div className={'text-6xl ' + TITLE_FONT.className}>I am Ethan Cantor</div>
                <div className='text-xl'>A full stack engineer out of Philadelphia</div>
            </div>
        </div>
    )
}

