import React, { Component } from 'react'
import styled from 'styled-components';
import { Input, Button, Container, CardShadow } from '../../components';
import { setAccount } from '../../services/account'

class SignUp extends Component{

    state = {
        account: {
            email: '',
            password: '',
        },
        isLoading: false,
    }

    handleSignUp = async() => {
        
        const {account, isLoading} = this.state

        if(!account.email){
            alert("Digite seu email.")
            return
        }
        
        if(!account.password){
            alert("Digite sua senha.")
            return
        }

        if(!account.password2){
            alert("Digite sua senha de conferência.")
            return
        }

        if(account.password !== account.password2){
            alert("Senhas não conferem!")
            return
        }

        this.setState({
            isLoading: true
        })

        try {
            await setAccount(account)
  
            this.setState({
              isLoading: false
            })
  
            this.props.navigation.navigate('SignIn')
  
          } catch (error) {
            alert(error)
            this.setState({
              isLoading: false
            })
          }
    }

    handleChange = type => text => {
        this.setState({
            account:{
                ...this.state.account, [type]: text
            }
        })
    }   

    handleLogin = async event =>{
        event.preventDefault()
        this.props.navigation.navigate('SignIn')
    }    

    render(){
        const {account, isLoading} = this.state

        return (
            <>
                <StatusBar hidden/>
                
                <Container>
                    <Input
                        placeholder="Email"
                        keyboardType={'email-address'} 
                        autoCapitalize='none' 
                        value={account.email}
                        onChangeText={this.handleChange('email')}
                    />
                    <Input
                        placeholder="Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={account.password}
                        onChangeText={this.handleChange('password')}
                    />
                    <Input
                        placeholder="Repita a Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={account.password2}
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