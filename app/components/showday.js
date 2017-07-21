var React = require('react');
var getUtils = require('../utils/data-cleanup');
var convertTemp = getUtils.convertTemp;
var getDay = getUtils.getDay;

function ShowDay(props) {
  var date = getDay(props.weekday.dt);
  var weatherIcon = props.weekday.weather[0].icon;
  return (
    <div onClick={props.onClick} className="day-container">
      <div className="icon">
        <img src={'../app/images/weather-icons/' + weatherIcon + '.svg'} />
      </div>
      <div className="subhead">{date}</div>
    </div>
  )
}

module.exports = ShowDay;
