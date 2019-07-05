import { AsyncStorage } from 'react-native'

export const getClients = () => AsyncStorage.getItem('clientes')
export const setClient = cliente => AsyncStorage.setItem('clientes', JSON.stringify(cliente))
export const delClient = cliente => AsyncStorage.removeItem('clientes',cliente)

// cliente
//  key
//  name
//  email