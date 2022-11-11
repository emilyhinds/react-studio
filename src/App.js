import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  function addToCart(name, currPrice) {
    var newCart = cart;
    var containsItem = false;

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i][0] == name) {
        containsItem = true;
      }
    }

    if (containsItem == true) {
      for (let i=0; i < newCart.length; i++) {
        if (newCart[i][0] == name) {
          newCart[i][1] += 1;
        }  
      }
    } else {
      newCart.unshift([name, 1])
    }
    setCart(newCart);
    setPrice(currPrice + price)
  }


  return (
    <div className="App">
      <div className="item-section">
        <h1>BEST BAKERY EVER</h1>
        <div className="bakery-item-container">
          {bakeryData.map((item, index) => ( 
            <div className="bakery-item">
            <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image}/>
            <button onClick={() => { addToCart(item.name, item.price)}}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h2>Cart</h2>
        <p>Total: ${price.toFixed(2)}</p>
        <div className="cart-contents">
          {cart.map((item, index) => (
            <div className="cart-item">
              {item[1]}x{item[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
