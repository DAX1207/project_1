import "./App.css";


export default function CartList ({ cartList, DeleteItem, DeleteItems, test, total }) {

    //Used to calculate the total price of all Items
    function calc(temp){
        total += parseFloat((temp).slice(1))
    }


  return (
    <>
    {
        //Displaying whole Your Cart with Delete and buy buttons
    }
    {(test) ? (<h2>Your Cart</h2>): (<p> </p>)}
    {(test) ? (<p>No. of Items : {cartList.length}</p>): (<p> </p>)}
    {cartList.map((i) =>
    <div key={i.id} className="CartList-Card">
        <div className="CartList-Card-Info">
        
        <h2>{i.productName}</h2>
        <h2>{i.price}</h2>
        {calc(i.price)}
        </div>
        <button className="Remove-Button" onClick={() => DeleteItem(i.id)}>Remove</button>
    </div>
    )}
    {(test) ? (<div className="CartList-Buttons" ><button className="Remove-Button" onClick={() => DeleteItems(cartList)}>Remove All</button> 
    <button className="Buy-Button" >Buy - Total $ {total}</button></div> ) : <h>Your Cart is empty</h>}
    </>
  
  )
}


