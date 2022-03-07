import React, { useEffect, useState } from "react";
import './App.css';

function Counter() {

  const [counter, setCounter] = useState(5)

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  }
  return (
    <div>
      <h1>
        Value: {counter}
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
function App() {
  return (
    Counter()
  )
}

export default App;
