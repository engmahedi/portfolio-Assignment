

import Card from "./Card";
import Sectionheading from "./Sectionheading";


const AboutMe = () => {

  const aboutMeData = [
    {
      id: 1,
      img: "https://thriving-dragon-a3fcd9.netlify.app/assets/experience.png",
      title:"Experience",
      subtitle:"2+ years",
      disc:"Frontend Development",
    },
    {
      id: 2,
      img: "https://thriving-dragon-a3fcd9.netlify.app/assets/education.png",
      title:"Education",
      subtitle:"B.Sc. Bachelors Degree",
      disc:"M.Sc. Masters Degree",
    }
  ]
  return (
    <>
      <div className="container mx-auto mb-20">
        
        <Sectionheading subtitle="Get To Know More" title="About Me" />
        
        <div className="grid grid-cols-12  gap-3">
          <div className="col-span-4 text-center ">
            <img src="https://thriving-dragon-a3fcd9.netlify.app/assets/about-pic.png" alt="image" className="rounded-[50px]"/>
          </div>
          <div className="col-span-8 p-16">
            <div className="  flex items-center gap-10 py-10">
            {
              aboutMeData.map((aboutMe) => <Card key={aboutMe.id} img={aboutMe.img} title={ aboutMe.title} subTitle={aboutMe.subtitle} Disc={aboutMe.disc} />
                
              )
            }
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?</p>
            
            

          </div>
          

          </div>
          
        
            
      </div>
    
    </>
  )
}

export default AboutMe;