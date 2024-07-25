# React
- [Tutorial](https://react.dev/learn)
- [Documentation](https://react.dev/reference/react)
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=ext_app_menu)

## Create React applications
1. Create React App
- [Documentation](https://create-react-app.dev/docs/getting-started)
- `npx create-react-app my-app`
- We only need to keep `public/index.html` (page template) and `src/index.js` (entry point)!


2. Vite (Recommended!)

## Theories
### Trigger, Render, and Commit
Any screen update in a React app happens in three steps:
1. Trigger a render
   There are 2 reasons for a component to render:
   1. It's the component's **initial render**: When the app starts, we need to triger the initial render!
   2. The component's **state has been updated**: Once the component has been initially rendered, we can trigger re-renders by updating its state (set function provided by useState)!

2. Render the component
   Once we trigger a render, React renders (calls) the components to figure out what to display on screen. Rendering must be pure!
   1. For the initial render: Reacr will call the root component
   2. For the re-renders: React will call the component whose state update triggered the render.

3. Commit to the DOM
   After rendering (calling) your components, React will modify the DOM. React only changes the DOM if there’s a difference between renders!
   1. For the initial render: React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
   2. For the re-renders: React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.


## Component
- React apps are made out of **componens**. A component is a piece of the **reusable UI** (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
- Components are **JavaScript functions** that return **HTML-like markup**. If the markup only has one line, then we can directly return it; However, if the markup has multiple lines, we should wrap it in a pair of parentheses! 
- Just like with HTML tags, you can **compose, order and nest** components to design whole pages. 
- Component names must start with a capital letter and use **PascalCase**.
- You can nest a component inside another component, but never define a component inside another component! Please define every component at the top level! When a child component needs some data from a parent, pass it by props instead of nesting definitions.
- React application begins at a **root** component file, e.g. `App.js`
- For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! However in React, **rendering logic and markup live together in the components** because they are related!
- Components must be **pure** functions: (1) They should not change any variables that existed before rendering (outside the component)! (2) Given the same input, they should always return the same output! React offers a **Strict Mode** in which it calls each component’s function twice during development to help find components that break these rules! Note that if we use `npx creat-react-app`, root component is wrapped into `<React.StrictMode></React.StrictMode>` by default!

### Component Example
```js
// Child component
function MyButton() {
    return <button>I'm a button</button>;
}

// Parent component
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
In order to make components more modular and reusable, we should (1) Make a new JS file to put the components in, (2) Export the component from that file, (3) Import the component in the file where we'll use it

### Export
There are two primary ways to export values with JavaScript: default exports and named exports. You can use one or both of them in the same file. A file can have **no more than one default export**, but it can have **multiple named exports**!

### Import
How you export the component dictates how you must import it!

### Conclusion
| Syntax | Export | Import |
|:------:|:------:|:------:|
| Default | `export default function Button() {...}` | `import Button from './Button.js';` |
| Named | `export function Button() {...}` | `import { Button } from './Button.js';` |

### Notes
- When importing a component, we can leave off the file extension! For example, we can write `import Button from './Button'`. Either `'./Button.js'` or `'./Button'` works with React, though the former is closer to how native ES Modules work!
- When you write a default import, you can put any name you want after import! For example, you could write `import AnyName from './Button.js'` instead and it would still provide you with the same default export. In contrast, with named imports, the name has to match on both sides. That’s why they are called named imports!
- People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values. To reduce potential confusion, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file.



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
- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It is optional, but most React projects use JSX for its convenience and conciseness. 
- JSX is similar to HTML, but a bit stricter:
  1. Your component **can’t return multiple elements**. You have to wrap them into a single parent tag, like `<div></div>` or `<></>`! This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
  2. **Tags have to be explicitly closed**: self-closing tags like `<img>` must become `<img />`, `<input>` must become `<input />`, `<br>` must become `<br />` and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`. 
  3. Since JavaScript doesn't allow variable names to contain dashes or be reserved words like `class`, many HTML attributes are written in **camelCase** and `class` attribute is written as `className`!
- [Converter: HTML to JSX](https://transform.tools/html-to-jsx)


## JSX with Curly Braces
JSX allows us to embed JavaScript expressions inside **Curly braces {}**!!! More examples are as follows:

### Displaying Data
We can use curly braces as **text** directly inside a tag or as **attributes** immediately following the `=` sign!
```js
const user = {
    name: 'Liam',
    imageUrl: 'https://image.tmdb.org/t/p/original/w6fCmYDlTNYfgdXBZjZH107c9zJ.jpg',
    imageSize: 200
};

return (
    <div>
        <h1>Welcome to my app, {user.name}!</h1>
        {/* We pass an object inside the curly braces to style attribute, that's why there are double curlies! */}
        {/* Inline style properties are written in camelCase! */}
        <img src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize / 2, height: user.imageSize / 2, borderRadius: '50%' }} /> 
    </div>
);
```

### Conditional Rendering
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
    {/* Don't put number on the left side of &&, put a boolean! */}
    {age > 18 && <p>Come</p>}
);
```

### Rendering List
```js
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
// We should give each array item a key - a string or a number that uniquely identifies that item!
// If data comes from database, then key can be database ID; If data is generated locally, then use an incrementing counter, crypto.randomUUID(), or uuid package when creating items!
// React uses the keys to know what happened if we later insert, delete, or reorder the items.
// The following syntax is called implicit return! It is the same as item => { return <li>...</li> }!
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
- Events propagate upwards. Call `e.stopPropagation()` inside the event handler of the child component to prevent that.
- Events may have unwanted default browser behavior. Call `e.preventDefault()` to prevent that.

```js
function MyButton() {
    // The event handler functions (1) Are usually defined inside the components (2) Have names that start with 'handle'
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        // We can also write inline event handlers using regular or arrow functions
        // No parentheses! We pass the function instead of calling the function!
        <button onClick={handleClick}>I'm a button</button>
        <button onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleClick();
        }}>I'm a button</button>

    );
}
```


## Props
- React components use **props** to communicate with each other. Every parent component can pass some information (props) to its child components. Props are passed to components in a way that is similar to passing arguments to a function!
- Props can be any JavaScript value, including strings, numbers, booleans, objects (arrays and functions), and even components! They should be inside curly braces!
- Props are not always static, a component may receive different props over time! Props reflect a component’s data at any point in time, rather than only in the beginning.
- Props are **immutable**, so that we can't change props! If we need interactivity, we should set state! 

### Props example
```js
export function User(props) {
    return (
        <>
            <h1>{props.person.name}, {props.person.age}</h1>
            <h1>{props.address}</h1>
        </>
    );
};

<User person={{ name: 'Liam', age: 24 }} address={'Chicago'} />
```
The above is equivalent to `destructuring` (recommended):
```js
export function User({ person, address }) {
    return (
        <>
            <h1>{person.name}, {person.age}</h1>
            <h1>{address}</h1>
        </>
    );
};

<User person={{ name: 'Liam', age: 24 }} address={'Chicago'} />
```

### Forward props with spread syntax
If a parent component forwards all of its props to its child component, we can use a more concise spread syntax! But don't overuse it!
```js
function Parent({ prop1, prop2, prop3 }) {
    return <Child prop1={prop1} prop2={prop2} prop3={prop3} />
}

// Spread syntax
function Parent(props) {
    return <Child {...props} />
}
```

### `children` prop
If we nest content inside a JSX tag, then the parent component will receive that content as a `children` prop:
```js
function Parent({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default function App() {
    return (
        <Parent>
            content
        </Parent>
    );
}
``` 
We often use the `children` prop for visual wrappers: panels, grids, etc.


## Hooks
- Functions starting with `use` are called **Hooks**. 
- Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.
- Hooks can only be called ***at the top of*** the components or our own Hooks! We cannot call Hooks inside conditions, loops, or other nested functions. If we need that, extract a new component and move the state into it!
- [Built-in React Hooks](https://react.dev/reference/react/hooks)

### `useState`
- [Documentation](https://react.dev/reference/react/useState)
- Often, we want our components to “remember” some information and display it. In React, this kind of component-specific memory is called ***state***.
- `useState` Hook provides two things: (1) A state variable to store the data between re-renders (2) A state setter function to update the state variable and trigger React to re-render the component.
- State is private to the component declaring it! If we render the same component twice, each copy gets its own isolated state! Changing one of them will not affect the other.

```js
import { useState } from 'react';

function MyButton() {
    // const [current state, function that lets you update the current state] = useState(initial value)
    const [count, setCount] = useState(0);

    function handleClick() {
        // Update the current state to a new value and trigger a re-render
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```


### Sharing data between components
If we need components to **share data and always update together**, we can first **move the state up** from the child components into the closest parent component containing all of them, and then **pass the state down** as props!

