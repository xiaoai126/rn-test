import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Container } from '../../component/index'
import { connectView } from '../../hoc'
class Layout extends Component {
  render() {
    return (
      <Text>layot page</Text>
    )
  }
}

export default connectView(Layout)