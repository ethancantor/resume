import { Kode_Mono } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Link from 'next/link';

const FONT = Kode_Mono({subsets: ['latin'], weight: '400'});

interface Props {
    href?: string;
    text?: string;
    img?: string | StaticImageData;
}

export default function SlideShowCard({href, text, img} : Props) {
    return (
        <Link href={href ? href : '#'}>
            <div className='bg-raisin-dark rounded-2xl w-fit p-5 flex flex-row h-62 justify-center items-center hover:bg-raisin-light transition-colors cursor-pointer'>
                <Image src={img ? img : ''} alt='Image' width={500} className='object-none object-left-bottom shadow-xl transition-all' placeholder='blur' />
                <span className={FONT.className + ' text-4xl text-primary text-center absolute select-none'}>{text ? text : ''}</span>
            </div>
        </Link>
    )
}
