import React, { Component } from 'react'
import styled from 'styled-components';
import { Text, Input, Button, Container, CardShadow, PickerGender } from '../../components';
import { auth } from '../../services/auth'

class SignUp extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        isLoading: false
    }

    handleSignUp = async() => {
        
        const {name, email, password, password2, isLoading} = this.state

        if(!name){
            alert("Digite seu nome.")
            return
        }

        if(!email){
            alert("Digite seu email.")
            return
        }
        
        if(!password){
            alert("Digite sua senha.")
            return
        }

        if(!password2){
            alert("Digite sua senha de conferência.")
            return
        }

        if(password !== password2){
            alert("Senhas não conferem!")
            return
        }

        this.setState({
            isLoading: true
        })

        try {
            const response = await auth({
              name,
              email,
              password,
              role_id: '979028c2-96f2-4fdc-846b-cb0155b9c0c6'
            })
  
            this.setState({
              isLoading: false
            })
  
            this.props.navigation.navigate('Internal')
  
          } catch (error) {
            alert(error)
            this.setState({
              isLoading: false
            })
          }
    }

    handleChange = type => text => {
        this.setState({
            [type]: text
        })
    }

    handleLogin = async event =>{
        event.preventDefault()
        this.props.navigation.navigate('SignIn')
    }    

    render(){
        const {name, email, password, password2, isLoading} = this.state

        return (
            <>
                <StatusBar hidden/>
                
                <Container>
                    <Input
                        placeholder="Nome"
                        autoCapitalize='none'
                        value={name}
                        onChangeText={this.handleChange('name')}
                    />

                    <Text>Selecione o Gênero:</Text>
                    <PickerGender />
                </Container>
                <Container>
                    <Input
                        placeholder="Email"
                        keyboardType={'email-address'} 
                        autoCapitalize='none' 
                        value={email}
                        onChangeText={this.handleChange('email')}
                    />
                    <Input
                        placeholder="Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={password}
                        onChangeText={this.handleChange('password')}
                    />
                    <Input
                        placeholder="Repita a Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={password2}
                        onChangeText={this.handleChange('password2')}
                    />

                    {
                        isLoading
                        ? <AI size="large" color='#fff'/>
                        : <CardShadow>
                            <Button onPress={this.handleSignUp}>Confirmar</Button>
                            <Button onPress={this.handleLogin}>Login</Button>
                          </CardShadow>
                    }
                </Container>
            </>
        )
    }
}

const StatusBar = styled.StatusBar`
`

const AI = styled.ActivityIndicator`
`

export default SignUp