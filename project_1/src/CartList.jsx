import "./App.css";


export default function CartList ({ todoList, DeleteItem, DeleteItems, test, total }) {

    function calc(temp){
        total += parseFloat((temp).slice(1))
    }

  return (
    <>
    <h2>Your Cart</h2>
    {(test) ? (<p>No. of Items : {todoList.length}</p>): (<p> </p>)}
    {todoList.map((i) =>
    <div key={i.id} className="CartList-Card">
        <div className="CartList-Card-Info">
        
        <h2>{i.productName}</h2>
        <h2>{i.price}</h2>
        {calc(i.price)}
        </div>
        <button className="Remove-Button" onClick={() => DeleteItem(i.id)}>Remove</button>
    </div>
    )}
    {(test) ? (<div className="CartList-Buttons" ><button className="Remove-Button" onClick={() => DeleteItems(todoList)}>Remove All</button> 
    <button className="Buy-Button">Buy - Total $ {total}</button></div> ) : <h3>Your Cart is empty</h3>}
    </>
  
  )
}


