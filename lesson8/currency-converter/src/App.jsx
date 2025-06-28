import './App.css'
import CurrencyConverter from "./CurrencyConverter";
import { useState } from 'react';

function App() {
  //shorthand, array destructuring
  const [count, setCount] = useState(0);


  const handleClick = () => {
    setCount(count + 1);
    alert(`Button clicked! Count is now: ${count + 1}`);
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyConverter />
      <p>Count: {count}  </p>
      <button onClick={handleClick}>
        Increment
      </button>
    </>
  )
}

export default App;
