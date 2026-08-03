import Item from './Item';

function ItemList() {
  return (
    <section className="inventory-content">
      <Item name="Monitor" quantity={8} />
      <Item name="Laptop" quantity={10} />
      <Item name="Keyboard" quantity={15} />
      <Item name="Mouse" quantity={20} />
    </section>
  );
}

export default ItemList;