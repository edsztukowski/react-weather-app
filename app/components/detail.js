var React = require('react')
var ShowDay = require('./showday');
var getUtils = require('../utils/data-cleanup');
var convertTemp = getUtils.convertTemp;


class Detail extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className="detail-view">
        <h2>Detailed View</h2>
        <h3>
          <ShowDay weekday={this.props.location.state}>
          <p className="weather-desc">{this.props.location.state.weather[0].description}</p>
          <p className="high">High: {convertTemp(this.props.location.state.temp.max)}<sup>&deg;</sup>F</p>
          <p className="low">Low: {convertTemp(this.props.location.state.temp.min)}<sup>&deg;</sup>F</p>
          </ShowDay>
        </h3>
      </div>
    )
  }

}



module.exports = Detail
