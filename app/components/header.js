var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search')

class Header extends React.Component {
    render() {
      return(
        <div className="weather-header">
          <h1><a href="/">React Weather App</a></h1>
          <div className="header-search">
            <Search />
          </div>
        </div>
      )
    }
}

module.exports = Header
