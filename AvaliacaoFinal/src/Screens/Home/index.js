import React, { Component } from 'react'
import { Container } from '../../components';

class Home extends Component {
    state = {
        isVisible: false
    }

    openModal = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render () {
        return (
            <Container>

            </Container>
        )
    }
}

export default Home