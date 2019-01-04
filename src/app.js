import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class App extends Component{
  static navigationOptions = () => ({
    title: 'App',
    // headerBackTitle: null,
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
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