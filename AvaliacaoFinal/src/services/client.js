import { AsyncStorage, Vibration } from 'react-native'
import uuid from 'react-native-uuid'

// cliente
//  id
//  name
//  email
//  gender

export const getClients = async () => {
    let clientes = await AsyncStorage.getItem('clientes')

    if(clientes)
        return JSON.parse(clientes)
    else
        return []
        
}

export const setClient = async (model) => {

    if(model.id)
        await delClient(model)
    else
        model.id = uuid.v4()

    let clients = await getClients()

    if(clients)
        clients.push(model)
    else
        clients = [model]
    
    console.log(JSON.stringify(clients))
    await AsyncStorage.setItem('clientes', JSON.stringify(clients))

    Vibration.vibrate(500);
}

export const delClient = async (model) => {

    let clientes = await getClients()
    let newClients = []

    clientes.map((cliente) => {
        if (cliente.id !== model.id)
            newClients.push(cliente)
        } 
    )

    await AsyncStorage.setItem('clientes', JSON.stringify(newClients))
} 

export const clearClient = async () => await AsyncStorage.clear()