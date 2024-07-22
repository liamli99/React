import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [people, setPeople] = useState({});

  const handleValue = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${inputValue}`).then((res) => {
      setPeople(res.data);
    })
  };

  return (
    <div className="App">
      <input onChange={handleValue}/>
      <button onClick={fetchData}>Generate People</button>
      <p>Age: {people.age}</p>
      <p>Count: {people.count}</p>
    </div>
  )
}

export default App;