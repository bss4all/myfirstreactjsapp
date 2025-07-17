import React, { useState } from 'react';
import './App.css';

function App() {

  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [selectedColor, setSelectedColor] = useState('red');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleColor = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="fruit-select">Choose a fruit:</label>
      <select id="fruit-select" value={selectedFruit} onChange={handleChange}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>You selected: {selectedColor}</p>
      <label htmlFor="color-select">Choose a Color:</label>
      <select id="color-select" value={selectedFruit} onChange={handleColor}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <p>You selected Color : {selectedColor}</p>
    </div>
  );
}

export default App;
