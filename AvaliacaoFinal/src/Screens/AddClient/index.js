import React, { Component } from 'react'
import { Container, Input, Button, CardShadow, PickerGender, Image } from '../../components'
import { setClient } from '../../services/client'

class AddClient extends Component {

    state = {
        cliente: {
            id: '',
            name: '',
            email: '',
            gender: '',
        }
    }

    async componentDidMount () { 
        let cliente = this.props.navigation.state.params.cliente
        if(cliente){
            this.setState({ 
                cliente
            })
        }
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.updateData();
    }

    handleSaveClient = async() => {
        
        const { cliente } = this.state

        if(!cliente.name){
            alert("Digite seu nome.")
            return
        }

        if(!cliente.email){
            alert("Digite seu email.")
            return
        }

        try {            
            await setClient(cliente)

            if(cliente.id)
                alert('Cliente: ' + cliente.name + ' adicionado com sucesso!')
            else
                alert('Cliente: ' + cliente.name + ' alterado com sucesso!')                

            this.goBack()
          } catch (error) {
            alert(error)
          }
    }

    handleChange = type => text => {
        this.setState({
            cliente:{
                ...this.state.cliente, [type]: text
            }
        })
    }
    
    render () {
        const { cliente } = this.state

        return (
            <>
            <Container>
                
                {
                    cliente.gender === "M"
                    ? <Image source={{uri: 'http://d2f8l4t0zpiyim.cloudfront.net/000_clients/124138/page/h800-124138153017Yjm.jpg'}} />
                    : cliente.gender === "F"
                    ? <Image source={{uri: 'https://www.yescom.com.br/corridamulhermaravilha/2018/summer/img/ww.png'}} />
                    : <Button>Selecionar Imagem</Button>
                }

                <Input  
                    placeholder="Nome"
                    autoCapitalize='none'
                    value={cliente.name}
                    onChangeText={this.handleChange('name')}
                />

                <Input  
                    placeholder="Email"
                    keyboardType={'email-address'} 
                    autoCapitalize='none' 
                    value={cliente.email}
                    onChangeText={this.handleChange('email')}
                />

                <PickerGender
                    initialValue={cliente.gender}
                    gender={this.handleChange('gender')}
                />

            </Container>
                <CardShadow>
                    <Button onPress={this.handleSaveClient}>Salvar</Button>
                </CardShadow>
            </>
        )
    }
}

export default AddClient