import React, { Component } from 'react'
import { Container, Input, Button, CardShadow, PickerGender, Image } from '../../components'
import { setClient } from '../../services/client'
import Camera from '../Camera'
import CameraRoll from '../CameraRoll'

class AddClient extends Component {

    state = {
        cliente: {
            id: '',
            name: '',
            email: '',
            gender: '',
        },
        isVisibleCam: false,
        isVisibleCameraRoll: false,
        image: null,
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

    toggleCamera = () => {
        this.setState({ isVisibleCam: !this.state.isVisibleCam });
    }

    toggleCameraRoll = () => {
        this.setState({ isVisibleCameraRoll: !this.state.isVisibleCameraRoll });
    }

    setImage = (image) => {
        this.setState({
            cliente:{
                ...this.state.cliente, image: image
            }
        })
    }

    render () {
        const { cliente, isVisibleCam, isVisibleCameraRoll } = this.state

        return (
            <>

            <Camera
                visible={isVisibleCam}
                close={() => this.toggleCamera()}
                callback={this.setImage}
            />

            <CameraRoll
                visible={isVisibleCameraRoll}
                close={() => this.toggleCameraRoll()}
                callback={this.setImage}
            />

            <Container>

                {
                    cliente.image
                    ? <Image source={{uri: cliente.image}} />
                    : <Container>
                        <Button onPress={() => this.toggleCamera()}>Tirar Foto</Button>
                        <Button onPress={() => this.toggleCameraRoll()}>Selecionar Imagem </Button>
                      </Container>
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

                <CardShadow>
                    <Button onPress={this.handleSaveClient}>Salvar</Button>
                </CardShadow>

            </Container>
        
            </>
        )
    }
}
  
export default AddClient