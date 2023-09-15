

import Navbar from "../components/Navbar";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import Footer from "../components/Footer";



const Contact = () => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <div className="text-center py-20 bg-slate-200">
      <div className="">
        <h2 className="text-4xl font-bold py-10">GET IN TOUCH</h2>
         <h5 className="flex justify-center items-center py-1 text-lg font-semibold"><span className="px-2"><BsFillTelephoneFill /></span> +880 1700000000</h5>
         <h5 className="flex justify-center items-center py-1 text-lg font-semibold"><span className="px-2"><HiOutlineMail /></span> example@gmail.com</h5>
         <h5 className="flex justify-center items-center py-1 text-lg font-semibold"><span className="px-2 text-2xl"><MdLocationOn /></span> House #20 (3rd Floor) Road # 17, Nikanjia-2 Dhaka, Bangladesh</h5>
        
        </div>
        
        <div className=" flex justify-center gap-5 mt-20">
          <div>
            <div className="py-1">
            <input type="text" placeholder="Your Name" className="input w-96 max-w-xl rounded-md " />
            </div>
            <div className="py-1">
            <input type="tel" placeholder="Your Phone Number" className="input w-96 max-w-xl rounded-md" />
            </div>
            <div className="py-1">
            <input type="email" placeholder="Your " className="input w-96 max-w-xl rounded-md" />
          </div>
          
          
          </div>
          <div>
          <textarea className="textarea w-96 h-40 rounded-md " placeholder="Message"></textarea>
          </div>
        </div>
        <div>
        <button className="btn btn-outline btn-info mt-5 px-10 text-[15px] bg-white rounded-lg">Submit</button>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Contact;