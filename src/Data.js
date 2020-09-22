import React from 'react'
import "./data.css"
const Data=(props)=> {
    return (
        <div className= "container ab">
            {JSON.stringify(props.value)}
        </div>
    )
}
export default Data
