import Item from "./Item";

const Items = ({ items, removeItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <Item key={item.id} {...item} removeItem={removeItem} />
      })}
    </div>
  );
}

export default Items;