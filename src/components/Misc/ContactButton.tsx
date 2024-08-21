import { TITLE_FONT } from '@/fonts';
import { useScrollTo } from '@/hooks/use-scroll';
import Link from 'next/link';
import React from 'react'

export const ContactButton = () => {

    const scrollToSection = useScrollTo();

    return (
        <div className='w-screen flex justify-center flex-row space-x-10'>
            <Link href='mailto:ethan.cantor99@gmail.com'>
                <div className={`max-w-fit max-h-fit rounded-lg bg-gradient-to-r from-primary to-blue-400 to-90% text-white text-4xl p-4 drop-shadow-lg font-bold cursor-pointer mb-56 mt-5 ${TITLE_FONT.className}`}>
                    Get in Touch
                </div>
            </Link>
        </div>
    )
};

