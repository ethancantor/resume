import React from 'react'
import MusicBackground from './MusicBackground'
interface Props {}

export const AboutMePage = (props: Props) => {
    const {} = props

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center p-32 space-y-10 outline outline-2'>
			<MusicBackground />
        </div>
    )
}

