import React, { Component, Fragment } from 'react'
import CategoriesList from '../../components/CategoriesList'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <CategoriesList />
        </div>
        <div />
      </Fragment>
    )
  }
}
export default Home
