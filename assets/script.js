

console.log('hello')
document.getElementById('cityButton').addEventListener('click', function(event){
  event.preventDefault()
  locationString = document.getElementById('city').value;
  getCoordinate(locationString)
});

function getCoordinate(locationString) {
  fetch(`http:api.openweathermap.org/geo/1.0/direct?q=${locationString}&appid=5526d28663647ecbc08db11b4becf0e1`)
  .then(function (response) {
    console.log("hi");
    return response.json();
    })
    .then(function(data) {
      console.log(data)
      var getLatitude = data.lat
      var getLongitude = data.lon

      console.log(getLatitude,getLongitude)
}

)};

function fetchWeather(type) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=5526d28663647ecbc08db11b4becf0e1")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      });
  }

