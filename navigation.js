import { createAppContainer, createStackNavigator } from 'react-navigation'
import { routeConfg } from './src/routers'

const AppStackNavigator = createStackNavigator(routeConfg)

export default createAppContainer(AppStackNavigator)