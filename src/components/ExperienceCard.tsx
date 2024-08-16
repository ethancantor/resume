import { StaticImageData } from 'next/image';
import React, { ReactNode, useRef } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { TITLE_FONT } from '@/fonts';

interface Props {
    name: string;
    children?: ReactNode;
    image: string | StaticImageData;
    link?: string;
}

export const ExperienceCard = ({name, image, link, children}: Props) => {

    const boxRef = useRef(null);

    return (
        <motion.div className='max-h-screen flex justify-center overflow-hidden w-[calc(100vw-10px)]' ref={boxRef} >
            <div className="grid grid-cols-1 items-center bg-raisin-dark border border-raisin-light rounded-lg shadow-2xl">
            <h5 className={"mb-2 text-3xl font-bold tracking-tight text-white " + TITLE_FONT.className}>{name}</h5>
                <div className={'rounded-xl h-full col-span-2 overflow-clip '} >
                    <Link href={link || ''} className={(link ? 'cursor-pointer' : 'pointer-events-none')}>
                        {/* <Image className="object-cover h-full" src={image} alt="Card image" />  */}
                    </Link>
                </div>
                {children}
            </div>
        </motion.div>
    )
};

