import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Home from './Screens/Home'

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
            title: "Home" 
        } 
    }
})

const Root = createSwitchNavigator({
    Auth, 
    Internal
})

export default createAppContainer(Root)