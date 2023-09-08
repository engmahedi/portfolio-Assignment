import Sectionheading from "./Sectionheading";
import SingleProject from "./SingleProject";


const Projects = () => {

  const projectData = [
    {
      id: 1,
      img: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-1.png",
      title:"Project One"
    }, 
    {
      id: 2,
      img: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-2.png",
      title:"Project Two"
    },
    {
      id: 3,
      img: "https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png",
      title:"Project Three"
    }
  ]

  return (
    <>
      <div className="container mx-auto my-40">

        <Sectionheading  subtitle="Browse My Recent" title="Projects"/>
        
        <div className="grid grid-cols-3 gap-10">
          {
            projectData.map((project) => <SingleProject key={project.id } image={project.img} title={project.title} />) 
        }
        </div>

        


    </div>
    </>
  )
}

export default Projects; 