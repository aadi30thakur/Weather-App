const { ApiKey, Base } = require("./API");
export const FetchWeather = (Value) => {
  console.log(`${ApiKey}`);
  console.log(`${Base}`);
  return fetch(`${ApiKey}?q=${Value}&units=Metric&appid=${Base}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
