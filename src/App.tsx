import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ListView from './components/ListView';

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const addNumber = (number: number) => {
    if (number > 0 && !numbers.includes(number)) {
      setNumbers(prev => [...prev, number]);
    }
  };

  const clearList = () => {
    setNumbers([]);
  };

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const sortedNumbers = [...numbers].sort((a, b) => {
    return sortOrder === 'asc' ? a - b : b - a;
  });

  return (
    <div className="App">
      <div className="container">
        <h1>Counter and List App</h1>
        <Counter onAddNumber={addNumber} />
        <ListView 
          numbers={sortedNumbers} 
          sortOrder={sortOrder}
          onToggleSort={toggleSort}
          onClearList={clearList}
        />
      </div>
    </div>
  );
}

export default App;
