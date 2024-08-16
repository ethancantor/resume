import React from 'react'
import { TITLE_FONT } from '@/fonts'
import Avatar from '@/pictures/ethanface.png';
import { ExperienceCard } from './ExperienceCard';


export const ExperiencePage = () => {

    return ( 
        <div className='h-fit w-screen flex flex-col justify-center items-center p-32 space-y-10 top-0'>
            <div className={'text-6xl ' + TITLE_FONT.className}>Experience</div>
            <ExperienceCard name='MSA' image={Avatar}>askdjhfhjs
                ksjdhfkjsdf
            </ExperienceCard>
        </div>
    )
}

