var React = require('react');
var ReactDOM = require('react-dom');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./loading');
var getUtils = require('../utils/data-cleanup');
var convertTemp = getUtils.convertTemp;
var getDay = getUtils.getDay;

function ShowDay(props) {
  var date = getDay(props.weekday.dt);
  var weatherIcon = props.weekday.weather[0].icon;
  return (
    <div className="day-container">
      <div className="icon">
        <img src={'../app/images/weather-icons/' + weatherIcon + '.svg'} />
      </div>
      <div className="subhead">{date}</div>
    </div>
  )
}

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
    console.log(weatherArr);
    if (this.state.loading) {
      return <Loading />
    } else {
        return (
          <div className="forecast-container">
            <ul className="five-day-list">
              {weatherArr.map(function(day) {
                  return (
                      <ShowDay key={day.dt} weekday={day} />
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
