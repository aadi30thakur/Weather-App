import React, { useEffect, useState } from 'react'
import "./data.css"

const Data = (props) => {
   const {temp} = props.value.main


    return (
        <div className="container ab h1">
            {Math.round(temp)}&#176;C
            <div className="temp"></div>
        </div>
    )
};
export default Data;
