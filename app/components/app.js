var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search')
var Forecast = require('./forecast')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class WeatherApp extends React.Component {
   render() {
     return (
      <Router>
        <div className="app-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <Switch>
            <Route exact path ='/forecast' component={Forecast} />
            <Route exact path = '/' component={Search} />
            <Route render={function() {
                return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
     )
   }
}

module.exports = WeatherApp
