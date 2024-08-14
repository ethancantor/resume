import { StaticImageData } from 'next/image';
import React from 'react'
import { Icon } from './Icon';

interface Props {
    icon: string | StaticImageData;
    name: string;
}

export const AboutMeIcon = ({icon, name}: Props) => {
    return (
        <div className='grid grid-cols-1 justify-center items-center space-y-2 text-gray-300 text-sm max-h-16 max-w-16'>
            <Icon icon={icon} width={16} height={16}/>
            {name}
        </div>
    )
};

