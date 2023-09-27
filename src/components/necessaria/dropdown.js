import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Opção 1', 'Opção 2'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const updatedOptions = [option];
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="opcoes">
        {selectedOptions.length > 0 ? `${selectedOptions}` : 'Selecionar'}
        {isOpen ? ' ᐱ' : ' V'} 
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                checked={selectedOptions[0] === option}
                onChange={() => handleOptionClick(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Dropdown;
