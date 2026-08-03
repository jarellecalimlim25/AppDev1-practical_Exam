function Item({ name , category, quantity }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
}
export default Item;