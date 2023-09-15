import Menu from "./Menu";


const Footer = () => {
  return (
    <>
      <div className="container mx-auto justify-center">
        <div className="py-5 flex justify-center">
        <Menu />
        </div>
      
        <div className="p-10">
          <p className="text-center text-lg">Copyright © 2023 John Doe. All Rights Reserved</p>
        </div>
      </div>
    
    </>
  )
}

export default Footer;