'use client';
import React from "react";
import { AboutMePage } from "@/components/AboutMe/AboutMePage";
import { ProjectsPage } from "@/components/Projects/ProjectsPage";
import SecondBackground from "@/components/Misc/SecondBackground";
import { SkillsPage } from "@/components/Skills/SkillsPage";
import { ExperiencePage } from "@/components/Experience/ExperiencePage";
import { PublishedMusicPage } from "@/components/Music/PublishedMusicPage";


const Home = () => {
	return (
        <div className='flex items-center justify-center flex-col'>
			<SecondBackground />
			<AboutMePage />
			<SkillsPage />
			<ProjectsPage />
			<ExperiencePage />
			<PublishedMusicPage />
		</div>
	);
};

export default Home;
