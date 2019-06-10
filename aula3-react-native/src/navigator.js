import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './Screens/Login'
import Home from './Screens/Home'

const Auth = createStackNavigator({
    Login : { 
        screen: Login,
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