import React, { useState } from 'react';

const Data = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='data'>
      <label htmlFor="data_nascimento">Data de nascimento </label>
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