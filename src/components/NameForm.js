import { useState } from "react";

import './nameForm.style.css';

function NameForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.whenSubmit(inputs);
  }

  return (
    <div >
    <form onSubmit={handleSubmit} className="mainForm">
    <label>Super Balance: </label>
      <input 
        type="number" 
        name="superbalnce" 
        value={inputs.superbalnce || ""} 
        onChange={handleChange}
      />
     
      <label>Retirement Age: </label>
      <input 
        type="number" 
        name="retirementAge" 
        value={inputs.retirementAge || ""} 
        onChange={handleChange}
      />
     
      <label>Target Age:</label>
        <input 
          type="number" 
          name="targetAge" 
          value={inputs.targetAge || ""} 
          onChange={handleChange}
        />
        
        <input type="submit" className="submitBtn"/>
    </form>
    </div>
  )
}

export default NameForm;