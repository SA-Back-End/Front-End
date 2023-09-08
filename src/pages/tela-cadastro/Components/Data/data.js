import React, { useState } from 'react';
import './data.css'

const Data = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='div-data'>
      <label htmlFor="data_nascimento" className='label-dataNasc'>Data de nascimento </label><br/>
      <input
        type="date"
        id="data_nascimento"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Data;