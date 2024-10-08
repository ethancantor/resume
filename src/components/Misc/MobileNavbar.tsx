'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import Avatar from '@/pictures/ethanface.png';
import { TITLE_FONT } from '@/fonts';
import {motion} from 'framer-motion';
import { useWidth } from '@/hooks/use-width';
import { HambugerButton } from './HambugerButton';
import * as Icons from '@/pictures/logos/logos.index';
import { AboutMeIcon } from '../AboutMe/AboutMeIcon';
import { IconArrangement } from './IconArrangement';

export const MobileNavbar = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const width = useWidth();

    const variants = {
        show: { x: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.3, }},
        hide: { x: -width, opacity: 0, transition: { ease: 'easeInOut', duration: 0.3, }},
    };

    const linkButtonSize = 8;

    return (
        <div className=''>
            <div className='bg-raisin-dark w-screen h-16 fixed object-contain flex justify-end items-end'>
                <HambugerButton onClick={() => setExpanded(!expanded)}/>
            </div>
            <motion.div className={`bg-raisin-dark z-40 flex flex-col space-y-4 items-center fixed h-screen max-w-56`}
                animate={expanded ? 'show' : 'hide'} variants={variants} initial={variants.hide}
            >
                <Link href='/' className='mt-3 flex flex-col justify-center items-center'>
                    <Image className="w-24 h-24 mb-3 rounded-full shadow-lg border-4 border-primary" src={Avatar} alt="Ethan image" width='64' height='64' unoptimized/>
                    <div className={TITLE_FONT.className + ' text-white text-lg'}>Ethan Cantor</div>
                </Link>
                <div className="flex flex-row flex-shrink-0 flex-wrap justify-center items-center">
                    <Link href="https://www.linkedin.com/in/ethan-cantor99/" className="flex items-center rounded-lg fill-white p-2">
                        <svg className={`flex-shrink-0 w-${linkButtonSize} h-${linkButtonSize}`} xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </Link>
                    <Link href="https://github.com/ethancantor" className="flex items-center rounded-lg fill-white p-2">
                        <svg className={`flex-shrink-0 w-${linkButtonSize} h-${linkButtonSize}`} xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                    <Link href="/music" className="flex items-center rounded-lg fill-white p-2">
                        <svg className={`flex-shrink-0 w-${linkButtonSize} h-${linkButtonSize}`} xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml-space="preserve">
                            <path d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097
                                v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065
                                V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839
                                S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"/>
                        </svg>
                    </Link>
                    <Link href='mailto:ethan.cantor99@gmail.com' className='flex items-center rounded-lg fill-white p-2'>
                        <svg className={`flex-shrink-0 w-${linkButtonSize} h-${linkButtonSize}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col gap-2 items-center text-center mt-3'>
                    <div className={TITLE_FONT.className + ' text-white text-lg'}>Skills</div>
                    <IconArrangement>
                        <AboutMeIcon icon={Icons.NextIcon} name='Next.js' />
                        <AboutMeIcon icon={Icons.ReactIcon} name='React.js' />
                        <AboutMeIcon icon={Icons.NodeIcon} name='Node.js' />
                        <AboutMeIcon icon={Icons.JavaScriptIcon} name='JavaScript' />
                        <AboutMeIcon icon={Icons.TypeScriptIcon} name='TypeScript' />
                        <AboutMeIcon icon={Icons.TailwindIcon} name='TailwindCSS' />
                        <AboutMeIcon icon={Icons.PythonIcon} name='Python' />
                        <AboutMeIcon icon={Icons.MySQLIcon} name='MySQL' />
                        <AboutMeIcon icon={Icons.JavaIcon} name='Java' />
                        <AboutMeIcon icon={Icons.CIcon} name='C' />
                        <AboutMeIcon icon={Icons.CPlusIcon} name='C++' />
                    </IconArrangement>
                </div>
            </motion.div>
        </div>
    )
};

