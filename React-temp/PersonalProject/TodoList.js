import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    // const newList = todoList.slice();
    // newList.push(inputValue);
    // setTodoList(newList);
    setTodoList([...todoList, inputValue]);
  };

  const deleteTask = (order) => {
    // const newList = todoList.slice();
    // newList.splice(order, 1);
    // setTodoList(newList);
    setTodoList(todoList.filter((_, index) => index !== order));
  };

  return (
    <div className="App">
      <div className='addTask'>
        {/* we can also write onChange={(event) => handleChange(event)} */}
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <div className='list'>
        {todoList.map((value, index) => {
          return (
            <>
              <h1>{value}</h1>
              {/* we cannot write onClick={deleteTask} because its parameter is not event! */}
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button>Complete</button>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default App;