import axios from 'axios'
// const __API__ = 'http://localhost:8080';
const __API__ = 'https://api-nave-twitter.herokuapp.com'

const instance = axios.create({
  baseURL: __API__
})

export default instance
