import React from 'react'
import Avatar from '@/pictures/ethanface.png';
import Image from 'next/image';

export const HexAvatar = () => {
    return (
        <div className='bg-primary hexagon-bg'>
            <Image className="m-auto rounded-full drop-shadow-md max-h-56 max-w-56 hexagon absolute" src={Avatar} alt="Ethan image" unoptimized/>      
        </div>
    )
};

