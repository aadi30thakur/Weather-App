import React from 'react'
import "./data.css"

const Data = (props) => {
   const {temp} = props.value.main
   const {description} = props.value.weather[0]


    return (
        <div className="container h1 text-center">
            <div className="ab">
            {/* {main}<br/> */}
            {description}<br/>
            {Math.round(temp)}&#176;C
            </div>
            <div className="temp"></div>
        </div>
    )
};
export default Data;
