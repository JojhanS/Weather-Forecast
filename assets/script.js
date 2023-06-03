function fetchWeather(type) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=5526d28663647ecbc08db11b4becf0e1")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      });
  }

  