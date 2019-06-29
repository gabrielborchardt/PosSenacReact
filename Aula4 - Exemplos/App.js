import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import Home from './routes/Home'
import Camera from './routes/Camera'
import Localization from './routes/Localization'
import Lottie from './routes/Lottie'
import Map from './routes/Map'
import Pedometer from './routes/Pedometer'
import Speech from './routes/Speech'
import Video from './routes/Video'
import Browser from './routes/Browser'

const Root = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Camera,
  Localization,
  Lottie,
  Map,
  Pedometer,
  Speech,
  Video,
  Browser
})

export default createAppContainer(Root)