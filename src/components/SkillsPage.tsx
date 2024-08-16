'use client';
import React, { useEffect, useRef, useState } from 'react'
import { TITLE_FONT } from '@/fonts';
import { AboutMeIcon } from './AboutMeIcon';
import * as Icons from '@/pictures/logos/logos.index';
import { circIn, cubicBezier, motion, useScroll, useTransform } from 'framer-motion';

export const SkillsPage = () => {

    const [scrollY, setScrollY] = useState(0);

    const skills = 
        [
            <AboutMeIcon icon={Icons.NextIcon} name='Next.js' size={100}  />,
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
    const placeOffset = 6;
    
    const divRef = useRef(null);
    const scroll = useScroll({target: divRef, 
        offset: ["start end", "start start"] 
    });

    useEffect(() => {
        console.log('USE EFFECT');
        scroll.scrollYProgress.on('change', (latest) => {
            setScrollY(latest);
        });
    }, [scroll]);

    const calcTranslates = (index: number) => {
        const angle = (2 * Math.PI) / (skills.length) * (index + (placeOffset * scrollY));
        const transX = Math.round(Math.sin(angle) * radius);
        const transY = Math.round(Math.cos(angle) * radius);
        return [transX, transY];
    }
    
    return (
        <div className='h-screen flex gap-1 items-center justify-center' ref={divRef}>
            {skills && skills.map((skill, index) => {
                const [transX, transY] = calcTranslates(index);
                const transXanim = useTransform(scroll.scrollYProgress, [0, 1], [0, transX], {});
                const transYanim = useTransform(scroll.scrollYProgress, [0, 1], [0, transY], {});
                const sizeAnim = useTransform(scroll.scrollYProgress, [0, 1], [0, 1])

                return (
                    <motion.div className='absolute' key={index}
                        // initial={'start'} 
                        // variants={variants}
                        // whileInView={'end'}
                        style={{x: transXanim, y: transYanim, scale: sizeAnim}}
                    >{skill}</motion.div>
                )
            })}
            <div className='flex justify-center items-center w-fit h-fit drop-shadow-md'>
                <svg className='w-72 h-72 fill-primary overflow-visible' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke='#212227' strokeWidth='2%' d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" />
                </svg>
                <div className={`text-6xl absolute ${TITLE_FONT.className}`}>Skills</div>
            </div>
            
        </div>
    )
};

