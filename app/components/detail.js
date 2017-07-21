var React = require('react')
var ShowDay = require('./showday');


class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: 'blank still'
    };
  }

  render() {
    return(
      <h2>
        {this.state.weatherData}
      </h2>
    )
  }

}



module.exports = Detail
