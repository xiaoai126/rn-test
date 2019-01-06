import AppScreen from './app'
import HomeScreen from './container/home'
import CrountyScreen from './container/county'
import NewCountyScreen from './container/newCounty'
import layoutScreen from './container/layoutTest'

export const routeConfg = {
  App: {
    screen: AppScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  County: {
    screen: CrountyScreen
  },
  NewCounty: {
    screen: NewCountyScreen
  },
  Layout: {
    screen: layoutScreen
  },
}