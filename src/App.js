import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'pear', label: 'Pear' },
];

function App() {

  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleFruits = (selected) => {
    setSelectedOptions(selected);
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
      <h3>Select Fruits</h3>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleFruits}
      />
      <h4>You selected:</h4>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
