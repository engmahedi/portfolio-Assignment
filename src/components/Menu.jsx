
import React from "react";
import { NavLink } from "react-router-dom";




const Menu = () => {
  return (
    <>
      <div >
        <ul className="flex gap-4 text-2xl">
          <NavLink className={({ isActive }) => isActive ? " text-green-500 font-bold" : ""} to="/">Home</NavLink>
          
          <NavLink className={({ isActive}) => isActive ? " text-green-500 font-bold" : ""} to="/gallary">Gallary</NavLink>
          <NavLink className={({ isActive}) => isActive ? " text-green-500 font-bold" : ""} to="/contact">Contact</NavLink>
        </ul>
      </div>
      
    </>
  );
};

export default Menu;