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
        console.log(weather.main.temp)
        setValue("")
      });
    }
  };
  return (
    <div>
      <div className="form container ">
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
        <Data value={weather} />
      </div>
    </div>
  );
};

export default FormInput;
