'use client';
import React from "react";
import { AboutMePage } from "@/components/AboutMePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import MusicBackground from "@/components/MusicBackground";
import SecondBackground from "@/components/SecondBackground";
import { useColorCalc } from "@/hooks/colorCalc";


const Home = () => {

	console.log(useColorCalc('#212227', '#9b53ed', 4));

	return (
        <div className='flex items-center justify-center flex-col'>
            <SecondBackground />
			{/* <MusicBackground /> */}
			<AboutMePage />
            {/* <div className='bg-gray-300 h-10 w-[200%] bottom-0'/> */}
			<ProjectsPage />
		</div>
	);
};

export default Home;
