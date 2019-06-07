import React, { Component } from 'react'
import CategoriesList from '../../components/CategoriesList'
import ItemsList from '../../components/ItemsList'
import ItemForm from '../../components/ItemForm'
import './styles.css'

class Home extends Component {
  render () {
    return (
      <div className='container'>

        <div className='column'>
          <CategoriesList />
          <ItemForm />
        </div>
        <div className='column'>
          <ItemsList />
        </div>
      </div>
    )
  }
}
export default Home
