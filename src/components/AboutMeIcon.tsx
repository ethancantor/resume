import { StaticImageData } from 'next/image';
import React from 'react'
import { Icon } from './Icon';
import { HexIcon } from './HexIcon';

interface Props {
    icon: string | StaticImageData;
    name: string;
    className?: string;
    width?: number;
    height?: number;
}

export const AboutMeIcon = ({icon, name, className, width, height}: Props) => {
    return (
        <div className={`grid grid-cols-1 justify-center items-center text-gray-300 text-sm ${className}`}>
            <HexIcon icon={icon} width={ width || 30} height={ height || 30} name={name}/>
        </div>
    )
};

