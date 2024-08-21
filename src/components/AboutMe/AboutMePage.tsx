import React from 'react'
import { TITLE_FONT } from '@/fonts'
import Image from 'next/image'
import Avatar from '@/pictures/ethanface.png';
import '../../app/globals.css';
import Link from 'next/link';
import { HexIcon } from '../Misc/HexIcon';
import { HexAvatar } from './HexAvatar';
import { EmailIcon, ExperienceIcon, MusicIcon, ProjectsIcon, ResumeIcon, SkillsIcon } from '@/pictures/icons/icons.index';

export const AboutMePage = () => {

    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        element?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }


    return (
        <div className='h-screen w-screen flex flex-col flex-shrink-0 flex-wrap space-x-5 justify-center items-center' id='about-me-section'>
            <div className='flex flex-row flex-shrink-0 flex-wrap space-x-5 justify-center items-center'>
                <div className='bg-primary hexagon-bg'>
                    <Image className="m-auto rounded-full drop-shadow-md max-h-56 max-w-56 hexagon absolute" src={Avatar} alt="Ethan image" unoptimized/>      
                </div>
                <div className='max-w-[75%] mx-auto'>
                    <HexAvatar />
                    <div className={`text-6xl ${TITLE_FONT.className}`}>Ethan Cantor</div>
                    <div className='text-xl'>A full stack engineer out of Philadelphia, PA</div>
                    <div className='flex flex-row flex-wrap'>
                        <HexIcon icon={SkillsIcon} name='Skills' onClick={() => scrollToSection('skills-section')}/>
                        <HexIcon icon={ProjectsIcon} name='Projects' onClick={() => scrollToSection('projects-section')}/>
                        <HexIcon icon={ExperienceIcon} name='Experince' onClick={() => scrollToSection('experience-section')}/>
                        <HexIcon icon={MusicIcon} name='Music' onClick={() => scrollToSection('music-section')}/>
                        <Link href={'mailto:ethan.cantor99@gmail.com'}>
                            <HexIcon icon={EmailIcon} name='Email Me'/>
                        </Link>
                        <Link href={'/files/Ethan_Cantor_Resume.pdf'}>
                            <HexIcon icon={ResumeIcon} name='Resume'/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <svg className="hidden absolute" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg> */}
        </div>
    )
}

