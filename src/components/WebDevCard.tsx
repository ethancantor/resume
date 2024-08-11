"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import EternalSS from '@/pictures/sites/eternalSS.png';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useWidth } from '@/hooks/use-width';
import { TITLE_FONT } from '@/fonts';


interface Props {
    fromRight?: boolean;
    imageRight?: boolean;
}

export default function WebDevCard({fromRight, imageRight}: Props) {

    if(!fromRight) fromRight = false;
    if(!imageRight) imageRight = false;

    const width = useWidth();
    const [boxX, setBoxX] = useState(fromRight ? width : -width);
    const slideBoxRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: slideBoxRef,
        offset: ["start end", "end end"]
    });

    const springY = useSpring(scrollYProgress, { bounce: 0});

    const OFFSET = 0.25;

    useEffect(() => {
        springY.on('change', (latest) => {
            if(fromRight){
                let xpos = width - width * (latest + OFFSET);
                if(xpos < 0) xpos = 0;
                setBoxX(xpos);
            }
            else {
                let xpos = -width + width * (latest + OFFSET);
                if(xpos > 0) xpos = 0;
                setBoxX(xpos);
            }
        });
    });

    const cascadeList = (listNum: number) => {
        return {
            hidden: { opacity: 0},
            show: {
                opacity: 1,
                transition: {
                    delay: 0.25 * listNum,
                    duration: 0.4
                }
            }
        }
    }

    return (
        <motion.div className='max-h-screen flex justify-center overflow-hidden' style={{x: boxX }} ref={slideBoxRef}>
            <div className="grid grid-cols-3 items-center bg-raisin-dark border border-raisin-light rounded-lg shadow-2xl h-[55vh]">
                {
                    imageRight ? 
                    <div className='rounded-xl h-full col-span-2 overflow-clip' >
                        <Image className="object-cover h-full " src={EternalSS} alt="Eternal Esports Club" /> 
                    </div> : ''
                }
                <div className="flex flex-col justify-between p-4 leading-normal ms-4">
                    <h5 className={"mb-2 text-3xl font-bold tracking-tight text-white " + TITLE_FONT.className}>Eternal Esports Club</h5>
                    <div className="mb-3 text-gray-400">
                        <ul className='list-disc p-4'>
                            <motion.li
                                variants={cascadeList(0)}
                                initial={'hidden'}
                                whileInView={'show'}
                            >Developed full stack system for the top-ranked Apex Legends Esports Club</motion.li>
                            <motion.li
                                variants={cascadeList(1)}
                                initial={'hidden'}
                                whileInView={'show'}
                            >Created a robust platform that reaches thousands of players and exponentially increased profits</motion.li>
                            <motion.li
                                variants={cascadeList(2)}
                                initial={'hidden'}
                                whileInView={'show'}
                            >Used Python, MySQL, and Next.js/Express.js to analyze, store, and display player and match information</motion.li>
                            <motion.li
                                variants={cascadeList(3)}
                                initial={'hidden'}
                                whileInView={'show'}
                            >Developed custom REST API to allow community developers access to data</motion.li>
                        </ul>
                    </div>
                </div>
                {
                    !imageRight ? 
                    <div className='rounded-xl h-full col-span-2 overflow-clip' >
                        <Image className="object-cover h-full " src={EternalSS} alt="Eternal Esports Club" /> 
                    </div> : ''
                }
            </div>
        </motion.div>
    )
}
