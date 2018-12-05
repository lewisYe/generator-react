import React from 'react';
import { HashRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'
import { Switch } from 'react-router-dom';
import routes from './routes/index';
import { RouteWithSubRoutes } from './util'

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            {
              routes && routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))
            }
          </Switch>
        </HashRouter>
    )
  }
}

export default hot(module)(App)