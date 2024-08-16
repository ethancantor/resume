import { StaticImageData } from 'next/image';
import React from 'react'
import { Icon } from './Icon';
import { HexIcon } from './HexIcon';

interface Props {
    icon: string | StaticImageData;
    name: string;
    className?: string;
    size?: number
}

export const AboutMeIcon = ({icon, name, className, size}: Props) => {
    return (
        <div className={`grid grid-cols-1 justify-center items-center text-gray-300 text-sm ${className}`}>
            <HexIcon icon={icon} width={ size || 30} height={ size || 30} name={name}/>
        </div>
    )
};

