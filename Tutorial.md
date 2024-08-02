# React
- [Tutorial](https://react.dev/learn)
- [Documentation](https://react.dev/reference/react)
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=ext_app_menu)

## Create React applications
### Create React App
- [Documentation](https://create-react-app.dev/docs/getting-started)
- Create a new project: `npx create-react-app my-app` -> `cd my-app` -> `npm start`
- We should at least keep `public/index.html` (page template) and `src/index.js` (entry point)!
- Upload to GitHub: Make sure to remove `node_modules` folder and `package-lock.json` file
- Clone from GitHub: `npm install` -> `npm start`


### Vite (Recommended!)
- [Documentation](https://vitejs.dev/guide/)
- Create a new project: `npm create vite@latest my-app -- --template react` -> `cd my-app` -> `npm install` -> `npm run dev`
- We should at least keep `index.html` (page template) and `src/main.jsx` (entry point)!
- Must use `.jsx` extension
- Upload to GitHub: Make sure to remove `node_modules` folder and `package-lock.json` file
- Clone from GitHub: `npm install` -> `npm run dev`


## Theories
### UI as a Tree
1. **Render trees** represent the nested relationship between React components across a single render.
2. **Dependency trees** represent the module dependencies in a React app.

### Trigger, Render, and Commit
Any screen update in a React app happens in three steps:
1. Trigger a render
   There are 2 reasons for a component to render:
   1. When the app starts, we need to triger the **initial render**!
   2. Once the component has been initially rendered, we can trigger **re-renders** by updating its state (set function provided by useState)!

2. Render the component
   Once we trigger a render, React renders (calls) the components to figure out what to display on screen. Rendering must be pure!
   1. For the initial render: React will call the root component
   2. For the re-renders: React will call the component whose state update triggered the render.

3. Commit to the DOM
   After rendering (calling) your components, React will modify the DOM tree. React only changes the DOM if there’s a difference between renders!
   1. For the initial render: React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
   2. For the re-renders: React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

When to trigger re-renders:
1. When the component's state or props is changed.
2. When the parent component is re-rendered.



## Component
- React apps are made out of **componens**. A component is a piece of the **reusable UI** (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
- Components are **JavaScript functions** that return **HTML-like markup**. If the markup only has one line, then we can directly return it (we can further remove the curly braces and return because of arrow function shortcut!); However, if the markup has multiple lines, we should wrap it in a pair of parentheses! 
- Just like with HTML tags, you can **compose, order and nest** components to design whole pages. 
- Component names must start with a capital letter and use **PascalCase**.
- You can nest a component inside another component, but never define a component inside another component! Please define every component at the top level! When a child component needs some data from a parent, pass it by props instead of nesting definitions.
- React application begins at a **root** component file, e.g. `App.js`
- For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! However in React, **rendering logic and markup live together in the components** because they are related!
- Components must be **pure** functions: (1) They should not change any variables that existed before rendering (outside the component)! (2) Given the same input, they should always return the same output! React offers a **Strict Mode** in which it calls each component’s function twice during development (doesn't affect production) to help find components that break these rules! Note that if we use 'Create React App' or 'Vite', root component App is wrapped into `<React.StrictMode></React.StrictMode>` by default!

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

### Component Lifecycle
1. A component ***mounts*** when it is added to the screen/DOM
2. A component ***updates*** when it receives new state or props
3. A component ***unmounts*** when it is removed from the screen/DOM


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

### Import Styles
Suppose we have a CSS file `style.css`:
```css
.container {
    margin: 10px;
}

```
Suppose a component is in the same folder as the CSS file and wants to load it:
```js
import './style.css';

// className works the same way as the HTML class attribute
<div className="container"></div>
```

**Note that even if we import the css file in one of the component files, the styles are applied globally to the entire application!!!** In order to scope styles to a specific component, we should use **CSS Modules**:
1. Rename the css file: `style.module.css`
2. Import and use the css module: 
```js
import styles from './style.module.css';

<div className={styles.container}></div>
```

### Import Images
Suppose we have an image file `image.jpg`, and suppose a component is in the same folder as the image file and wants to load it:
```js
import img from './image.jpg';

// Note that 'img' is a string which is the actual path to 'image.jpeg'! Don't write src='./image.jpg'!!!
<img src={img} />
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
    {/* If age > 18, then <p>Come</p>; If age <= 18, then nothing! */}
    {/* Don't put number on the left side of &&, put a boolean! */}
    {age > 18 && <p>Come</p>}
);
```

### Rendering List
- We should give each array item a key - a string or a number that uniquely identifies that item!
- If data comes from database, then key can be database ID; If data is generated locally, then use an incrementing counter, crypto.randomUUID(), or uuid package when creating items!
- React uses the keys to know what happened if we later insert, delete, or reorder the items.
  
```js
const items = [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }];
// The following syntax is called implicit return! It is the same as item => { return <li>...</li> }!
const itemList = items.map(item =>
    <li key={item.id}>
        {item.name}
    </li>
);

return (
    {/* 'itemList' is an array! We can put an array inside curly braces to render elements in order! */}
    <ul>{itemList}</ul>
);
```

### Responding to Events
- Events propagate upwards. Call `e.stopPropagation()` inside the event handler of the child component to prevent that. 
- Events may have unwanted default browser behavior. Call `e.preventDefault()` inside the event handler to prevent that. 
- We can handle events by passing event handler functions as props. Event handler functions (1) Must be passed, not called (no parentheses) (2) Are usually defined inside the components and passed as props to children (3) Have names that start with `handle` and followed by the name of the event (4) Can also be defined inline using regular or arrow functions 
- For more details about passing functions, see JavaScript Callback for reference!

```js
function MyButton() {
    // A <form> submit event (onSubmit), which happens when a button inside of it is clicked, will reload the whole page by default. We should prevent this unwanted default behaivor!
    function handleSubmit(e) {
        e.stopDefault();
    }

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div onClick={handleClick}>
                <button onClick={(e) => {
                    {/* The onClick event can propogate upwards so that clicking the button can show 2 alerts! We should stop propagation! */}
                    e.stopPropagation();
                    handleClick();
                }}>I'm a button</button>
            </div>
        </form>
    );
}
```


## Props
- React components use **props** to communicate with each other. Every parent component can pass some information (props) to its child components. Props are passed to components in a way that is similar to passing arguments to a function!
- Props can be any JavaScript value, including strings, numbers, booleans, objects (arrays and functions), and even components! They should be inside curly braces (except strings, they also can be just inside quotes)!
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
The above is equivalent to `destructuring` (recommended!):
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
If we nest content inside component tags, then the parent component will receive that content as a `children` prop:
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



## Forms
- `<label>`
  - [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
  - `htmlFor` attribute is used to **associate** a label with a form control (e.g. button, input, select, textarea), the value of `id` attribute of the form control should be the same as the value of `htmlFor` attribute of label!

- `<input>`: 
  - [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  - [React Documentation](https://react.dev/reference/react-dom/components/input)
  - `id` attribute is used for label association
  - `name` attribute is used as key in `FormData`
  - For text input, we can set `value` to a state variable to make the input **controlled**! Note that if we set `value`, we have to add `onChange` event handler to the input! Otherwise, the input is read-only!
  - For checkbox/radio input, we set `checked` instead of `value` to make input controlled! If we set `checked`, we also have to add `onChange`!
  - If we don't want to make input controlled, we can set `defaultValue` or `defaultChecked` to specify the initial value for the input!

- `<select>`:
  - [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
  - Usage is similar to text input! We can set `value`  attribute to a state variable to make the select box controlled! If we set `value`, we have to add `onChange`!
  - We need to include a list of `<option>`s inside `<select>`!


- `FormData` API
  - We can use `FormData` API to handle multiple inputs!
  - By using `FormData`, we don't need to make input controlled! It means that we don't need to set `value`/`checked` attribute and `onChange` event handler. We can set `defaultValue` or `defaultChecked` to specify the initial value
  - We must include `name` attribute because it is used as a key in form data!!! 

### Controlled Inputs
```js
import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with name, then make input empty
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </div>
    </form>
  );
}
```

### Uncontrolled Inputs
Besides `FormData`, we can also use `useRef` to write uncontrolled inputs!

```js
const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);
    // Do some thing with user, user is an object that has input name as property and input value as value
    // Then make input empty
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
        <button>Submit</button>
      </div>
    </form>
  );
}
```


## Hooks
- Functions starting with `use` are called **Hooks**. 
- Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.
- Hooks can only be called ***at the top of*** (still inside) the components or our own Hooks! We cannot call Hooks inside conditions, loops, or other nested functions. If we need that, extract a new component and move the state into it!
- [Built-in React Hooks](https://react.dev/reference/react/hooks)

### `useState`
- [Documentation](https://react.dev/reference/react/useState)
- Often, we want our components to “remember” some information and display it. In React, this kind of component-specific memory is called ***state***.
- `useState` Hook returns an array with two values: (1) A state variable to retain the data between re-renders (2) A state setter function to update the state variable and trigger React to re-render the component.
- State is private to the component declaring it! If we render the same component twice, each copy gets its own isolated state! Changing one of them will not affect the other!
- State is different from regular JS variables, it behaves more like a snapshot. Setting it doesn't change the state variable we already have, but instead triggers a re-render!
- Setting state only changes it for the ***next*** render! A state variable's value **is fixed within a render**! 
- React waits until all code in the event handlers has run before processing the state updates (re-render), this is called **batching**, which makes the React app run faster by preventing multiple re-renders during a single event!
- If we want to update the same state variable multiple times before the next render, instead of passing the **next state value** like `setCount(count + 1)`, we should pass an **updater function** like `setCount(n => n + 1)`!

```js
import { useState } from 'react';

function MyButton() {
    // const [state variable, state setter function to update the state variable] = useState(initial value)
    const [count, setCount] = useState(0);

    function handleClick() {
        // Replace the state variable 'count' with a new value 'count + 1'
        setCount(count + 1);
        // Same as above!
        setCount(count + 1);
        // Increase the state variable 'count' in relation to its latest state!!!
        setCount(count => count + 1);

        // Setting 'count' only changes it for the next render! 'count' is fixed within a render!
        console.log(count);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```

#### Updating Objects in State
- In React, state can hold any JavaScript value. If state is an object, although it is technically mutable, we should treat it **as if it is immutable** (like numbers, strings, and booleans)! So that the setter function should **replace** it with a new object instead of mutating it!!!
- If we want to include existing data as part of the new object, then we can use spread syntax and only incude property values that we want to override!
- [Update a nested object](https://react.dev/learn/updating-objects-in-state#updating-a-nested-object)
- [Write concise update logic with Immer - Optional](https://react.dev/learn/updating-objects-in-state#write-concise-update-logic-with-immer)

```js
import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books'
  });

  const displayPerson = () => {
    // setPerson({
    //   name: 'liam',
    //   age: 25,
    //   hobby: 'travel'
    // });

    // Spread syntax
    setPerson({
      ...person,
      age: 27,
      hobby: 'go home'
    });
  }
  
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        Show Liam
      </button>
    </>

  );
};
```

#### Updating Arrays in State
- Since array is another kind of object in JavaScript, if state is an array, we should treat it as if it is immutable! So that the setter function should **replace** it with a new array instead of mutating it!!!
- 1. Add: spread syntax
  2. Remove: `filter`
  3. Change: `map`
  4. Other changes like reverse or sort: Copy the array first and then make changes!
- [Write concise update logic with Immer - Optional](https://react.dev/learn/updating-arrays-in-state#write-concise-update-logic-with-immer)

```js
import { useState } from "react";

// We should define it outside the component to retain its value between re-renders!
let currentId = 0;

const UseStateArray = () => {
  const [value, setValue] = useState('');
  const [people, setPeople] = useState([]);

  const addItem = () => {
    setPeople([
      ...people,
      { id: currentId++, name: value }
    ])
  }

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  }

  const updateItem = (id) => {
    setPeople(people.map((person) => {
      if (person.id === id) {
        return { ...person, name: person.name + '✔' }
      } else {
        return person
      }
    }));
  }
  
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button className="btn" onClick={addItem}>Add</button>
      
      {people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeItem(person.id)}>remove</button>
            <button className="btn" onClick={() => updateItem(person.id)}>update</button>
          </div>
        );
      })}
    </div>
  );
};
```

### `useRef`
- [Documentation](https://react.dev/reference/react/useRef)
- If we want a component to “remember” some information, but we don’t want that information to trigger re-renders, then we can use a **ref**.
- `useRef` Hook returns an object (ref) with a single property `current`. We can directly change `ref.current`, and the component doesn't re-render! Like state, ref is also retained between re-renders!
- We should use refs when the component needs to store some value between re-renders, and the value doesn't impact the rendering logic!
- The most common use case of refs is to manipulate DOM elements. Usually, we use refs for non-destructive actions like focusing, scrolling, or meauring DOM elements.

```js
import { useRef } from 'react';

function UseRef() {
  const inputRef = useRef(null);

  function handleClick() {
    // Besides `FormData`, we can also use `useRef` to write uncontrolled inputs!
    console.log(inputRef.current.value);
    // Focus the input
    inputRef.current.focus();
  }

  return (
    <>
      {/* Put this input's DOM node into inputRef.current! */}
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

#### Differences between `useRef` and `useState`
| ref | state | 
|:------:|:------:|
| Returns `{ current: initialValue }` | Returns `[state, setState]` |
| Doesn't trigger re-render when you change it | Triggers re-render when you change it |
| Mutable - we can modify ref.current's value outside of the rendering, it changes immediately | Immutable - we must use setter function to modify state, it changes for the next render |
| We shouldn't read or write ref.current during rendering | We can read state at any time |



### `useEffect`
- [Documentation](https://react.dev/reference/react/useEffect)
- If we want to synchronize the component with some external systems, we should use **Effects**. Effects are side effects that are caused by rendering itself!
- By default, Effects run after every render (initial render and re-render)!
- `useEffect` Hook takes 2 parameters: (1) Setup function, it optionally returns a cleanup function (2) Dependencies (optional). To prevent lint errors, we can't choose dependencies, they are actually determined by the Effect's code!!!
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

#### Usage
```js
import { useEffect, useRef } from 'react';

function App() {
    useEffect(() => {
        // This setup code runs after every render (initial render and re-render)
    });

    useEffect(() => {
        // This setup code runs only when the component mounts (added to the screen, initial render)
    }, []); 

    useEffect(() => {
        // This setup code runs (1) when the component mounts (2) if either props or state has changed (triggering re-render), run with new props and state

        // Optional: This is a cleanup function that runs (1) when the component unmounts (removed from the screen) (2) if either props or state has changed, run with old props and state (before setup code runs with new props and state!!!)
        return () => {
        }
    }, [props, state]) 
}
```


## Custom Hooks



### Sharing data between components
If we need components to **share data and always update together**, we can first **move the state up** from the child components into the closest parent component containing all of them, and then **pass the state down** as props!

## Deployment
### GitHub pages
- [Tutorial](https://www.linkedin.com/pulse/deploy-your-react-app-using-github-pages-hasibul-islam/)
- Note that after installing gh-pages and editing package.json, we should push all the changes to repo! Then we run `npm run deploy` and we are all set! If we change the project, we should push all the changes to repo and then run `npm run deploy` again to deploy the project with latest changes!

### Netlify
1. Make sure the project has no warnings because Netlify treats warnings as errors!
2. 
  - `npm run build` - this can create a build folder
  - Sites -> Add new site -> Deploy manually -> choose build folder
  **OR**
  - Sites -> Add new site -> Import an existing project -> GitHub -> choose a repo -> Build command: `npm run build`, Publish directory: `build` (Benefit: every time we push changes to GitHub, Netlify will automatically rebuild our project!)


# Useful npm Packages
## `react-icons`
- [Documentation](https://react-icons.github.io/react-icons/)
- `npm install react-icons`
- Include popular icons in your React projects!



# Figma


