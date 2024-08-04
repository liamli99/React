import Item from "./Item";

const Items = ({ items, removeItem, updateItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <Item key={item.id} {...item} removeItem={removeItem} updateItem={updateItem} />
      })}
    </div>
  );
}

export default Items;