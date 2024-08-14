import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    icon: string | StaticImageData;
    width?: number;
    height?: number;
}

export const Icon = ({icon, width, height}: Props) => {
    return (
        <div className='flex justify-center items-center bg-raisin-light rounded-full p-2 overflow-clip border-2 border-primary select-none drop-shadow-md'>
            <Image src={icon} alt='icon' width={width || 50} height={height || 50} className=''/>
        </div>
    )
};

