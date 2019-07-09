import { AsyncStorage } from 'react-native'
import uuid from 'react-native-uuid'

// account
//  token
//  email
//  password

export const getAccounts = async () => {
    
    let accounts = await AsyncStorage.getItem('account')

    if(accounts){
        console.log('getAccounts: ' + JSON.stringify(accounts))
        return JSON.parse(accounts)
    }
    else
        return null
}

export const setAccount = async (model) => {

    model.token = uuid.v4()

    let accounts = await getAccounts()

    if(accounts)
        accounts.push(model)
    else
        accounts = [model]
    
    console.log('setAccount: ' + JSON.stringify(accounts))
    await AsyncStorage.setItem('account', JSON.stringify(accounts))
}

export const isAccount = async (model) => {
    
    let accounts = await getAccounts()

    if(accounts){

        let token = accounts.map((account) => {
            if (account.email === model.email && account.password === model.password){
                    return account.token
                }
            } 
        )

        if(token){
            console.log('account token: ' + token)
            return token
        }else{
            console.log('account not found')
            return ''
        }
    }
}

export const clearAccount = async () => await AsyncStorage.removeItem('account')