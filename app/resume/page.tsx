'use client'

import data from "../data/experience.json";
import skillsData from "../data/skills.json";
import educationData from "../data/education.json";
import { Navigation } from "../components/nav";
import { useState } from "react";
import { AboutMe, Education, Experience, Skills, TopMenu } from "../components";

export default function Resume() {
    // Establecer 'about-me' como la pestaña activa por defecto
    const [activeTab, setActiveTab] = useState('about-me'); // Default to "About Me"

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            {/* Mobile-Friendly Navigation */}
            <Navigation />

            <div className="container flex mx-auto px-4">
                <div className="text-white w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16 md:mt-[20%]">
                    {/* TopMenu component with mobile-friendly adjustments */}
                    <div className="w-full sm:col-span-1 lg:col-span-1">
                        {/* Pasar activeTab al TopMenu */}
                        <TopMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>

                    {/* Main content area */}
                    <div className="w-full sm:col-span-2 lg:col-span-2">
                        {activeTab === 'about-me' && <AboutMe />}
                        {activeTab === 'experience' && <Experience experience={data} />}
                        {activeTab === 'skills' && <Skills skills={skillsData} />}
                        {activeTab === 'education' && <Education education={educationData.education} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
