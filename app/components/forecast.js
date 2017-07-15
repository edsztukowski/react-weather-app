var React = require('react');
var ReactDOM = require('react-dom');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./loading')

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      loading: true
    }
    this.updateWeather = this.updateWeather.bind(this);
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

    api.fetchWeather(zip)
      .then(function (response) {
        this.setState(function () {
          return {
            loading: false,
            weatherData: response,
          }
        })
        console.log(this.state.weatherData)
      }.bind(this))
  }

  render() {
    return (
      <div className="forecast-container">
        <h2>We Are the forecast!</h2>
      </div>
    )
  }
}

module.exports = Forecast;
