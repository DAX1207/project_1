export default function InventoryCard({productName,brand,quantity,image,price})
{
    return(
        <div className="InCard">
            <img src={image} alt="productName" />
            <h3>{productName}</h3>
            <h5>{brand}</h5>
            <p>{quantity}</p>
            <p>{price}</p>
        </div>
    );
}