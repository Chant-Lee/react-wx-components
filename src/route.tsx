import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/home'
import Home1 from './pages/home1'

class BasicRoute extends Component<any> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lazy/img" component={Home1} />
        <Route exact path="/home1" component={Home} />
      </Switch>
    )
  }
}

export default withRouter(BasicRoute)
