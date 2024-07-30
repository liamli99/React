import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle1(!toggle1)}>
        toggle component
      </button>
      {toggle1 && <SomeComponent />}

      <button className="btn" onClick={() => setToggle2(!toggle2)}>
        toggle component - timer example
      </button>
      {toggle2 && <TimerExample />}

      <button className="btn" onClick={() => setToggle3(!toggle3)}>
        toggle component - event listener example
      </button>
      {toggle3 && <EventListenerExample />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    // This code runs when the component mounts (added to the screen)
    console.log('Added to screen');

    // This code runs when the component unmounts (removed from the screen)
    return () => {
      console.log('Removed from screen');
    }
  }, []);

  return <h1>hello</h1>
}

const TimerExample = () => {
  useEffect(() => {
    // This code runs when the component mounts (added to the screen)
    const intervalID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);

    // This code runs when the component unmounts (removed from the screen)
    return () => clearInterval(intervalID);
  }, []);

  return <h1>hello</h1>
}

const EventListenerExample = () => {
  useEffect(() => {
    // This code runs when the component mounts (added to the screen)
    const handleResize = () => {
      // some logic
    };

    window.addEventListener('resize', handleResize);

    // This code runs when the component unmounts (removed from the screen)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <h1>hello</h1>
}

export default CleanupFunction;
