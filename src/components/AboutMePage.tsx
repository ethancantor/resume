import React from 'react'
import { TITLE_FONT } from '@/fonts'

export const AboutMePage = () => {

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center p-32'>
            <div>
                <div className={'text-6xl ' + TITLE_FONT.className}>Ethan Cantor</div>
                <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
            </div>
        </div>
    )
}

