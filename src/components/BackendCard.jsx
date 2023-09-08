import ExpCardHeading from "./ExpCardHeading";
import SingleExperience from "./SingleExperience";


const ExperienceCard = () => {
  return (
    <>
      <div className="card rounded-[40px] w-[100%] border border-slate-500 text-center">
        <div className="card-body">
        
          <ExpCardHeading heading="Backend Development" /> 
          <div className="grid grid-cols-3 gap-5 mt-10 ">
            <SingleExperience title="PostgreSQL" subtitle="Basic"/>
            <SingleExperience title="Node JS" subtitle="Intermediate"/>
            <SingleExperience title="Express JS" subtitle="Intermediate"/>

          </div>
          <div className="flex justify-center mt-5">
            
            <SingleExperience title="GIT" subtitle="Intermediate"/>

          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default ExperienceCard;
