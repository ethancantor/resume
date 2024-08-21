'use client';
import React, { useRef } from 'react'
import { HexIcon } from '../Misc/HexIcon'
import { SkillsIcon, ProjectsIcon, ExperienceIcon, MusicIcon, EmailIcon, ResumeIcon, BackToTopIcon } from '@/pictures/icons/icons.index'
import Link from 'next/link'
import { useScrollTo } from '@/hooks/use-scroll'
import { motion, useInView,  } from 'framer-motion'
import { useWidth } from '@/hooks/use-width';
import { HeaderHexIcon } from '../Misc/HeaderHexIcon';

export const AboutMeHeader = () => {

    const scrollToSection = useScrollTo();
    const ref = useRef(null);
    const isInView = useInView(ref);

    const width = useWidth();

    const variants = {
        hide: { x: -100, opacity: 0 },
        show: { x: 0, opacity: 100 }
    }


    return (
        <>
            <div className={`flex flex-row flex-wrap h-fit`} ref={ref}>
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
            <motion.div className={`flex ${width < 500 ? 'flex-row w-full' : 'flex-col'} flex-wrap h-fit z-20 fixed top-0 left-0  justify-center border-primary border-2 bg-raisin-dark rounded-2xl`}
                variants={variants} animate={isInView ? 'hide' : 'show'} initial={'hide'}  
            >
                <HeaderHexIcon icon={BackToTopIcon} name='Top' onClick={() => scrollToSection('about-me-section')} isMobile={width < 500}/>
                <HeaderHexIcon icon={SkillsIcon} name='Skills' onClick={() => scrollToSection('skills-section')} isMobile={width < 500}/>
                <HeaderHexIcon icon={ProjectsIcon} name='Projects' onClick={() => scrollToSection('projects-section')}  isMobile={width < 500}/>
                <HeaderHexIcon icon={ExperienceIcon} name='Experince' onClick={() => scrollToSection('experience-section')} isMobile={width < 500}/>
                <HeaderHexIcon icon={MusicIcon} name='Music' onClick={() => scrollToSection('music-section')} isMobile={width < 500}/>
                <Link href={'mailto:ethan.cantor99@gmail.com'}>
                    <HeaderHexIcon icon={EmailIcon} name='Email Me' isMobile={width < 500}/>
                </Link>
                <Link href={'/files/Ethan_Cantor_Resume.pdf'}>
                    <HeaderHexIcon icon={ResumeIcon} name='Resume' isMobile={width < 500}/>
                </Link>
            </motion.div>
        </>
    )
}
