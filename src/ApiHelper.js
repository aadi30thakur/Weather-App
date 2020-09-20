require('dotenv').config()

const  Key = process.env.API;

export const FetchWeather = ()=>{
    const  value = "shimla"
    console.log(`${Key}`)
    return fetch(`api.openweathermap.org/data/2.5/weather?q=${value}&appid=6a1d73afe2efa22ccbfb742028768309`,{
        method:"GET",

    }).then((res) =>{
        return res.json();
    })
    .catch(err=>console.log(err))
}