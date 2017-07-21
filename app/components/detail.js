var React = require('react')
var ShowDay = require('./showday');


class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: null
    };
  }

  render() {
    return(
      <h2>
        <ShowDay />
      </h2>
    )
  }

}



module.exports = Detail
