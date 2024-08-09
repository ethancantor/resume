"use client";
import AboutMeCard from "@/components/AboutMeCard";
import React from "react";
import { useInView } from "react-intersection-observer";

const Resume = () => {
	return (
		<div className='w-screen'> 
			<AboutMeCard />
		</div>
	);
};

export default Resume;
