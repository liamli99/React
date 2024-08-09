import './App.css';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import Form from './Form';
import Items from './Items';

// Since there is no database, we can use localStorage to store data in the browser!
// Right Click -> Inspect -> Application -> Local storage!
// Save to local storage
const setLocalStorage = (items) => {
  localStorage.setItem('items', JSON.stringify(items));
}
// Retrieve from local storage
const getLocalStorage = () => {
  // If this is the first time to run this project, then there is nothing in localStorage, and JSON.parse(...) is null! If we set the initial value of 'items' to null, then 'items.map' is wrong in Items.jsx because null have no properties! So that we should also set a default value!
  return JSON.parse(localStorage.getItem('items')) || [];
}

function App() {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (name) => {
    const newItem = { id: nanoid(), completed: false, name };
    const newItems = [...items, newItem];
    setItems(newItems);

    setLocalStorage(newItems);

    toast.success('Added!');
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);

    setLocalStorage(newItems);

    toast.success('Deleted!');
  }

  const updateItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    })
    setItems(newItems);

    setLocalStorage(newItems);
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} updateItem={updateItem} />
      <ToastContainer position='top-center' />
    </section>
  );
}

export default App
