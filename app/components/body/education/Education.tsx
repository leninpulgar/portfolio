import { EducationType } from "@/app/data/interfaces/Education";



export const Education: React.FC<EducationType> = ({ education }) => {
  return (
    <div>
            
            <h2 className="text-4xl mt-5 font-bold">Education</h2>
    
            <hr className="my-5" />


                {education.map((edu, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                        <p className="text-lg">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                        <p className="mt-2 text-sm">
                            <strong>Field of Study:</strong> {edu.field_of_study}
                        </p>
                        <p className="mt-2 text-sm">
                            <strong>Dates:</strong> {edu.completion_date}
                        </p>
                    </div>
                ))}
          
            
    </div>
  )
}
