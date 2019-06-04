import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { loginUser } from '../services/auth'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#38435a',
    padding: 20,
    color: 'white'
  },
  center: { textAlign: 'center' },
  submit: {
    padding: '0.85rem',
    border: 'none',
    borderRadius: 0,
    color: '#fff',
    backgroundColor: '#ea454b',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  link: {
    marginTop: 15,
    color: '#fff',
    float: 'right'
  }
}

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.props.history.push('/timeline')
    }
  }

  stateOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmit = e => {
    e.preventDefault()
    loginUser(this.state)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        this.props.history.push('/timeline')
      })
      .catch(error => console.log(error))
  }

  render () {
    const { password, email } = this.state

    return (
      <div className='container'>
        <form onSubmit={this.formSubmit} style={styles.form}>
          <h2 style={styles.center}>Entrar</h2>
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
              autoComplete='off'
              required
            />
          </label>
          <button
            disabled={!email || !password}
            style={styles.submit}
            type='submit'
          >
            Entrar
          </button>
          <Link style={styles.link} to='/cadastro'>
            Cadastro
          </Link>
        </form>
      </div>
    )
  }
}
