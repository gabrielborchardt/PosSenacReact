import React from 'react'
import Tweet from './Tweet'

const styles = {
  tweets: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    padding: 20,
    border: '1px solid #38435a',
    boxSizing: 'border-box'
  },
  center: {
    textAlign: 'center'
  }
}

export default props => {
  const { tweets } = props
  return (
    <div style={styles.tweets}>
      <h2 style={styles.center}>Linha do tempo</h2>
      {tweets.length === 0 ? (
        <h4 style={styles.center}>Não há tweets para serem mostrados</h4>
      ) : (
        tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
      )}
    </div>
  )
}
