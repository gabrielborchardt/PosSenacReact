import React, { Component } from 'react'
import { Container, Text, Button } from '../../components';
import { FlatList } from "react-native";
import { getClients } from '../../services/client'

class Home extends Component {
    state = {
        dataAtual: '',
        clients: []
    }

    async componentDidMount () {

        const clients = await getClients()

        console.log(clients)

        if (clients) {
            this.state({
                clients,
                dataAtual: '05/07/2019'
            })
        }
    }

    handleAddClient = async event =>{
        event.preventDefault()
        this.props.navigation.navigate('AddClient')
    }  

    render () {
        return (
            <>
            <Container>
                <Text>{this.state.dataAtual}</Text>
                <FlatList
                    data={this.state.clients}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    // showsVerticalScrollIndicator={false}
                />
                <Button onPress={this.handleAddClient}>Adicionar Cliente</Button>
            </Container>
            </>
        )
    }
}

export default Home