import { MyButton1, MyButton2 } from './Button';
import User from './PropsExample';
import { useState } from 'react';

export default function App() {
    const user = {
        name: 'Liam',
        age: 24,
        imageUrl: 'https://image.tmdb.org/t/p/original/w6fCmYDlTNYfgdXBZjZH107c9zJ.jpg',
        imageSize: 200
    };

    let content;
    if (user.age > 18) {
        content = <p style={{ color: user.age > 18 ? 'green' : 'red' }}>Come</p>;
    } else {
        content = <p style={{ fontSize: user.age > 18 ? '20px' : '10px' }}>Leave</p>;
    }

    const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
    const itemList = items.map(item =>
        <li key={item.id}>
            {item.name}
        </li>
    );

    // Move the state and event handler up from Button to App
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            {/* Display Data */}
            <h1>Welcome to my app, {user.name}!</h1>
            <img src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize / 2, height: user.imageSize / 2, borderRadius: '50%' }} />
            
            {/* Conditional Rendering */}
            {content}
            {user.age > 18 ? <p>Come</p> : <p>Leave</p>}
            {user.age > 18 && <p>Come</p>}

            {/* Rendeing List */}
            {itemList}

            {/* If we render the same component multiple times, each will get its own state! */}
            {/* Note how each button “remembers” its own count state and doesn’t affect other buttons. */}
            <MyButton1 />
            <MyButton1 />

            {/* Pass the state and event handler down as props from App to each Button */}
            {/* The count state is shared between components! */}
            <MyButton2 count={count} onClick={handleClick} />
            <MyButton2 count={count} onClick={handleClick} />

            <User person={{ name: 'Liam', age: 24 }} address={'Chicago'} />
        </div>
    );
}