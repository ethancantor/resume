import React, { ReactNode } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface Props {
    skill: ReactNode;
    index: number;
    numSkills: number;
    radius: number;
    placeOffset: number;
    scrollYProgress: MotionValue<number>;
    scrollY: number;
}

export const SkillIcon = ({skill, index, numSkills, radius, placeOffset, scrollYProgress, scrollY}: Props) => {
    const calcTranslates = (index: number) => {
        const angle = (2 * Math.PI) / (numSkills) * (index + (placeOffset * scrollY));
        const transX = Math.round(Math.sin(angle) * radius);
        const transY = Math.round(Math.cos(angle) * radius);
        return [transX, transY];
    }
    const [transX, transY] = calcTranslates(index);
    const transXanim = useTransform(scrollYProgress, [0, 1], [0, transX], {});
    const transYanim = useTransform(scrollYProgress, [0, 1], [0, transY], {});

    return (
        <motion.div className='absolute' key={index}
            // initial={'start'} 
            // variants={variants}
            // whileInView={'end'}
            style={{x: transXanim, y: transYanim, scale: scrollYProgress}}
        >{skill}</motion.div>
    )
};

