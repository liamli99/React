import './App.css';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';

function App() {
  // The inital value of 'colors' is an array of objects!
  const [colors, setColors] = useState(new Values('#000000').all(10));
  // console.log(colors);

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      // The error message shows up when we type an invalid color value to the input and submit it!
      toast.error(error.message);
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      {/* It controls where to palce the notification, i.e. toast */}
      <ToastContainer position='top-center' />
    </main>
  );
}

export default App
