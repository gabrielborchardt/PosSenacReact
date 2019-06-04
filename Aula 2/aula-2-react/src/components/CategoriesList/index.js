import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories } from '../../redux/modules/category'

class CategoriesList extends Component {
  componentDidMount () {
    this.props.loadCategories()
  }

  render () {
    const { categories, isLoading, hasError } = this.props

    if (hasError) {
      return <span>DEU RUIM</span>
    }
    if (isLoading) {
      return <span>Carregando...</span>
    }
    return (
      <div>
        <ul>
          {
            categories.map(item => {
              return (
                <li key={item.id}>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.data
  }
}

const mapDispatchToProps = {
  loadCategories
}

export default
connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
