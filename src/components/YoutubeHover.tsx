"use client";

import { useWidth } from "@/hooks/use-width";

interface Props { link: string; name: string; date: string}

export default function YoutubeHover({link, name, date}: Props) {

    const isMobile = useWidth() < 500;

    return (
        <div className={`bg-raisin-dark rounded-lg p-4 relative flex flex-col justify-center items-center ${isMobile ? 'w-[100%]' : 'w-[33%] h-full'}`}>
            <iframe
                width={250}
                height={'100%'}
                src={link} 
                title={name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
            <div className='text-sm text-white mt-4'>{name}</div>
            <div className='text-sm text-[#888888]'>{date}</div>

        </div>
    )
}
