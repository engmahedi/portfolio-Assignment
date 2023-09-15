import FrontendCard from "./FrontendCard";
import BackendCard from "./BackendCard";
import Sectionheading from "./Sectionheading";

const Experience = () => {
  return (
    <>
      <div className="container mx-auto mb-10 my-40">
        <Sectionheading  subtitle="Explore My" title="Experience"/>

        <div className="grid md:grid-cols-1 md:px-5 lg:grid-cols-2 gap-10">

        
            <FrontendCard />
            <BackendCard />
          
          
          
        </div>
      </div>
    
    </>
  )
}

export default Experience;