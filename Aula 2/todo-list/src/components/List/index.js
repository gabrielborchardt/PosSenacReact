import React, { Component } from 'react'
import './list.css'

class List extends Component {
    render () {
    const { data, handleClickItem } = this.props

    return (
      <div>
          <ul className='list'>
              {
                  data.map((item, index) =>
                        <li 
                            onClick={
                                () => handleClickItem(index)
                            } 
                            className='list-item' 
                            key={index}>
                            {item}
                        </li>
                    )
              }
        </ul>
      </div>
    )
  }
}

export default List
