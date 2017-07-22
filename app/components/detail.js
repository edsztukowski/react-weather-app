var React = require('react')
var ShowDay = require('./showday');
var getUtils = require('../utils/data-cleanup');
var convertTemp = getUtils.convertTemp;


class Detail extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className="detail-view">
        <h2>
          <ShowDay weekday={this.props.location.state}>
          Temp: {convertTemp(this.props.location.state.temp.day)}
          </ShowDay>
        </h2>
      </div>
    )
  }

}



module.exports = Detail
