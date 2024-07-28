const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Replace the state variable 'count' with a new value 'count + 2'
    setCount(count + 2);
    // Replace the state variable 'count' with a new value 'count + 1'
    setCount(count + 1);
    // Increase the state variable 'count' in relation to its latest state!!!
    setCount(n => n + 1);

    // 'count' is fixed within a render!
    alert(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>increase</button>
    </div>
  );
};

export default UseStateGotcha;
