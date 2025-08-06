import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const increment = () => {
    setCount(prev => prev + 1);
    alert('Hello Member1');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = () => {
    alert('Welcome');
  };

  const handleClick = () => {
    alert('I was clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(amount) * 80;
    alert(`Converting to ${currency} Amount is ${result}`);
    setAmount('');
    setCurrency('');
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={sayWelcome}>Say welcome</button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>

      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


