import React from 'react';
import styled from 'styled-components';
import { Button, CardShadow, Container, Image, Input } from '../../components';
import { login } from '../../services/auth'
import { setToken, getToken } from '../../helpers/auth'

class Login extends React.Component {

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

    render() {
        const { email, password, isLoading } = this.state
        return (
        <Container>
            <StatusBar hidden/>

            <Image source={{uri: 'https://images.vexels.com/media/users/3/128010/isolated/lists/3d16fdf3b9dde0c021f67bf5ae1d4cc4-carrinho-de-compras-desenhado-a-mao.png'}} />
            
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
                        <Button onPress={this.handleLogin}>
                            Entrar
                        </Button>
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

export default Login