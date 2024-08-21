'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { TITLE_FONT } from '@/fonts';
import { AboutMeIcon } from '../AboutMe/AboutMeIcon';
import * as Icons from '@/pictures/logos/logos.index';
import { useScroll } from 'framer-motion';
import { SkillIcon } from './SkillIcon';
import { useWidth } from '@/hooks/use-width';

export const SkillsPage = () => {

    const [scrollY, setScrollY] = useState(0);

    const skills: ReactNode[] = 
        [
            <AboutMeIcon icon={Icons.NextIcon} name='Next.js' size={100} key='nextIcon'/>,
            <AboutMeIcon icon={Icons.ReactIcon} name='React.js' size={100} key='reactIcon' />,
            <AboutMeIcon icon={Icons.NodeIcon} name='Node.js' size={100} key='nodeIcon' />,
            <AboutMeIcon icon={Icons.JavaScriptIcon} name='JavaScript' size={100} key='JSIcon' />,
            <AboutMeIcon icon={Icons.TypeScriptIcon} name='TypeScript' size={100} key='TSIcon' />,
            <AboutMeIcon icon={Icons.TailwindIcon} name='TailwindCSS' size={100} key='TWCSSIcon' />,
            <AboutMeIcon icon={Icons.GitHubIcon} name='GitHub' size={100} key='GH' />,
            <AboutMeIcon icon={Icons.PythonIcon} name='Python' size={100} key='PY'  />,
            <AboutMeIcon icon={Icons.MySQLIcon} name='MySQL' size={100} key='MYSQL' />,
            <AboutMeIcon icon={Icons.JavaIcon} name='Java' size={100}  key='JAVA'/>,
            <AboutMeIcon icon={Icons.CIcon} name='C' size={100}  key='C'/>,
            <AboutMeIcon icon={Icons.CPlusIcon} name='C++' size={100} key='C++'/>,
        ]

    const width = useWidth();

    const radius = width < 500 ? width / 2 - 50 : 300;
    const placeOffset = 6;
    
    const divRef = useRef(null);
    const scroll = useScroll({target: divRef, 
        offset: ["start end", "start start"] 
    });

    useEffect(() => {
        scroll.scrollYProgress.on('change', (latest) => {
            setScrollY(latest);
        });
    }, [scroll]);

    return (
        <div className='h-screen w-screen flex flex-col gap-1 items-center justify-center' ref={divRef} id='skills-section'>
            {skills && skills.map((skill, index) => {
                return <SkillIcon skill={skill} index={index} numSkills={skills.length} radius={radius} placeOffset={placeOffset} scrollYProgress={scroll.scrollYProgress} scrollY={scrollY} key={index}/>
            })}
            <div className='flex justify-center items-center w-fit h-fit drop-shadow-md max-h-[50%] max-w-[50%]'>
                <svg className={`${width < 500 ? 'w-[100%] h-[100%]' : 'w-72 h-72'} fill-primary overflow-visible`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke='#212227' strokeWidth='2%' d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" />
                </svg>
                <div className={`${width < 500 ? 'text-5xl' : 'text-6xl'} absolute ${TITLE_FONT.className}`}>Skills</div>
            </div>
        </div>
    )
};

