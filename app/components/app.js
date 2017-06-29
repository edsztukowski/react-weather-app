var React = require('react');
var ReactDOM = require('react-dom');

class WeatherApp extends React.Component {
   render() {
     return (
       <div className="app-container">
          <div className="search-container">
              <h2>Enter a City and State</h2>
          </div>
       </div>
     )
   }
}

module.exports = WeatherApp
