import { SkillsProps } from "@/app/data/interfaces/Skills";



export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
            
            <h2 className="text-4xl mt-5 font-bold">Skills</h2>
    
            <hr className="my-5" />


            <div className="columns-3xs gap-5">
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Technical Skills</h3>
                    <ul>
                    {skills.technical.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-2xl font-semibold my-5">Soft Skills</h3>
                    <ul>
                    {skills.soft.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold my-5">Languages</h3>
                    <ul>
                    {skills.languages.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold my-5">Design Skills</h3>
                    <ul>
                    {skills.design.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
                </div>
            </div>
            
    
            
            
    </div>
  )
}
