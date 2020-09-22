const { ApiKey, Base } = require("./API");
export const FetchWeather = (Value) => {
  return fetch(`${ApiKey}?q=${Value}&units=Metric&appid=${Base}`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
