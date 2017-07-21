var React = require('react');
var ReactDOM = require('react-dom');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./loading');
var getUtils = require('../utils/data-cleanup');
var ShowDay = require('./showday')
var convertTemp = getUtils.convertTemp;
var getDay = getUtils.getDay;



class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      loading: true
    }
    this.updateWeather = this.updateWeather.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.zip = queryString.parse(this.props.location.search);
    this.zip = this.zip.zipcode;
    this.updateWeather(this.zip);
  }
  updateWeather(zip) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.fetchFiveDays(zip)
      .then(function (response) {
        this.setState(function () {
          return {
            loading: false,
            weatherData: response,
          }
        })
      }.bind(this))
  }

/*
  handleSubmit(props) {
    console.log("The city is " + this.state.weatherData.city.name);
    console.log("The country is " +this.state.weatherData.city.country);
    console.log("The temperature is " + convertTemp(props.temp.day));
    console.log("Expect " + props.weather[0].description);
    console.log("The day is " + getDay(props.dt));
  }

  handleSubmit(props) {
    var dataObj = {
      city: this.state.weatherData.city.name,
      country: this.state.weatherData.city.country,
      temp: convertTemp(props.temp.day),
      currentDay: getDay(props.dt)
    }
    window.history.pushState(dataObj, '', '/details/' + this.state.weatherData.city.name);
  }
  */

  handleSubmit(zip) {
    this.props.history.push({
      pathname: '/details/' + this.zip,
      state: zip,
    })
  }


  render() {
    var weatherArr = this.state.weatherData.list;
    if (this.state.loading) {
      return <Loading />
    } else {
        return (
          <div className="forecast-container">

              {weatherArr.map(function(day) {
                  return (
                    <div key={day.dt}>
                      <ShowDay onClick={this.handleSubmit.bind(this, day)}
                      weekday={day} />
                    </div>
                  )
                }, this)
              }

          </div>
        )
      }
  }
}

module.exports =  Forecast;
