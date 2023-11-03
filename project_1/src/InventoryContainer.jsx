
import InventoryCard from "./InverntoryCard";
import "./App.css";
import { products } from "./data/products";

export default function InventoryContainer({addToList})
{

    
    return(
       <div className="Inventory-Container">
       {products.map((product) => ( 
        <div key={product.id} className="Inventory-Card">
        <InventoryCard
        productName = {product.productName}
        brand = {product.brand}
        quantity = {product.quantity}
        image = {product.image}
        price = {product.price}
        />
        <button onClick={() => addToList(product)}>Add to Cart</button>
        </div>
       )) }
       </div>
    );
}