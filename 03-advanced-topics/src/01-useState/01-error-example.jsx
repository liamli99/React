const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>increase</button>
    </div>
  );
};

export default ErrorExample;
