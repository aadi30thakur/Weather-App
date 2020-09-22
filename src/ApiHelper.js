import { API } from "./API";



export const FetchWeather = (Value)=>{
    return fetch(`api.openweathermap.org/data/2.5/weather?q=${Value}&appid=${API}`)
    .then((response) =>{
        console.log(response)
        return response.json();
    })
    .catch(err=>console.log(err))
}