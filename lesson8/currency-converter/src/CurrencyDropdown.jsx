import './CurrencyDropdown.css';
import { userEffect } from 'react';


const CurrencyDropdown = () => {
    const [currencyList, setCurrecyList] = useState([])
  const handleCurrencyChange = (e) => {
    alert(`Selected currency: ${e.target.value}`);
  };

  return (
    <select name="currency" id="currencySelect" onChange={handleCurrencyChange}>
      <option value="usd">USD</option>
      <option value="jpy">JPY</option>
      <option value="sgd">SGD</option>
      <option value="myr">MYR</option>
    </select>
  );
};