'use client';
import React from "react";
import MusicBackground from "@/components/MusicBackground";
import WebDevCard from "@/components/WebDevCard";
import { motion } from 'framer-motion';
import { TITLE_FONT } from "@/fonts";
import EternalSS from '@/pictures/sites/eternalSS.png';
import EthanSS from '@/pictures/sites/ethanhenSS.png';
import { CardContent } from "@/components/cardContent";
import { AboutMePage } from "@/components/AboutMePage";

const Home = () => {
	return (
        <div className='flex flex-col items-center justify-center'>
			{/* <AboutMePage /> */}
            <div className='w-screen flex flex-col justify-center items-center p-32 space-y-10'>
                <motion.div className={'text-6xl ' + TITLE_FONT.className}
					style={{}}
				>Projects</motion.div>
				<WebDevCard image={EternalSS} fromRight link="https://eternalesports.club">
					<CardContent title="Eternal Esports Club"
						bullets={[
							'Developed full stack system for the top-ranked Apex Legends Esports Club',
							'Created a robust platform that reaches thousands of players and exponentially increased profits',
							'Used Python, MySQL, and Next.js/Express.js to analyze, store, and display player and match information',
							'Developed custom REST API to allow community developers access to data'
						]}
					/>
				</WebDevCard>
				<WebDevCard image={EthanSS} imageRight link="https://ethanhen.com">
					<CardContent title='ethanhen.com (WIP)'
						bullets={[
							'Using Next.js, designed a live updating gallery based from file structure of a server folder',
							'Constructed a robust file system to view and download files from a protected server folder',
							'Created role based logins with NextAuth to give admins permissions to upload files'
						]}/>
				</WebDevCard>
			</div>
		</div>
	);
};

export default Home;
