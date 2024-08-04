import { nanoid } from 'nanoid';
import Color from "./Color";

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <Color key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;