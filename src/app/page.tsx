import React from "react";
import MusicBackground from "@/components/MusicBackground";
import { Kode_Mono } from "next/font/google";
import WebDevCard from "@/components/WebDevCard";

const FONT = Kode_Mono({subsets: ['latin'], weight: '600', display: 'swap'});

const Home = () => {
	return (
        <div className='flex flex-col items-center justify-center'>
			<MusicBackground />
            <div className='h-screen w-screen flex flex-col justify-center items-center p-32 space-y-10'/>
            <div className='h-screen w-screen flex flex-col justify-center items-center p-32 space-y-10'>
                <div className={'text-6xl ' + FONT.className}>Projects</div>
				<WebDevCard />
			</div>
		</div>
	);
};

export default Home;
