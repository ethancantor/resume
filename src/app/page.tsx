'use client';
import React from "react";
import { AboutMePage } from "@/components/AboutMePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import SecondBackground from "@/components/SecondBackground";
import { SkillsPage } from "@/components/SkillsPage";
// import { useColorCalc } from "@/hooks/colorCalc";


const Home = () => {
	return (
        <div className='flex items-center justify-center flex-col'>
            <SecondBackground />
			<AboutMePage />
			<SkillsPage />
            {/* <div className='bg-gray-300 h-10 w-[200%] bottom-0'/> */}
			<ProjectsPage />
		</div>
	);
};

export default Home;
