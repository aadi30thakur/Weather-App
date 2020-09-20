import React, { useState } from 'react'
import { FetchWeather } from './ApiHelper'
import Data from './Data'

const FormInput=()=> {
    const [value, setValue] = useState("")
    const [weather, setWeather] = useState()

/* ----------------------------- handling change ---------------------------- */

    const handleChange=(event)=>{
        setValue(event.target.value);
     }

    const settingWeather = ()=>{
        
        FetchWeather(value).then((res)=>{ 
        setWeather(res)
        console.log(res)
       }
        )
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
        <button type="submit"
            onClick={settingWeather}
            >Search</button>
      </form>

      <Data value= {weather} />
        </div>
    )
}

export default FormInput;
