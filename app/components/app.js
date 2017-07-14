var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search')
var Forecast = require('./forecast')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class WeatherApp extends React.Component {
   render() {
     return (
      <Router>
        <div className="app-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <Route path ='/forecast' component={Forecast} />
          <Route exact path = '/' component={Search} />
        </div>
      </Router>
     )
   }
}

module.exports = WeatherApp
