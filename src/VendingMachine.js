import { BrowserRouter, Route } from "react-router-dom";

import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import Home from "./Home";
import NavBar from "./Navbar";



function VendingMachine(){

return(
  <BrowserRouter>
    <NavBar/>
    <Route exact path="/soda">
      <Soda/>
    </Route>
    <Route exact path="/chips">
      <Chips/>
    </Route>
    <Route exact path="/candy">
      <Candy/>
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </BrowserRouter>
)

}

export default VendingMachine;


