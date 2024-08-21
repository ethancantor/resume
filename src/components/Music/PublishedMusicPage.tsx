import React from 'react'
import AlbumHover from './AlbumHover'
import { BalanceArt, CloudsArt, DTFBArt, DystopiaArt, ImaginaryArt, MovingHomeArt } from "@/pictures/albums/albumart.index";
import { TITLE_FONT } from '@/fonts';

export const PublishedMusicPage = () => {
    return (
        <div className='min-h-screen w-screen flex flex-col justify-center items-center p-32' id='music-section'>
            <div className={'text-6xl mt-5 ' + TITLE_FONT.className}>Published Music</div>
            <div className='flex flex-wrap gap-5 mt-5 items-center justify-center'>
                <AlbumHover link='https://open.spotify.com/album/4izlw6GpcopeHemIbyrPbX?si=T3pqJEoyQomcjuUVTmOoSw' name='Balance' art={BalanceArt} date={'October 10, 2023'}/>
                <AlbumHover link='https://open.spotify.com/album/2TzPdiNepQo37w4vdxGBWd?si=ed0f1b3a87224c2d' name='Deciding to Feel Better' art={DTFBArt} date={'May 15, 2022'}/>
                <AlbumHover link='https://open.spotify.com/album/6kciOq0P0nAsRSVeIM5FJ7?si=NkIDCUWuSPma02E4gQh9DA' name='Dystopia' art={DystopiaArt} date={'May 5, 2021'}/>
                <AlbumHover link='https://open.spotify.com/album/1JkTeKdNpWkyNblRmtTJYD?si=zqY537AgRuqaNCt3-bVNZQ' name='Imaginary Labyrinth' art={ImaginaryArt} date={'August 10, 2020'}/>
                <AlbumHover link='https://open.spotify.com/album/0y6DHN1CqJ8rtn2yrPfC6b?si=JfGSrUmETTql4NCGLPFW8w' name='Clouds' art={CloudsArt} date={'March 12, 2020'}/>
                <AlbumHover link='https://open.spotify.com/album/7N3EtSpqOvf86drzAyPyVI?si=8LkAp2HcS4WelVgHeeMkOQ' name='Moving Home' art={MovingHomeArt} date={'June 9, 2019'}/>
            </div>
        </div>
    )
}
