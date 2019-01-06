import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

export function connectView (WrappedComponent, bgColor='#fff') {
  return class Container extends Component {
    render () {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: bgColor}}>
          <WrappedComponent />
        </SafeAreaView>
      )
    }
  }
}