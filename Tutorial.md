# React
- [Tutorial](https://react.dev/learn)
- [Documentation](https://react.dev/reference/react)
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=ext_app_menu)

## Create React Applications
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
- Component files (return HTML-like markup) must use `.jsx` extension!
- Upload to GitHub: Make sure to remove `node_modules` folder and `package-lock.json` file
- Clone from GitHub: `npm install` -> `npm run dev`


## Deployment
### GitHub pages
- [Tutorial](https://www.linkedin.com/pulse/deploy-your-react-app-using-github-pages-hasibul-islam/)
- Note that after installing gh-pages and editing package.json, we should push all the changes to repo! Then we run `npm run deploy` and we are all set! If we change the project, we should push all the changes to repo and then run `npm run deploy` again to deploy the project with latest changes!

### Netlify
1. Make sure the project has no warnings because Netlify treats warnings as errors!
2. 
  - `npm run build` - this can create a `build` folder (Creat React App) or a `dist` folder (Vite)!
  - Sites -> Add new site -> Deploy manually -> choose that folder
  **OR**
  - Sites -> Add new site -> Import an existing project -> GitHub -> choose a repo -> Build command: `npm run build`, Publish directory: `build` (Create React App) or `dist` (Vite) -> Add Environment Variables if any
  - Benefit: every time we push changes to GitHub, Netlify will automatically rebuild our project!
3. If we use `React Router`, remember to include `/* /index.html 200` as the content of `_redirects` file which should exist in the `public` folder!


## Environment Variables
- ***We don't have to install `dotenv` to access environment variables!!!***
- 1. Create a `.env` file in the **root** of the project to store environment variables and their values. Don't forget to include `.env` in `.gitignore`! If we use Create React App, the variable name must start with `REACT_APP_`; If we use Vite, the variable name must start with `VITE_`!
  2. If we use Creat React App, use `process.env.REACT_APP_VARIABLE` to access the value; If we use Vite, use `import.meta.env.VITE_VARIABLE` to accesss the value!


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
- Components are **JavaScript functions** that return **HTML-like markup (JSX)**. If the markup only has one line, then we can directly return it (we can further remove the curly braces and return because of arrow function shortcut!); However, if the markup has multiple lines, we should wrap it in a pair of parentheses! 
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

However, if the image file is stored in **`public`** folder (not recommended!), we can directly write:
```js
<img src='./image.jpg' />
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
- If data comes from database, then key can be database ID; If data is generated locally, then use an incrementing counter, crypto.randomUUID(), or uuid package (see Useful npm Packages!) when creating items!
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
    // A <form>'s submit event (onSubmit), which happens when a button inside of it is clicked or a text input is pressed Enter, will reload the whole page by default. We should prevent this unwanted default behaivor!
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
- Props can be any JavaScript value, including strings, numbers, booleans, objects (arrays and functions), and even components! They should be inside curly braces (except strings, they can also be inside quotes)!
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

// Spread syntax, same as above!
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

- `form` 
  - We don't use form's `action` and `method` properties to handle HTTP request, because we will use `axios`!
  - [Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  
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
    // const [state variable, state setter function] = useState(initial value)
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
- In React, state can hold any JavaScript value. If state is an object, although it is technically mutable, we should treat it **as if it is immutable** (like numbers, strings, and booleans)! As a result, we **should not mutate state**, in order to update the state, we should use the setter function to **replace** it with a new object!!!
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
- Since array is another kind of object in JavaScript, if state is an array, we should treat it as if it is immutable! As a result, we **should not mutate state**, in order to update the state, we should use the setter function to **replace** it with a new array!!!
- 1. Add: spread syntax
  1. Remove: `filter`
  2. Change: `map`
  3. Other changes like reverse or sort: Copy the array first and then make changes!
- [Write concise update logic with Immer - Optional](https://react.dev/learn/updating-arrays-in-state#write-concise-update-logic-with-immer)

```js
import { useState } from 'react';

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

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  return (
    <div>
      <input value={value} onChange={handleChange} />
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
- If we want a component to “remember” some information, but we don’t want that information to trigger re-renders, then we can use a ***ref***.
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
- If we want to synchronize the component with some external systems, we should use ***Effects***. Effects are side effects that are caused by rendering itself!
- By default, Effects run after every render (initial render and re-render)!
- `useEffect` Hook takes 2 parameters: (1) Setup function, it optionally returns a cleanup function (2) Dependencies (optional). To prevent lint errors, we can't choose dependencies, they are actually determined by the Effect's code!!!
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect), try to avoid using this Hook!

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

### `useContext`
- [Documentation](https://react.dev/learn/passing-data-deeply-with-context)
- Usually, we pass information from parent component to child component via props. However, if we have to pass the information through many components in the middle, or if many components need the same information, we can use ***context***! Context lets the parent component make some information available to any component in the tree below it!

#### Usage
1. **Create** a context
MyContext.js:
```js
import { createContext } from 'react';

// The default value is used when there is no matching context provider in the tree above the component that uses the context. If we don’t have any meaningful default value, leave it empty!
const MyContext = createContext(defaultValue);

export default MyContext;
```

2. **Provide** that context from the parent component that specifies the value
ParentComponent.jsx:
```js
import MyContext from './MyContext';

function ParentComponent() {
  return (
    <MyContext.Provider value={...}>
    {/* Where we want to use the value */}
    </MyContext.Provider>
  );
}
```

3. **Use** that context from the child component that needs the value
ChildComponent.jsx:
```js
import { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
  // 'contextValue' is the same as what we pass to the value property of MyContext.Provider! If no provider is found, 'contextValue' is the default value defined in 'createContext'!
  const contextValue = useContext(MyContext);

  return ...
}
```

#### Alternative Usage: Global Context
1. AppContext.jsx:
```js
import { createContext, useContext } from 'react';

const AppContext = createContext(defaultValue);

// Create a Custom Hook to use the context, the return value of useAppContext() is the same as what we pass to the value property of AppContext.Provider!
export const useAppContext = () => useContext(AppContext);

// We will wrap App component inside AppProvider component tags in main.jsx! So that all the components will have access to the value!
export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={...}>
      {children}
    </AppContext.Provider>
  );
}
```

2. main.jsx:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { AppProvider } from './AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
```

3. ChildComponent:
```js
import { useAppContext } from './AppContext';

const ChildComponent = () => {
  // Use the Custom Hook
  const contextValue = useAppContext();
  return ...
}
```

### `useReducer`
- [documentation](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- A component can have many event handlers to update states. We can consolidate all the state update logic outside the component in a single function, called a ***reducer***!
- Reducer is a different way to handle state! We can migrate from `useState` to `useReducer` in three steps:
  1. Move from setting state to dispatching action object, the action object must include 'type' property and may include additional properties!
  2. Write a reducer function, it has 2 parameters: state variable and action object, it returns the **next state value** (what we originally pass to the state setter function)!
  3. Use the reducer from the component, `useReducer` has 2 parameters: reducer function and initial state value, it returns the state variable and dispatch function! **If there are multiple state variables, then we can create a state object and each property is a state variable!**


#### Rewrite the example in 'Updating Arrays in State' using `useReducer`
UseReducerExample.jsx:
```js
import { useReducer } from 'react';
import peopleReducer from './peopleReducer';

let currentId = 0;

const UseReducerExample = () => {
  // const [value, setValue] = useState('');
  // const [people, setPeople] = useState([]);
  // 'state' is an object which has 2 properties: value and people. Each property is a state variable!
  const [state, dispatch] = useReducer(peopleReducer, { value: '', people: [] });

  const addItem = () => {
    // setPeople([
    //   ...people,
    //   { id: currentId++, name: value }
    // ])

    dispatch({
      type: 'add',
      id: currentId++,
      name: state.value
    });
  }

  const removeItem = (id) => {
    // setPeople(people.filter((person) => person.id !== id));

    dispatch({
      type: 'remove',
      id
    })
  }

  const updateItem = (id) => {
    // setPeople(people.map((person) => {
    //   if (person.id === id) {
    //     return { ...person, name: person.name + '✔' }
    //   } else {
    //     return person
    //   }
    // }));

    dispatch({
      type: 'update',
      id
    })
  }

  const handleChange = (e) => {
    // setValue(e.target.value);

    dispatch({
      type: 'change',
      value: e.target.value
    })
  }
  
  return (
    <div>
      <input value={state.value} onChange={handleChange} />
      <button className="btn" onClick={addItem}>Add</button>
      
      {state.people.map((person) => {
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

peopleReducer.js:
```js
const peopleReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      // Return the next state value!
      return {
        ...state,
        people: [
          ...state.people,
          { id: action.id, name: action.name }
        ]
      };
    }

    case 'remove': {
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.id)
      }
    }

    case 'update': {
      return {
        ...state,
        people: state.people.map((person) => {
          if (person.id === action.id) {
            return { ...person, name: person.name + '✔' };
          } else {
            return person;
          }
        })
      }
    }

    case 'change': {
      return {
        ...state,
        value: action.value
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default peopleReducer;
```

## Custom Hooks
- [Documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)
- Custom Hook is just a JavaScript function that lets us share stateful logic between components, it wraps reusable code and returns what we need! It is very straightforward to use!
- Same as other Hooks, Custom Hooks must be named starting with `use` followed by a capital letter




### Sharing data between components
If we need components to **share data and always update together**, we can first **move the state up** from the child components into the closest parent component containing all of them, and then **pass the state down** as props!


# Useful npm Packages
## `react-icons`
- [Documentation](https://react-icons.github.io/react-icons/)
- `npm install react-icons`
- Include popular icons in your React projects!

## `uuid`
- [Documentation](https://www.npmjs.com/package/uuid)
- `npm install uuid`
- Create a random UUID, normally used as a unique key prop for each child in a list!

## `nanoid`
- [Documentation](https://www.npmjs.com/package/nanoid)
- `npm install nanoid`
- Create a tiny, secure, unique string ID, normally used as a unique key prop for each child in a list!

## `react-slick`
- [Documentation](https://react-slick.neostack.com/docs/get-started)
- `npm install react-slick slick-carousel`
- Create carousel with ease

## `values.js`
- [Documentation](https://www.npmjs.com/package/values.js)
- `npm install values.js`
- Get tints and shades of a CSS color

## `react-toastify`
- [Documentation](https://fkhadra.github.io/react-toastify/introduction/)
- `npm install react-toastify`
- Create notifications with ease


# Axios
- [Documentation](https://axios-http.com/docs/intro)
- `npm install axios` | `import axios from 'axios'`

- The user can send a request to the server with `axios(config)`, `config` is an [object](https://axios-http.com/docs/req_config):
  1. `url` is the server URL (absolute or relative), it is the only required property for request config!
  2. `method` is the request method, the default value is 'get'!
  3. `data` is the data to be sent as the request body! We only use it in 'post', 'put', and 'patch' methods!
  4. `headers` are custom headers to be sent! e.g. `{ headers: { 'Authorization': 'Bearer <token>', 'Content-Type': 'application/json' } }`
  5. `baseURL` will be prepended to `url` unless `url` is absolute!

- We can also write method, url, and data outside of config:
  1. `axios.get(url[, config])`
  2. `axios.delete(url[, config])`
  3. `axios.post(url[, data[, config]])`
  4. `axios.put(url[, data[, config]])`
  5. `axios.patch(url[, data[, config]])`

- The return value of an Axios request is a Promise. 
  The resolved value is a [response object](https://axios-http.com/docs/res_schema) where **200 <= status code < 300**!
  1. `data` is the response provided by the server (res.send/res.json)
  2. `status` is the HTTP status code from the response (res.status)
  The rejected value is an [error object](https://axios-http.com/docs/handling_errors) where status code is **outside the range of 2xx**!
  1. `response` is the response object, see above!
  2. `message` is the error message provided by axios

- We can create a new [instance of axios](https://axios-http.com/docs/instance) with a custom config: `const instance = axios.create([config])`, this instance is used the same as axios! The instance config we specify when creating the instance will be **merged** with the request config when making the request!

- We can speficy [config defaults](https://axios-http.com/docs/config_defaults) that will be applied to every request:
  1. Global axios defaults: **Apply to all requests unless overridden by instances**
  e.g.: `axios.defaults.headers['Authorization'] = AUTH_TOKEN`
  2. Custom instance defaults: **Apply to this specific instance**
  e.g.: `instance.defaults.headers['Authorization'] = AUTH_TOKEN`

- We can [intercept](https://axios-http.com/docs/interceptors) requests or responses **before** they are handled:
  1. Request Interceptor:
  ```js
  // Add a request interceptor
  axios.interceptors.request.use((config) => {
    // Do something (with config object) before request is sent
    return config;
  }, (error) => {
    // Do something (with request error)
    return Promise.reject(error);
  });
  ```

  2. Response Interceptor:
  ```js
  // Add a response interceptor
  axios.interceptors.response.use((response) => {
    // Executed when 200 <= status code < 300
    // Do something (with response object) before response is received
    return response;
  }, (error) => {
    // Executed when status code is outside the range of 2xx
    // Do something (with error object) before response is received
    return Promise.reject(error);
  });
  ```


# React Query
- [Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- `npm install @tanstack/react-query`
- It is a state management library that simplifies the process of fetching, caching, synchronizing, and updating server state! It is always **used together with axios** or fetch!

## `useQuery`: GET
- [Documentation](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)
- Parameters: 
  1. [queryKey](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys): Query Keys are used to identify and manage queries, they have to be an Array at the top level and can be as simple as an Array with a single string. Note that **if queryFn has any variables, we should include them in the queryKey so that each time variables change, query will be refetched automatically!**
  2. [queryFn](https://tanstack.com/query/latest/docs/framework/react/guides/query-functions): Query Functions can be any functions that return a Promise! The Promise should either resolve or reject/throw an error! The parameter is [QueryFunctionContext](https://tanstack.com/query/latest/docs/framework/react/guides/query-functions#queryfunctioncontext)! 
- Returns:
  1. `data`: the resolved value of the returned Promise of the query function
  2. `error`: the rejected value/thrown error of the returned Promise of the query function

## `useMutation`: POST, DELETE, PUT/PATCH
- [Documentation](https://tanstack.com/query/latest/docs/framework/react/reference/useMutation)
- Parameters:
  1. `mutationFn`: Similar to `queryFn`, but the parameter can be any value! **If there are multiple parameters, we should combine them into an object!**
  2. `onError`: This function will be executed when mutation encounters an error, the first argument it provides is `error` which is the rejected value/thrown error of the returned Promise of the mutation function!
  3. `onSuccess`: This function will be executed when mutation is successful, the first argument it provides is `data` which is the resolved value of the returned Promise of the mutation function!
- Returns:
  1. `mutate`: **Different from `useQuery`, `useMutation` does not execute automatically. Instead, we need to use `mutate` to call `mutationFn` to perform the mutation!** We always use destructuring assignment to rename mutate to avoid confusion among POST, DELETE, and PUT/PATCH!
  2. `data`: the resolved value of the returned Promise of the mutation function
  3. `error`: the rejected value/thrown error of the returned Promise of the mutation function

## Usage:
1. main.jsx, similar to Global Context!
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
``` 

2. reactQueryCustomHooks.js
```js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// For GET request, we can directly use this custom hook to fetch data because useQuery executes automatically!
// There is no need to use useEffect!
export const useGetTasks = () => {
  const { data, error, isPending, isError, ... } = useQuery({
    // If queryFn has any variables, include them in the queryKey!!! So that each time variables change, query will be refetched automatically!
    queryKey: ['tasks'],
    queryFn: () => axios.get('/api/tasks')
  });

  // This data is the resolved value of the returned Promise of the query function
  // This error is the rejected value/thrown error of the returned Promise of the query function
  return { data, error, isPending, isError, ... };
}

// For POST, PUT/PATCH, DELETE requests, after importing custom hooks, we must use the mutate function to manually create, update, and delete data because useMutation doesn't execute automatically!

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, ... } = useMutation({
    mutationFn: (taskData) => axios.post('/api/tasks', taskData),
    
    // This function will be executed when mutation encounters an error
    // This error is the rejected value/thrown error of the returned Promise of the mutation function
    onError: (error) => console.log(error.response),
    // This function will be executed when mutation is successful
    // This data is the resolved value of the returned Promise of the mutation function
    onSuccess: (data) => {
      // Refetch query whose query key is ['tasks']!!!
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    }
  });

  return { createTask, ... };
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask, ... } = useMutation({
    mutationFn: ({ id, taskData }) => axios.patch(`/api/tasks/${id}`, taskData),
    
    onError: (error) => console.log(error.response),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    }
  });

  return { updateTask, ... };
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, ... } = useMutation({
    mutationFn: (id) => axios.delete(`/api/tasks/${id}`),
    
    onError: (error) => console.log(error.response),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    }
  });

  return { deleteTask, ... };
}
```


# React Router
- [Documentation](https://reactrouter.com/en/main)
- `npm install react-router-dom`

## [Route](https://reactrouter.com/en/main/route/route)
- Route is an object:
  - `path`:
    - When the route path matches the current url, the route element will be rendered. 
    - It can include dynamic segments that start with `:`! e.g. '/user/:userId' can match urls like '/user/123' or '/user/abc'! The loader function will have an argument `{ params }` where `params` is an object whose property is the dynamic segment after `:`! e.g. If path is '/user/:userId', then we can use 'params.userId' to access the exact value!
    - Child route path should not start with `/` and is relative to its parent!!!
  
  - `element`: the React Component to render
  
  - `errorElement`: the React Component to render when there is an error!
    -  When a route doesn't have an `errorElement`, errors will bubble up, so that we should at least have a root-level `errorElement`! 
    -  We can use `useRouteError()` to access the error object!
    -  While `errorElement` handles unexpected errors, we can also throw error response manually!
  
  - `children`: an array of Route objects. 
    - We should include `<Outlet />` in parent route element to render its child route elements **at this exact position!** 
    - The `<Outlet />` dynamically renders the child route element whose path is matched! 
    - We can also set an `Index Route` as a default child route which will render when its parent route path is matched! 
    - Note that all child route elements **share** the code of their parent! 
  
  - `loader`: a function to fetch data! 
    - Loader is called **before** route element renders! 
    - Loader must return sth and we can use `useLoaderData()` in the route element to access whatever it returns! Normally it returns the fetched data.
    - Loader function may have argument `{ params }` if route path has dynamic segments! 
    - Loader function may have argument `{ request }` if route receives Fetch Request!
  
  - `action`: a function to create, delete, and update data! 
    - Action is called **after** the app sends a **non-get** (method is post, delete, put/patch) submission (when `Form`'s submit event is triggered or use `useSubmit`'s `submit` function)!
    - Action must return sth and we can use `useActionData()` to access whatever it returns! Normally it returns `redirect` to redirect to a specific route or response.
    - Action function can also have arguments `{ params }` and `{ request }`
  
- `useNavigation`
  - [Documentation](https://reactrouter.com/en/main/hooks/use-navigation)
  - This Hook tells everything about page navigation: `const navigation = useNavigation();`
  - `navigation.state`:
    1. `idle`: No navigation pending
    2. `loading`: A **route loader** is being called
    3. `submitting`: A **route action** is being called

- `createBrowserRouter`:
  - [Documentation](https://reactrouter.com/en/main/routers/create-browser-router)
  - Parameters: 
    1. An array of Route objects
    2. opts

- Navigate between routes:
  1. `<Link to='...'></Link>`: It is used as HTML `<a href>` tag to navigate to another route!
  2. `<NavLink to='...'></NavLink>`: It is a special kind of `<Link>` that knows whether it is active, pending, or transitioning!
  3. `const navigate = useNavigate()`: We can use `navigate` function to navigate to another route! Note that `navigate(-1)` means going to the previous page!

- React Query and React Router
  - Together: React Query is about **how** to do sth and React Router is about **when** to do sth. We can include `useQuery` in `loader` and `useMutation` in `action`! If we are really confused, then just don't use `loader` and `action` and use `axios`!
  - Overlap: In React Query, `useQuery` and `useMutation` can return `error` and `isPending`. In React Router, we have `errorElement` and `useNavigation`!

- Netlify
  If we use Netlify to deploy the React project using React Router, remember to include `/* /index.html 200` as the content of `_redirects` file which should exist in the `public` folder!


## Usage
main.jsx, similar to React Query and Global Context!
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: ...,
  children: [
    {
      // Index Route (default child route)! Don't write `path: '/'` because it can lead to confusion and unexpected behavior!
      index: true,
      element: ...
      errorElement: ...,

    },
    {
      // This path has dynamic segment! It is relative to its parent route path and can match urls like: '/item/123', '/item/abc'
      path: 'item/:id',
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
```


# CMS (Content Management System)
- A CMS is a computer software used to manage the creation and modification of digital content! e.g WordPress
- A headless CMS is a backend only CMS that acts primarily as a content repository. A headless CMS makes content accessible via an API for display on any device, without being limited to a particular frontend! e.g. Contentful

## Contentful
- Usage:
  1. Content model -> Create content type -> Add field -> Save
  2. Content -> Add entry -> Publish (image should be published first)
  3. Settings -> API keys -> Copy `Space ID` and `Content Delivery API - access token` to .env file
  4. Content model -> Select specific content type -> Click `Copy ID` and save it to .env file
  5. [Get All Entries](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console/js) and [Query Entries](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/content-type/query-entries/console/js)
  
  6. `npm install contentful`
  ```js
  import { createClient } from 'contentful';

  const client = createClient({
    space: '<space_id>',
    environment: 'master', // default to 'master' if not set
    accessToken: '<content_delivery_api_key>'
  });

  const response = await client.getEntries({ content_type: '<content_type_id>' });
  // An array of entry objects
  const entries = response.items.map((item) => {
    // Used as array item's key
    const id = item.sys.id;
    
    // If a field is text, we can extract it from item.fields.text
    // If a field is image, we can extract its url from item.fields.image.fields.file.url
    const { image, text } = item.fields;
    const img = image?.fields?.file?.url;

    // A single entry
    return { id, text, img };
  })
  ```


# Figma


