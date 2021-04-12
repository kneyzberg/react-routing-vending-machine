
import { Link } from "react-router-dom";


function Soda(){

  return(
<div>
  <img src="https://icdn.bottlenose.wine/images/full/473510.jpg"></img>
  <div>Enjoy your Mountain Dew Baja Blast!!!!</div>
  <Link exact to="/">Go Back to Vending Machine</Link>
</div>
  )
}

export default Soda;
