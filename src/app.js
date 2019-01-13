import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class App extends Component{
  static navigationOptions = () => ({
    title: 'App',
    headerBackTitle: null,
  })
  state = {
    longitude: '',
    latitude: '',
    location: 'loading',
    cityLocation: ''
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(
      (position) => {
        let longitude = JSON.stringify(position.coords.longitude);//精度
        let latitude = JSON.stringify(position.coords.latitude);//纬度
        console.warn(`精度：${longitude}, 纬度：${latitude}`);
        this.setState({
          location: 'city',
          cityLocation: `精度：${longitude}, 纬度：${latitude}`,
        })

      },
      (error) =>{
        console.warn(`定位失败： ${JSON.stringify(error)}`);
        this.setState({
          location: 'error',
          cityLocation: `定位失败： ${JSON.stringify(error)}`,
        })
      },
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000}
      )
  }
  render() {
    const { location, cityLocation } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>App Page Test</Text>
          {location == 'loading' ? <Text style={{textAlign: 'center'}}>正在定位中，请耐心等待...</Text> : null }
          {location === 'city' ? <Text style={{textAlign: 'center'}}>定位成功： {cityLocation}</Text> : null }
          {location === 'error' ? <Text style={{textAlign: 'center'}}>定位失败...</Text> : null }
        <Button
          title={'go to Home'}
          onPress={() => {this.props.navigation.navigate('Home')}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App