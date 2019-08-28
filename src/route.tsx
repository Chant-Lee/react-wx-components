import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Home1 from './pages/home1'

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home1} />
    <Route exact path="/home1" component={Home} />
  </Switch>
)

export default BasicRoute
