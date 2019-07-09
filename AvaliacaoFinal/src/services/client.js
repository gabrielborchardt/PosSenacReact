import { AsyncStorage, Vibration } from 'react-native'
import uuid from 'react-native-uuid'

// cliente
//  id
//  name
//  email
//  gender

export const getClients = async () => {
    let clients = await AsyncStorage.getItem('client')

    if(clients){
        console.log('getClients: ' + JSON.stringify(clients))
        return JSON.parse(clients)
    }
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
    
    console.log('setClient: ' + JSON.stringify(clients))
    await AsyncStorage.setItem('client', JSON.stringify(clients))

    Vibration.vibrate(500);
}

export const delClient = async (model) => {

    let clients = await getClients()
    let newClients = []

    clients.map((client) => {
        if (client.id !== model.id)
            newClients.push(client)
        } 
    )
    
    console.log('delClient: ' + JSON.stringify(newClients))
    await AsyncStorage.setItem('client', JSON.stringify(newClients))
} 

export const clearClient = async () => await AsyncStorage.removeItem('client')