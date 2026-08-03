import PageHeader from './components/layout/Header';
import PageFooter from './components/layout/Footer';
import ItemList from './components/inventory/ItemList';
import Divider from './components/inventory/Divider';

function App() {
  return (
    <div className="inventory-page">
      <PageHeader />

      <main className="inventory-main">
        <h2 className="inventory-title">Inventory List</h2>

        <ItemList />

        <Divider />
      </main>

      <PageFooter />
    </div>
  );
}

export default App;