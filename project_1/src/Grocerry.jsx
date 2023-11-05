import InventoryContainer from "./InventoryContainer";
import { useState } from "react";
import { products } from "./data/products";
import CartList from "./CartList";

export default function Grocery(){
    const [cartList, setcartList] = useState([]);
    const test = (cartList.length != 0) ? true : false //Condition to see if list is empty
    let total = 0.0; //To calculate the Total

    //Used to enter a data to cart
    const addToCart = (item) => {
        setcartList((prevList) => {
            return [...prevList, { ...item, id: crypto.randomUUID() }];
        });
      };

      //Delete Particular Item
      const DeleteItem = (id) => {
        setcartList((prevList) => {
          return prevList.filter((i) => i.id !== id);
        });
      };

      //Delete whole List
      const DeleteItems = (id) => {
        setcartList((prevList) => {
          return prevList.filter((i) => i.id == id);
        });
      };

    
      return (
        //To Display whole container including Inventory and Cart
        <div className="GroceriesApp-Container">
          <InventoryContainer
            addToCart={addToCart}
            products={products}
          />
          
          <div className="CartList-Container">
            <CartList 
             cartList ={cartList}
             DeleteItem ={DeleteItem}
             DeleteItems = {DeleteItems}
             test = {test}
             total = {total}
            />
           </div>
        </div>
      )

}


    

