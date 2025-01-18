'use client'
import { ExperienceProps } from "@/app/data/interfaces/Experience"
import { IoBriefcaseOutline, IoLocationOutline, IoPersonOutline, IoWatchOutline } from "react-icons/io5"

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {

  return (
    <div>
        
        <h2 className="text-4xl mt-5 font-bold">Experience</h2>

        <hr className="my-5" />

        {experience.map((data, index) => (
            <div key={index}>
                <h3>
                    <div className="flex justify-items-center items-center gap-2">
                        <IoBriefcaseOutline /> {data.name} - <IoLocationOutline /> {data.location} <br/>
                    </div>
                    <div className="flex justify-items-center items-center gap-2 font-semibold my-3 text-2xl">
                        <IoPersonOutline /> {data.title} | <IoWatchOutline /> {data.date}
                    </div>
                </h3>

                <ul className="list-disc ml-5">
                        {data.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                </ul>

                <div className="py-6 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">+</div>
            </div>
        ))}
        
    </div>
  )
}
