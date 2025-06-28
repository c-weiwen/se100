import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Pretend fetch data');
  }, []);
      
  const handleMouseEnter = () => {
    alert('Button clicked!');
  }

  const handleCurrencyChange = (e) => {
        alert(`Selected currency: ${e.target.value}`);
      };

  return (
    <>
      <h1>Currency Converter</h1>
        <button onMouseOver={handleMouseEnter}>
            Just click!
            </button>
      
            <select name="currency" id="currencySelect" onChange={handleCurrencyChange}>
             <option value="usd">USD</option>
             <option value="jpy">JPY</option>
             <option value="sgd">SGD</option>
             <option value="myr">MYR</option>
            </select>
    </>
  )
}

export default App;
