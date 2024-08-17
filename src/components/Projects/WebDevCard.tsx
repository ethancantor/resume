"use client";
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion';
import { useWidth } from '@/hooks/use-width';
import Link from 'next/link';


interface Props {
    fromRight?: boolean;
    imageRight?: boolean;
    image: StaticImageData | string;
    children: ReactNode;
    link?: string;
}

export function WebDevCard({fromRight, imageRight, image, children, link}: Props) {

    if(!fromRight) fromRight = false;
    if(!imageRight) imageRight = false;

    const width = useWidth();
    const [boxX, setBoxX] = useState(fromRight ? width * 2 : -(width * 2));
    const slideBoxRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: slideBoxRef,
        offset: ["start end", "end end"]
    });

    const springY = useSpring(scrollYProgress, { bounce: 0 });

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

    const isMobile = useWidth() < 500;

    if(isMobile) {
        return (
            <motion.div className='max-h-screen flex justify-center overflow-hidden w-[calc(100vw-10px)] border-primary border-2 rounded-xl' style={{x: boxX }} ref={slideBoxRef} >
                <div className="grid grid-cols-1 items-center bg-raisin-dark border border-raisin-light rounded-lg shadow-2xl">
                    <div className={'rounded-xl h-full col-span-2 overflow-clip ' + (imageRight ? 'order-first' : 'order-last')} >
                        <Link href={link || ''} className={(link ? 'cursor-pointer' : 'pointer-events-none')}>
                            <Image className="object-cover h-full" src={image} alt="Card image" /> 
                        </Link>
                    </div>
                    {children}
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div className='max-h-screen flex justify-center overflow-hidden border-primary border-2 rounded-xl' style={{x: boxX }} ref={slideBoxRef}>
            <div className="grid grid-cols-3 items-center bg-raisin-dark border border-raisin-light rounded-lg shadow-2xl h-[55vh]">
                <div className={'rounded-xl h-full col-span-2 overflow-clip ' + (imageRight ? 'order-first' : 'order-last')} >
                    <Link href={link || ''} className={(link ? 'cursor-pointer' : 'pointer-events-none')}>
                        <Image className="object-cover h-full" src={image} alt="Card image" /> 
                    </Link>
                </div>
                {children}
            </div>
        </motion.div>
    )
}
