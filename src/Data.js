import React from 'react'
import { FetchWeather } from './ApiHelper'

import "./data.css"

const Data=(props)=> {
    return (
        <div className= "container ab">
            {JSON.stringify(FetchWeather())}
        </div>
    )
}

export default Data
