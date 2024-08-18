'use client';
import { StaticImageData } from 'next/image';
import React, { ReactNode, useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    children?: ReactNode;
    image: string | StaticImageData;
    link?: string;
}

export const ExperienceCard = ({image, link, children}: Props) => {

    const boxRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: boxRef,
        offset: ["start end", "end end"]
    });

    return (
        <motion.div className='max-h-screen flex justify-center overflow-hidden  rounded-lg ' ref={boxRef} 
            style={{scale: scrollYProgress }} >
            <div className="flex flex-col items-center bg-raisin-dark border-primary border-2  rounded-lg shadow-2xl text-center w-[90%]">
                <div className={'h-full col-span-2 overflow-clip p-2'} >
                    <Link href={link || ''} className={(link ? 'cursor-pointer' : 'pointer-events-none')}>
                        <Image className="object-cover h-full rounded-xl " src={image} alt="Card image" /> 
                    </Link>
                </div>
                {children}
            </div>
        </motion.div>
    )
};

