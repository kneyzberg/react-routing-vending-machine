import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar (){

  return(
  <nav className="NavBar">
    <div>
      <NavLink exact to="/">
      Vending Machine
      </NavLink>
    </div>
    <div>
      <NavLink exact to="/candy">
        candy
      </NavLink>
    </div>
    <div>
      <NavLink exact to="/soda">
        soda
      </NavLink>
    </div>
    <div>
      <NavLink exact to="/chips">
        chips
      </NavLink>
    </div> 
  </nav>  
  )
}

export default NavBar;