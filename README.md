# Weather App

A web application designed to provide relevant information on weather in New York City, NY, USA

 
## Features

- Responsive and reusable React components
- The public API service [OpenWeather API]('https://openweathermap.org/api') to get current and forecast weather data
 - Weather forecast chart implemented with [Chart.js]('https://www.chartjs.org/')

## Run locally
Make sure that `baseUrl = "http://localhost:3005/onecall"` in `weather-frontend\src\utils\WeatherApi.js`

Both in weather-frontend and weatherApi folders:

`npm install` - to install dependencies

`npm run start` — to launch the server.

View the project at [http://localhost:3000](`http://localhost:3000`)

## Next Steps
- add the ability to select other cities
- add weather description to chart tooltip
