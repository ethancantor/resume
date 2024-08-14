import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    icon: string | StaticImageData;
}

export const Icon = ({icon}: Props) => {
    return (
        <div className='flex justify-center items-center bg-raisin-light rounded-full p-2 overflow-clip border-2 border-primary select-none drop-shadow-md'>
            <Image src={icon} alt='icon' width={50} height={50} className=''/>
        </div>
    )
};

