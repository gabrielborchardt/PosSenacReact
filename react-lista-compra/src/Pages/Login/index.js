import React, { Component } from 'react'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import { login } from '../../services/auth'
import { setToken } from '../../helpers/auth'
import './Login.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    hasError: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    if(!email || !password) return
    this.setState({
      isLoading: true,
      hasError: false
    })
    try {
      const response = await login({
        email,
        password
      })
      this.setState({
        isLoading: false
      })
      setToken(response.data.token)
      this.props.history.push('/home')
      console.log(response)
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false,
        hasError: true
      })
    }
  }

  render () {
    const { email, password, isLoading, hasError } = this.state
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <Label>Email:</Label>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <Label>Senha:</Label>
        <Input 
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        <Button>
          {
            isLoading
            ? 'Carregando...'
            : 'Login'
          }
        </Button>
        {
          hasError &&
          <span>Falha no login... Tente novamente</span>
        }
      </form>
    )
  }
}

export default Login
