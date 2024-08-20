import React from 'react'
import { TITLE_FONT } from '@/fonts'
import { WebDevCard } from './WebDevCard';
import { CardContent } from '../Misc/CardContent';
import EternalSS from '@/pictures/sites/eternalSS.png';
import PWAVSS from '@/pictures/sites/PWAV.png';
import { MaxIcon, NextIcon, MySQLIcon, NodeIcon, PythonIcon, ReactIcon, NextAuthIcon } from '@/pictures/logos/logos.index';
import Link from 'next/link';

export const ProjectsPage = () => {

    return (
        <div className='h-fit w-screen flex flex-col justify-center items-center p-32 space-y-10 top-0' id='projects-section'>
            <div className={'text-6xl ' + TITLE_FONT.className}>Projects</div>
            <WebDevCard image={EternalSS} fromRight link="https://eternalesports.club">
                <CardContent title="Eternal Esports Club"
                    bullets={[
                        'Developed full stack system for the top-ranked Apex Legends Esports Club',
                        'Created a robust platform that reaches thousands of players and exponentially increased profits',
                        'Used Python, MySQL, and Next.js/Express.js to analyze, store, and display player and match information',
                        'Developed custom REST API to allow community developers access to data'
                    ]}
                    icons={[{icon: NextIcon, name: 'Next.js'}, {icon: NextAuthIcon, name: 'NextAuth'}, {icon: ReactIcon, name: 'React.js'}, 
                        {icon: NodeIcon, name: 'Node.js'}, {icon: MySQLIcon, name: 'MySQL'}, {icon: PythonIcon, name: 'Python'}, ]}
                />
            </WebDevCard>
            {/* <WebDevCard image={EthanSS} imageRight link="https://ethanhen.com">
                <CardContent title='ethanhen.com (WIP)'
                    bullets={[
                        'Using Next.js, designed a live updating gallery based from file structure of a server folder',
                        'Constructed a robust file system to view and download files from a protected server folder',
                        'Created role based logins with NextAuth to give admins permissions to upload files'
                    ]}
                    icons={[{icon: NextIcon, name: 'Next.js'}, {icon: NextAuthIcon, name: 'NextAuth'}, {icon: ReactIcon, name: 'React.js'}, ]}    
                />
            </WebDevCard> */}
            <WebDevCard image={PWAVSS} imageRight link='https://www.youtube.com/watch?v=cuurkWtiKXk&list=PLDcsoSxCp1E8DPUO6vy1JyYG8HSCSF2qy'>
                <CardContent title='Particle World Audio Visualizer'
                bullets={[
                    'Created a physics based audio visualizer for live performance using Max',
                    'Beta tested software with a focus group',
                    'Using feedback from beta test to modify and create documentation',
                    <Link href='/files/Capstone.pdf' key='capstone presentation' className='text-blue-400 underline'>
                        Capstone Project Presentation
                    </Link>,
                    <Link href='/files/pwav_README.pdf' key='capstone documentation' className='text-blue-400 underline'>
                        PWAV Documentation
                    </Link>
                ]} 
                icons={[{icon: MaxIcon, name: 'MaxMSP'}]}
                />
            </WebDevCard>
        </div>
    )
}

