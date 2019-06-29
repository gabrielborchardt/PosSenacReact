import React, { Component } from 'react'
import { View, Text, Modal, Button, StatusBar, Platform } from 'react-native'
import styled from 'styled-components'
import { Picker } from '../../components'

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
            <View>
                <Button onPress={this.openModal} title='Abrir seletor' />
                <Modal close={this.openModal} visible={this.state.isVisible}>
                    <View
                        style={{
                            paddingTop:
                            Platform.OS === 'android' 
                                ? StatusBar.currentHeight : 20,
                            flex: 1
                        }}
                    >
                        <StatusBar />
                        <Picker />
                        <Button title='fechar' onPress={this.openModal} />
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Home