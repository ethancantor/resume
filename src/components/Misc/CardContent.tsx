import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TITLE_FONT } from '@/fonts'
import { StaticImageData } from 'next/image';
import { HexIcon } from '../Misc/HexIcon';

interface Props {
    title: string;
    bullets: (string | ReactNode )[];
    icons?: ({icon: string | StaticImageData, name: string})[];
    iconsLeft?: boolean
}

export const CardContent = ({title, bullets, icons, iconsLeft}: Props) => {

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
        <div className="flex flex-col justify-between p-4 leading-normal ms-4">
            <h5 className={"mb-2 text-3xl font-bold tracking-tight text-white " + TITLE_FONT.className}>{title}</h5>
            <div className="mb-3 text-gray-400">
                <ul className='list-disc p-4'>
                    {bullets && bullets.map((bullet, index) => {
                        return (
                            <motion.li
                                key={index}
                                variants={cascadeList(index)}
                                initial={'hidden'}
                                whileInView={'show'}
                            >
                                <div className={`hover:text-gray-300 text-left`}>{bullet}</div>
                            </motion.li>
                        )
                    })}
                </ul>
                <div className={`flex flex-row flex-shrink-0 ${iconsLeft ? 'justify-left items-start' : 'justify-center items-center'}`}>
                    { icons && icons.map((icon, index) => {
                        return (
                            <HexIcon icon={icon.icon} key={index} name={icon.name} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
