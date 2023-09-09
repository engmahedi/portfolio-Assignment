import Menu from "./Menu";


function Navbar() {
  return (
    <>
      <div className="container mx-auto py-10">

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4 flex justify-center">
            <h2 className="text-3xl font-bold">Faruque Mahedi</h2>
          </div>
          <div className="col-span-8 flex justify-end">
            <Menu />
        </div>
        </div>
        
      </div>
    
    
    </>
  )
}

export default Navbar;