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

  render() {
    var weatherArr = this.state.weatherData.list;
    //console.log(weatherArr)
    if (this.state.loading) {
      return <Loading />
    } else {
        return (
          <div className="forecast-container">
            <ul className="five-day-list">
              {weatherArr.map(function(day) {
                console.log(day)
                  return (
                    <li key={day.dt}>
                      {day.weather[0].description}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
  }
}

module.exports = Forecast;
