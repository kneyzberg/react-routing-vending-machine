import React from "react";
import { Link } from "react-router-dom";

function SnackLinks (){

  return(
  <div>
    <div>
      <Link exact to="/">
      Vending Machine
      </Link>
    </div>
    <div>
      <Link exact to="/candy">
        candy
      </Link>
    </div>
    <div>
      <Link exact to="/soda">
        soda
      </Link>
    </div>
    <div>
      <Link exact to="/chips">
        chips
      </Link>
    </div> 
  </div>  
  )
}

export default SnackLinks;