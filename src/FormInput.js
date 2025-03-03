import React, { useState } from "react";
import { FetchWeather } from "./ApiHelper";
import Data from "./Data";
const FormInput = () => {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState([]);
  /* ----------------------------- handling change ---------------------------- */
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const settingWeather = (event) => {
    if (event.key === "Enter") {
      FetchWeather(value).then((res) => {
        setWeather(res);
        if(weather){
          console.log(weather)
        }
        setValue("")
      }).catch(err=>console.log(err));
    }
  };
  return (

    <div className=
      {weather.main? 
        (weather.main.temp>20?weather.main.temp>30? "hot": "moderate" :"cold")
        :
        ""
      }>
      <div className="form container mt-5 ">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={handleChange.bind(value)}
          onKeyPress={settingWeather}
          placeholder="Enter the name of the place"
        />
      </div>
      <div className="container">
        {weather.main? <Data value={weather} /> : ""}
      </div>
    </div>


  );
};

export default FormInput;
