import AlbumHover from '@/components/Music/AlbumHover';
import React from 'react';
import Balance from '@/pictures/albums/balanceart.jpg';
import Clouds from '@/pictures/albums/cloudsart.jpg';
import DTFB from '@/pictures/albums/decidingtofeelbetterart.jpg';
import Dystopia from '@/pictures/albums/dystopiaart.jpg';
import IL from '@/pictures/albums/imaginarylabyrinthart.jpg';
import MH from '@/pictures/albums/movinghomeart.jpg';
import MusicBackground from '@/components/Music/MusicBackground';
import YoutubeHover from '@/components/Music/YoutubeHover';
import { TITLE_FONT } from '@/fonts';


export default function MusicGallery() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <MusicBackground />
            <div className='min-h-screen w-screen flex flex-col justify-center items-center p-32 '>
                <div className={'text-6xl mt-5 ' + TITLE_FONT.className}>Published Music</div>
                <div className='flex flex-wrap gap-5 mt-5 items-center justify-center'>
                    <AlbumHover link='https://open.spotify.com/album/4izlw6GpcopeHemIbyrPbX?si=T3pqJEoyQomcjuUVTmOoSw' name='Balance' art={Balance} date={'October 10, 2023'}/>
                    <AlbumHover link='https://open.spotify.com/album/2TzPdiNepQo37w4vdxGBWd?si=ed0f1b3a87224c2d' name='Deciding to Feel Better' art={DTFB} date={'May 15, 2022'}/>
                    <AlbumHover link='https://open.spotify.com/album/6kciOq0P0nAsRSVeIM5FJ7?si=NkIDCUWuSPma02E4gQh9DA' name='Dystopia' art={Dystopia} date={'May 5, 2021'}/>
                    <AlbumHover link='https://open.spotify.com/album/1JkTeKdNpWkyNblRmtTJYD?si=zqY537AgRuqaNCt3-bVNZQ' name='Imaginary Labyrinth' art={IL} date={'August 10, 2020'}/>
                    <AlbumHover link='https://open.spotify.com/album/0y6DHN1CqJ8rtn2yrPfC6b?si=JfGSrUmETTql4NCGLPFW8w' name='Clouds' art={Clouds} date={'March 12, 2020'}/>
                    <AlbumHover link='https://open.spotify.com/album/7N3EtSpqOvf86drzAyPyVI?si=8LkAp2HcS4WelVgHeeMkOQ' name='Moving Home' art={MH} date={'June 9, 2019'}/>
                </div>
            </div>
            <div className='min-h-screen w-screen flex flex-col justify-center items-center p-32'>
                <div className={'text-6xl mt-5 ' + TITLE_FONT.className}>Particle World Audio Visualizer</div>
                <div className='flex flex-wrap gap-5 mt-5 items-center justify-center'>
                    <YoutubeHover link={"https://www.youtube.com/embed/cuurkWtiKXk?si=In0DLi977rOsa0BR"} name='How It Ends' date='Febuary 21, 2023'/>
                    <YoutubeHover link={"https://www.youtube.com/embed/Ptw5K-fu3M8?si=RHqIVH0lfEmBaHqM"} name='Vines on the Window' date='December 13, 2022'/>
                    <YoutubeHover link={"https://www.youtube.com/embed/Wltj4XmKV3w?si=qEMUJ48trTTXEewy"} name='Balance' date='December 22, 2022'/>
                </div>
            </div>
        </div>
    )
}
