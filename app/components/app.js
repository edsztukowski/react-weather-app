var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./search');
var Forecast = require('./forecast');
var Detail = require('./detail')
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
            <Route path ='/forecast' component={Forecast} />
            <Route path = '/details' component={Detail} />
            <Route exact path = '/' component={Search} />
            <Route render={function() {
                return (
                  <div className="404-page">
                    <p>Not Found!</p>
                  </div>
                )
            }} />
          </Switch>
        </div>
      </Router>
     )
   }
}

module.exports = WeatherApp
