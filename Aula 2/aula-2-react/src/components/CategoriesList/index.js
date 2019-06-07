import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories, setCategory } from '../../redux/modules/category'

class CategoriesList extends Component {
  componentDidMount () {
    this.props.loadCategories()
  }

  handleChange = event => {
    console.log(event.target.value)
    this.props.setCategory(event.target.value)
  }

  render () {
    const { categories, isLoading, hasError, selectedCategory } = this.props

    if (hasError) {
      return <span>DEU RUIM</span>
    }
    if (isLoading) {
      return <span>Carregando...</span>
    }
    return (
      <div>
        <select value={selectedCategory} onChange={this.handleChange}>
          <option selected='null' disabled />
          {
            categories.map(item => {
              console.log(item)
              return (
                <option name='category-option' key={item.id} value={item.id}>
                  {item.name}
                </option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCategory: state.categories.selectedCategory,
    categories: state.categories.data,
    isLoading: state.categories.isLoading,
    hasError: state.categories.hasError,
  }
}

const mapDispatchToProps = {
  loadCategories,
  setCategory
}

export default
connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
