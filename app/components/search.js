var React = require('react');
var ReactDOM = require('react-dom');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 80303
    };
  }
  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            name="searchQuery"
            value={this.state.zipcode}
          />
          <input
            type="submit"
            value="Get Weather"
          />
        </form>
      </div>
    )
  }
}


module.exports = Search
