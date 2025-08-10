import React from 'react';
import './ListView.css';

interface ListViewProps {
  numbers: number[];
  sortOrder: 'asc' | 'desc';
  onToggleSort: () => void;
  onClearList: () => void;
}

const ListView: React.FC<ListViewProps> = ({ 
  numbers, 
  sortOrder, 
  onToggleSort, 
  onClearList 
}) => {
  const getHighestNumber = () => {
    return numbers.length > 0 ? Math.max(...numbers) : null;
  };

  const getLowestNumber = () => {
    return numbers.length > 0 ? Math.min(...numbers) : null;
  };

  const highestNumber = getHighestNumber();
  const lowestNumber = getLowestNumber();

  return (
    <div className="list-section">
      <div className="list-header">
        <h2>Number List</h2>
        <div className="list-controls">
          <button 
            className="sort-btn" 
            onClick={onToggleSort}
            disabled={numbers.length < 2}
          >
            Sort {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
          <button 
            className="clear-btn" 
            onClick={onClearList}
            disabled={numbers.length === 0}
          >
            Clear List
          </button>
        </div>
      </div>
      
      {numbers.length === 0 ? (
        <div className="empty-list">
          <p>No numbers added yet. Use the counter above to add some!</p>
        </div>
      ) : (
        <>
          <div className="list-stats">
            <div className="stat-item">
              <span className="stat-label">Count:</span>
              <span className="stat-value">{numbers.length}</span>
            </div>
            {highestNumber !== null && (
              <div className="stat-item">
                <span className="stat-label">Highest:</span>
                <span className="stat-value highest">{highestNumber}</span>
              </div>
            )}
            {lowestNumber !== null && (
              <div className="stat-item">
                <span className="stat-label">Lowest:</span>
                <span className="stat-value lowest">{lowestNumber}</span>
              </div>
            )}
          </div>
          
          <div className="numbers-list">
            {numbers.map((number, index) => (
              <div 
                key={index} 
                className={`number-item ${
                  number === highestNumber ? 'highest' : 
                  number === lowestNumber ? 'lowest' : ''
                }`}
              >
                <span className="number-value">{number}</span>
                <span className="number-index">#{index + 1}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListView;
