import React, { useState } from 'react'

const FormInput=()=> {
    const [value, setValue] = useState("")
    const handleChange=(event)=>{
        setValue(event.target.value);
     }


     
    return (
        <div>
            <form className="form container ">
        <input type="text" 
            className="form-control" 
            value={value}  
            onChange={handleChange.bind(value)} 
            placeholder="Enter the name of the place"
        />
      </form>
        </div>
    )
}

export default FormInput;
