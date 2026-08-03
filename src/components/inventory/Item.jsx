function Item({ name, quantity }) {
  const category = 'Computer Equipment';
  const unitPrice = 50;
  const isAvailable = quantity > 0;

  function getItemCode() {
    return name.substring(0, 3).toUpperCase();
  }

  return (
    <article className="inventory-item">
      <h3>{name}</h3>

      <p>Item Code: {getItemCode()}</p>

      <p>Category: {`${category} - ${name}`}</p>

      <p>Stock Value: ${quantity * unitPrice}</p>

      <p>{isAvailable ? 'Available' : 'Out of Stock'}</p>
    </article>
  );
}

export default Item;