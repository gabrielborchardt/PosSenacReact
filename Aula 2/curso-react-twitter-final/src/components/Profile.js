import React, { Component } from 'react'
import { updateUser } from '../services/auth'

const styles = {
  profile: {
    alignSelf: 'left'
  },
  center: {
    textAlign: 'center'
  },
  submit: {
    border: 0,
    borderRadius: 0,
    backgroundColor: '#38435a',
    color: '#fff',
    padding: '0.5rem'
  },
  message: {
    padding: 10,
    backgroundColor: '#ea454b',
    color: '#fff',
    marginTop: 20
  }
}

export default class Profile extends Component {
  state = {
    disabledPassword: true,
    message: '',
    user: {
      email: '',
      name: '',
      password: '',
      id: null
    }
  }

  async componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      this.props.history.replace('/')
    } else {
      this.setState({
        user: {
          email: user.email,
          name: user.name,
          password: user.password,
          id: user.id
        }
      })
    }
  }

  switchPassword = () => {
    this.setState({ disabledPassword: !this.state.disabledPassword })
  }

  handleChange = (e) => {
    this.setState({
      user: {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateUser(this.state.user)
    localStorage.setItem('user', JSON.stringify(res.data))
    this.setState({ message: 'Salvou!' })
  }

  render () {
    const { user, message, disabledPassword } = this.state

    return (
      <div style={styles.profile}>
        <h1 style={styles.center}>Perfil</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>
            Nome de usuário:
            <input
              value={user.name}
              name='name'
              onChange={this.handleChange}
              type='text'
            />
          </label>
          <label htmlFor=''>
            E-mail:
            <input
              value={user.email}
              name='email'
              onChange={this.handleChange}
              type='email'
            />
          </label>
          <label htmlFor=''>
            Senha
            <input
              value={user.password}
              name='password'
              onChange={this.handleChange}
              type='password'
              disabled={disabledPassword}
            />
            <button onClick={this.switchPassword}>
              Trocar senha
            </button>
          </label>
          <button
            disabled={
              !user.name ||
              !user.email ||
              !user.password
            }
            style={styles.submit}
            type='submit'
          >
            Salvar
          </button>
        </form>
        {message && (
          <div style={styles.message}>
            <p>{message}</p>
          </div>
        )}
      </div>
    )
  }
}
