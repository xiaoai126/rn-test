import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class App extends Component{
  static navigationOptions = () => ({
    title: 'App',
    headerBackTitle: null,
  })
  componentDidMount() {
    navigator.geolocation.watchPosition(
      (position) => {
        let longitude = JSON.stringify(position.coords.longitude);//精度
        let latitude = JSON.stringify(position.coords.latitude);//纬度
        console.warn(`精度：${longitude}, 纬度：${latitude}`);
        // this.fetchData(longitude,latitude);
      },
      (error) =>{
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000}
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>App Page Test</Text>
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