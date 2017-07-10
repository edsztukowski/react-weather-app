var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search')

class WeatherApp extends React.Component {
   render() {
     return (
       <div className="app-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <div className="search-container">
              <h2>Enter a City and State</h2>
              <Search value="" />
          </div>
       </div>
     )
   }
}

module.exports = WeatherApp
