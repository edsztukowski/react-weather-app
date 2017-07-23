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

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.zipcode)
    window.location.assign('/forecast/?zipcode=' + this.state.zipcode)
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
    <div className="search-container">
      <h2>Enter a City and State</h2>
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="zipcode"
            onChange={this.handleChange}
            value={this.state.zipcode}
          />
          <button
            className='btn'
            type="submit"
            disabled={!this.state.zipcode}
            >
            Submit
          </button>
        </form>
      </div>
    </div>
    )
  }
}


module.exports = Search
