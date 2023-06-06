console.log('hello')
// event listener for button
document.getElementById('cityButton').addEventListener('click', function(event){
  event.preventDefault()
  // gets form input value
  locationString = document.getElementById('city').value;
  // runs getcoordinate to fetch location
  getCoordinate(locationString)
  console.log(locationString)
});

// runs geolocation api to turn location string into coordinates
function getCoordinate(locationString) {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationString}&appid=5526d28663647ecbc08db11b4becf0e1`)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var getLatitude = data[0].lat;
      var getLongitude = data[0].lon;

      console.log(getLatitude, getLongitude);
      fetchWeather(getLatitude, getLongitude);
    });
}

// runs openweathermap api to turn coordinates into weather data
function fetchWeather(latitude, longitude) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=standard&cnt=5&appid=5526d28663647ecbc08db11b4becf0e1`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayForecast(data)
    });
}

function displayForecast(forecastData){
// current weather
  document.getElementById("temp").textContent = "Temperature: " + forecastData.list[0].main.temp;
  document.getElementById("weatherDesc").textContent =forecastData.list[0].weather[0].description;
  document.getElementById("windSpeed").textContent = "Wind Speed: " + forecastData.list[0].wind.speed;
  document.getElementById("humidity").textContent = "Humidity:" + forecastData.list[0].main.humidity;
  document.getElementById("date").textContent = forecastData.list[0].dt_txt;

// forecast 1
    document.getElementById("temp1").textContent = forecastData.list[1].main.temp;
    document.getElementById("weatherDesc1").textContent = forecastData.list[1].weather[0].description;
    document.getElementById("windSpeed1").textContent = forecastData.list[1].wind.speed;
    document.getElementById("humidity1").textContent = forecastData.list[1].main.humidity;
    document.getElementById("date1").textContent = forecastData.list[1].dt_txt;
  
//forecast 2
    document.getElementById("temp2").textContent = forecastData.list[2].main.temp;
    document.getElementById("weatherDesc2").textContent = forecastData.list[2].weather[0].description;
    document.getElementById("windSpeed2").textContent = forecastData.list[2].wind.speed;
    document.getElementById("humidity2").textContent = forecastData.list[2].main.humidity;
    document.getElementById("date2").textContent = forecastData.list[2].dt_txt;
//forecast 3
    document.getElementById("temp3").textContent = forecastData.list[3].main.temp;
    document.getElementById("weatherDesc3").textContent = forecastData.list[3].weather[0].description;
    document.getElementById("windSpeed3").textContent = forecastData.list[3].wind.speed;
    document.getElementById("humidity3").textContent = forecastData.list[3].main.humidity;
    document.getElementById("date3").textContent = forecastData.list[3].dt_txt;
  
//forecast 4
    document.getElementById("temp4").textContent = forecastData.list[4].main.temp;
    document.getElementById("weatherDesc4").textContent = forecastData.list[4].weather[0].description;
    document.getElementById("windSpeed4").textContent = forecastData.list[4].wind.speed;
    document.getElementById("humidity4").textContent = forecastData.list[4].main.humidity;
    document.getElementById("date4").textContent = forecastData.list[4].dt_txt;
}