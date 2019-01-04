import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class About extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>About Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default About