import { StaticImageData } from 'next/image';
import React from 'react'
import { Icon } from './Icon';
import { HexIcon } from './HexIcon';

interface Props {
    icon: string | StaticImageData;
    name: string;
}

export const AboutMeIcon = ({icon, name}: Props) => {
    return (
        <div className='grid grid-cols-1 justify-center items-center text-gray-300 text-sm max-h-16 max-w-16'>
            <HexIcon icon={icon} width={30} height={30} name={name}/>
        </div>
    )
};

