import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './components/Routes'
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  </Provider>
)

export default App
