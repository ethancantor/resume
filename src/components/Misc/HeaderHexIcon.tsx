import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    icon: string | StaticImageData;
    name?: string;
    onClick?: Function;
    isMobile?: boolean
}

export const HeaderHexIcon = ({icon, name, onClick, isMobile}: Props) => {

    if(!onClick) onClick = () => console.log('click!');

    return (
        <div className={`flex justify-center items-center overflow-clip select-none drop-shadow-md group`} onClick={() => onClick()}>
            <svg className=' fill-primary z-10' viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" 
                style={{width: isMobile? '3rem': '4rem', height: isMobile? '3rem': '4rem'}}>
                <path stroke='#212227' strokeWidth='2%' d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L 51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657 3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297 14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063 41.6992 7.5860 42.9414 Z M 9.7891 39.6601 C 8.4532 38.9101 8.0079 38.1836 8.0079 36.9179 L 8.0079 18.9648 C 8.0079 17.7930 8.4766 17.1133 9.6485 16.4336 L 25.3985 7.4101 C 27.1797 6.4023 28.7735 6.3554 30.6016 7.4101 L 46.3516 16.4336 C 47.5237 17.1133 47.9922 17.7930 47.9922 18.9648 L 47.9922 36.9179 C 47.9922 38.1836 47.5468 38.9101 46.2110 39.6601 L 30.6016 48.5430 C 28.7266 49.5976 27.2032 49.5742 25.3985 48.5430 Z" />
            </svg>
            <Image src={icon} alt='icon' className={`absolute flex-shrink`} height={isMobile ? 25 : 40 } width={isMobile ? 25 : 40}/>
            <span className={`text-sm absolute bottom-0 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}>{name}</span>
        </div>
    )
};

