import React from 'react'

const Button = ({children, ...props}) => {
    return (
        <button style={styles} {...props}>{children}</button>
    )
}

const styles = {
    marginTop: 20
}

export default Button