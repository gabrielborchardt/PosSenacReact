import React from 'react'

const List= ({children}) => {
    return (
        <ul style={styles}>
            {children}
        </ul>
    )
}

const styles = {
    padding: 0,
    margin: 0
}

export default List