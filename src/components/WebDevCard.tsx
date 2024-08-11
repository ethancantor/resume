"use client";
import Image from 'next/image'
import React from 'react'
import EternalSS from '@/pictures/sites/eternalSS.png';
import { Kode_Mono } from 'next/font/google';
import { motion } from 'framer-motion';

const FONT = Kode_Mono({subsets: ['latin'], weight: '600', display: 'swap'});

export default function WebDevCard() {

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
        <div className='max-h-screen flex justify-center overflow-hidden'>
            <motion.div className="grid grid-cols-3 items-center bg-raisin-dark border border-raisin-light rounded-lg shadow-2xl h-[55vh]"
                initial={{width: 0, opacity: 0}}
                whileInView={{width: '100%', opacity: 100}}
                transition={{duration: .5, ease: 'easeInOut'}}
            >
                <Image className="object-cover rounded-t-lg rounded-xl h-full col-span-2" src={EternalSS} alt="Eternal Esports Club" />
                <div className="flex flex-col justify-between p-4 leading-normal ms-4">
                    <h5 className={"mb-2 text-3xl font-bold tracking-tight text-white " + FONT.className}>Eternal Esports Club</h5>
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
            </motion.div>
        </div>
    )
}
