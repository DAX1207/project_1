
import InventoryCard from "./InverntoryCard";
import "./App.css";

export default function InventoryContainer({addToCart, products})
{

    
    return(
        //Used to Display whole cart
       <div className="Inventory-Container">
       {products.map((product) => ( 
        <div key={product.id} className="Inventory-Card">
            {//Used to display a single card
            }
        <InventoryCard
        productName = {product.productName}
        brand = {product.brand}
        quantity = {product.quantity}
        image = {product.image}
        price = {product.price}
        />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
       )) }
       </div>
    );
}