import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Home from './Screens/Home'
import AddClient from './Screens/AddClient'

const Auth = createStackNavigator({
    SignIn : { 
        screen: SignIn, 
        navigationOptions: { 
            header: null 
        } 
    },
    SignUp : {
        screen: SignUp, 
        navigationOptions: { 
            header: null 
        }         
    }
})

const Internal = createStackNavigator({
    Home : {
        screen: Home,
        navigationOptions: { 
            title: "Clientes" 
        } 
    },
    AddClient : {
        screen: AddClient,
        navigationOptions: { 
            title: "Novo Cliente" 
        } 
    }
})

const Root = createSwitchNavigator({
    Auth, 
    Internal,
})

export default createAppContainer(Root)