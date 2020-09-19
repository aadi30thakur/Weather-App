const  Key = process.env.APIKEY;
export const FetchWeather = (value)=>{
    return fetch(`api.openweathermap.org/data/2.5/weather?id=${value}&appid=${Key}`,{
        method:"GET",

    }).then((res) =>{
        return res.json();
    })
    .catch(err=>console.log(err))
}