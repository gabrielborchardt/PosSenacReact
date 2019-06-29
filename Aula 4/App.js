import { createAppContainer, createStackNavigator } from 'react-navigation'
import Chat from './src/ClassChat'
//import Chat from './src/Chat'

console.disableYellowBox = true

const RootStack = createStackNavigator({
  Chat
})

export default createAppContainer(RootStack)


