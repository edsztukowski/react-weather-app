var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    var stop = this.props.text + '...';
    this.interval = window.setInterval(function() {
      if (this.state.text === stop) {
        this.setState(function() {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }.bind(this), 300)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return(
      <p className="loading" style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text: 'Loading'
}

module.exports = Loading
