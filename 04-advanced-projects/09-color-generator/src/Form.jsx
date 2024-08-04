import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addColor(color);
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        {/* Color Input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color */}
        {/* If value is an empty string, then the color is '#000000' */}
        <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
        <input type='text' placeholder='#000000' value={color} onChange={(e) => setColor(e.target.value)} />
        
        <button className='btn' style={{ background: color }}>Submit</button>
      </form>

    </section>
  );
}

export default Form;