var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css')
var WeatherApp = require('./components/app')
var Header = require('./components/header')

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('app')
)

ReactDOM.render(
  <Header />,
  document.getElementById("site-header")
)
