import { Link } from "react-router-dom";

function Chips(){

  return(
    <div>
      <img src="https://target.scene7.com/is/image/Target/GUEST_9890f880-20fc-4f94-b325-c1c6875327ad"></img>
      <div>FLAMIN' HOT!!!!!!!!</div>
      <Link exact to="/">Go Back to Vending Machine</Link>
    </div>
  )
}

export default Chips;