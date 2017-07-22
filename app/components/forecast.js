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

  handleSubmit(zip) {
    this.props.history.push({
      pathname: '/details/' + this.state.weatherData.city.name,
      state: zip,
    })
  }

  render() {
    var weatherArr = this.state.weatherData.list;
    if (this.state.loading) {
      return <Loading />
    } else {
        return (
          <div className="forecast-results">
            <h2>Your forecast for {this.state.weatherData.city.name}</h2>

          <div className="row">
              {weatherArr.map(function(day) {
                  return (
                    <div key={day.dt}>
                      <ShowDay
                        onClick={this.handleSubmit.bind(this, day)}
                        weekday={day} />
                    </div>
                  )
                }, this)
              }
          </div>
          </div>
        )
      }
  }
}

module.exports =  Forecast;
