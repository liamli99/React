import { useState } from "react";

const Item = ({ id, completed, name, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className='single-item'>
      {/* Altenative solution: `onChange={() => setIsChecked(!isChecked)}` */}
      <input type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{name}</p>
      <button className='btn remove-btn' onClick={() => removeItem(id)}>Delete</button>
    </div>
  );
}

export default Item;