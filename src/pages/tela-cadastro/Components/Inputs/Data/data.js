import './data.css'

const Data = (props) => {

  const handleDateChange = () => {
    props.onDateUpdate(document.getElementById('data_nascimento').value)
  };

  return (
    <div className='data'>
      <input
        type="date"
        id="data_nascimento"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Data;