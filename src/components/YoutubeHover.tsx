"use client";

interface Props { link: string; name: string; date: string}

export default function YoutubeHover({link, name, date}: Props) {

    return (
        <div className='bg-raisin-dark rounded-lg p-4 relative flex flex-col justify-center items-center'>
            <iframe width="560" height="315" src={link} 
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
