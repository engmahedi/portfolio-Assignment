
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';



function Hero() {
  return (
    <>
      <div className="container mx-auto py-40">
        <div className="w-[60%] mx-auto gap-8 grid md:grid-cols-1 lg:grid-cols-2">
          <div className='md:mb-40 text-center'>
            <img src="https://thriving-dragon-a3fcd9.netlify.app/assets/profile-pic.png"/>
          </div>
          <div className="flex justify-center items-center">

            <div className="text-center">
              <h6 className="text-lg font-bold text-slate-500">Hello, I'm</h6>
              <h2 className="text-4xl font-bold py-2">Faruque Mahedi</h2>
              <h4 className="text-2xl font-bold text-slate-500">Frontend Developer</h4>

              <div className="my-5 flex justify-center gap-5">
                <button className="border border-slate-600 py-2 px-4 rounded-full font-semibold hover:bg-slate-700 hover:text-white transition">Download CV</button>
                <button className="border border-slate-600 py-2 px-4 rounded-full font-semibold text-white bg-slate-700 hover:bg-transparent hover:text-slate-600 transition">Contact info</button>
              </div>

              <div className="my-5 flex justify-center gap-5">
                <div className='bg-slate-700 w-10 h-10 text-lg text-white rounded-full flex justify-center items-center'><FaLinkedinIn /></div>
                <div className='  text-4xl  rounded-full flex justify-center items-center'><BsGithub /></div>
                
              </div>
               
            </div>
            
          </div> 
        
        </div>

        
    </div>
    
    </>
  )
}

export default Hero;