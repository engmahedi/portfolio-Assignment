import Sectionheading from "./Sectionheading";
import { FaEnvelope } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';


const Contact = () => {
  return (
    <>
      <div className="container mx-auto my-40">
        <Sectionheading subtitle="Get In Touch" title="Contact Me" />
        
        <div class="flex  justify-center">
          <div class="  bg-slate-100 py-7 mb-10 rounded-full px-10">
            
            <div className="flex gap-10">
              <div className="flex gap-2 items-center">
                <span className="text-xl w-10 h-10 bg-slate-700 text-white flex justify-center rounded-full items-center"><FaEnvelope /></span>
                <div className=" ">
                <span className="text-xl hover:border-b-2 border-slate-700 py-1">Example@email.com</span>
                </div>
                
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-2xl w-10 h-10 bg-slate-700 text-white flex justify-center rounded-full items-center"><BiLogoLinkedin /></span>
                <div className=" ">
                <span className="text-xl hover:border-b-2 border-slate-700 py-1">Linkedin</span>
                </div>
                
              </div>
                
              
            </div>

          </div>
            
            
        </div>

      </div>
    </>
  )
}



export default Contact; 