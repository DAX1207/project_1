import InventoryContainer from "./InventoryContainer";
import { useState } from "react";
import { products } from "./data/products";

export default function Grocery(){
    const [todoList, setTodoList] = useState([]);
    // const [addToCart, setAddToCart] = useState({})
    const test = (todoList.length != 0) ? true : false



    const addToList = (item) => {
        setTodoList((prevList) => {
          return [...prevList, { id: crypto.randomUUID(), ...item }];
        });
      };

    //   const handleOnSubmit = (evt) => {
    //     evt.preventDefault();
    //     addToList(addToCart);
    //     
    //   };

    //   const handleDeleteItem = (id) => {
    //     setTodoList((prevList) => {
    //       return prevList.filter((i) => i.id !== id);
    //     });
    //   };

     function handleButton() {
        <h2>You got a Cart</h2>
     }

      return (
        <div className="GroceriesApp-Container">
          <InventoryContainer
            addToList={addToList}
            products={products}
          />
          
          <div className="CartList-Container ">
            <h2>Your Cart</h2>
            {todoList.map((i) =>
            <div key={i.id} className="CartList-Card">
                <div className="CartList-Card-Info">
                <h2>{i.productName}</h2>
                <h2>{i.price}</h2>
                </div>
                <button className="Remove-Button">Remove</button>
            </div>
            )}
            {(test) ? handleButton : <h2>Your Cart is empty</h2>}

          </div>
        </div>
      )

}


    

