var React = require('react')
var ShowDay = require('./showday');


class Detail extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className="detail-view">
        <h2>
          <ShowDay weekday={this.props.location.state} />
        </h2>
      </div>
    )
  }

}



module.exports = Detail
