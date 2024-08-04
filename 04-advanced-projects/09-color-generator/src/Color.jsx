import { toast } from "react-toastify";

const Color = ({ color, index }) => {
  const { weight, hex } = color;

  const saveToClipboard = async () => {
    // Check if the clipboard is accessable
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Copied successfully!');
      } catch (error) {
        toast.error('Failed to copy!');
      }
    } else {
      toast.error('Cannot access clipboard!');
    }
  }

  return (
    // If we want to insert value directly into a string, use template string!
    // The larger the index, the darker the color!
    <article className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }} 
      onClick={saveToClipboard}>
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>{hex}</p>
    </article>
  );
}

export default Color;