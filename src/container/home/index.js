import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class Home extends Component{
  static navigationOptions = () => ({
    title: 'Home',
    // headerBackTitle: null,
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button
          title={'go to County'}
          onPress={()=>{this.props.navigation.navigate('County')}}
        />
        <Button
          title={'go to NewCounty'}
          onPress={()=>{this.props.navigation.navigate('NewCounty')}}
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

export default Home