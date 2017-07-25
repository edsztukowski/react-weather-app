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
        <img src={"/" + weatherIcon + '.svg'} />
      </div>
      <div className="subhead"><p>{date}</p></div>
      {props.children}
    </div>

  )
}

module.exports = ShowDay;
