import Item from "./Item";
import Divider from "./Divider";

function ItemList() {
    return(
        <>
            <Item
                name="Laptop"
                categoty="Electonics"
                quantity="{10}"
            />

            <Divider />

            <Item 
                name="Notebook"
                category="School Supplies"
                quantity="{50}"
            />

            <Divider />

            <Item 
                name="Water Bottle"
                category="Accessories"
                quantity="{25}"
            />
        </>
    );
}
export default ItemList;