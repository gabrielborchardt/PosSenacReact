import React from 'react';
import styled from 'styled-components';
import { Button, CardShadow, Container, Image, Input } from '../../components';
import { login } from '../../services/auth'
import { setToken, getToken } from '../../helpers/auth'

class SignIn extends React.Component {

    state = {
        email: '',
        password: '',
        isLoading: false,
        hasError: false
    }

    async componentDidMount () {
        const token = await getToken()
        if (token) {
            this.props.navigation.navigate('Internal')
        }
    }

    handleChange = type => text => {
        this.setState({
            [type]: text
        })
    }

    handleLogin = async() => {
        const { email, password } = this.state
        this.setState({
            isLoading: true
        })
        try {
            const response = await login({email, password })
            await setToken(response.data.token)
            console.log(response.data.token)
            this.props.navigation.navigate('Internal')
        } catch (error) {
            console.log(error)
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

    handleMigue= async event =>{
        event.preventDefault()
        this.props.navigation.navigate('Internal')
    }

    render() {
        const { email, password, isLoading } = this.state
        return (
        <Container>
            <StatusBar hidden/>

            <Image source={{uri: 'http://site.availpro.com/wp-content/uploads/2012/10/je-cible-mes-clients.png'}} />

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

            {
                isLoading
                ? <AI size="large" color='#fff'/>
                :   <CardShadow>
                        <Button onPress={this.handleLogin}>Entrar</Button>
                        <Button onPress={this.handleClickSignUp}>Cadastrar-se</Button>
                        <Button onPress={this.handleMigue}>Migué</Button>
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