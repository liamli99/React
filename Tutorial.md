# React
- [Tutorial](https://react.dev/learn)
- [Documentation](https://react.dev/reference/react)

## Create React applications
1. Create React App
- [Documentation](https://create-react-app.dev/docs/getting-started)
- `npx create-react-app my-app`
- We only need to keep `public/index.html` (page template) and `src/index.js` (entry point)!


2. Vite (Recommended!)

## Component
- React apps are made out of **componens**. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
- Components are **JavaScript functions** that return **markup**.
- A component can be nested into another component.
- Component names must start with a capital letter and use **PascalCase**.

### Component Example
```js
// A component
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

// Another component
export default function App() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
```


## Export and Import
The `export default` keywords specify the main component in the file.

### Export
There are two primary ways to export values with JavaScript: default exports and named exports. You can use one or both of them in the same file. A file can have **no more than one default export**, but it can have **multiple named exports**!

### Import
How you export the component dictates how you must import it!

| Syntax | Export | Import |
|:------:|:------:|:------:|
| Default | `export default function Button() {...}` | `import Button from './Button.js';` |
| Named | `export function Button() {...}` | `import { Button } from './Button.js';` |

### Notes
- When importing a component, we can leave off the file extension! For example, we can write `import Button from './Button'`. Either `'./Button.js'` or `'./Button'` works with React, though the former is closer to how native ES Modules work!
- When you write a default import, you can put any name you want after import! For example, you could write `import AnyName from './Button.js'` instead and it would still provide you with the same default export. In contrast, with named imports, the name has to match on both sides. That’s why they are called named imports!
- People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values. 



## Add Styles
Suppose we have a CSS file `styles.css`:
```css
.container {
    margin: 10px;
}
```
Suppose a component is in the same folder as the CSS file and wants to add it:
```js
import './style.css';

// className works the same way as the HTML class attribute
<div className="container"></div>
```


## JSX
- The markup syntax is called **JSX**. It is optional, but most React projects use JSX for its convenience. 
- JSX is stricter than HTML. You have to close tags like `<br />`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div></div>` or an empty `<></>` wrapper!
- [Converter: HTML to JSX](https://transform.tools/html-to-jsx)


JSX lets you put markup into JavaScript. **Curly braces** let you “escape back” into JavaScript!
### Displaying Data
```js
const user = {
    name: 'Liam',
    imageUrl: 'https://image.tmdb.org/t/p/original/w6fCmYDlTNYfgdXBZjZH107c9zJ.jpg',
    imageSize: 200
};

return (
    <div>
        <h1>Welcome to my app, {user.name}!</h1>
        <img src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize / 2, height: user.imageSize / 2, borderRadius: '50%' }} /> 
    </div>
);
```

### Conditional Rendering
All of these approaches also work for conditionally specifying attributes. 
```js
const age = 18;

let content;
if (age > 18) {
    content = <p style={{ color: age > 18 ? 'green' : 'red' }}>Come</p>;
} else {
    content = <p style={{ fontSize: age > 18 ? '10px' : '20px' }}>Leave</p>;
}

return (
    {/* Regular if statement */}
    {content}
    {/* Tenary operator, same as the if statement! */}
    {age > 18 ? <p>Come</p> : <p>Leave</p>}
    {/* Logical AND operator, it works when we don't want the else branch! */}
    {age > 18 && <p>Come</p>}
);
```

### Rendering List
```js
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
// Note that <li> has a key attribute, we should pass a string or a number that uniquely identifies that item!
// Usually, a key should be coming from our data, such as a database ID
// React uses the keys to know what happened if we later insert, delete, or reorder the items.
const itemList = items.map(item =>
    <li key={item.id}>
        {item.name}
    </li>
);

return (
    <ul>{itemList}</ul>
);
```

### Responding to Events
```js
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        // No parentheses! We pass down the function instead of calling the function!
        <button onClick={handleClick}>I'm a button</button>
    );
}
```


## Hooks
- Functions starting with `use` are called **Hooks**. 
- We can only call Hooks ***at the top of*** the components or other Hooks! We cannot call it inside loops or conditions. If we need that, extract a new component and move the state into it!
- [Built-in React Hooks](https://react.dev/reference/react/hooks)

### Updating the screen: `useState`
[Documentation](https://react.dev/reference/react/useState)
- Often, you’ll want your component to “remember” some information and display it.   

```js
import { useState } from 'react';

function MyButton() {
    // const [current state, function that lets you update the current state] = useState(initial value)
    const [count, setCount] = useState(0);

    function handleClick() {
        // Update the current state to a new value
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```

## Props
- **Props** is short for properties, props are passed to components in a way that is similar to passing arguments to a function!
- Props can include various data types, such as strings, numbers, booleans, objects (arrays and functions), and even other react components!
- When passing Strings as prop values, use quotes "", when passing other data types, use curly braces {}!

```jsx
const User = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </>
    );
};

<User name="Liam" age={24} />
```
OR destructuring:
```jsx
const User = ({ name, age }) => {
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    );
};

<User name="Liam" age={24} />
```

### Sharing data between components
If we need components to **share data and always update together**, we can first **move the state up** from the individual components into the closest component containing all of them, and then **pass the state down** as props!

