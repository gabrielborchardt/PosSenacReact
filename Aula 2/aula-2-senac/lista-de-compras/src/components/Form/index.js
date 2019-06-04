import React from 'react'

const Form = ({children, ...props}) => {
    return (
        <form {...props} style={styles.form}>
            <h2 style={styles.title}>Lita de compras</h2>
            {children}
        </form>
    )
}

const styles = {
    form: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        maxHeight: 600,
        width: 400,
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        textAlign: 'center'
    }
}

export default Form