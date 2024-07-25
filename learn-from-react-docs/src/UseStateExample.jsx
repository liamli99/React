import { useState } from 'react';

export default function UseStateExample() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("black");
    const [style, setStyle] = useState("oldStyle");

    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Clicked {count} times
                </button>
            </div>
            
            <div>
                <input onChange={(e) => setInputValue(e.target.value)}/> 
                <p>{inputValue}</p>
            </div>
            
            <div>
                <button onClick={() => setShowText(!showText)}>
                    {showText ? "Hide" : "Show"}
                </button> 
                {showText && <p>Hello</p>}
            </div>
            
            <div>
                <button onClick={() => setTextColor(textColor === "black" ? "red" : "black")}>
                    Change Color
                </button> 
                <p style={{color: textColor}}>Hi</p>
            </div>
            
            <button onClick={() => setStyle(style === "oldStyle" ? "newStyle" : "oldStyle")}>
                Change Style
            </button> 
            <p className={style}>Hi</p>
        </>
    );
}