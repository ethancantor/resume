import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    onClick?: Function;
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const HambugerButton = ({onClick, className, width, height}: Props) => {
    if(!onClick) onClick = () => console.log('click');
    if(!width) width = 50;
    if(!height) height = 50;

    const [clicked, setClicked] = useState<boolean>(false);

    const translateYLength = 6;
    const translateXLength = 0;

    const topVar = {
        ham: { rotate: 0, translateX: 0, translateY: 0, transition: { ease: 'easeInOut', duration: 0.3, }},
        ex: { rotate: 45, translateX: translateXLength, translateY: translateYLength, transition: { ease: 'easeInOut', duration: 0.3, }}
    }

    const middleVar = {
        ham: { rotate: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.3, }},
        ex: { rotate: 90, opacity: 0, transition: { ease: 'easeInOut', duration: 0.3, }}
    }

    const bottomVar = {
        ham: { rotate: 0, translateX: 0, translateY: 0, transition: { ease: 'easeInOut', duration: 0.3, }},
        ex: { rotate: -45, translateX: translateXLength, translateY: -translateYLength, transition: { ease: 'easeInOut', duration: 0.3, }}
    }

    return (
        <div onClick={() => {setClicked(!clicked); onClick()}} className={`${className} mt-auto mb-auto me-5 invert`} >
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                    animate={clicked? 'ex' : 'ham'} variants={bottomVar} initial={bottomVar.ham}
                />
                <motion.path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                    animate={clicked? 'ex' : 'ham'} variants={middleVar} initial={middleVar.ham}
                />
                <motion.path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                    animate={clicked? 'ex' : 'ham'} variants={topVar} initial={topVar.ham}
                />
            </svg>
        </div>
    )
};

