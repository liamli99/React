import './Button.css';
import { useState } from 'react';

export function MyButton1() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        // alert('You clicked me!');
    }

    return (
        // Responding to events
        <button className="this-button" onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

// Read the props passed from its parent component
export function MyButton2({ count, onClick }) {
    return (
        <button className="this-button" onClick={onClick}>
            Clicked {count} times
        </button>
    );
}