import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Main from '../pages/Main'

import Interior from '../pages/Interior'
import Design from '../pages/Design'
import Machine from '../pages/Machine'
import Model from '../pages/Model'
import Promotion from '../pages/Promotion'

function baseRoute() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/interior' component={Interior} />
      <Route path='/design' component={Design} />
      <Route path='/machine' component={Machine} />
      <Route path='/model' component={Model} />
      <Route path='/promotion' component={Promotion} />
    </Switch>
    </Router>
  )
}

export default baseRoute