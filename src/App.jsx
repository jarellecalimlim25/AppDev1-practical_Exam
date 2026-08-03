import PageHeader from './components/layout/Header';
import PageFooter from './components/layout/Footer';
import Item from './components/inventory/Item';
import ItemList from './components/inventory/ItemList';
import Divider from './components/inventory/Divider';

function App() {
  return (
    <>
      <PageHeader />

      <main>
        <h2>Inventory List</h2>

        <Item name="Monitor" quantity={8} />

        <ItemList />

        <Divider />
      </main>

      <PageFooter />
    </>
  );
}

export default App;