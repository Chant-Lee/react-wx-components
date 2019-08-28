import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home'

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default BasicRoute
