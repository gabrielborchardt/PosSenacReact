import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fillList } from '../../redux/modules/items'

class ItemsList extends Component {
    componentDidMount () {
        this.props.fillList()
    }
    render() {
        const { items } = this.props
        return (
            <div>
                <ul>
                    {
                        items.map(item => {
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
    items: state.items.data
  }
}

const mapDispatchToProps = {
  fillList
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)