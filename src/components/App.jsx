import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setTime((time) => time + 1);
  };

  return (
    <>
      <h2>React Hooks Demo</h2>
      <h3>you click {time} times</h3>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default App;
