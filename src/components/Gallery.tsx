'use client';
import React, { useState } from 'react';
import SlideShowCard from './SlideShowCard';
import EEC from '@/pictures/EEC_Wallpaper.png';
import Face from '@/pictures/ethanface.png';

const cardList = [{img: EEC, text: '1'}, {img: Face, text: '2'}, {img: EEC, text: '3'}];

export default function Gallery() {

    const [currentImg, setCurrentImg] = useState(0);

    return (
        <div className="relative w-full bg-blue-300 flex flex-col items-center justify-center">
            {cardList && cardList.map((card, index) => {
                return (
                    <div className={(index === currentImg ? '' : 'hidden') + " duration-700 ease-in-out"} key={'card: ' + index}>
                        <SlideShowCard img={card.img} text={card.text} href='https://eternalesports.club'/>
                    </div>
                    )
            })}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={() => setCurrentImg(currentImg === 0 ? 0 : currentImg - 1)}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={() => setCurrentImg(currentImg === cardList.length - 1 ? cardList.length - 1 : currentImg + 1)}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}
