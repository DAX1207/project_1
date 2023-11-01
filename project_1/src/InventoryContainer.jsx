import { products } from "./data/products";
import InventoryCard from "./InverntoryCard";
import "./App.css";

export default function InventoryContainer()
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
        </div>
       )) }
        
       </div>

    );
}