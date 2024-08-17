import React from 'react'
import { TITLE_FONT } from '@/fonts'
import { ExperienceCard } from './ExperienceCard';
import { CardContent } from '../Misc/CardContent';
import * as Icons from '@/pictures/logos/logos.index'


export const ExperiencePage = () => {

    return ( 
        <div className='h-fit w-screen flex flex-col justify-center items-center p-32 space-y-10 top-0 border-primary'>
            <div className={'text-6xl ' + TITLE_FONT.className}>Experience</div>
            <ExperienceCard image={Icons.MSALogo}>
                <CardContent 
                    iconsLeft
                    title='Software Engineer Co-op'
                    bullets={[
                        'Created safety equipment in the Fixed Gas Detection Department for gauging dangerous gas levels',
                        'Updated old C libraries to work with new and improved chips'
                    ]}
                    icons={[
                        { icon: Icons.CIcon, name: 'C' }, 
                        { icon: Icons.CPlusIcon, name: 'C++' },
                        { icon: Icons.GitHubIcon, name: 'GitHub' },
                    ]}
                />
            </ExperienceCard>
            <ExperienceCard image={Icons.NYBCLogo}>
                <CardContent 
                    iconsLeft
                    title='Freelance Web Developer'
                    bullets={[
                        'Designed and developed an online intervention platform for Project Achieve’s HIV research program',
                        'Created an interactive and informative website to allow diverse populations to participate in and gain information about HIV testing',

                    ]}
                    icons={[
                        { icon: Icons.HTMLIcon, name: 'HTML' }, 
                        { icon: Icons.CSSIcon, name: 'CSS' },
                    ]}
                />
            </ExperienceCard>
        </div>
    )
}

