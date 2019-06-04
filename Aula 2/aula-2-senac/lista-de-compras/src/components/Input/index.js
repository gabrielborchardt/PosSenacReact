import React from 'react'

const Input = (props) =>{
    return (
        <input type="text" style={styles} {...props} />
    )
}

const styles = {
    padding: 5
}

export default Input