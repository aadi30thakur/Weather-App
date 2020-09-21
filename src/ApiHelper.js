import { API } from "./API";



export const FetchWeather = ()=>{
    return fetch(`api.openweathermap.org/data/2.5/weather?q=shimla&appid=${API}`,{
        method:"GET",
       
    }).then((response) =>{
        console.log(response)
        return response.json();
    })
    .catch(err=>console.log(err))
}