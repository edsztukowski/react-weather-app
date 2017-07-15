var React = require('react');
var ReactDOM = require('react-dom');
var queryString = require('query-string');
var api = require('../utils/api')

class Forecast extends React.Component {
  componentDidMount() {
    var myZip = queryString.parse(this.props.location.search)
    myZip = myZip.zipcode;
    api.fetchWeather(myZip)
     .then(function(response) {
       console.log(response)
     })

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
