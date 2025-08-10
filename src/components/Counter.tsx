import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  onAddNumber: (number: number) => void;
}

const Counter: React.FC<CounterProps> = ({ onAddNumber }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  const addToList = () => {
    if (count > 0) {
      onAddNumber(count);
      setCount(0); // Reset counter after adding
    }
  };

  return (
    <div className="counter-section">
      <h2>Counter</h2>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-controls">
        <button 
          className="counter-btn decrement-btn" 
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>
        <button 
          className="counter-btn increment-btn" 
          onClick={increment}
        >
          +
        </button>
      </div>
      <button 
        className="add-btn" 
        onClick={addToList}
        disabled={count === 0}
      >
        Add to List
      </button>
    </div>
  );
};

export default Counter;
