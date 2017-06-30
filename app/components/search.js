var React = require('react');
var ReactDOM = require('react-dom');

class Search extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" name="searchQuery"/>
          <input type="submit" value="Get Weather"/>
        </form>
      </div>
    )
  }
}


module.exports = Search
