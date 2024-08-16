import React from 'react'
import { TITLE_FONT } from '@/fonts'
import WebDevCard from './WebDevCard'
import { CardContent } from './CardContent'
import EternalSS from '@/pictures/sites/eternalSS.png';
import EthanSS from '@/pictures/sites/ethanhenSS.png';
import NextIcon from '@/pictures/logos/next-js.svg';
import MySQLIcon from '@/pictures/logos/mysql-2.svg';
import NodeIcon from '@/pictures/logos/nodejs-icon.svg';
import PythonIcon from '@/pictures/logos/python-5.svg';
import ReactIcon from '@/pictures/logos/react-2.svg';
import NextAuthIcon from '@/pictures/logos/next-auth.svg';

export const ProjectsPage = () => {

    return (
            <div className='h-fit w-screen flex flex-col justify-center items-center p-32 space-y-10 top-0'>
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
                <WebDevCard image={EthanSS} imageRight link="https://ethanhen.com">
                    <CardContent title='ethanhen.com (WIP)'
                        bullets={[
                            'Using Next.js, designed a live updating gallery based from file structure of a server folder',
                            'Constructed a robust file system to view and download files from a protected server folder',
                            'Created role based logins with NextAuth to give admins permissions to upload files'
                        ]}
                        icons={[{icon: NextIcon, name: 'Next.js'}, {icon: NextAuthIcon, name: 'NextAuth'}, {icon: ReactIcon, name: 'React.js'}, ]}    
                    />
                </WebDevCard>
            </div>
        // </div>
    )
}

