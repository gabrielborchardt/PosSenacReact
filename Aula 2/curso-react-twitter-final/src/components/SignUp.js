import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { signUp } from '../services/auth'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#38435a',
    padding: 20,
    color: 'white'
  },
  submit: {
    padding: '0.85rem',
    border: 'none',
    borderRadius: 0,
    color: '#fff',
    backgroundColor: '#ea454b',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  center: { textAlign: 'center' },
  link: {
    marginTop: 15,
    color: '#fff',
    float: 'right'
  }
}

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  stateOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(this.state)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { name, email, password } = this.state

    return (
      <div className='container'>
        <form onSubmit={this.formSubmit} style={styles.form}>
          <h2 style={styles.center}>Cadastro</h2>
          <label htmlFor='name'>
            <span>Nome de usuário:</span>
            <input
              value={name}
              name='name'
              onChange={this.stateOnChange}
              type='text'
              placeholder='Demogorgon'
              required
            />
          </label>
          <label htmlFor='name'>
            <span>Email:</span>
            <input
              value={email}
              name='email'
              onChange={this.stateOnChange}
              type='email'
              placeholder='stranger@things.com'
              required
            />
          </label>
          <label htmlFor='senha'>
            Senha:
            <input
              value={password}
              name='password'
              onChange={this.stateOnChange}
              type='password'
              placeholder='******'
              required
            />
          </label>
          <button
            style={styles.submit}
            disabled={
              !name || !email || !password
            }
            type='submit'
          >
            Cadastrar
          </button>
          <Link style={styles.link} to='/'>
            Login
          </Link>
        </form>
      </div>
    )
  }
}
