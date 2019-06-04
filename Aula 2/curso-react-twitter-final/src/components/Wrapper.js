import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <React.Fragment>
        <Header key='header' {...props} />
        <div key='container' className='container'>
          <Component {...props} />
        </div>
      </React.Fragment>
    )}
  />
)
