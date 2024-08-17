"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { Spotify } from 'react-spotify-embed'

interface Props { link: string; name: string; art: string | StaticImageData, date: string}

export default function AlbumHover({link, name, art, date}: Props) {

    return (
        <div className='bg-raisin-dark rounded-lg p-4 relative'>
            <div className='w-[300px] h-[380px]'>
                <div className='transition-opacity ease-in duration-150 opacity-0 hover:opacity-100 absolute'>
                    <Spotify link={link} width={'100%'} />
                </div>
                <div className='transition-opacity ease-in duration-150 opacity-100 hover:opacity-0 rounded-xl overflow-clip'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={art} alt={name} />
                        <div className='text-sm text-white mt-4'>{name}</div>
                        <div className='text-sm text-[#888888]'>{date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
