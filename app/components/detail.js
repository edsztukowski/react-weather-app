var React = require('react')

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "DETAILS"
    };
  }

  render() {
    return(
      <h2>
        {this.state.text}
      </h2>
    )
  }

}



module.exports = Detail
