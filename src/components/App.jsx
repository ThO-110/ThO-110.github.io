import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import ReduxDemo from "../pages/reduxDemo/reduxDemo";

const CounterContext = createContext();

function Index() {
  const time = useContext(CounterContext);
  useEffect(() => {
    console.log(`Welcome to Index Page`);
    return () => {
      console.log(`You leave Index Page`);
    };
  }, [time]);
  return (
    <>
      <h2>Index Page</h2>
      <h2>{time}</h2>
    </>
  );
}

function List() {
  useEffect(() => {
    console.log(`Welcome to List Page`);
    return () => {
      console.log(`You leave List Page`);
    };
  });
  return <h2>List Page</h2>;
}

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log(`you have clicked ${time} times`);
  }, [time]);

  const handleClick = () => {
    setTime((time) => time + 1);
  };

  return (
    <>
      <h2>React Hooks Demo</h2>
      <h3>you click {time} times</h3>
      <Button variant="outlined" color="secondary" onClick={handleClick}>
        click
      </Button>
      <Router>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/redux-demo">ReduxDemo</Link>
          </li>
          <CounterContext.Provider value={time}>
            <Route path="/" exact component={Index} />
          </CounterContext.Provider>
          <Route path="/list" component={List} />
          <Route path="/redux-demo" component={ReduxDemo} />
        </ul>
      </Router>
    </>
  );
}

export default App;
