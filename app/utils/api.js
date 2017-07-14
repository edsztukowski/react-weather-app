var axios = require('axios');

module.exports = {
  fetchWeather: function (zipcode) {
    var apiKey = 'a62f7a63749676dd43fbfc9700bdf15c';
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + zipcode + '&type=accurate&APPID=' + apiKey);

    return axios.get(encodedURI)
      .then(function(response){
        return response.data;
      })
  },

  fetchFiveDays: function(zipcode) {
    var apiKey = 'a62f7a63749676dd43fbfc9700bdf15c';
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + zipcode + '&type=accurate&APPID=' + apiKey + '&cnt=5');

    return axios.get(encodedURI)
      .then(function(response){
        return response.data;
      })
  }
}
