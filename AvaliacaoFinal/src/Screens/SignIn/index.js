import React from 'react';
import styled from 'styled-components';
import { Button, CardShadow, Container, Image, Input } from '../../components';
import { isAccount, clearAccount } from '../../services/account'
import { setToken, getToken, clearToken } from '../../services/auth'
import { clearClient } from '../../services/client'

class SignIn extends React.Component {

    state = {
        account: {
            email: '',
            password: '',
        },
        isLoading: false,
        hasError: false
    }

    async componentDidMount () {
        
        //Limpar dados
        //await clearToken()
        //await clearAccount()
        //await clearClient()

        const token = await getToken()
        if (token) {
            this.props.navigation.navigate('Internal')
        }
    }

    handleChange = type => text => {
        this.setState({
            account:{
                ...this.state.account, [type]: text
            }
        })
    }    

    handleLogin = async() => {
        const { account } = this.state
        this.setState({
            isLoading: true
        })

        const token = await isAccount(account)

        console.log('token: ' + token)

        if(token){    
            await setToken(token)
            this.props.navigation.navigate('Internal')
        }else{
            this.setState({
                isLoading: false
            })
            alert('Credenciais inválidas')            
        }
    }

    handleClickSignUp = async event =>{
        event.preventDefault()
        this.props.navigation.navigate('SignUp')
    }

    render() {
        const { account, isLoading } = this.state
        return (
        <Container>
            <StatusBar hidden/>
            
            <Image source={{uri: 'http://pluspng.com/img-png/two-friends-png-black-and-white-collaboration-icon-2-1200.png'}} />

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

            {
                isLoading
                ? <AI size="large" color='#fff'/>
                :   <CardShadow>
                        <Button onPress={this.handleLogin}>Entrar</Button>
                        <Button onPress={this.handleClickSignUp}>Cadastrar-se</Button>
                    </CardShadow>
            }
        </Container>
        );
    }
}

const StatusBar = styled.StatusBar`
`

const AI = styled.ActivityIndicator`
`

export default SignIn