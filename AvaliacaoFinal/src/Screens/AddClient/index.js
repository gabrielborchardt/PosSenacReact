import React, { Component } from 'react'
import { Container, Input, Button, CardShadow } from '../../components'
import uuid from 'react-native-uuid'
import { setClient } from '../../services/client'

class AddClient extends Component {

    state = {
        name: '',
        email: ''
    }

    handleSaveClient = async() => {
        
        const {name, email} = this.state

        if(!name){
            alert("Digite seu nome.")
            return
        }

        if(!email){
            alert("Digite seu email.")
            return
        }

        try {
            const key = UUIDGenerator.getRandomUUID()
            const client = {'key': key, 'name' : this.state.name , 'email' : this.state.email }
            const response = await setClient(client)

            alert('Cliente: ' + name + 'Adicionado com sucesso')
            this.props.navigation.navigate('Home')
          } catch (error) {
            alert(error)
          }
    }

    handleChange = type => text => {
        this.setState({
            [type]: text
        })
    }

    handleGuid = async event =>{
        event.preventDefault()
        console.log(uuid.v4());
    }

    render () {
        const {name, email} = this.state

        return (
            <>
            <Container>
                <Input  
                    placeholder="Nome"
                    autoCapitalize='none'
                    value={name}
                    onChangeText={this.handleChange('name')}
                />

                <Input  
                    placeholder="Email"
                    autoCapitalize='none'
                    value={email}
                    onChangeText={this.handleChange('email')}
                />
                <CardShadow>
                    <Button onPress={this.handleSaveClient}>Salvar</Button>
                    <Button onPress={this.handleGuid}>GUID</Button>
                </CardShadow>
            </Container>
            </>
        )
    }
}

export default AddClient