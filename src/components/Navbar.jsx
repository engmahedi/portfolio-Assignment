import Menu from "./Menu";


function Navbar() {
  return (
    <>
      <div className="container mx-auto py-10">

        <div className="grid grid-cols-12 items-center">
          <div className="md:col-span-12  lg:col-span-4 flex justify-center">
            <a href="/"><h2 className="text-3xl text-red-600 font-bold md:mb-5">Faruque Mahedi</h2></a>
          </div>
          <div className=" md:col-span-12  lg:col-span-8 flex md:justify-center lg:justify-end">
            <Menu />
        </div>
        </div>
        
      </div>
    
    
    </>
  )
}

export default Navbar;