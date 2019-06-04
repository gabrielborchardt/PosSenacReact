import React from 'react'
import './styles.css'

const ListItem = ({children, ...props}) => {
    return (
        <li className='item' {...props}>
            {children}
        </li>
    )
}

export default ListItem