'use client';
import { useEffect, useState } from 'react';
import { pathMount1, pathMount2, pathMount3, pathMount4, pathMount5 } from '../Paths/paths';
import { animated, useSpring } from 'react-spring';

export default function SecondBackground() {

    const [pathEnd1Index, setPath1EndIndex] = useState(false);
    const animationProps = useSpring({
        pathMount1: pathMount1[pathEnd1Index ? 0 : 1],
        pathMount2: pathMount2[pathEnd1Index ? 0 : 1],
        pathMount3: pathMount3[pathEnd1Index ? 0 : 1],
        pathMount4: pathMount4[pathEnd1Index ? 0 : 1],
        pathMount5: pathMount5[pathEnd1Index ? 0 : 1],
        config: {
            duration: 10000
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setPath1EndIndex(!pathEnd1Index);
        }, 10000);

        return () => clearInterval(interval);
    }, [pathEnd1Index]);


                
    return (
        <>        
            <div className='fixed w-screen bottom-0 -z-10'>                
                <svg className='' id="visual" viewBox='0 100 900 500' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <animated.path d={animationProps.pathMount1} fill="#2e3459" />
                    <animated.path d={animationProps.pathMount2} fill="#3d4080" />
                    <animated.path d={animationProps.pathMount3} fill="#544aa6" />
                </svg>
            </div>
            <div className='fixed w-screen bottom-0 z-10 pointer-events-none'>
                <svg viewBox= {"0 100 900 500"} id="visual" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <animated.path d={animationProps.pathMount4} fill="#7451cb" />
                    <animated.path d={animationProps.pathMount5} fill="#9b53ed" />
                </svg>
            </div>
        </>

    )
}
