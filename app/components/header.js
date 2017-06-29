var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
    render() {
      return(
        <div className="weather-header">
          <h1>My Main Header</h1>
        </div>
      )
    }
}

module.exports = Header
