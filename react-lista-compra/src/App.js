import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}

export default App
