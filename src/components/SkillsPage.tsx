'use client';
import React, { useRef, useState } from 'react'
import { TITLE_FONT } from '@/fonts';
import { AboutMeIcon } from './AboutMeIcon';
import * as Icons from '@/pictures/logos/logos.index';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SkillsPage = () => {

    const [selected, setSelected] = useState(-1);

    const skills = [
        <AboutMeIcon icon={Icons.NextIcon} name='NextIcon' size={100}  />,
        <AboutMeIcon icon={Icons.ReactIcon} name='React.js' size={100}  />,
        <AboutMeIcon icon={Icons.NodeIcon} name='Node.js' size={100}  />,
        <AboutMeIcon icon={Icons.JavaScriptIcon} name='JavaScript' size={100}  />,
        <AboutMeIcon icon={Icons.TypeScriptIcon} name='TypeScript' size={100}  />,
        <AboutMeIcon icon={Icons.TailwindIcon} name='TailwindCSS' size={100}  />,
        <AboutMeIcon icon={Icons.GitHubIcon} name='GitHub' size={100} />,
        <AboutMeIcon icon={Icons.PythonIcon} name='Python' size={100}   />,
        <AboutMeIcon icon={Icons.MySQLIcon} name='MySQL' size={100}  />,
        <AboutMeIcon icon={Icons.JavaIcon} name='Java' size={100}  />,
        <AboutMeIcon icon={Icons.CIcon} name='C' size={100}  />,
        <AboutMeIcon icon={Icons.CPlusIcon} name='C++' size={100} />,
    ]

    const radius = 300;
    const points = skills.length / 2;
    const duration = 0.3;
    const placeOffset = 0;
    
    const divRef = useRef(null);
    const scroll = useScroll({target: divRef, 
        offset: ["start end", "start start"] 
    }); 
    
    return (
        <div className='h-screen flex gap-1 items-center justify-center' ref={divRef}>
            {skills && skills.map((skill, index) => {
                const transX = Math.round(Math.sin((index + placeOffset) * Math.PI / (points)) * radius);
                const transY = Math.round(Math.cos((index + placeOffset) * Math.PI / (points)) * radius);
                console.log(transX, transY, index);
                const variants = {
                    start: { x: 0, y: 0, },
                    end: { x: transX, y: transY, transition: { delay: duration / 2 * index, duration, ease: 'easeOut' }}
                }

                const transXanim = useTransform(scroll.scrollYProgress, [0, 1], [0, transX]);
                const transYanim = useTransform(scroll.scrollYProgress, [0, 1], [0, transY]);

                return (
                    <motion.div className='absolute' key={index} onHoverStart={() => setSelected(index)} onHoverEnd={() => setSelected(-1)}
                        // initial={'start'} 
                        // variants={variants}
                        // whileInView={'end'}
                        style={{x: transXanim, y: transYanim}}
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

