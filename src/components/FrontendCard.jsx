import ExpCardHeading from "./ExpCardHeading";
import SingleExperience from "./SingleExperience";


const ExperienceCard = () => {
  return (
    <>
      <div className="card rounded-[40px] w-[100%] border border-slate-500 text-center">
        <div className="card-body">
        
          <ExpCardHeading heading="Frontend Development" /> 
          <div className="grid grid-cols-3 gap-5 mt-10">
            <SingleExperience title="HTML" subtitle="Experienced"/>
            <SingleExperience title="CSS" subtitle="Experienced"/>
            <SingleExperience title="SASS" subtitle="Intermediate"/>
            <SingleExperience title="JavaScript" subtitle="Basic"/>
            <SingleExperience title="TypeScript" subtitle="Basic"/>
            <SingleExperience title="Material UI" subtitle="Intermediate"/>
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default ExperienceCard;
