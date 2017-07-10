var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 80303
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        zipcode:value
      }
    })
  }
  handleSubmit(event) {
    preventDefault(event);


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
            type="submit"
            disabled={!this.state.zipcode}
            onSubmit={this.handleSubmit}>
            Submit
        </button>
        </form>
      </div>
    )
  }
}


module.exports = Search
