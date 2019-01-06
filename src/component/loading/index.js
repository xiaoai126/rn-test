import React, {Component} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
class Loading extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      buttonSwitch: false
    }
  }
  static getDerivedStateFromProps(nextProps, preState) {
    const { loading } = nextProps
    if(loading === true) {
      return {
        buttonSwitch: true
      }
    }
    return null
  }
  render() {
    const { buttonSwitch } = this.state
    const { loading } = this.props
    return (
      <View style={loading ? styles.mask : styles.noMask}>
        <Text>loading</Text>
        {buttonSwitch ? <Button title={'关闭loading'}/> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mask:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, .5)',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMask: {
    display: 'none'
  }
})

export default Loading