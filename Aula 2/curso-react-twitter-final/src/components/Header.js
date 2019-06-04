import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const styles = {
  header: {
    padding: 10,
    backgroundColor: '#38435a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: '0.85rem',
    border: 'none',
    borderRadius: 0,
    color: '#fff',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  active: {
    backgroundColor: '#ea454b'
  },
  tweetsCount: {
    color: 'white',
    fontWeight: '700'
  }
}

class Header extends Component {
  logout (e) {
    e.preventDefault()
    localStorage.clear()
    this.props.history.replace('/')
  }

  render () {
    return (
      <header style={styles.header}>
        <div>
          <NavLink
            activeStyle={styles.active}
            to='/timeline'
            style={styles.button}
          >
            Timeline
          </NavLink>
          <NavLink
            activeStyle={styles.active}
            to='/perfil'
            style={styles.button}
          >
            Perfil
          </NavLink>
        </div>
        <span style={styles.tweetsCount}>
          Você tem {this.props.tweets.length} tweets
        </span>
        <button onClick={this.logout.bind(this)} style={styles.button}>
          Sair
        </button>
      </header>
    )
  }
}

export default connect(state => {
  return {
    tweets: state.tweets.data
  }
})(Header)
