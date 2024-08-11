'use client';
import React from "react";
import MusicBackground from "@/components/MusicBackground";
import WebDevCard from "@/components/WebDevCard";
import { motion } from 'framer-motion';
import { TITLE_FONT } from "@/fonts";

const Home = () => {
	return (
        <div className='flex flex-col items-center justify-center'>
			<MusicBackground />
            <div className='h-screen w-screen flex flex-col justify-center items-center p-32 space-y-10'/>
            <div className='w-screen flex flex-col justify-center items-center p-32 space-y-10'>
                <motion.div className={'text-6xl ' + TITLE_FONT.className}
					style={{}}
				>Projects</motion.div>
				<WebDevCard fromRight />
				<WebDevCard imageRight />
			</div>
		</div>
	);
};

export default Home;
