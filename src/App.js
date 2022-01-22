import './App.css';
import React, { useState } from 'react';
import RandomUser from './components/RandomUser';

function App() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  return (
    <div className='app'>
      <div className='center'>
        <h1>Counter App</h1>
        <h3>{value}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <RandomUser />
    </div>
  );
}

export default App;
