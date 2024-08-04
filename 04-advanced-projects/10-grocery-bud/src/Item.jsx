const Item = ({ id, completed, name, removeItem, updateItem }) => {
  return (
    <div className='single-item'>
      <input type='checkbox' checked={completed} onChange={() => updateItem(id)} />
      
      <p style={{ textDecoration: completed && 'line-through' }}>
        {name}
      </p>
      
      <button className='btn remove-btn' onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
}

export default Item;