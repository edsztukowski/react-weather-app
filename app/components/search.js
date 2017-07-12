var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    api.fetchWeather(this.state.zipcode)
     .then(function(response) {
       console.log(response)
     })
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        zipcode:value
      }
    });
  }
  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            name="zipcode"
            onChange={this.handleChange}
            value={this.state.zipcode}
          />
          <button
            type="button"
            disabled={!this.state.zipcode}
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}


module.exports = Search
