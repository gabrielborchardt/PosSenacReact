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

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year

        const clients = await getClients()
        if (clients) {
            this.state({
                clients,
                dataAtual:date + '/' + month + '/' + year
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