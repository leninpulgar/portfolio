'use client'

import Link from "next/link";
import { Dispatch, SetStateAction } from 'react';

interface TopMenuProps {
    activeTab: string;  // Usa el activeTab del componente padre
    setActiveTab: Dispatch<SetStateAction<string>>;
}

export const TopMenu = ({ activeTab, setActiveTab }: TopMenuProps) => {
    const handleClick = (tab: string) => {
        setActiveTab(tab);  // Cambia el estado en el componente padre
    };

    return (
        <div className="mt-5 flex flex-wrap justify-between md:justify-start md:gap-5">
            <div className="w-auto mb-4 mb-0">
                <Link 
                    onClick={() => handleClick('about-me')}
                    className={`border-solid p-3 rounded-full ${activeTab === 'about-me' ? 'bg-gray-200 text-gray-900' : 'bg-gray-500 text-gray-100'}`} 
                    href="/resume"
                >
                    About Me
                </Link>
            </div>
            <div className="w-auto mb-4 sm:mb-0">
                <Link 
                    onClick={() => handleClick('experience')}
                    className={`border-solid p-3 rounded-full ${activeTab === 'experience' ? 'bg-gray-200 text-gray-900' : 'bg-gray-500 text-gray-100'}`} 
                    href="/resume"
                >
                    Experience
                </Link>
            </div>
            <div className="w-auto mb-4 sm:mb-0">
                <Link 
                    onClick={() => handleClick('skills')}
                    className={`border-solid p-3 rounded-full ${activeTab === 'skills' ? 'bg-gray-200 text-gray-900' : 'bg-gray-500 text-gray-100'}`} 
                    href="/resume"
                >
                    Skills
                </Link>
            </div>
            <div className="w-auto">
                <Link 
                    onClick={() => handleClick('education')}
                    className={`border-solid p-3 rounded-full ${activeTab === 'education' ? 'bg-gray-200 text-gray-900' : 'bg-gray-500 text-gray-100'}`} 
                    href="/resume"
                >
                    Education
                </Link>
            </div>
        </div>
    );
}
