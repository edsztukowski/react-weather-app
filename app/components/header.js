var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search')

function Header(props) {
  return(
    <div className="weather-header">
      <h1><a href="/">React Weather App</a></h1>
      <div className="header-search">
        {props.children}
      </div>
    </div>
  )
}

module.exports = Header
