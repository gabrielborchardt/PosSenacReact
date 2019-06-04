import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}

export default App
