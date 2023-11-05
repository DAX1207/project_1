import Grocery from "./Grocerry";

export default function TodoCart({todoList}){
   
    const test = (todoList.length != 0) ? true : false
    let total = 0.0;

    function calc(temp){
        total += parseFloat((temp).slice(1))
    }
    
    <h2>Your Cart</h2>
    {todoList.map((i) =>
    <div key={i.id} className="CartList-Card">
        <div className="CartList-Card-Info">
        <h2>{i.productName}</h2>
        <h2>{i.price}</h2>
        {calc(i.price)}
        </div>
        <button className="Remove-Button" onClick={() => Grocery.DeleteItem(i.id)}>Remove</button>
    </div>
    )}
    {(test) ? (<div className="CartList-Buttons" ><button className="Remove-Button" onClick={() => Grocery.DeleteItems(todoList)}>Remove All</button> 
    <button className="Buy-Button">Buy - Total $ {total}</button></div> ) : <h2>Your Cart is empty</h2>}
          
}