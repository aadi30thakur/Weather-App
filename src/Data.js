import React, { useEffect, useState } from 'react'
import "./data.css"

const Data = (props) => {
   const temp = props.value.main


    return (
        <div className="container ab">
            {JSON.stringify(temp)}
            <div className="temp"></div>
        </div>
    )
};
export default Data;
