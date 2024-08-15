import React from 'react'
import { TITLE_FONT } from '@/fonts';
import { IconArrangement } from './IconArrangement';
import { AboutMeIcon } from './AboutMeIcon';
import * as Icons from '@/pictures/logos/logos.index';
import { motion } from 'framer-motion';

export const SkillsPage = () => {

    const skills = [
        <AboutMeIcon icon={Icons.NextIcon} name='NextIcon' height={100} width={100} />,
        <AboutMeIcon icon={Icons.ReactIcon} name='React.js' height={100} width={100} />,
        <AboutMeIcon icon={Icons.NodeIcon} name='Node.js' height={100} width={100} />,
        <AboutMeIcon icon={Icons.JavaScriptIcon} name='JavaScript' height={100} width={100} />,
        <AboutMeIcon icon={Icons.TypeScriptIcon} name='TypeScript' height={100} width={100} />,
        <AboutMeIcon icon={Icons.TailwindIcon} name='TailwindCSS' height={100} width={100} />,
        <AboutMeIcon icon={Icons.PythonIcon} name='Python' height={100} width={100}  />,
        <AboutMeIcon icon={Icons.MySQLIcon} name='MySQL' height={100} width={100} />,
        <AboutMeIcon icon={Icons.JavaIcon} name='Java' height={100} width={100} />,
        <AboutMeIcon icon={Icons.CIcon} name='C' height={100} width={100} />,
        <AboutMeIcon icon={Icons.CPlusIcon} name='C++' height={100} width={100} />,
    ]

    const radius = 200;
    const points = 6;
    const duration = 0.3;
    
    return (
        <div className='h-screen flex gap-1 items-center justify-center'>
            {skills && skills.map((skill, index) => {
                const transX = Math.round(Math.sin(index * Math.PI / (points / skills.length )) * radius);
                const transY = Math.round(Math.cos(index * Math.PI / (points / skills.length)) * radius);
                const variants = {
                    start: { x: 0, y: 0, },
                    end: { x: transX, y: transY, transition: { delay: duration / 2 * index, duration, ease: 'easeOut' }}
                }
                return (
                    <motion.div className='absolute' key={index}
                        variants={variants} initial={'start'} whileInView={'end'} 
                    >{skill}</motion.div>
                )
            })}
            <div className='flex justify-center items-center w-fit h-fit z-10'>
                <svg className='w-72 h-72 fill-primary' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" />
                </svg>
                <div className={`text-6xl absolute ${TITLE_FONT.className}`}>Skills</div>
            </div>
            
        </div>
    )
};

