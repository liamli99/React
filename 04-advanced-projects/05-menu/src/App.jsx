import './App.css';
import { useState } from 'react';
import items from './data';
import Title from './Title';
import Categories from './Categories';
import Menu from './Menu';


function App() {
  const [menuItems, setMenuItems] = useState(items);

  // Get all unique categories!
  const categoriesArray = items.map((item) => item.category);
  const categoriesSet = new Set(categoriesArray);
  const categories = ['All', ...categoriesSet];

  // Note that we shouldn't define this function in Categories.jsx, because it doesn't have access to items and setMenuItems!
  // So we have to pass this function from App.jsx to Categories.jsx as props!
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  }

  return (
    <main>
      <section className='menu'>
        <Title title={'Our Menu'} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App
