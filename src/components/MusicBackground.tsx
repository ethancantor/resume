'use client';
import { useEffect, useState } from 'react';
import { pathEnd1, pathEnd2, pathEnd3, pathStart1, pathStart2, pathStart3 } from './paths/paths';
import { animated, useSpring } from 'react-spring';

export default function MusicBackground() {

    const [pathEnd1Index, setPath1EndIndex] = useState(false);
    const animationProps = useSpring({
        pathEnd1: pathEnd1[pathEnd1Index ? 0 : 1],
        pathEnd2: pathEnd2[pathEnd1Index ? 0 : 1],
        pathEnd3: pathEnd3[pathEnd1Index ? 0 : 1],
        pathStart1: pathStart1[pathEnd1Index ? 0 : 1],
        pathStart2: pathStart2[pathEnd1Index ? 0 : 1],
        pathStart3: pathStart3[pathEnd1Index ? 0 : 1],
        config: {
            friction: 500
        }
    })

    useEffect(() => {
        setTimeout(() => {
            setPath1EndIndex(!pathEnd1Index)
        }, 5000);
    })

    return (
        <div className='fixed -z-10 outline outline-1 min-h-[100vh] min-w-[100vw] top-0'>
            <svg className='flex-no-shrink fill-current' fill='none' viewBox='0 0 1920 1080' id="visual" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <rect x="0" y="0" width="1920" height="1080" fill="#2f3138" />
                <g transform="translate(1920, 1080)">
                    <animated.path d={animationProps.pathEnd1} fill='#2e3459' />
                    <animated.path d={animationProps.pathEnd2} fill='#684fbf' />
                    <animated.path d={animationProps.pathEnd3} fill='#9b53ed' />
                </g>
                <g transform="translate(0, 0)">
                    <animated.path d={animationProps.pathStart1} fill='#2e3459' />
                    <animated.path d={animationProps.pathStart2} fill='#684fbf' />
                    <animated.path d={animationProps.pathStart3} fill='#9b53ed' />
                </g>
            </svg>
        </div>
    )
}
