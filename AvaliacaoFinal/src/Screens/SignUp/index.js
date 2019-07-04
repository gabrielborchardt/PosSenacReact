import React, { Component } from 'react'
import { Input, Button, Container, CardShadow, PickerGender } from '../../components';
import { auth } from '../../services/auth'

class SignUp extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        isLoading: false
    }

    handleClickConfirm = async event =>{
        event.preventDefault()

        const {name, email, password, password2} = this.state
        
        alert("Digite seu nome: " + name)

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
            console.log(error)
            this.setState({
              isLoading: false,
              hasError: true
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
        const {name, email, password, password2} = this.state
        return (
            <>
                <Container>
                    <Input
                        placeholder="Nome"
                        autoCapitalize='none'
                        value={name}
                        onChange={this.handleChange('name')}
                    />

                    <PickerGender />
                </Container>
                <Container>
                    <Input
                        placeholder="Email"
                        keyboardType={'email-address'} 
                        autoCapitalize='none' 
                        value={email}
                        onChange={this.handleChange('email')}
                    />
                    <Input
                        placeholder="Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={password}
                        onChange={this.handleChange('password')}
                    />
                    <Input
                        placeholder="Repita a Senha" 
                        autoCapitalize='none'
                        secureTextEntry
                        value={password2}
                        onChange={this.handleChange('password2')}
                    />

                    <CardShadow>
                        <Button onPress={this.handleClickConfirm}>Confirmar</Button>
                        <Button onPress={this.handleLogin}>Login</Button>
                    </CardShadow>
                </Container>
            </>
        )
    }

}

export default SignUp