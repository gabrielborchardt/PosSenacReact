import { AsyncStorage } from 'react-native'

export const getToken = async() => {
  
  let token = await AsyncStorage.getItem('token')
  console.log('getToken - token: ' + token)

  return token
}

export const setToken = async (token) => {

  console.log('setToken - token: ' + token)
  await AsyncStorage.setItem('token', token.toString())
} 

export const clearToken = async () => await AsyncStorage.removeItem('token')