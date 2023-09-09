

const Menu = () => {

  const navbar = [ "About","Experience","Projects","Contact"];
  return (
    <>
      
      <div className="text-center">
      <ul className="flex justify-center gap-10 text-2xl">

{
  
    navbar.map((menu, i) => {
      return <div className="p-5">
          <li key={i} className="hover:border-b-2 border-slate-700"> {menu} </li>

      </div>
    })

}
     </ul>
      </div>
      
    
    </>
  )
}

export default Menu;