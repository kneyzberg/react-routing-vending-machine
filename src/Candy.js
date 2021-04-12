import { Link } from "react-router-dom";

function Candy(){
  return(
    <div>
      <img src="http://cdn.shopify.com/s/files/1/0004/8132/9204/products/reeses_pb_cups_1_1024x1024.jpg?v=1550328137"></img>
      <div>There's no wrong way to eat a Reese's! Enjoy!!</div>
      <Link exact to="/">Go Back to Vending Machine</Link>
    </div>
  )
}

export default Candy;

