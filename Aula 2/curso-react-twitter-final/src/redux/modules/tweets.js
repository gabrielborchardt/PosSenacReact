const LOAD_TWEETS = 'LOAD_TWEETS'

const initialState = {
  data: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TWEETS:
      console.log('tweets to add', action.payload)
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export const fillTweets = tweets => {
  return {
    type: LOAD_TWEETS,
    payload: tweets
  }
}
