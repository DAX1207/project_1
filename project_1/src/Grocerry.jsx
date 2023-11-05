import InventoryContainer from "./InventoryContainer";
import { useState } from "react";
import { products } from "./data/products";
import CartList from "./CartList";

export default function Grocery(){
    const [todoList, setTodoList] = useState([]);
    // const [addToCart, setAddToCart] = useState({})
    const test = (todoList.length != 0) ? true : false
    let total = 0.0;

    const addToList = (item) => {
        setTodoList((prevList) => {
          return [...prevList, { id: crypto.randomUUID(),id:crypto}];
        });
      };

      const DeleteItem = (id) => {
        setTodoList((prevList) => {
          return prevList.filter((i) => i.id !== id);
        });
      };

      const DeleteItems = (id) => {
        setTodoList((prevList) => {
          return prevList.filter((i) => i.id == id);
        });
      };

    
      return (
        <div className="GroceriesApp-Container">
          <InventoryContainer
            addToList={addToList}
            products={products}
          />
          
          <div className="CartList-Container">
            <CartList 
             todoList ={todoList}
             DeleteItem ={DeleteItem}
             DeleteItems = {DeleteItems}
             test = {test}
             total = {total}
            />
           </div>
        </div>
      )

}


    

